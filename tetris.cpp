#include <iostream>
#include <chrono>
#include <thread>
#include <vector>
#include <emscripten/bind.h>

using namespace std;

//Compile command: 
//emcc --bind -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -O3 -o tetris.js tetris.cpp

//Rotation:
//0 deg: i = y * w + x
//90 deg: i = 12 + y - (x * 4)
//180 deg: i = 15 - (y * 4) - x
//270 deg: i = 3 + y(x * 4)

//Define tetrominos:
// Define your Tetrominos in a flattened form (example shown for I, T, O, and L)
vector<int> iTetromino = {
    0, 0, 1, 0,
    0, 0, 1, 0,
    0, 0, 1, 0,
    0, 0, 1, 0
};
vector<int> tTetromino = {
    0, 0, 0, 0,
    0, 1, 0, 0,
    1, 1, 1, 0,
    0, 0, 0, 0
};
vector<int> oTetromino = {
    0, 0, 0, 0,
    0, 1, 1, 0,
    0, 1, 1, 0,
    0, 0, 0, 0
};
vector<int> lTetromino = {
    0, 0, 1, 0,
    0, 0, 1, 0,
    0, 1, 1, 0,
    0, 0, 0, 0
};
vector<int> rlTetromino = {
    0, 1, 0, 0,
    0, 1, 0, 0,
    0, 1, 1, 0,
    0, 0, 0, 0
};
vector<int> zTetromino = {
    0, 1, 0, 0,
    0, 1, 1, 0,
    0, 0, 1, 0,
    0, 0, 0, 0
};
vector<int> rzTetromino = {
    0, 0, 1, 0,
    0, 1, 1, 0,
    0, 1, 0, 0,
    0, 0, 0, 0
};

// Create a vector of Tetrominos
vector<vector<int>> tetrominos = {
    iTetromino,
    tTetromino,
    oTetromino,
    lTetromino,
    rlTetromino,
    zTetromino,
    rzTetromino
};

//Rotation function
int Rotate(int px, int py, int r)
{
	int pi = 0;
	switch (r % 4)
	{
	case 0: // 0 degrees			// 0  1  2  3
		pi = py * 4 + px;			// 4  5  6  7
		break;						// 8  9 10 11
									//12 13 14 15

	case 1: // 90 degrees			//12  8  4  0
		pi = 12 + py - (px * 4);	//13  9  5  1
		break;						//14 10  6  2
									//15 11  7  3

	case 2: // 180 degrees			//15 14 13 12
		pi = 15 - (py * 4) - px;	//11 10  9  8
		break;						// 7  6  5  4
									// 3  2  1  0

	case 3: // 270 degrees			// 3  7 11 15
		pi = 3 - py + (px * 4);		// 2  6 10 14
		break;						// 1  5  9 13
	}								// 0  4  8 12

	return pi;
}

vector<int> getTetromino(int nCurrentPiece) {
    return tetrominos[nCurrentPiece];
}



int nFieldWidth = 12;
int nFieldHeight = 18;

class Game {
private:
    vector<int> gameBoard;
    bool bGameOver;
    bool bGamePaused;
    bool bForceDown;
    int nCurrentPiece;
    int nCurrentRotation;
    int nCurrentX;
    int nCurrentY;
    int nPieceCount;
    int nScore;
    int nFrameCount = 0;
    int nDropInterval;
    vector<int> vLines;

    void createGameBoard() {
        gameBoard = vector<int>(nFieldWidth*nFieldHeight);
        for(int x = 0; x < nFieldWidth; x++) //Create Borders
            for(int y = 0; y < nFieldHeight; y++)
                gameBoard[y * nFieldWidth + x] = (x == 0 || x == nFieldWidth - 1 || y == nFieldHeight - 1) ? 9 : 10;
    }
    
   

public:
    Game(bool bGameOver, bool bForceDown, bool bGamePaused, int nCurrentPiece, int nCurrentRotation, 
         int nCurrentX, int nCurrentY, int nPieceCount, int nScore, int nDropInterval) 
        : bGameOver(bGameOver), bForceDown(bForceDown), bGamePaused(bGamePaused),nCurrentPiece(nCurrentPiece),
          nCurrentRotation(nCurrentRotation), nCurrentX(nCurrentX), nCurrentY(nCurrentY), nPieceCount(nPieceCount),
          nScore(nScore), nDropInterval(nDropInterval)
    {
        srand(time(NULL));
        createGameBoard();
    }

bool checkCollision(int nTetromino, int nRotation, int nPosX, int nPosY)
{
    for (int px = 0; px < 4; px++)
        for(int py = 0; py < 4; py++)
        {
            //Get index into piece
            int pi = Rotate(px,py,nRotation);

            //Get index into field
            int fi = (nPosY + py) * nFieldWidth + (nPosX + px);

            // Check that test is bounds, Note out of bounds does
            // not necessarily mean fail
            if (nPosX + px >= 0 && nPosX + px < nFieldWidth)
            {
                if (nPosY + py >= 0 && nPosY + py < nFieldHeight)
                {
                    // Get tetromino piece
                    vector<int> tetromino = tetrominos[nTetromino]; 

                    // In Bounds so do collision check
                    if (tetromino[pi] != 0 && gameBoard[fi] != 10) 
                        return false; // fail on first hit
                }
            }
        }
    return true; // No fail condition has been met
}


    void update() {
        if(!bGamePaused)
            nFrameCount++;

        bForceDown = (nFrameCount == nDropInterval);
        
        if(bForceDown){
            nFrameCount = 0;                

            if(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1)){
                nCurrentY += 1;
            }else{
        
                //the tetromino has reached its end point -> Stick it to gameBoard
                for(int px = 0; px < 4; px++)
                    for(int py = 0; py < 4; py++){
                        int pi = Rotate(px, py, nCurrentRotation); // Index of cell in tetromino
                        int fi = (nCurrentY + py) * nFieldWidth + (nCurrentX + px); // Respective index in field
                        // Get tetromino piece
                        vector<int> tetromino = tetrominos[nCurrentPiece];

                        if(tetromino[pi] == 1){
                            gameBoard[fi] = nCurrentPiece;
                        }
                    }

              // Check for full lines starting from top to bottom
                int clearedLines = 0; // Add this line to keep track of cleared lines
                for(int py = 1; py < nFieldHeight - 1; ++py) { 
                    bool lineIsFull = true;
                    for(int px = 1; px < nFieldWidth - 1; ++px) { 
                        if (gameBoard[py * nFieldWidth + px] == 10) {
                            lineIsFull = false;
                            break;
                        }
                    }

                    if (lineIsFull) {
                        // If line is full, move all lines above it one step down
                        for (int j = py; j > 1; --j) { 
                            for (int px = 1; px < nFieldWidth - 1; ++px) { 
                                gameBoard[j * nFieldWidth + px] = gameBoard[(j - 1) * nFieldWidth + px];
                            }
                        }
                        // The topmost line within the borders has no line above it, fill it with 10s.
                        for (int px = 1; px < nFieldWidth - 1; ++px) { 
                            gameBoard[1 * nFieldWidth + px] = 10; 
                        }

                        // Line was cleared, increment counter
                        clearedLines++;
                    }
                }

                // Calculate score
                nScore += 25 * clearedLines; // base score for line clearance
                if (clearedLines > 0) {
                    nScore += (1 << clearedLines) * 100; // bonus for clearing multiple lines
                }

                //Reset values of new tetromino
                nCurrentPiece = rand() % 7;
                nCurrentRotation = 0;
                nCurrentX = 5;
                nCurrentY = -3;

                //Calibrate speed throughout game
                nPieceCount++;
                if(nPieceCount % 3 == 0)
                    if(nDropInterval >= 20) nDropInterval -= 2;

                // If piece does not fit straight away, game over!
				bGameOver = !checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1);
            }
        }
    }

    vector<int> getGameBoard() {
        return gameBoard;
    }
    bool getGameOver(){
        return bGameOver;
    }
    int getCurrentPiece() {
        return nCurrentPiece;
    }

    int getCurrentRotation() {
        return nCurrentRotation;
    }

    int getCurrentX() {
        return nCurrentX;
    }

    int getCurrentY() {
        return nCurrentY;
    }

    int getScore(){
        return nScore;
    }

        // Setter functions
    void setCurrentPiece(int nPiece) {
        nCurrentPiece = nPiece;
    }

    void setCurrentRotation(int nRotation) {
        nCurrentRotation = nRotation;
    }

    void setCurrentX(int nX) {
        nCurrentX = nX;
    }

    void setCurrentY(int nY) {
        nCurrentY = nY;
    }

    //Input functions
    void moveTetromino(int val){
        if(bGamePaused || bGameOver) return;
        if(val == 0){
            if(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX - 1, nCurrentY)){
                nCurrentX--;
            }
        }else if(val == 1){
            if(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX + 1, nCurrentY)){
                nCurrentX++;
            }
        }else if(val == 2){
            if(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1)){
                nCurrentY++;
            }
        }else if(val == 3){
            while(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1)){
                nCurrentY++;
            }
        }
        
    }

    void rotateTetromino(int val){
    if(bGamePaused || bGameOver) return;

    int nextRotation = (nCurrentRotation + val) % 4;
        if(nextRotation < 0){
            nextRotation = 3;
        }
        if(checkCollision(nCurrentPiece, nextRotation, nCurrentX, nCurrentY)){
            nCurrentRotation = nextRotation;
        }
    }

    void restartGame(){
        //Reset values for new game
        bGameOver = false;
        nCurrentPiece = rand() % 7;
        nCurrentRotation = 0;
        nCurrentX = 5;
        nCurrentY = -3;
        nScore = 0; 
        nDropInterval = 100;
        createGameBoard();
    }
    
    void pauseGame(){
        bGamePaused = true;
    }
    void resumeGame(){
        bGamePaused = false;
    }
};




EMSCRIPTEN_BINDINGS(my_module) {
    emscripten::register_vector<int>("VectorInt");
    emscripten::register_vector<vector<int>>("VectorVectorInt");
    emscripten::function("Rotate", &Rotate);
    emscripten::function("getTetromino", &getTetromino);
    emscripten::class_<Game>("Game")
        .constructor<bool, bool,bool, int, int, int, int, int, int,int>()
        .function("update", &Game::update)
        .function("getGameBoard", &Game::getGameBoard)
        .function("getGameOver", &Game::getGameOver)
        .function("getCurrentPiece", &Game::getCurrentPiece)
        .function("getCurrentRotation", &Game::getCurrentRotation)
        .function("getCurrentX", &Game::getCurrentX)
        .function("getCurrentY", &Game::getCurrentY)
        .function("getScore", &Game::getScore)
        .function("setCurrentPiece", &Game::setCurrentPiece)
        .function("setCurrentRotation", &Game::setCurrentRotation)
        .function("setCurrentX", &Game::setCurrentX)
        .function("setCurrentY", &Game::setCurrentY)
        .function("moveTetromino", &Game::moveTetromino)
        .function("rotateTetromino", &Game::rotateTetromino)
        .function("restartGame", &Game::restartGame)
        .function("pauseGame", &Game::pauseGame)
        .function("resumeGame", &Game::resumeGame);
}







