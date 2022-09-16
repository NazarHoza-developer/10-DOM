function addDiv() {
    let div = document.createElement('div');
    document.body.append(div);
    div.classList.add("box");
    let divBox = document.querySelector(".box");
    setInterval(function(){
        divBox.innerHTML = "";
        for (let i = 0; i < 25; i++) {
            divBox.innerHTML += `<div class = "child" style="background-color: ${getRandomColor()};"></div>`;
           } 
    }, 500);
    divBox.innerHTML = "";
    for (let i = 0; i < 25; i++) {
     divBox.innerHTML += `<div class = "child" style="background-color: ${getRandomColor()};"></div>`; 

    } 
  };
function getRandomColor() { 
    let arrColors = ["red", "white", "blue", "orange", "green", "purple", "black", "yellow"];
    console.log(Math.random(0, 4))
    return arrColors[Math.floor(Math.random(0, 7) * 10)];
}
