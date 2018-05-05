var red,green,blue,rgb,select,select2,x,y;

var squar = document.querySelectorAll(".square");
var btn = document.querySelectorAll("button");
var h1 = document.querySelector("h1");
var gause = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var hard = true;

    startHard();
    btn[2].addEventListener("click", function (){       
        startHard();
        hard = true;
    });
    btn[1].addEventListener("click", function() {
      startEasy();
      hard = false;
    });
    btn[0].addEventListener("click", function() {
        if (hard == true) {
            startHard();

        } else {
            startEasy();
            hard = false;
        }
    });
    for (var i = 0; i < squar.length; i++) {
      squar[i].addEventListener("click", function() {
        y = this.style.background;
        if (x == y) {
          for (var i = 0; i < squar.length; i++) {
            squar[i].style.background = x;
            squar[i].classList.remove("disable");
            h1.style.background = x;
            message.textContent = "Correct !";
            btn[0].textContent = "PLAY AGAIN?";
          }
        } else {
          this.classList.add("disable");
          message.textContent = "TryAgain";
        }
      });
    }

    function startHard(){
        similar();
        btn[2].classList.add("selected");
        btn[1].classList.remove("selected");
        backgroundHard();
        select = Math.floor(Math.random() * 6);
        x = squar[select].style.background;
        gause.textContent = x; 
    };
    function startEasy(){
       similar();
       btn[1].classList.add("selected");
       btn[2].classList.remove("selected");
       backgroundEasy();
       select2 = Math.floor(Math.random() * 3);
       x = squar[select2].style.background;
       gause.textContent = x;
    }
    function background(){
      red = Math.floor(Math.random() * 256);
      green = Math.floor(Math.random() * 256);
      blue = Math.floor(Math.random() * 256);
      rgb = "rgb" + "(" + red + "," + green + "," + blue + ")";    
    }
    function backgroundHard(){
      for (var i = 0; i < squar.length; i++) {
        squar[i].style.display = "block"; 
        squar[i].classList.remove("disable");     
        background();
        squar[i].style.background = rgb;
      }
    };
    function backgroundEasy (){
      for (var i = 0; i < squar.length; i++) {
        if (i > 2) {
          squar[i].style.display = "none";
        } else {
          squar[i].classList.remove("disable");
          background();
          squar[i].style.background = rgb;
        }
      }
    }
    function similar(){
      h1.style.background = "steelblue";
      message.textContent = "";
      btn[0].textContent = "NEW COLORS";
    }
    
  