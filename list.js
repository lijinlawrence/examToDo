// todo

function regi(){
    window.location="./signup.html"
}

function logi(){
   window.location="./login.html"
}

function loginpage(){
    window.location="./signup.html"
}


//  signup.html


function register() {
    uname= document.getElementById('uname').value
    acno= document.getElementById('acno').value
    pswd=document.getElementById('pswd').value
    
    let account = {
        uname,
        acno,
        pswd
    }
  if(account.uname==""||account.acno==""||account.pswd ==""){
    alert("Please enter all the details")
  }else{
    if(acno in localStorage){
        alert("User already Registerd")
    }else{
   
  // Storing in local storage
    localStorage.setItem(acno, JSON.stringify(account));
    alert("Registered succesfully")
    // redirect to login page
    window.location="./login.html"}
}}


// login

function login(){
  acno=acno.value;
  pswd= pswd.value;
  console.log(acno,pswd);
 
  if(acno in localStorage){
    let  accountDetails = JSON.parse(localStorage.getItem(acno))
    if(pswd==accountDetails.pswd){
      alert("Login Successfully")
      window.location="./todo.html"
    }else{
      alert("Incorrect password")
    }
  }else{
    alert("Invalid Account Number")
  }

}


// todo list

function addTask() {
    var input = document.querySelector("input");
    var taskListContainer = document.getElementById("taskListContainer");
 
    if (input.value.trim() !== "") {
        var taskItem = document.createElement("li");
        taskItem.innerHTML = `
            ${input.value}
            <button class="edit" onclick="edit(event)">Edit</button>
            <button class="delete" onclick="delet(event)">Delete</button>
        `;
 
        taskListContainer.appendChild(taskItem);
        input.value = "";
    }
 }
 
 function delet(event) {
    event.target.parentNode.remove();
 }
 
 function edit(event) {
    var currentTask = event.target.parentNode.firstChild.textContent;
    var newTask = prompt("Edit task:", currentTask);
 
    if (newTask !== null) {
        event.target.parentNode.firstChild.textContent = newTask;
    }
 }