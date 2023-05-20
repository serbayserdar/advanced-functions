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
      for(let i = 0; i<this.students.length; i++){
          console.log(`Student ${i+1} name`, this.students[i].name); 
          console.log(`Student ${i+1} attendance`,this.students[i].attendance);
          console.log(`Student ${i+1} performance`,this.students[i].performance);
          console.log(`Student ${i+1} gender`,this.students[i].gender);
          console.log(`Student ${i+1} age`,this.students[i].age);
      }
  },
  // getTopAttenders
  // INPUT -> students array
  // OUTPUT -> return a new array of students with attendance >= 0.7
  getTopAttenders: function(){
      const topAttenders = [];

      for(let i=0; i<this.students.length; i++){
          if(this.students[i].attendance >= 0.7){
              topAttenders.push(this.students[i]);
          }
      }

      return topAttenders;
  },

  getTopPerformers: function(threshold = 0.8){
      const topPerformers = []

      for(let i = 0; i<this.students.length; i++){
          if(this.students[i].performance >= threshold){
              topPerformers.push(this.students[i]);
          }
      }

      return topPerformers;
  },

  addStudent: function(name, performance, studentAttendance, gender, age){
      const newStudent = {
        name: name,
        performance: performance,
        attendance: studentAttendance,
        gender: gender,
        age: age
      }

      this.students.push(newStudent);

      return newStudent;
  },


  removeStudent: function(index){
    this.students.splice(index, 1);
  },

  getAveragePerformance: function(){
    let sum = 0;
    for(let i = 0; i < this.students.length; i++){
      // sum = sum + this.students[i].performance;
      sum += this.students[i].performance;
    }

    let average = sum/this.students.length;

    return average;
  },

  groupingStudents: function(){
    for(let i = 0; i < this.students.length; i+=2){
      const newGroup = this.students.slice(i, i+2);
      console.log(newGroup);
    }
  }
}
  

  // const studentsWithTopPerformcaces = classroom.getTopPerformers(0.6);
  // console.log(studentsWithTopPerformcaces);


// classroom.addStudent("Allan", 0.6, 0.7, "M", 28);


// classroom.removeStudent(4);


  console.log(classroom.students);


  // console.log("Average performance", classroom.getAveragePerformance())


  classroom.groupingStudents();