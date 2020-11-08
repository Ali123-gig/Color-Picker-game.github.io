var circleContainer=document.querySelector(".wrapper");
for(var i=1;i<7;i++){

    circleContainer.insertAdjacentHTML("beforeend",`<div class="circlewrapper flex">
    <div  style="background:${rgbMaker()}"class="circles "></div>
</div>`)
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  function rgbMaker(){
      return `rgb(${getRandomInt(0,256)},${getRandomInt(0,256)},${getRandomInt(0,256)})`;
  }
  var container=document.querySelector(".container");

  

  var result=null;
  var circles=Array.from(document.querySelectorAll(".circles"));
  var randomNumberForAns=getRandomInt(0,6);
  result=circles[randomNumberForAns].style.background
  var answer=document.querySelector(".ans");
  answer.textContent=result;   
  
  circleContainer.addEventListener("click",function(extraInfo){
    if((Array.from(extraInfo.target.classList).includes('circles'))){
        var resultPicked=extraInfo.target.style.background;
        if(resultPicked===result){

            circles.forEach(function(c){
                if(c.style.background!==result){
                    c.style.opacity=0;
                }
            })
            container.style.background=result;
            }
        else{
            
            extraInfo.target.style.opacity=0;
           
        }
    }
    
 });
var restBtn=document.querySelector("#Button");
restBtn.addEventListener("click",function(){
circleContainer.innerHTML="";
    for(var i=1;i<7;i++){

        circleContainer.insertAdjacentHTML("beforeend",`<div class="circlewrapper flex">
        <div  style="background:${rgbMaker()}"class="circles "></div>
    </div>`)
    }
    circles=Array.from(document.querySelectorAll(".circles"));
    result=circles[randomNumberForAns].style.background
    answer.textContent=result;

})
