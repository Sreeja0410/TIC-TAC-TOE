


function isEmpty(){
  const player1 = document.getElementById("player1").value;
  const player2 = document.getElementById("player2").value;

  localStorage.setItem("PLAYER1", player1);
  localStorage.setItem("PLAYER2", player2);
  console.log("called");
  if(player1!="" && player2!="" && player1!=player2){
    document.getElementById("btn").removeAttribute("disabled");
  }
  else{
    document.getElementById("btn").setAttribute("disabled","");
  }
  return;
}
