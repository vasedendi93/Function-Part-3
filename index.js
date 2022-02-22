console.log("Connected");

// # Homework exercise 1

// - Write a javascript function that will accept four paremetars: name, food, drink and callback.
// - Invoking the callback parametar in this parent function, should print in console the person's favoutite food,drink and name.

// Example Output: "${name} favourite food is ${food}, favourite drink is ${drink}";

// BONUS: Get the values from HTML and Print in HTML 



let nameInput = document.getElementById("nameInput");
let foodInput = document.getElementById("foodInput");
let drinkInput = document.getElementById("drinkInput");
let myButton = document.getElementById("myBtn");
let result=document.getElementById("resultDiv");


let personInfo = (name,food,drink,callbackFunction,elementToPrint) => {

    return callbackFunction(name,food,drink,elementToPrint);
};


let printResultate = (nameInput,foodInput,drinkInput,element) => {
    element.innerHTML = ""
    element.innerHTML += `
          <ul>
          <li> Name is : ${nameInput.value}</li>
          </br>
          <li> Favorite food is : ${foodInput.value}</li>
          </br>
          <li> Favorite drink is : ${drinkInput.value}</li>

          </ul>

    `;
}

myButton.addEventListener("click",function(){
    personInfo(nameInput,foodInput,drinkInput,printResultate,result);
});


// # Homework exercise 2

// - Write a javascript function that will accept two parametars, person and callback .
// - Person should be object that contains the following properties: name, lastName, age, gender, hobbies.
// - Invoking the callback parametar in this parent function, should print the person in HTML.

// BONUS: Get the values from HTML.



let personInputInfo = document.getElementById("pername");




 let personObject ={
    name:"Vase",
    lastName:"Petrusevski",
    age: 19,
    gender:"Male",
    hobbies:"Gym,Programming,Motorcycle Driving."
};

let personInfoEx2 = (person,callback) => {
     
    return callback(person,);


}

let printPersonInfo = (element) => {
    
   element.innerHTML += `
         <h3> ${personObject.name} </h3>
         <h3> ${personObject.lastName} </h3>
         <h3> ${personObject.age}</h3>
         <h3> ${personObject.gender} </h3>
         <h3> ${personObject.hobbies} </h3>
   `

}


personInfoEx2(personInputInfo,printPersonInfo);

// # Homework exercise 3

// - Write a function that will accept one paremetar array of 10 grades.
// - The function should return new Promise();
// - If the avarage of the grades is below 3 we should reject with the following message: "Student did not pass"
// - If the avarage is above or equal to 3 we should resolve with the following messsage: "Student pass"
// - Call the function with the coresponding argument and print in console ;).

// BONUS: Print in html


let gradeInput = document.getElementById("gradeInput");
let gradeButton = document.getElementById("gradeButton");
let resultGrade = document.getElementById("resultGrade");

let arrayOfGrades = (arrayGrades) => {
     arrayGrades = [];

     return new Promise((resolve,reject) => {
        if (gradeInput.value > 3){
            resolve("Student pass");
        }else{
            reject("Student did not pass");
        };
      });
      
}

let printGrade = (element) => {
    element.innerHTML = "";
if(gradeInput.value > 3){
    element.innerHTML += ` 
    <p> Student pass <p>
 `
}else{
    element.innerHTML += `
    <p> Student did not pass </p>
    `
}
   
   
}

gradeButton.addEventListener("click",function(){

    arrayOfGrades(gradeInput.value);
    printGrade(resultGrade);
});


// # Homework exercise 4

// - Create a function that will make api call to this url: https://swapi.dev/api/films
//   (The api will return the informations about all Star Wars Movies)
// - After receiving the response, print in HTML: the movie title, director, producer and release date;
// - Use async/await syntax .

let resultApi = document.getElementById("resultSwapiApi");

async function swapiApi() {
  let response = await fetch("https://swapi.dev/api/films");
  let data = await response.json();
  console.log(data);
  printSwapiApi(data,resultApi);
};

swapiApi();


let printSwapiApi = (data,element) => { 
   for(let i = 0 ; i<data.results.length;i++){
       element.innerHTML += `
       
           <br/>  The title is: ${data.results[i].title} ,

           
         The direrctor is: ${data.results[i].director} 
         <hr/>

         The producer is : ${data.results[i].producer}
         <hr/>

         The rerlease data is : ${data.results[i].release_date}
         <hr/>
       `
   }


}
