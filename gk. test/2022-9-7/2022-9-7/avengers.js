console.log(`----------------------2022-09-07--------------------------->>`)


// 3. average in five subjects 
console.log(`-------- 3. average marks in five subjects------>>`)

const math = prompt(`Enter your math marks`);
const chemistry = prompt(`Enter your chemistry marks`);
const physics = prompt(`Enter your physics marks `);
const english = prompt(`Enter your english marks`);
const environment = prompt(`Enter your environment marks`);

function studentReportCard ({ mathMarks, chemistryMarks, physicsMarks, englishMarks, environmentMarks} ) {

console.log(mathMarks, chemistryMarks, physicsMarks, englishMarks, environmentMarks)

const obtainedMarks = ( Number(math) + Number(chemistry) + Number(physics) + Number(english) + Number(environment));
const totalMarks = (500);
const average = (obtainedMarks/5);

console.log(`average marks ${average} in all subjects`)
}


studentReportCard ({ mathMarks:math , chemistryMarks:chemistry , physicsMarks:physics , englishMarks:english , environmentMarks:environment } ) ;




console.log(`-------- 4. average marks in five subjects ------>>`)

var name = prompt(`Enter your name`);
var maths = prompt(`Enter your lucky no.`);
var chem = prompt(`Enter your choice of no.`);
var phys = prompt(`Enter your wishes day  `);
var eng = prompt(`Enter your lucky day in no.`);
var env = prompt(`Enter your favorite no.`);
var name = prompt(`Enter your name in no.`);
var maths = prompt(`Enter your lucky name in no.`);
var chem = prompt(`Enter your choose favorite game name in  no.`);
var phys = prompt(`Enter your friend wishes day in no.`);
var eng = prompt(`Enter your favorite song name in no.`);
var env = prompt(`Enter your favorite cartoon name in no.`);


function studentReportCard ({ yourName, mathMarks, chemistryMarks, physicsMarks, englishMarks, environmentMarks } ) {

console.log(yourName, mathMarks, chemistryMarks, physicsMarks, englishMarks, environmentMarks)

}

const obtainedMarks =( maths + chem + phys + eng + env)
const totalMarks = (500)
const average = (obtainedMarks/totalMarks)*100



studentReportCard ({yourName:name, mathMarks:maths , chemistryMarks:chem , physicsMarks:phys , englishMarks:eng , environmentMarks:env } ) ;

