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

const name = prompt(`Enter your name`);
const maths = prompt(`Enter your math marks`);
const chem = prompt(`Enter your chemistry marks`);
const phys = prompt(`Enter your physics marks `);
const eng = prompt(`Enter your english marks`);
const env = prompt(`Enter your environment marks`);

function studentReportCard ({ yourName, mathMarks, chemistryMarks, physicsMarks, englishMarks, environmentMarks} ) {

console.log(yourName, mathMarks, chemistryMarks, physicsMarks, englishMarks, environmentMarks)

}

const obtainedMarks =( maths + chem + phys + eng + env)
const totalMarks = (500)
const average = (obtainedMarks/totalMarks)*100



studentReportCard ({yourName:name, mathMarks:maths , chemistryMarks:chem , physicsMarks:phys , englishMarks:eng , environmentMarks:env } ) ;

