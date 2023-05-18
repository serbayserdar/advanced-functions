const classroom = {
    name: "Web Development",
    id: 0,
    students: [
      {
        name: "Sally",
        attendance: 0.8,
        performance: 0.88,
        gender: "F",
        age: 25
      },
      {
        name: "Kate",
        attendance: 0.7,
        performance: 0.95,
        gender: "F",
        age: 26
      },
      {
        name: "Ben",
        attendance: 0.99,
        performance: 0.48,
        gender: "M",
        age: 30
      },
      {
        name: "Mariah",
        attendance: 1,
        performance: 0.98,
        gender: "F",
        age: 21
      },
      {
        name: "Mike",
        attendance: 0.43,
        performance: 0.76,
        gender: "M",
        age: 24
      },
      {
        name: "Brandon",
        attendance: 0.92,
        performance: 0.33,
        gender: "M",
        age: 29
      },
      {
        name: "Violet",
        attendance: 0.36,
        performance: 0.71,
        gender: "F",
        age: 27
      },
      {
        name: "Ali",
        attendance: 0.68,
        performance: 0.69,
        gender: "M",
        age: 26
      },
      {
        name: "Sarah",
        attendance: 0.85,
        performance: 0.7,
        gender: "F",
        age: 30
      },
      {
        name: "Zack",
        attendance: 0.75,
        performance: 0.85,
        gender: "M",
        age: 24
      }
    ],
    displayStudents: function(){
        for(let i = 0; i < this.students.length; i++){
           console.log(`Student ${i+1} name`,this.students[i].name);
           console.log(`Student ${i+1} attendence`,this.students[i].attendance);
           console.log(`Student ${i+1} performance`,this.students[i].performance);
           console.log(`Student ${i+1} gender`,this.students[i].gender);
           console.log(`Student ${i+1} age`,this.students[i].age);
        }
    },
    getTopPerformers: function(){
        const topAttanders = [];
        for(let i = 0; i < this.students.length; i++){
            if(this.students[i].attendance >= 0.7){
                topAttanders.push(this.students[i]);
            }
        }
        return topAttanders;
    }
}

// classroom.displayStudenys();


const studentsWithTopAttendace = classroom.getTopPerformers();
console.log(studentsWithTopAttendace);


console.log(classroom.students);