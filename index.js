const inputBox =document.getElementById('input-box')
const listContainer =document.getElementById('list-container')
const greeting =document.getElementById('greeting')

function addTask(){
    if(inputBox.value===""){
        alert("You have to add something in taskbox after that you can add task")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span)
    }
    inputBox.value=''
    saveData();
}

listContainer.addEventListener("click",function (e) {
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();;
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem('data')
}
showTask();

function welcome(){
var currentTime = new Date();
var currentOffset = currentTime.getTimezoneOffset();
var ISTOffset = 330;
var ISTTime = new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000);
var hour = ISTTime.getHours()
if (hour < 12) {
    greeting.innerHTML = "Hi There ! Good Morning 🌄"
  } else if (hour < 18) {
    greeting.innerHTML = "Hi There ! Good Afternoon 🕑"
  } else {
    greeting.innerHTML = "Hi There ! Good Evening 🌃"
  }

}
window.onload(welcome())