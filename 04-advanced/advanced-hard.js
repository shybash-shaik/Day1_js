

function getHighAchievers(students,passingScore){
    let filtered=students.filter(student=>student.score>passingScore);
    let getHighAchieversStudents=filtered.map(student=>student.name.toUpperCase());
    return getHighAchieversStudents;
}

const students=[
    {id:1,name:"shybash",score:85},
    {id:2,name:"abbas",score:45},
    {id:3,name:"usman",score:89},
    {id:4,name:"sivaram",score:98},
    {id:5,name:"karthik",score:78}
];

console.log(getHighAchievers(students,80));