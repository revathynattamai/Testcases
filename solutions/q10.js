//Q10. Write a program which accept average marks of the student achieved in exams and convert them into grade
// and display ratings of each student, grades and ratings can be calculated asper the following table:
/*
Range   	     Grade	Rating
>=0 and <= 60	  F	    Poor
>=61 and <= 70	D	    Fair
>=71 and <= 80	C	    Average
>=81 and <= 90	B	    Good
>=91 and <=100	A	    Excellent
*/

const studentDetails = [
  { name: 'David', marks: 80 },
  { name: 'Vinoth', marks: 77 },
  { name: 'Divya', marks: 88 },
  { name: 'Ishitha', marks: 95 },
  { name: 'Thomas', marks: 68 }
];

let studentsGradeRatingArr = [];

//Write your code here
//


  for (let i = 0; i < studentDetails.length; i++) {
    let a = studentDetails[i].marks;
    const newobj = {};
    newobj.name = studentDetails[i].name;
    if (a >= 61 && a <= 70) {
      newobj.grade = "D";
      newobj.rating = "Fair";
    }

    else if (a >= 71 && a <= 80) {
      newobj.grade = "C";
      newobj.rating = "Average";
    }

    else if (a >= 81 && a <= 90) {
      newobj.grade = "B";
      newobj.rating = "Good";
    }

    else {
      newobj.grade = "A";
      newobj.rating = "Excellent";
    }
    studentsGradeRatingArr.push(newobj);
  }

module.exports = studentsGradeRatingArr;
