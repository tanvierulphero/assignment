

// kilometerToMeter Done
function kilometerToMeter(kilometer){
   
   var meter = kilometer * 1000;
   return meter;
   }

   // var tanvierulJabe = kilometerToMeter(1);
   // console.log(tanvierulJabe);


// hotelCost done

function hotelCost (perNight){
   var night = 0;
   if (perNight <= 10){
       night = perNight * 100;
       
   }
   else if (perNight <= 20){
       var firstPart = 10 * 100;
       var remaining = perNight -10;
       var secondPart = remaining * 80;
       night = firstPart + secondPart;
   }
   else{
       var firstPart = 10*100;
       var secondPart = 10*80;
       var remaining = perNight-20;
       var thirdPart = remaining * 50;
       night = firstPart + secondPart + thirdPart;
   
   }
   return night;
}


// var count = hotelCost(30);
// console.log(count);