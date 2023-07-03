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


class Game {
public:

    Game(){
        //Create Assets
        tetromino[0].append(L"..X...X...X...X."); // Tetronimos 4x4
        tetromino[1].append(L"..X..XX...X.....");
        tetromino[2].append(L".....XX..XX.....");
        tetromino[3].append(L"..X..XX..X......");
        tetromino[4].append(L".X...XX...X.....");
        tetromino[5].append(L".X...X...XX.....");
        tetromino[6].append(L"..X...X..XX.....");

        //Create field
        pField = new unsigned char [nFieldWidth * nFieldHeight];
        for(int x = 0; x < nFieldWidth; x++) //Create Borders
            for(int y = 0; y < nFieldHeight; y++)
                pField[y * nFieldWidth + x] = (x == 0 || x == nFieldWidth - 1 || y == nFieldHeight - 1) ? 9 : 0;

        //Game logic variables
        bool bGameOver = false;
        int nCurrentPiece = 0;
        int nCurrentRotation = 0;
        int nCurrentX = nFieldWidth / 2;
        int nCurrentY = 0;

        int nSpeed = 20;
        int nSpeedCounter = 0;
        bool bForceDown = false;
        int nPieceCount = 0;
        int nScore = 0;
    }

    ~Game() {
        delete[] pField;
    }

//Call this function on every frame
void tick(){
        nSpeedCounter++;
        bForceDown = (nSpeedCounter == nSpeed);

        //Game logic ===============================
        if(bForceDown)
        {   
            //Can piece go down?
            if(DoesPieceFit(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1))
                nCurrentY++; //YES! So go down.
            else
            {
                //NO! Lock current piece in place
                for (int px = 0; px < 4; px++)
					for (int py = 0; py < 4; py++)
						if (tetromino[nCurrentPiece][Rotate(px, py, nCurrentRotation)] != L'.')
							pField[(nCurrentY + py) * nFieldWidth + (nCurrentX + px)] = nCurrentPiece + 1;

                //Increase difficulty every 10 pieces
                nPieceCount++;
                if(nPieceCount % 10 == 0)
                    if(nSpeed >= 10)nSpeed--; //Number of game ticks decreases, threrefore speed of game increases

                //Check if there are any full horizontal lines
                for(int py = 0; py < 4; py++)
                    if(nCurrentY + py < nFieldHeight - 1)
                    {   
                        bool bLine = true;
                        for(int px = 1; px < nFieldWidth - 1; px++)
                            bLine &= (pField[(nCurrentY + py) * nFieldWidth + px]) != 0;

                        if(bLine)
                        {
                            //Remove Line and set to =
                            for(int px = 1; px < nFieldWidth - 1; px++)
                                pField[(nCurrentY + py) * nFieldWidth + px] = 8;

                            vLines.push_back(nCurrentY + py);
                        }
                    }

                //Increase score for each piece, but more for each line
                nScore += 25;
                if(!vLines.empty()) nScore += (1 << vLines.size()) * 100; //Exponential increase in score added for each line gotten

                //Choose next piece
                    nCurrentX = nFieldWidth / 2;
                    nCurrentY = 0;
                    nCurrentRotation = 0;
                    nCurrentPiece = rand() % 7;
                //if piece does not fit game is over
                bGameOver = !DoesPieceFit(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY);
            }
        }
        //Lines completion
		if (!vLines.empty())
		{
			for (auto &v : vLines)
				for (int px = 1; px < nFieldWidth - 1; px++)
				{
					for (int py = v; py > 0; py--)
						pField[py * nFieldWidth + px] = pField[(py - 1) * nFieldWidth + px];
					pField[px] = 0;
				}

			vLines.clear();
		}
}

private:
    // Game component variables
    wstring tetromino[7];
    int nFieldWidth = 12;
    int nFieldHeight = 18;
    unsigned char *pField = nullptr;

    //Game state variables
    bool bGameOver = false;
    int nCurrentPiece = 0;
    int nCurrentRotation = 0;
    int nCurrentX = nFieldWidth / 2;
    int nCurrentY = 0;

    int nSpeed = 20;
    int nSpeedCounter = 0;
    bool bForceDown = false;
    int nPieceCount = 0;
    int nScore = 0;

    vector<int> vLines;

    int Rotate(int px, int py, int r){
    switch(r % 4)
    {
        case 0: return py * 4 + px; //0
        case 1: return 12 + py - (px * 4); //90
        case 2: return 15 - (py * 4) - px; //180
        case 3: return 3 - py + (px * 4); //270
    }
    return 0;
}

    //COLLISION DETECTION
    bool DoesPieceFit(int nTetromino, int nRotation, int nPosX, int nPosY)
    {
        for (int px = 0; px < 4; px++)
            for(int py = 0; py < 4; py++)
            {
                //Get index into piece
                int pi = Rotate(px,py,nRotation);

                //Get index into field
                int fi = (nPosY + py) * nFieldWidth + (nPosX + px);

                if(nPosX + px >= 0 && nPosX + px < nFieldWidth)
                {
                    if(nPosY + py >= 0 && nPosY + py < nFieldHeight)
                    {
                        if(tetromino[nTetromino][pi] == L'X' && pField[fi] != 0)
                            return false;
                    }
                }
            }

        return true;
    }

    void MoveTetromino(int val, int& nCurrentX, int& nCurrentY, int& nCurrentPiece, int& nCurrentRotation){
        // Handle player movement
        switch (val){
            case 0: nCurrentX += (DoesPieceFit(nCurrentPiece, nCurrentRotation, nCurrentX + 1, nCurrentY)) ? 1 : 0; //left 
            case 1: nCurrentX -= (DoesPieceFit(nCurrentPiece, nCurrentRotation, nCurrentX - 1, nCurrentY)) ? 1 : 0; //right
            case 2: nCurrentY += (DoesPieceFit(nCurrentPiece, nCurrentRotation, nCurrentX, nCurrentY + 1)) ? 1 : 0; //down
            case 3: nCurrentRotation += (DoesPieceFit(nCurrentPiece, nCurrentRotation + 1, nCurrentX, nCurrentY)) ? 1 : 0; //rotate
        }
    }
};



Game game;


EMSCRIPTEN_BINDINGS(my_module) {
  
}






