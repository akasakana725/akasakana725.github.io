var omikuji_items = ["大吉","中吉","小吉","凶"];
var btn = document.getElementById("btn");
var dsp = document.getElementById("dsp");
var num = 0;

btn.addEventListener("click",function(){
    var num = Math.floor(Math.random() * omikuji_items.length);
    dsp.innerHTML = (omikuji_items[num]);
});