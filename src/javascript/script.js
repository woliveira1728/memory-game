const main = document.getElementById("main");

const pointsTag = document.getElementById("points");
const closeButton = document.getElementById("close");

let click1 = null;
let click2 = null;
let finder = 0;
let points = 0;

renderCards();



closeButton.addEventListener("click", ()=>{
    location.assign("../../index.html")
})

function renderCards(){

    const duplicateArray = [...characters,...characters];
    const shuffledCharacters = shuffleArray(duplicateArray);

    console.log(duplicateArray)

    for(let i = 0; i < shuffledCharacters.length; i++){

        let card = document.createElement("img");
        card.id = shuffledCharacters[i].id;
        card.addEventListener("click", cardClick)
        card.src = "./src/img/QuestionBlock.png";
        card.alt = "Game card";
        main.appendChild(card)

    }

}

function cardClick(event){
    const clickedImg = event.target;
    let clickedId = event.target.id;
    let clickedCharacters = characters.find(
        (element)=>element.id==clickedId
    );

    clickedImg.src = clickedCharacters.img;

    if(click1==null){
        click1 = clickedImg;
    } else {
        click2 = clickedImg;
        pairTest();
    }

}

function pairTest(){
    if (click1.id==click2.id){
        console.log('é par')
        finder++;
        click1 = null;
        click2 = null;

        if (finder == 4){
            points++;
            pointsTag.innerHTML = points;
            finder = 0;

            setTimeout(()=>{
                main.innerHTML=""
                renderCards();
            }, 1000)
        }

    } else {
        setTimeout(()=>{
            click1.src = "./src/img/QuestionBlock.png";
            click2.src = "./src/img/QuestionBlock.png";
            click1 = null;
            click2 = null;
        }, 500)
        console.log('não é par')
    }
}


function shuffleArray(arr){
    for(let i = arr.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}