let gen = prompt(`Enter your gender(m, f)`);
let yearOfSvc = prompt(`Enter here year of service`);
let qlfCTion = prompt(`Enter your qualification(pg, g)`);

function dataList ({gender, yearOfService, qualifications}){
if( yearOfService >= 10 && qualifications == 'pg'){
    return `This employee is ${gender} his years of services is ${yearOfService} and he has done ${qualifications}
    So his salary is 15000`
}

else if(gender == 'm' && yearOfService >= 10 && qualifications == 'g'){
    return `This employee is ${gender} his years of services is ${yearOfService} and he has done ${qualifications}
    So his salary is 10000`
}
else if(gender == 'm' && yearOfService < 10 && qualifications == 'pg'){
    return `This employee is ${gender} his years of services is ${yearOfService} and he has done ${qualifications}
    So his salary is 10000`
}
else if(gender == 'm' && yearOfService < 10 && qualifications == 'g'){
    return `This employee is ${gender} his years of services is ${yearOfService} and he has done ${qualifications}
    So his salary is 7000`
}

else if(gender == 'f' && yearOfService >= 10 && qualifications == 'pg'){
    return `This employee is ${gender} her years of services is ${yearOfService} and she has done ${qualifications}
    So her salary is 12000`
}

else if(gender == 'f' && yearOfService >= 10 && qualifications == 'g'){
    return `This employee is ${gender} her years of services is ${yearOfService} and she has done ${qualifications}
    So her salary is 9000`
}
else if(gender == 'f' && yearOfService < 10 && qualifications == 'pg'){
    return `This employee is ${gender} her years of services is ${yearOfService} and she has done ${qualifications}
    So her salary is 10000`
}
else if(gender == 'f' && yearOfService < 10 && qualifications == 'g'){
    return `This employee is ${gender} her years of services is ${yearOfService} and she has done ${qualifications}
    So her salary is 6000`
}
else{
    return `something went wrong.`
}

}

function dataList ({gender, yearOfService, qualifications}){

    if(gender == 'm'){
        if( yearOfService >= 10 && qualifications == 'pg'){
            return `This employee is ${gender} his years of services is ${yearOfService} and he has done ${qualifications}
            So his salary is 15000`
        }
        
        else if( yearOfService >= 10 && qualifications == 'g'){
            return `This employee is ${gender} his years of services is ${yearOfService} and he has done ${qualifications}
            So his salary is 10000`
        }
        else if( yearOfService < 10 && qualifications == 'pg'){
            return `This employee is ${gender} his years of services is ${yearOfService} and he has done ${qualifications}
            So his salary is 10000`
        }
        else if( yearOfService < 10 && qualifications == 'g'){
            return `This employee is ${gender} his years of services is ${yearOfService} and he has done ${qualifications}
            So his salary is 7000`
        } else {
            return ` something went wrong with male data`
        }
    
    } else if(gender == 'f'){
         if( yearOfService >= 10 && qualifications == 'pg'){
            return `This employee is ${gender} her years of services is ${yearOfService} and she has done ${qualifications}
            So her salary is 12000`
        }
        
        else if( yearOfService >= 10 && qualifications == 'g'){
            return `This employee is ${gender} her years of services is ${yearOfService} and she has done ${qualifications}
            So her salary is 9000`
        }
        else if( yearOfService < 10 && qualifications == 'pg'){
            return `This employee is ${gender} her years of services is ${yearOfService} and she has done ${qualifications}
            So her salary is 10000`
        }
        else if( yearOfService < 10 && qualifications == 'g'){
            return `This employee is ${gender} her years of services is ${yearOfService} and she has done ${qualifications}
            So her salary is 6000`
        } else {
            return ` something went wrong with female data`
        }
    }else{
        return `something went wrong`
    }  
    }
console.log(dataList ({gender:gen, yearOfService:yearOfSvc, qualifications:qlfCTion}))   


//  Q. if length of three sides  of a triangle are input through the
//   keyboard, write a program to find  the area of the triangle.
//  console.log(`Q.=>  three sides  of a triangle`)
//  both are different
//  1.
//    var side1 = 5; 
//    var side2 = 6; 
//    var side3 = 7; 
//    var s = (side1 + side2 + side3)/2;
//    var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
//    console.log(area);
//  2.
//  function areaOfTriangle(side1, side2, side3){
//     const s = (Number(side1) + Number(side2) + Number(side3))/2;
//    console.log(s)
//     console.log("Math.sqrt-->", Math.sqrt(s).toFixed(2))
//     const area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)).toFixed(2));
//     console.log(area)
//     } 
//     let a =  5//prompt(`Enter first side` );
//     let b =  6//prompt(`Enter second side` );
//     let c =  7//prompt(`Enter third side` );
//     console.log(areaOfTriangle(a, b, c))
//  complete......./

//  Q. if a five-digit number in input through the keyboard, write a
//  program to calculate the sum of its digits.
//      console.log(`Q.==>  Enter five digits ------->>`)
//      function sumOfDigits (d1, d2,  d3,  d4,  d5){
//      const addItion = Number(d1) +  Number(d2) + Number(d3) + Number(d4)+ Number(d5);
//      console.log(addItion)
         
//      }
//         var d1 = prompt(`Enter your first digit`);
//         var d2 = prompt(`Enter your second digit`);
//         var d3 = prompt(`Enter your third digit`);
//         var d4 = prompt(`Enter your forth digit`);
//         var d5 = prompt(`Enter your fifth digit`);
//         console.log( sumOfDigits(d1, d2,  d3,  d4,  d5))
//      complete........./

// Q.if a five-digit number is input through the keyboard,
    //program to reverse the number.
//     let numbers = prompt(`Enter any no. (five-digit)`);

//     function reverseNo (numbers){
//   if (Number.isInteger(numbers)){
//     return `We got the reverse ${numbers}`;
//   }
//   else
//   {
//     return `rty again, take any integers `;
//   }
//     } 
// console.log(reverseNo (numbers))

// // Q. write a program to receive cartesian co-ordinates (x,y) of a point and convert them
// //     into polar co-ordinates (r,Φ).
// // Hint : r = sqrt (x^2 + y^2) and Φ = tan -1 (y / x)
// // console.log(`Q. =>   polar co-ordinates--->`)
// // function polarCoOrdinates (x, y){

//     // let coOrdinates = (x, y);
// //     console.log("Math.sqrt(x^2 + y^2)", Math.sqrt(Math.pow(x,2 + y,2).toFixed(2)))
// //     let r = Math.sqrt(Math.pow(x,2 + y,2));
// //     // return r ;
// //     // console.log("math divided", (y/x).toFixed(2))
// //     console.log( "Math.atan(y / x)", ( Math.atan(y / x).toFixed(2)))
// //     let Φ =( Math.atan(y / x).toFixed(2))
// //     // let polarCoORdnt = (r, Φ);
// //     console.log(`we got the  polar co-ordinates ${(r.toFixed(2))},${(Φ.toFixed(2))} `)
// // }
// // var x = 3;
// // var y = 2;
// // console.log(polarCoOrdinates (x, y))
// // complete ....../




// console.log(`Q. ==> latitude and longitude in degree---`)
//  // write a program to receive value  of latitude(l1, l2) and longitude (G1, G2),
//  // in degree , of two place on the earth and output the distance (D) b/t them in nautical miles .
//  // the formula for distance  in nautical miles is :
//  // D =3963 cos^-1/acos (sin L1 Sin L2 + cos l1 cos l2 * cos (G2 - G1))   

//   function findDegree ({L1, L2 ,G1, G2}){
//     let l1sinValue = (Math.sin(L1* Math.PI / 180) ) 
//         // return l1sinValue;

//     let l2sinValue = ( Math.sin(L2* Math.PI / 180))  
//         // return l2sinValue;

//     let l1cosValue = (Math.cos (L1* Math.PI/180))    
//        //   return l1cosValue ;

//     let l2cosValue = (Math.cos (L2* Math.PI/180)) 
//         // return l2cosValue ;

//         // let subGg = (g2 - g1 );   
//        // // return subGg ; 

//     let cosG2G1 = (Math.cos(g2-g1))
//         // return cosG2G1;
    
//        let  D =3963*(Math.acos ( l1sinValue* l2sinValue + l1cosValue *l2cosValue * cosG2G1 ))
//        return  `The distance between two place on the earth ${(D.toFixed(2))}` ;
//     }
//  let l1 = 625 ;//prompt("enter value of L1 ");
//  let l2 = 673 ;//prompt("enter value of L2 ");
//  let g1 = 63 ;//prompt("enter value of G1 ");
//  let g2 = 82 ;//prompt("enter value of G2 ");
//  console.log(findDegree ({L1:l1, L2:l2 ,G1:g2, G2:g2}))
// //  complete........../



// //Q.Wind chill factor is the felt air temperature on exposed skin due to
// //wind. The wind chill temperature is always lower than the air
// //temperature, and is calculated as per the following formula
// // **wef = 35.74 + 0,6215t + ( 0.4275t - 35.75) \* v^0.16**
// //_where t is the temperature and v is the wind velocity.
// // Write a program to receive values of t and v and calculate wind chill factor(wef). _
// //  wcf = 35.74 + 0.6215t + (0.4275t - 35.75 ) * v^0.16
//  console.log(`Q.Wind chill factor is the felt  air  temperature on exposed skin  due to wind. `)
//  let  temperature = 100;
//  let velocity =30;
//  function tempOrAir ( {temperature, velocity}){

//     const wcf =  35.74 + 0.6215*temperature + (0.4275*temperature - 35.75 ) * Math.pow(velocity ,-16)
//     // return (wcf.toFixed(2));
//     return `Receive value of ${temperature} and ${velocity} and calculate wind chill factor (wcf) ${(wcf.toFixed(2))} `
   
//     }
//  console.log( tempOrAir ({ temperature:temperature, velocity:velocity}))

//  // Q.  Any integer is input through the keyboard. Write a program to find
// //out whether it is an odd number or even number.
//  console.log(`==> odd number or even number`)
//  function evenOrOdd (evenOdd){
//  if ( evenOdd % 2==0)
//  {
//     return `we receive even number ${evenOdd}`
//  }
//  else if(evenOdd % 2==1){
//     return `we got number odd ${evenOdd}`
//  }
// }
// let evenOdd = prompt(`enter any integer`)
// console.log(evenOrOdd (evenOdd))

// Q. If the ages of Ram, Shyam and Ajay are input through the keyboard,
// write a program to determine the youngest of the three.
console.log(`Ram, Shyam and Ajay, determine the youngest of the three`)

function youngest ({name1, name2, name3}){
    if (name1 > name2 || name2 > name3 && name1 > name3 ){
        return `He is youngest of the three`
    }
}
var n1 = Ram ;
var n2 = Shyam ;
var n3 = Ajay ;
console.log(youngest ({name1:n1, name2:n2, name3:n3}))

console.log(`Find ZODIAC  select date and month `)
//Q.  Find ZODIAC  select date and month...... 
const month = prompt("Enter month from 1 to 12");
const date = prompt("Enter date from 1 to 31 ");

function findZodiac ({m, d}){
    if (m <= 12 && d <= 31 && m > 0 && d > 0){
   if ((m==12 && d>=22) || (m == 1 && d <= 19)){
    console.log("Your ZODIAC is CAPRICORN");
   }
   else if ((m ==1 && d >= 20) || (m == 2 && d <= 17)){
    console.log("Your ZODIAC is AQUARIUS");
   }
   else if ((m ==2 && d >= 18) || (m == 3 && d <= 19)){
    console.log("Your ZODIAC is PISCES");
   }
   else if ((m ==3 && d >= 20) || (m == 4 && d <= 19)){
    console.log("Your ZODIAC is ARIES");
   }
   else if ((m ==4 && d >= 20) || (m == 5 && d <= 20)){
    console.log("Your ZODIAC is TAURUS");
   }
   else if ((m ==5 && d >= 21) || (m == 6 && d <= 20)){
    console.log("Your ZODIAC is GEMINI");
   }
   else if ((m ==6 && d >= 21) || (m == 7 && d <= 22)){
    console.log("Your ZODIAC is CANCER");
   }
   else if ((m ==7 && d >= 23) || (m == 8 && d <= 22)){
    console.log("Your ZODIAC is LEO");
   }
   else if ((m ==8 && d >= 23) || (m == 9 && d <= 22)){
    console.log("Your ZODIAC is VIRGO");
   }
   else if ((m ==9 && d >= 23) || (m == 10 && d <= 22)){
    console.log("Your ZODIAC is LIBRA");
   }
   else if ((m ==10 && d >= 23) || (m == 11 && d <= 21)){
    console.log("Your ZODIAC is SCORPIO");
   }
   else if ((m ==11 && d >= 22) || (m == 12 && d <= 21)){
    console.log("Your ZODIAC is AQUARIUS");
   }
   else {
    console.log(
      "Please check your Date of birth and enter correct month and date"
    );
  }
    }
    else {
        console.log("Please enter a proper date or month");
      }
}
findZodiac ({m:month, d:date})