let sign = "X";
let head = document.getElementById("player");

let player1="";
let player2="";
window.addEventListener("load",()=>{
  player1 = localStorage.getItem("PLAYER1");
  player2 = localStorage.getItem("PLAYER2");
  head.innerText = player1 + "'s turn!";
})

function print(num){
  let box= document.getElementById("r"+num);
  if(box.innerText==""){
    box.innerText = sign;
    if(sign=="O") box.classList.add("changecolor");
    else box.classList.remove("changecolor");
    winner();
    checkSign();
  }

}

function checkSign(){
  if(sign=="X"){
    sign="O";
    head.innerText = player2 + "'s turn!";
  }
  else{
    sign="X";
    head.innerText = player1 + "'s turn!";

  }
}

function getBox(numb){
  return document.getElementById("r"+numb).innerText;
}

function checkMove(a,b,c,m){
  if(getBox(a)==m && getBox(b)==m && getBox(c)==m) return true;
  else return false;
}

function winner(){
  if(checkMove(1,2,3,sign) || checkMove(4,5,6,sign) || checkMove(7,8,9,sign) || checkMove(1,4,7,sign) || checkMove(2,5,8,sign) || checkMove(3,6,9,sign) || checkMove(1,5,9,sign) || checkMove(3,5,7,sign)){
    if(sign=="X") head.innerText = player1+ " has won the game";
    else head.innerText = player2+ " has won the game";
    for(let i=1;i<=9;i++){
      document.getElementById("r"+i).innerText="";
    }
    throw "game end";
  }
  else{
    let c=0;
    for(let i=1;i<=9;i++){
      if(document.getElementById("r"+i).innerText=="") c++;
    }
    if(c==0){
      head.innerText = "Opps! its a tie.";
      for(let i=1;i<=9;i++){
        document.getElementById("r"+i).innerText="";
      }
      throw "Its a tie";
    }
  }

}
