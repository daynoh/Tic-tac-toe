

function createBoard()
{
    const board = ["","","","","","","","",""];
    return board
}

const board = new createBoard();



const Player = function(side){
    this.side = side
    let playedPositions = [];

    const check_valid = (board,position) =>
    {
        if (board[position] === "")return true;
        return false;
    }

    const play = (board, position) =>{
        if (check_valid(board,position))
        {
            playedPositions.push(parseInt(position))
            board[position] = side;
        }
    }

    return {side,playedPositions,play}

}


function checkWin(player)
{
    if (player.playedPositions.length >= 3){
        if(checkColumns(player.playedPositions) || checkRows(player.playedPositions)|| checkDiagonals(player.playedPositions))
        {
            return player
        }
    }
    
}

function checkDraw(playerO)
{
    if (playerO.playedPositions.length == 4)
    {
        return true;
    }
    else
    {return false;}
}

// helper functions to check whether any of the win conditions have been met

function checkColumns(positions){
    // Takes in played position for each player
    if(positions.includes(0) && positions.includes(3) && positions.includes(6))
    {
        return true;
    }
    else if(positions.includes(1)&& positions.includes(4) && positions.includes(7))
    {
        return true;
    }else if(positions.includes(2)&& positions.includes(5) && positions.includes(8))
    {
        return true;
    }
    else{return false}
}


//to check rows

function checkRows(positions){
     // Takes in played position for each player
     if(positions.includes(0)&& positions.includes(1) && positions.includes(2))
     {
         return true;
     }
     else if(positions.includes(3)&& positions.includes(4) && positions.includes(5))
     {
         return true;
     }else if(positions.includes(6)&& positions.includes(7) && positions.includes(8))
     {
         return true;
     }
     else{return false}


}


function checkDiagonals(positions){

    if(positions.includes(2))
    {
        if(positions.includes(3)&&positions.includes(7))
        {
            return true
        }else if(positions.includes(9)&& positions.includes(0))
        {
            return true
        }
        else{return false}
    }
}




function playGame()
{
    const board = new createBoard();
    const player1 = new Player('x');
    const player2 = new Player('o');
    let counter = 0;
    while(checkDraw(player2) == false && counter < 10 )
    {
        counter += 1;
        
        
        const position = prompt('Enter position');
        player1.play(board,parseInt(position));
        console.log(checkRows(player1.playedPositions))
        if (checkWin(player1))
        {
            console.log(player1.side);
            console.log("player 1 is the winner");
            return 0;

        }
        
        const position2 = prompt('Enter position player2');
        player2.play(board,parseInt(position2));
        if(checkWin(player2))
        {
            console.log(player2.side);
            console.log("player 2 is the winner");
            return 0;

        }
        console.log(player1.playedPositions)
        console.log(player2.playedPositions)
        console.log(board);

        
    }
    console.log("its a draw");

}

// playGame();

// Setting up game code 

// getting all grids


const cells = document.querySelectorAll('.cell');


cells.forEach(cell=>{
    cell.addEventListener('click',function(e){
        cell.innerText = 'x';
        console.log(e.target)
    })
})