let boxes = document.querySelectorAll( '.box' );
let resetBtn = document.getElementById( 'reset-btn' );
let newGameBtn = document.getElementById( 'new-btn' );
let msgContainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");

let turnO = true;

const winPatters = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () =>{
    for(pattern of winPatters){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText, 
        //     boxes[pattern[1]].innerText, 
        //     boxes[pattern[2]].innerText
        // );
        
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner" , pos1Val);
                showWinner(pos1Val);
            }
        }
    };
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hidden");
    disableBoxes();
}

const disableBoxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hidden");
}

newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);
