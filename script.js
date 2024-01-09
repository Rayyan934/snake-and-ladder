
let turn =0;
let p1sum=0;
let p2sum=0;

function changePlayer(turn){
    console.log(turn);
if (turn==0){
    document.getElementById("turn").innerHTML= "player 1 turn";
    
}
else{
    document.getElementById("turn").innerHTML= "player 2 turn";

}
}
function Sum(turn,no){
    if(turn==0)
    {
        p1sum+=no;
        console.log(p1sum);
       p1sum = snake_ladder(p1sum);
       console.log(p1sum);
    }
    else{
        p2sum+=no;
        console.log(p2sum);
      p2sum =  snake_ladder(p2sum);
      console.log(p2sum);
    }
    win(p1sum,p2sum);
}
function win(p1sum,p2sum){
    if(p1sum>=100)
    {
        document.getElementById("turn").innerHTML="player 1 Won";
        reset();
    }
    else if(p2sum>=100){
        document.getElementById("turn").innerHTML="player 2 Won";
        reset();
    }
   
}
function snake_ladder(psum)
{
  if (psum==1){
    psum=38;
    console.log("ladder");
    console.log(psum);
    return psum;
  }
  else if (psum==4)
  {
    psum=14;
    console.log("ladder");
    console.log(psum);
    return psum;
  }
  else if(psum==8)
  {
    psum=30;
    console.log("ladder");
    console.log(psum);
    return psum;
  }
  else if(psum==21)
  {
    psum=42;
    console.log("ladder");
    console.log(psum);
    return psum;
  }
  else if(psum==48)
  {
    psum=26;
    console.log("snake");
    console.log(psum);
    return psum;
  }
  else if(psum==50)
  {
    psum=67;
    console.log("ladder");
    console.log(psum);
    return psum;
  }
  else if(psum==62)
  {
    psum=18;
    console.log("snake");
    console.log(psum);
    return psum;
  }
  else if(psum==71)
  {
    psum=92;
    console.log("ladder");
    console.log(psum);
    return psum;
  }
  else if(psum==88)
  {
    psum=24;
    console.log("snake");
    console.log(psum);
    return psum;
  }
  else if(psum==80)
  {
    psum=99;
    console.log("ladder");
    console.log(psum);
    return psum;
  }
  else if(psum==95)
  {
    psum=56;
    console.log("snake");
    console.log(psum);
    return psum;
  }
  else if(psum==97)
  {
    psum=78;
    console.log("snake");
    console.log(psum);
    return psum;
  }
  
  else{
    return psum;
  }
}
function reset(){
  let v =  document.querySelector("button");
  v.textContent="restart";
v.addEventListener("click",function(){
    location.reload();
  })
}

function dice(){
let no=0;
no = (Math.floor(Math.random()*6)+1);
console.log(no);
document.getElementById("diceNum").innerText=no;
turn = turn==0?1:0;
changePlayer(turn);
Sum(turn,no);
}
let v=document.getElementById("Dicebtn");
console.log(v);
v.addEventListener("click", dice);