var score = 0;
var scriptUpgrade = 1;
var coderUpgrade = 1;
var cost1 = 15;
var cost2 = 100;
var bps1 = 0.1

function updateElem(elem)
{
  document.getElementById(elem).innerHTML = "bits: " + Math.round(score);
}
function addScore(amount) {
  score = score + amount;
  updateElem("scoreVal")
}
function upUpgrade1() {
  if (score >= 100) {
    score = score - 100;
    scriptUpgrade = scriptUpgrade * 2;
    updateElem("scoreVal")
    document.getElementById("upUpgrade1").style.display = "none";
    bps1 = bps1*2;
    document.getElementById("bps1").innerHTML = "+" + bps1 + " bits per second";
  }
}
function upgrade1(){
  if (score >= cost1){
    score = Math.round(score) - cost1;
    updateElem("scoreVal");
    setInterval("addScore(0.1*scriptUpgrade);", 1000);
    cost1 = Math.round(cost1*1.1);
    document.getElementById("cost1").innerHTML = "cost: " + cost1 + " bits";
    var amount = document.getElementById("amount1").innerHTML;
    amount = parseInt(amount);
    amount += 1;
    document.getElementById("amount1").innerHTML = amount;
  }
}
function upgrade2(){
  if (score >= cost2){
    score = Math.round(score) - cost2;
    updateElem("scoreVal")
    setInterval("addScore(1*coderUpgrade);", 1000);
    cost2 = Math.round(cost2*1.1);
    document.getElementById("cost2").innerHTML = "cost: " + cost2 + " bits";
    var amount = document.getElementById("amount2").innerHTML;
    amount = parseInt(amount);
    amount += 1;
    document.getElementById("amount2").innerHTML = amount;
  }
}
