
//ham ngau nhien
let getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
  }
  let resul;
 const operation = document.querySelector("#operation");
  //tao phep toan ngau nhien
  let createOper = () =>{
      let x,o,y;
      x = getRandomIntInclusive(0,99);
      y = getRandomIntInclusive(0,99);
      let op =["+","-"]
      o = op[getRandomIntInclusive(0,1)];
      resul = eval(x+o+y);
      operation.textContent= x+o+y;
      return x + o + y;
  }
  let c = createOper();
  // tao 10 hinh tron
  const game = document.querySelector("#game");
  let createCircle = () =>{
      game.insertAdjacentHTML("beforeend","<div class='circle'>"+resul+"</div>");
      for(let i =1 ; i<=9; i++){
        let j = getRandomIntInclusive(-99,198);
        game.insertAdjacentHTML("beforeend","<div class='circle'>"+j+"</div>");
      }
  }
  createCircle();
  const circle = document.querySelectorAll(".circle");
  let newCircle = () =>{
      circle.forEach((i) =>{
          i.innerHTML = getRandomIntInclusive(-99,198);
      });
      circle[2].innerHTML = resul;
  }
  // setpostion
  let setpostion = () =>{
      circle.forEach((items) =>{
          items.style.left = getRandomIntInclusive(0,1100) + "px";
          items.style.top = getRandomIntInclusive(0,500) + "px";
      })
  }
  const start = document.querySelector('.btn-primary');
 
  start.onclick = () =>{
      operation.innerHTML = c;
      setpostion();
  }
  let newgame = () =>{
      createOper();
      newCircle();
      setpostion();
  }
  const score = document.querySelector("#score")
  circle.forEach((e) =>{
    
      e.onclick = () =>{
        if(resul == e.innerHTML*1.0){
            score.innerHTML++;
           newgame();

            game.setAttribute('style','background: #28a745')
        } else
        {
            score.innerHTML--;
            newgame();
            game.setAttribute('style','background: #dc3545')
        }
      }
  })


  //cauc bai 5*/