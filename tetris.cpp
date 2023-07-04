#include <iostream>
#include <chrono>
#include <thread>
#include <vector>
#include <emscripten/bind.h>

using namespace std;

//Rotation:
//0 deg: i = y * w + x
//90 deg: i = 12 + y - (x * 4)
//180 deg: i = 15 - (y * 4) - x
//270 deg: i = 3 + y(x * 4)

//Tetrominos
vector<vector<int>> createTetromino(vector<vector<int>> cells) {
    vector<vector<int>> tetromino(4, vector<int>(4, 0));
    for (int i = 0; i < cells.size(); i++)
        for (int j = 0; j < cells[i].size(); j++)
            tetromino[i][j] = cells[i][j];
    return tetromino;
}

// Define your Tetrominos (example shown for I, T, O, and L)
vector<vector<int>> iTetromino = createTetromino({
    {0, 0, 1, 0},
    {0, 0, 1, 0},
    {0, 0, 1, 0},
    {0, 0, 1, 0}
});
vector<vector<int>> tTetromino = createTetromino({
    {0, 0, 0, 0},
    {0, 1, 0, 0},
    {1, 1, 1, 0},
    {0, 0, 0, 0}
});
vector<vector<int>> oTetromino = createTetromino({
    {0, 0, 0, 0},
    {0, 1, 1, 0},
    {0, 1, 1, 0},
    {0, 0, 0, 0}
});
vector<vector<int>> lTetromino = createTetromino({
    {0, 0, 1, 0},
    {0, 0, 1, 0},
    {0, 1, 1, 0},
    {0, 0, 0, 0}
});
vector<vector<int>> rlTetromino = createTetromino({
    {0, 1, 0, 0},
    {0, 1, 0, 0},
    {0, 1, 1, 0},
    {0, 0, 0, 0}
});
vector<vector<int>> zTetromino = createTetromino({
    {0, 1, 0, 0},
    {0, 1, 1, 0},
    {0, 0, 1, 0},
    {0, 0, 0, 0}
});
vector<vector<int>> rzTetromino = createTetromino({
    {0, 0, 1, 0},
    {0, 1, 1, 0},
    {0, 1, 0, 0},
    {0, 0, 0, 0}
});

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

// Prepare your Tetrominos for use
vector<vector<vector<int>>> tetrominos = {iTetromino, tTetromino, oTetromino, lTetromino, rlTetromino, zTetromino, rzTetromino};
vector<vector<int>> getTetromino(int index) {
        return tetrominos[index];
    }

//Flatten tetromino to be accessed in js
vector<int> getFlattenedTetromino(int index) {
  vector<int> flattenedTetromino;
  auto tetromino = tetrominos[index];
  for (const auto &row : tetromino) {
    for (int value : row) {
      flattenedTetromino.push_back(value);
    }
  }
  return flattenedTetromino;
}


int nFieldWidth = 12;
int nFieldHeight = 18;

class Game {
private:
    vector<int> gameBoard;
    bool bGameOver;
    bool bForceDown;
    int nCurrentPiece;
    int nCurrentRotation;
    int nCurrentX;
    int nCurrentY;
    int nPieceCount;
    int nScore;

    void createGameBoard() {
        gameBoard = vector<int>(nFieldWidth*nFieldHeight);
        for(int x = 0; x < nFieldWidth; x++) //Create Borders
            for(int y = 0; y < nFieldHeight; y++)
                gameBoard[y * nFieldWidth + x] = (x == 0 || x == nFieldWidth - 1 || y == nFieldHeight - 1) ? 9 : 10;
    }
    
   

public:
    Game(bool bGameOver, bool bForceDown, int nCurrentPiece, int nCurrentRotation, 
         int nCurrentX, int nCurrentY, int nPieceCount, int nScore) 
        : bGameOver(bGameOver), bForceDown(bForceDown), nCurrentPiece(nCurrentPiece),
          nCurrentRotation(nCurrentRotation), nCurrentX(nCurrentX), nCurrentY(nCurrentY), nPieceCount(nPieceCount),
          nScore(nScore) 
    {
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
                    vector<vector<int>> tetromino = getTetromino(nTetromino);
                    int px_in_p = pi % 4;
                    int py_in_p = pi / 4;
                    // In Bounds so do collision check
                    if (tetromino[py_in_p][px_in_p] != 0 && gameBoard[fi] != 10)
                        return false; // fail on first hit
                }
            }
        }
    return true; // No fail condition has been met
}

    int nFrameCount = 0;
    int nDropInterval = 120;
    void update() {
        nFrameCount++;
        bForceDown = (nFrameCount == nDropInterval);
        if(bForceDown){
            if(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1)){
                nCurrentY += 1;
            }else{
                //the tetromino has reached its end point -> Stick it to gameBoard
                for(int px = 0; px < 4; px++)
                    for(int py = 0; py < 4; py++){
                            int pi = Rotate(px,py,nCurrentRotation); //Index of cell in tetromino
                            int fi = (nCurrentY + py) * nFieldWidth + (nCurrentX + px); //Respective index in field
                            // Get tetromino piece
                            vector<vector<int>> tetromino = getTetromino(nCurrentPiece);
                            int px_in_p = pi % 4;
                            int py_in_p = pi / 4;

                            if(tetromino[py_in_p][px_in_p] == 1){
                                gameBoard[fi] = nCurrentPiece;
                            }
                    }
                //Reset values of new tetromino
                nCurrentPiece = rand() % 7;
                nCurrentRotation = 0;
                nCurrentX = 5;
                nCurrentY = -2;
            }
            nFrameCount = 0;
        }
    }

    vector<int> getGameBoard() {
        return gameBoard;
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
        }
        
    }

    void rotateTetromino(int val){
    int nextRotation = (nCurrentRotation + val) % 4;
    if(nextRotation < 0){
        nextRotation = 3;
    }
    if(checkCollision(nCurrentPiece, nextRotation, nCurrentX, nCurrentY)){
        nCurrentRotation = nextRotation;
    }
}
};




EMSCRIPTEN_BINDINGS(my_module) {
    emscripten::register_vector<int>("VectorInt");
    emscripten::register_vector<vector<int>>("VectorVectorInt");
    emscripten::function("Rotate", &Rotate);
    emscripten::function("getTetromino", &getTetromino);
    emscripten::function("getFlattenedTetromino", &getFlattenedTetromino);
    emscripten::class_<Game>("Game")
        .constructor<bool, bool, int, int, int, int, int, int>()
        .function("update", &Game::update)
        .function("getGameBoard", &Game::getGameBoard)
        .function("getCurrentPiece", &Game::getCurrentPiece)
        .function("getCurrentRotation", &Game::getCurrentRotation)
        .function("getCurrentX", &Game::getCurrentX)
        .function("getCurrentY", &Game::getCurrentY)
        .function("setCurrentPiece", &Game::setCurrentPiece)
        .function("setCurrentRotation", &Game::setCurrentRotation)
        .function("setCurrentX", &Game::setCurrentX)
        .function("setCurrentY", &Game::setCurrentY)
        .function("moveTetromino", &Game::moveTetromino)
        .function("rotateTetromino", &Game::rotateTetromino);
}







