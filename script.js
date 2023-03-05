let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click",() => {
    let i = Math.floor((Math.random() * 2)+1);
    console.log(i)
    coin.style.animation="none";
if(i==1){
    setTimeout(function(){
        coin.style.animation = "spin-heads 3s forwards";
    }, 100 );
    heads++;
}
else if(i==2){
    setTimeout(function(){
        coin.style.animation = "spin-tails 3s forwards"; 
    },100);
    tails++;
}
setTimeout(updateStats,3000);
disableButton();
});
function updateStats(){
    document.querySelector("#heads-count").textContent = `Heads:${heads}`;
    document.querySelector("#tails-count").textContent = `Tails:${tails}`;
}
function disableButton(){
    flipBtn.disable = true;
    setTimeout(function(){
        flipBtn.disable = false;
    },3000)
}
resetBtn.addEventListener("click",() =>{
    coin.style.animation = "rotateX(0)";
    heads = 0;
    tails = 0;
    updateStats();
})