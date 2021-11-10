    //feetTomile//
function feetTomile(n){
    var Onemiles = 5280;
    var oneFeet = 1/Onemiles;
    var nfeet = n*oneFeet;
    return nfeet;
}
var inputFeet = 10000;
var feetTomilesR = feetTomile(inputFeet);
console.log(inputFeet+" feet = "+ feetTomilesR+ " miles");


            //woodCalculator
function woodCalculator(Chair, Table, Bed){
    if(Chair== undefined){
        totalChair = 0;
    }else{
        var oneChair = 1;
        var totalChair = oneChair*Chair;
    }

    if(Table == undefined){
        totalTable=0;
    }else{
        var oneTable = 3;
        var totalTable = oneTable*Table;
    }

    if(Bed == undefined){
        totalBed=0;
    }else{
        var oneBed = 5;
        var totalBed = oneBed*Bed;
    }
    totalWood = totalChair+totalTable+totalBed;
    return totalWood;
}
var inputChair = 4;
var inputTable = 3;
var inputBed = 5; 
var needWood = woodCalculator(inputChair, inputTable, inputBed);
console.log("for Your furniture you need total "+ needWood +" Cubic Feet wood");
   

            //brickcalculator
function brickcalculator(floorNumber){
   var Total =0;
    for(var i = 1; i<=floorNumber; i++){
        
        if(i<=10 && i>0){
            
          var fHeight = 15;
          var fBrick = fHeight*1000;
            Total = Total+fBrick;
        }else if(i<=20 && i>10){
           var mHeight = 12;
           var Mbrick = mHeight*1000;
            Total = Total + Mbrick;
        }else if (i>20){
           var lHeight = 10;
           var lbrick = lHeight*1000;
            Total = Total + lbrick;
        }
        
    }
    if(floorNumber<=0){
        Total = "Please enter a valid Number";
        return Total;
    }
    return "For Your Building You need total " + Total + " Bricks"; 
}
var totalBrick =  brickcalculator(7);
console.log(totalBrick);

                  //tinyFriend

var friendList = [ "Rony", "si","Aadhira","Aaditri","Aadya","Vijay","Rony","Roky","Runa","Vrisa","Sushant","Svar","nami"];

console.log(
    friendList.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
)