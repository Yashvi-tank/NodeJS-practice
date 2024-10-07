console.log("test from Node")
const courses = []
courses.push("Math", "Physics", "Chemistry")
console.log(courses)

const student = {
    name: "Marie",
    age: 20,
    courses: courses
}
console.log(student)

student.age = 21
student.grade = 'A'
console.log(student)


const foundcourse = courses.indexOf("Physics")
console.log(foundcourse)

const slicecourse = courses.slice(0,2);

console.log(slicecourse)