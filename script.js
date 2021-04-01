const buttons = document.querySelectorAll("button");

for (let i= 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    const joueur = buttons[i].innerHTML;
    const ordinateur = buttons[Math.floor(Math.random() * (buttons.length))].innerHTML;
    let result ="";


    if(joueur === ordinateur){
      result = "Egalité"
    }
    else if (
      (joueur === "pierre" && ordinateur === "ciseaux") ||
      (joueur === "papier " && ordinateur === "pierre") ||
      (joueur === "ciseaux" && ordinateur === "papier")||
      (joueur === "pierre" && ordinateur === "lézard")||
      (joueur === "papier" && ordinateur === "Spock")||
      (joueur === "ciseaux" && ordinateur === "lézard")||
      (joueur === "lézard" && ordinateur === "papier")||
      (joueur === "lézard" && ordinateur === "Spock")||
      (joueur === "Spock" && ordinateur === "pierre")||
      (joueur === "Spock" && ordinateur === "ciseaux")
    ) {
      result = "gagné";
    }
    else {
      result = "perdu";
    }
    document.querySelector(".result").innerHTML =`
    Joueur : ${joueur}</br>
    Ordinateur : ${ordinateur}</br>
    ${result}
    `;
  });
}
