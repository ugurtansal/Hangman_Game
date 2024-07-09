var wordsScreen=document.getElementById("words");
var wrongLetters=[];
var wrongScreen=document.getElementById("wrongWords");

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
    wrongWriteToScreen();
}


window.addEventListener("keydown",function(e){
    
    if(e.keyCode>=65 && e.keyCode <= 90){
        if(word.indexOf(e.key)!=-1){
             lettersOfWord.push(e.key);
            
        }
        else{
          if(wrongLetters.indexOf(e.key)==-1){
            wrongLetters.push(e.key);
          }
              
        }
        writeToScreen();
    }
})


function wrongWriteToScreen()
{
    wrongScreen.innerHTML=wrongLetters;
}




writeToScreen();

