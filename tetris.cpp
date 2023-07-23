#include <iostream>
#include <chrono>
#include <thread>
#include <vector>
#include <emscripten/bind.h>

using namespace std;

// This file could be broken into sevral files to make it more modular and readable. A resources file, functions files,
// game class files, and EMSCRIPT binding file

//Compile command: 
//emcc --bind -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -O3 -o tetris.js tetris.cpp

//Rotation:
//0 deg: i = y * w + x
//90 deg: i = 12 + y - (x * 4)
//180 deg: i = 15 - (y * 4) - x
//270 deg: i = 3 + y(x * 4)

//Define tetrominos:
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

vector<int> getTetromino(int nCurrentPiece) {
    return tetrominos[nCurrentPiece];
}


//Rotation function
int Rotate(int px, int py, int r)
{
	int pi = 0;
	switch (r % 4)
	{
	case 0: // 0 degrees			
		pi = py * 4 + px;			
		break;						
									

	case 1: // 90 degrees			
		pi = 12 + py - (px * 4);	
		break;						
									

	case 2: // 180 degrees			
		pi = 15 - (py * 4) - px;	
		break;						
									

	case 3: // 270 degrees			
		pi = 3 - py + (px * 4);		
		break;						
	}								

	return pi;
}




int nFieldWidth = 12;
int nFieldHeight = 23;

// Would be good to put the class declaration in a header file and separate definition from implementation
class Game {
private:
    vector<int> gameBoard;
    bool bGameOver;
    bool bGamePaused;
    int nCurrentPiece;
    int nNextPiece;
    int nCurrentRotation;
    int nCurrentX;
    int nCurrentY;
    int nPieceCount;
    int nScore;
    vector<int> vLines;

    void createGameBoard() {
        gameBoard = vector<int>(nFieldWidth*nFieldHeight);
        for(int x = 0; x < nFieldWidth; x++) //Create Borders
            for(int y = 0; y < nFieldHeight; y++)
                gameBoard[y * nFieldWidth + x] = (x == 0 || x == nFieldWidth - 1 || y == nFieldHeight - 1) ? 9 : 10;
    }
    
   

public:
    // is it really needed to have all of these as parameters?
    // would you ever start a tetris game from a different state?
    // This is the kind of complexity that sometimes is recommended for "industry" but IMO actually does not help to make
    // the code better. It is not more readable, does not increase separation of concerns, it is just more code.
    // Introduce more features when you need them, not a-priori
    Game(bool bGameOver, bool bGamePaused, int nNextPiece, int nCurrentPiece, int nCurrentRotation, 
         int nCurrentX, int nCurrentY, int nPieceCount, int nScore) 
        : bGameOver(bGameOver), bGamePaused(bGamePaused), nNextPiece(nNextPiece),nCurrentPiece(nCurrentPiece),
          nCurrentRotation(nCurrentRotation), nCurrentX(nCurrentX), nCurrentY(nCurrentY), nPieceCount(nPieceCount),
          nScore(nScore)
    {
        //This is OK for a game but the system random number generator should not be used for any serious use.
        //There are good random number generators in the new standard library:
        // https://en.cppreference.com/w/cpp/header/random
        srand(time(NULL));
        createGameBoard();
    }
// nit: indent. Use a formatter
bool checkCollision(int nTetromino, int nRotation, int nPosX, int nPosY)
    // why is checkCollision public? Are you calling it from JS? If your game logic is all in c++ then all the
    // collision checking should be done from update, move, rotate etc.

    {
    for (int px = 0; px < 4; px++)
        for(int py = 0; py < 4; py++)
        {
            // Get index into piece
            int pi = Rotate(px, py, nRotation);

            // Get tetromino piece
            vector<int> tetromino = tetrominos[nTetromino]; 

            // If it's part of the tetromino
            if (tetromino[pi] != 0)
            {
                // If it's outside the game board on the left or right
                if (nPosX + px <= 0 || nPosX + px >= nFieldWidth - 1)
                {
                    return false; // Out of bounds
                }
                
                // In bounds, so continue with collision checks if the position is within the game board
                if (nPosY + py >= 0 && nPosY + py < nFieldHeight)
                {
                    // Get index into field
                    int fi = (nPosY + py) * nFieldWidth + (nPosX + px);

                    // In bounds, so do collision check
                    if (gameBoard[fi] != 10)
                        return false; // Fail on first hit
                }
            }
        }
    return true; // No fail condition has been met
}

    void update() {
        if(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1)){
            nCurrentY += 1;
        }else{
            // Here every "paragraph" can be its own function so that this will read something like:
            //
            // stick_to_game_board();
            // int cleared_lines = clear_full_lines();
            // update_score(cleared_lines);
            // start_next_piece();



            //the tetromino has reached its end point -> Stick it to gameBoard
            for(int px = 0; px < 4; px++)
                for(int py = 0; py < 4; py++){
                    int pi = Rotate(px, py, nCurrentRotation); // Index of cell in tetromino
                    int fi = (nCurrentY + py) * nFieldWidth + (nCurrentX + px); // Respective index in field
                    // Check if the fi is within gameBoard's boundaries
                    if (fi < 0 || fi >= gameBoard.size()) {
                        continue;
                    }
                    if(tetrominos[nCurrentPiece][pi] == 1){
                        gameBoard[fi] = nCurrentPiece;
                    }
                }

            // Check for full lines starting from top to bottom
            int clearedLines = 0;
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
            nCurrentPiece = nNextPiece;
            nNextPiece = rand() % 7;
            nCurrentRotation = 0;
            nCurrentX = 5;
            nCurrentY = -3;

            //Calibrate speed throughout game
            nPieceCount++;

            // If piece does not fit straight away, game over!
            bGameOver = !checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1);
        }
        
    }

    vector<int> getGameBoard() {
        return gameBoard;
    }
    bool getGameOver(){
        return bGameOver;
    }

    int getNextPiece(){
        return nNextPiece;
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
    
    int getPieceCount(){
        return nPieceCount;
    }
    int getGamePaused(){
        return bGamePaused;
    }


    //Input functions
void moveTetromino(int val){
        // The line below might belong outside this logic. it might be more elegant if the JS code will determine is the
        // game is running or not before sending the move command
    if(bGamePaused || bGameOver) return;
    // instead of raw integers you can use enums that will give these numbers meaning (LEFT, RIGHT, DOWN, etc.)
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
        bGamePaused = false;
        nCurrentPiece = rand() % 7;
        nCurrentRotation = 0;
        nCurrentX = 5;
        nCurrentY = -4;
        nScore = 0; 
        nPieceCount = 0;
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
        .constructor<bool, bool, int, int, int, int, int, int, int>()
        .function("checkCollision", &Game::checkCollision)
        .function("update", &Game::update)
        // Maybe you can use properties instead of functions for all the simple getters so you would not need the getter
        // functions that really don't contribute anything to the code.
        .function("getGameBoard", &Game::getGameBoard)
        .function("getGameOver", &Game::getGameOver)
        .function("getNextPiece", &Game::getNextPiece)
        .function("getCurrentPiece", &Game::getCurrentPiece)
        .function("getCurrentRotation", &Game::getCurrentRotation)
        .function("getCurrentX", &Game::getCurrentX)
        .function("getCurrentY", &Game::getCurrentY)
        .function("getScore", &Game::getScore)
        .function("getPieceCount", &Game::getPieceCount)
        .function("getGamePaused", &Game::getGamePaused)
        .function("moveTetromino", &Game::moveTetromino)
        .function("rotateTetromino", &Game::rotateTetromino)
        .function("restartGame", &Game::restartGame)
        .function("pauseGame", &Game::pauseGame)
        .function("resumeGame", &Game::resumeGame);
}






