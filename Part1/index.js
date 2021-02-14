var board = []

function play(clickedID){
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedID);

        if (playerSpan.innerText === "X") {
            playerSpan.innerText = 'O'
            clickedElement.innerText ='X'
            board[clickedID] = 'X'; 
        } else {
            playerSpan.innerText = 'X';
            clickedElement.innerText = 'O';
            board[clickedID] = 'O'
    }
    console.log(board)
}

const topLeft = board[0];
const topMiddle = board[1];
const topRight = board[2];
const middleLeft = board[3];
const middleMiddle = board[4];
const middleRight = board[5];
const lowerLeft = board[6];
const lowerMiddle = board[7]
const lowerRight = board[8]

if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
alert(`${topLeft} is the WINNER!`);
return;
}

if (middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight) {
    alert(`${middleLeft} is the WINNER!`);
    return;
}

if (lowerLeft !== undefined && lowerLeft === lowerMiddle && lowerLeft === lowerRight) {
    alert(`${lowerLeft} is the WINNER!`);
}

if (topLeft !== undefined && topLeft === middleLeft && topLeft === lowerLeft) {
    alert(`${topLeft} is the WINNER!`);
    return;
}

if (topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === lowerMiddle) {
    alert(`${topMiddle} is the WINNER!`);
    return;
}

if (topRight !== undefined && topRight === middleRight && topRight === lowerRight) {
    alert(`${topRight} is the WINNER!`);
    return;
}

if (topLeft !== undefined && topLeft === middleMiddle && topLeft === lowerRight) {
    alert(`${topLeft} is the WINNER!`);
    return;

}

if (topRight !== undefined && topRight === middleMiddle && topRight === lowerLeft) {
    alert(`${topRight} is the WINNER!`);
    return;
}

let boardFull = true;
for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
        boardFull = false;
    }
}

if (boardFull === true) {
    alert("Cat's game, there is no winner");
}