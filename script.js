var wordsScreen=document.getElementById("words");
var wrongLetters=[];
var wrongScreen=document.getElementById("wrongWords");
var man=document.querySelectorAll(".man");


var lettersOfWord=[];
function getRandomWord()
{
    let words=["javascript","html","css","java","python","kotlin","flutter","react"];

    return words[Math.floor(Math.random() * words.length)];
}

const word=getRandomWord();
const popup=document.getElementById("popupCont");

function writeToScreen(){
    
    wordsScreen.innerHTML =  `
    ${word.split('').map(letter => `
        <div class="letter">
            ${lettersOfWord.includes(letter)? letter: '?'}
        </div>
    `).join('')}    
    `;

    const knowedWords=wordsScreen.innerText.replace(/\n/g,"");        // g is to replace for all "\n"
    if(knowedWords==word)
    {
        popup.style.display="flex";
    }
    updateWrongs();
}


window.addEventListener("keydown",function(e){
  if(lettersOfWord.length<=word.length && wrongLetters.length!=7)
    
    if(e.keyCode>=65 && e.keyCode <= 90){
        if(word.indexOf(e.key)!=-1){
             lettersOfWord.push(e.key);
            
        }
        else{
          if(wrongLetters.indexOf(e.key)==-1 ){
            wrongLetters.push(e.key);
          }
              
        }
        writeToScreen();
    }
})


function updateWrongs()
{
    wrongScreen.innerHTML=wrongLetters;
    const countWrong=wrongLetters.length;
    if(countWrong>0){
         drawMan(countWrong);
    }
   

}
var wrongPopup=document.getElementById("popupContWrong");
function drawMan(index){
    if(index==7){
        wrongPopup.style.display="block";
        return;
    }
    man.item(index-1).style.display="block";

    
}



writeToScreen();

