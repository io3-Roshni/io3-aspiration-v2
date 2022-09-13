console.log(`----------------------2022-09-07--------------------------->>`)

console.log(`---------1. name && hobbies------>>`)

function nameAndHobbies(name, hobbies){
// let nameAnd = name;
// let hobbiesList = traveling;

console.log(`I'm ${name} and I have a lot of hobbies, one of them is ${hobbies}`)
}
nameAndHobbies("Roshani", "traveling")


console.log(`-------- 2. enter avengers name ------>>`)
const aveName = prompt(`Enter your avengers name`);

function  avengersName ({anonymous}){ 
    console.log(anonymous)

    console.log(`my favorite avengers is ${anonymous}. i am fan of him`)
}
avengersName ({anonymous:aveName})


console.log(`-------- 3. average marks in five subjects------>>`)

const name = prompt(`Enter your name`);
const math = prompt(`Enter your math marks`);
const chemistry = prompt(`Enter your chemistry marks`);
const physics = prompt(`Enter your physics marks `);
const english = prompt(`Enter your english marks`);
const environment = prompt(`Enter your environment marks`);

function studentReportCard ({yourName, mathMarks, chemistryMarks, physicsMarks, englishMarks, environmentMarks} ) {

console.log(yourName, mathMarks, chemistryMarks, physicsMarks, englishMarks, environmentMarks)

const obtainedMarks = ( Number(math) + Number(chemistry) + Number(physics) + Number(english) + Number(environment));
const totalMarks = (500);
const average = (obtainedMarks/5);

console.log(`obtained marks ${obtainedMarks}`)
console.log(`average marks ${average} in all subjects`)

console.log(`My name is ${yourName} and my all subjects marks is out of total ${totalMarks}.  i show my every subjects marks is in math ${mathMarks}, in chemistry ${chemistryMarks}, in physics ${physicsMarks}, in english ${englishMarks}, in environment ${environmentMarks} `)
}


studentReportCard ({yourName:name, mathMarks:math , chemistryMarks:chemistry , physicsMarks:physics , englishMarks:english , environmentMarks:environment } ) ;




console.log(`-------- 4. average  in ten topics  ------>>`)

var pname = prompt(`1. Enter your name`);
var lucky = prompt(`2. Enter your lucky no.`);
var choice = prompt(`3. Enter your choice of no.`);
var wishes = prompt(`4. Enter your wishes day  `);
var luckyDay = prompt(`5. Enter your lucky day in no.`);
var favorite = prompt(`6. Enter your favorite no.`);
var game = prompt(`7. Enter your choose favorite game name in  no.`);
var friend = prompt(`8. Enter your friend wishes day in no.`);
var song = prompt(`9. Enter your favorite song name in no.`);
var cartoon = prompt(`10. Enter your favorite cartoon name in no.`);


function numberList ({ yourName, luckyNO, choiCeNO, wishesNO, luckyDayNO, favoriteNO, gameNO, friendNO, songNO, cartoonNO} ) {

console.log( yourName, luckyNO, choiCeNO, wishesNO, luckyDayNO, favoriteNO, gameNO, friendNO, songNO, cartoonNO)

const obtainedMarks =( yourName + Number(luckyNO) + Number(choiCeNO) + Number( wishesNO) + Number(luckyDayNO) + Number(favoriteNO) + Number(gameNO) + Number(friendNO) + Number(songNO) + Number(cartoonNO));
const totalMark = (700);
const average = (obtainedMarks/9);

console.log(`Wo.......W!!  that's great ${average}`)
}

numberList ({ yourName:pname  , luckyNO:lucky , choiceNO:choice , wishesNO:wishes , luckyDayNO:luckyDay , favoriteNO:favorite , gameNO:game , friendNO:friend , songNO:song , cartoonNO:cartoon } ) ;




console.log(`--------5. leapYear--------->>`)

let year = prompt("Enter your years")

function leapYear(year){


    if (year %  4 === 0){
        console.log(`${year} is a leapYear. `);
    }

    else {
        console.log(`${year} is  not a leapYear. `);
    }
}
leapYear(year)