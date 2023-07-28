#include <iostream>
#include <thread>
#include <vector>
#include <random>
#include <emscripten/bind.h>

using namespace std;

//Compile command: 
//emcc --bind -s WASM=1 -s ALLOW_MEMORY_GROWTH=1 -s ENVIRONMENT=web -O3 -o tetris.js tetris.cpp


//Rotation:
//0 deg: i = y * w + x
//90 deg: i = 12 + y - (x * 4)
//180 deg: i = 15 - (y * 4) - x
//270 deg: i = 3 + y(x * 4)

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
    int nShadowY;
    int nPieceCount;
    int nScore;
    int nStartSpeed;
    int nDropInterval;

    int nFieldWidth = 12;
    int nFieldHeight = 23;


    void createGameBoard() {
        gameBoard = vector<int>(nFieldWidth*nFieldHeight);
        for(int x = 0; x < nFieldWidth; x++) //Create Borders
            for(int y = 0; y < nFieldHeight; y++)
                gameBoard[y * nFieldWidth + x] = (x == 0 || x == nFieldWidth - 1 || y == nFieldHeight - 1) ? 9 : 10;
    }

    //Random number generation function, better alternative to srand and rand
    //uniform_int_distribution and and default_random_engine from <random> library
    int generateRandomNumber(int low, int high) {
        static random_device rd;
        static default_random_engine engine(rd());
        static uniform_int_distribution<int> distribution(low, high);
        return distribution(engine);
    }

    bool checkCollision(int nTetromino, int nRotation, int nPosX, int nPosY)
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

    void stickToGameBoard(){
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
    }

    int clearFullLines(){
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
        return clearedLines;
    }

    void increaseScore(int nClearedLines){
        nScore += 25 * nClearedLines; // base score for line clearance
            if (nClearedLines > 0) {
                nScore += (1 << nClearedLines) * 100; // bonus for clearing multiple lines
            }
    }

    void generateTetromino(){
        nCurrentPiece = nNextPiece;
        nNextPiece = generateRandomNumber(0,6);
        nCurrentRotation = 0;
        nCurrentX = 5;
        nCurrentY = -3;
    }

    void calibrateSpeed(){
        if (nPieceCount % 2 == 0 && nDropInterval > 150) nDropInterval -= 20;
    }


public:
    Game()
    {
        //Define starting game state
        bGameOver = false;
        bGamePaused = true;
        nNextPiece = generateRandomNumber(0,6);
        nCurrentPiece = generateRandomNumber(0,6);
        nCurrentRotation = 0;
        nCurrentX = 4;
        nCurrentY = -4;
        nShadowY = nCurrentY;
        nPieceCount = 0;
        nScore = 0;
        nStartSpeed = 900; //(milliseconds)
        nDropInterval = nStartSpeed;

        createGameBoard();
    }

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

    //Called on every game tick
    void update() {
        if(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1)){
            nCurrentY += 1;
        }else{
            stickToGameBoard();
            int clearedLines = clearFullLines();
            increaseScore(clearedLines);
            generateTetromino();
            nPieceCount++;
            calibrateSpeed();
            // If piece does not fit straight away, game over!
            bGameOver = !checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1);
        }
    }

    //Calculates Y coordinate for tetromino shadow -> Called in app.js draw()
    int changeShadowY(){
        nShadowY = nCurrentY;
        while(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, nShadowY + 1)){
            nShadowY++;
        }
        return nShadowY;
    }


    
    //Input functions
    void moveTetromino(int val){
        if(bGamePaused || bGameOver) return;

        if(val == 0){ 
            if(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX - 1, nCurrentY)){
                nCurrentX--;//Left
            }
        }else if(val == 1){ 
            if(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX + 1, nCurrentY)){
                nCurrentX++;//Right
            }
        }else if(val == 2){
            if(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1)){
                nCurrentY++;//Down
            }
        }else if(val == 3){
            while(checkCollision(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1)){
                nCurrentY++; //Hard Drop
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
        nCurrentPiece = generateRandomNumber(0,6);
        nCurrentRotation = 0;
        nCurrentX = 5;
        nCurrentY = -4;
        nScore = 0; 
        nPieceCount = 0;
        nDropInterval = nStartSpeed;
        createGameBoard();
    }

    vector<int> getGameBoard(){ 
        return gameBoard; 
    }
    void pauseGame(){
        bGamePaused = true;
    }
    void resumeGame(){
        bGamePaused = false;
    }
    int getGamePaused(){
        return bGamePaused;
    }
    int getDropInterval(){
        return nDropInterval;
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
    bool getGameOver(){
        return bGameOver;
    }
};




EMSCRIPTEN_BINDINGS(my_module) {
    emscripten::register_vector<int>("VectorInt");
    emscripten::register_vector<vector<int>>("VectorVectorInt");
    emscripten::class_<Game>("Game")
        .constructor()
        .function("Rotate", &Game::Rotate)
        .function("getTetromino", &Game::getTetromino)
        .function("update", &Game::update)
        .function("getGameBoard", &Game::getGameBoard)
        .function("getGameOver", &Game::getGameOver)
        .function("getNextPiece", &Game::getNextPiece)
        .function("getCurrentPiece", &Game::getCurrentPiece)
        .function("getCurrentRotation", &Game::getCurrentRotation)
        .function("getCurrentX", &Game::getCurrentX)
        .function("getCurrentY", &Game::getCurrentY)
        .function("changeShadowY", &Game::changeShadowY)
        .function("getScore", &Game::getScore)
        .function("getGamePaused", &Game::getGamePaused)
        .function("moveTetromino", &Game::moveTetromino)
        .function("rotateTetromino", &Game::rotateTetromino)
        .function("restartGame", &Game::restartGame)
        .function("pauseGame", &Game::pauseGame)
        .function("resumeGame", &Game::resumeGame)
        .function("getDropInterval", &Game::getDropInterval);
}






