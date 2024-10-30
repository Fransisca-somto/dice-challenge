const die = [
    "./images/dice 1.png",
    "./images/dice 2.png",
    "./images/dice 3.png",
    "./images/dice 4.png",
    "./images/dice 5.png",
    "./images/dice 6.png",
  ];
  
  const img1 = document.querySelector(".img1");
  const img2 = document.querySelector(".img2");
  
  const play = () => {
    let randomNumber1 = Math.floor(Math.random() * 6);
    let randomNumber2 = Math.floor(Math.random() * 6);
    img1.setAttribute("src", die[randomNumber1]);
    img2.setAttribute("src", die[randomNumber2]);

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h2").innerText = "Player 1 Wins"
    } else if (randomNumber1 < randomNumber2){
        document.querySelector("h2").innerText = "Player 2 Wins"
    } else {
        document.querySelector("h2").innerText = "Draw"

    }
  };
  