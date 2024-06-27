
// Q.1
function canVote(a) {
    if (a >= 18) {
        alert("You are eligible.");
        console.log("You can cast the vote.")
        return true;
    } else {
        alert("You are not eligible.");
        console.log("You cannot cast the vote.")
        return false;
    }
}

function btn(){
    let vote = document.getElementById("age").value; canVote(vote)
}


// Q.2

function maxOfTwo(a,b){
    if (a>b) {
        alert("Max value is: " + a)
        console.log("Max value is: "  +a)
        return a;
    } else if (b > a) {
        alert("Max value is: " + b)
        console.log("Max value is: " +b  )
        return b;
    } else {
        alert("Both are equal")
            return a;
    }
}


function findMax() {
    maxOfTwo(
       document.getElementById('num1').value,
       document.getElementById('num2').value
    );
}

// Q.3

function isEvenOrOdd(number) {
    if (isNaN(number)) {
        console.log("That's not a valid number!")
        return `${number}+ "is not a number.Please enter a number. `; 
    } else if (number % 2 == 0) {
        return `${number} is even.`;
    } else {
        return `${number} is odd.`;
    }
}


function checkNumber() {
    const form = document.getElementById("numberForm");
    const selectedNumber = form.elements["number"].value;
    const num = parseInt(selectedNumber, 10);
    const result = isEvenOrOdd(num);
    alert(result);
    document.getElementById("result").textContent = result;
    console.log(num);
}



// Q.4

function getGrade() {
    let score = document.getElementById('score').value;
    if (score ==="") {
        score = prompt("Please enter your score (0-100): ");
        document.getElementById('score').value = score;
    }
    score = parseInt(score);
    let grade = '';

    if (score >= 90 && score <= 100) {
        grade = 'A';
    } else if (score >= 80 && score <= 89) {
        grade = 'B';
    } else if (score >= 70 && score <= 79) {
        grade = 'C';
    } else if (score >= 60 && score <= 69) {
        grade = 'D';
    } else if (score >= 0 && score <= 59) {
        grade = 'F';
    } else {
        grade = 'Invalid score';
    }


    console.log("Score: " + score, "Grade: "+ grade);
    alert("Your grade is: " + grade);
    document.querySelector('h3').innerHTML = `Your grade is: `+ grade;

}

// Q.5
  
function greet(){
    let you = document.getElementById('name').value;
    alert(you +"You are the best");
    console.log(you +"You are the best");
    document.querySelector("h2").innerHTML = "Be grateful" + you;
}

// Q.6

function square(){
    let num = document.getElementById('sq').value;
    alert(num*num);
    console.log(num*num);
    document.getElementById('result').innerText = num*num;
}


// Q.7

function celsiusToFahrenheit(){
    let celsius = document.getElementById('cel').value
    if (!celsius) {
        celsius = prompt("Please enter a temperature:");
    }
    if (celsius) {
        let fahrenheit = (celsius * 9/5) + 32;
        alert("Fahrenheit Temperature is: "+ fahrenheit);
        console.log("Fahrenheit Temperature is: "+ fahrenheit);
        document.querySelector('h4').innerText = "Fahrenheit Temperature is: "+ fahrenheit;
    }
}

// Q.8
function isPositive() {
    let num = prompt("Please enter a number:");
    num = Number(num); 
    if (num > 0) {
        alert("Positive");
        console.log("Positive");
    } else if (num < 0) {
        alert("Negative");
        console.log("Negative");
    } else {
        alert("Zero");
        console.log("Zero");
    }
}
document.getElementById('checkNumber').addEventListener('click', isPositive);

// function isPositive(){
//     let num = document.querySelector('button').value;
//     if (num > 0) {
//         alert("Positive");
//         console.log("Positive");
//     } else if (num < 0) {
//         alert("Negative");
//         console.log("Negative");
//     } else {
//         alert("Zero");
//         console.log("Zero");
//     }
// }
// document.querySelector('button').addEventListener('click', isPositive);


    // const number = parseInt(prompt("Enter a number"))
    // const condition = number <= 0
    // console.log( condition)

    // const number = parseInt(prompt("Enter a number"))
    // const condition = number => 0
    // console.log( condition)

// Q-9 copypasted 

const patientData = {
    id: 12345,
    name: "John Doe",
    age: 45,
    gender: "Male",
    contact: {
        phone: "+92-300-1234567",
        email: "johndoe@example.com"
    },
    address: {
        street: "123 Main St",
        city: "Lahore",
        state: "Punjab",
        zip: "54000"
    },
    medicalHistory: [
        {
            condition: "Hypertension",
            diagnosed: "2015-06-20",
            treatment: "Medication"
        },
        {
            condition: "Diabetes",
            diagnosed: "2018-09-15",
            treatment: "Diet and Medication"
        }
    ],
    currentMedications: [
        "Metformin",
        "Lisinopril"
    ],
    allergies: [
        "Penicillin"
    ],
    emergencyContact: {
        name: "Jane Doe",
        relationship: "Wife",
        phone: "+92-300-7654321"
    }
};

console.log(patientData);
console.log(patientData.name); // Output: John Doe
console.log(patientData.medicalHistory[0].condition); // Output: Hypertension
console.log(patientData.emergencyContact.phone); // Output: +92-300-7654321


// Q.10

let student = {
    name: "Saba",
    age: 24,
    grade: "A",
    education: "MSc Applied Psychology",
    course: "Web Development",
    topics: ["HTML", "CSS", "JAVASCRIPT", "NEXT.JS"],
    isEnrolled: true,
    displayInfo: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
        console.log(`Subjects: ${this.topics.join(", ")}`);
        console.log(`Enrolled: ${this.isEnrolled ? "Yes" : "No"}`);
    }
};
student.displayInfo();


