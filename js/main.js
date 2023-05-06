/* The Start */

let turn = 'x';
let head = document.querySelector('.title'); 
let box = document.querySelector('.box'); 
let square = [];

function gameOver(){
    setTimeout(() => {
        alert("The Game Over");
    }, 500);
}

function end(num1,num2,num3){
    head.innerHTML = `<span>${square[num1]}</span> The Winner`;
    head.style.textTransform = `uppercase`;
    document.getElementById('item' + num1).style.backgroundColor = "#9a0076";
    document.getElementById('item' + num2).style.backgroundColor = "#9a0076";
    document.getElementById('item' + num3).style.backgroundColor = "#9a0076";
    setInterval(function(){head.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},3000);
}

function winner(){
    for(let i = 1; i < 10; i++){
        square[i] = document.getElementById(`item` + i).innerHTML;
    }
    /* Start Rows */
    if(square[1] === square[2] && square[2] === square[3] && square[1] !== ''){
        end(1,2,3);
        gameOver();
    }
    else if(square[4] === square[5] && square[5] === square[6] && square[4] !== ''){
        end(4,5,6);
        gameOver();
    }
    else if(square[7] === square[8] && square[8] === square[9] && square[7] !== ''){
        end(7,8,9);
        gameOver();
    }
    /* End Rows */
    /* Start Columns */
    else if(square[1] === square[4] && square[4] === square[7] && square[1] !== ''){
        end(1,4,7);
        gameOver();
    }
    else if(square[2] === square[5] && square[5] === square[8] && square[2] !== ''){
        end(2,5,8);
        gameOver();
    }
    else if(square[3] === square[6] && square[6] === square[9] && square[3] !== ''){
        end(3,6,9);
        gameOver();
    }
    /* End Columns */
    /* Start Cross */
    else if(square[1] === square[5] && square[5] === square[9] && square[1] !== ''){
        end(1,5,9);
        gameOver();
    }
    else if(square[3] === square[5] && square[5] === square[7] && square[3] !== ''){
        end(3,5,7);
        gameOver();
    }
    /* End Cross */
    /* Start Draw */
    else if (((square[1]&&square[2]&&square[3]&&square[4]&&square[5]&&square[6]&&square[7]&&square[8]&&square[9]) !== '' ) && turn === 'o'){
        head.innerHTML = `OOPS! It's Draw`;
        setInterval(function(){head.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},3000);
    }
    /* End Draw */
}

function game(id) {
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML === ''){
        element.innerHTML = 'x';
        turn = 'o';
        head.innerHTML = `Turn <span>O</span>`;
    }
    else if (turn === 'o' && element.innerHTML === ''){
        element.innerHTML = 'o';
        turn = 'x';
        head.innerHTML = `Turn <span>X</span>`;
    }
    winner();
}