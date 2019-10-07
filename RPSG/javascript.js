let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const compscore_span = document.getElementById("computer-score");
const score_div = document.querySelector(".Score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("R");
const paper_div = document.getElementById("P");
const scissors_div = document.getElementById("S");
const check_div = document.getElementById("C");
let c=0;
let h=0;
let a = ["Rock", "Paper", "Scissors"];
let b = ["Rock", "Paper", "Scissors"];
let x = [""];

function checkall(c, d) {
	switch (c + d){
		case "RockScissors":
		case "PaperRock":
		case "ScissorsPaper":
		return "win";
		break;
		case "RockRock":
		case "PaperPaper":
		case "ScissorsScissors":
		return "tie";
		break;
		case "ScissorsRock":
		case "RockPaper":
		case "PaperScissors":
		return "lose";
		break;
	}
}




function checkmessege(x){

    for(c=0;c<3;c++) {
    for(h=0;h<3;h++) {
 
   
        
       console.log(" Player=" + a[h] + " Computer=" + b[c] + " Result=" + checkall(a[h], b[c]) + "\n");
       alert(" Player=" + a[h] + " Computer=" + b[c] + " Result=" + checkall(a[h], b[c]) + "\n");
  
   }
}
}



function check(letter){
    checkmessege()
	result_p.innerHTML = "Done Checking"

}
