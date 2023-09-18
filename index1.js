
var numberOfAnimalButtons = document.querySelectorAll(".speaker").length;


for (var i = 0; i < numberOfAnimalButtons; i++) {

  document.querySelectorAll(".speaker")[i].addEventListener("click",function(){  
  
    var buttons = this.innerText;
   
    playSound(buttons);
    buttonAnimation(buttons);
  });
}

  document.addEventListener("keydown",function(e){
    playSound(e.key);
    buttonAnimation(e.key);
  });

    function playSound(key){

      switch(key){

        case "a":
          var andrew = new Audio ("sounds/andrewTate.mp3");
          andrew.play();
          var andrewLine = document.getElementById("render");
          andrewLine.innerHTML = `<p class="renderLine">"Genuinely right now, nothing is stopping me from becoming BatMan"</p>`
        break;

        case "r":
          var rendon = new Audio ("sounds/rendonLabador.mp3");
          rendon.play();
          var rendonLine = document.getElementById("render");
          rendonLine.innerHTML = `<p class="renderLine">"Goal ko focus, pag may taong hindi makakasama, iwan, iwan, iwan, kahit pamilya mo pa"</p>`
        break;

        case "d":
          var david = new Audio ("sounds/davidGoggins.mp3");
          david.play();
          var davidLine = document.getElementById("render");
          davidLine.innerHTML = `<p class="renderLine">"When everything falls apart in your life, and your plan is fucked up<br>
          there is only one Mfckin option... Stay Fck*n Hard!"</p>`
        break;

        case "m":
          var mj = new Audio ("sounds/michaelJordan.mp3");
          mj.play();
          var michaelLine = document.getElementById("render");
          michaelLine.innerHTML = `<p class="renderLine">"26 times, I've been trusted to take the game winning shot and missed, <br>
          I failed over, and over, and over again in my life, and that is why, I succeed"</p>`
        break;

        case "k":
          var kobe = new Audio ("sounds/kobeBryant.mp3");
          kobe.play();
          var kobeLine = document.getElementById("render");
          kobeLine.innerHTML = `<p class="renderLine">"You can't stop people from tying to limit your dreams, <br>
          but you can stop it from becoming your reality, your dreams are upto you "</p>`
        break;

        case "c":
          var cena = new Audio ("sounds/johnCena.mp3");
          cena.play();
          var cenaLine = document.getElementById("render");
          cenaLine.innerHTML = `<p class="renderLine">"You never give up, you pick yourself up, you brush yourself up, you push forward,<br>
          you move on, you adapt, you overcome, that is what I believe!"</p>`
        break;

        default:
          break;

      }

      


    }
   
    function buttonAnimation(currentKey){
      var activeButton = document.querySelector("." + currentKey);

      if(activeButton.innerText === "a"){
        activeButton.classList.add("pressed");
        setTimeout (function(){
          activeButton.classList.remove("pressed");
        }, 4300)
      }
      else if(activeButton.innerText === "r"){
        activeButton.classList.add("pressed");
        setTimeout (function(){
          activeButton.classList.remove("pressed");
          
        }, 8809)
      }
      else if(activeButton.innerText === "d"){
        activeButton.classList.add("pressed");
        setTimeout (function(){
          activeButton.classList.remove("pressed");
          
        }, 8235)
      }
      else if(activeButton.innerText === "m"){
        activeButton.classList.add("pressed");
        setTimeout (function(){
          activeButton.classList.remove("pressed");
          
        }, 12927)
      }
      else if(activeButton.innerText === "k"){
        activeButton.classList.add("pressed");
        setTimeout (function(){
          activeButton.classList.remove("pressed");
          
        }, 7949)
      }
      else if(activeButton.innerText === "c"){
        activeButton.classList.add("pressed");
        setTimeout (function(){
          activeButton.classList.remove("pressed");
          
        }, 10737)
      }
    };
  

      



      





