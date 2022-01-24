function shift(){
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value; 
    localStorage.setItem("player-1-name",player1_name);
    localStorage.setItem("player-2-name",player2_name);
    window.location.replace("index2.html")
}
