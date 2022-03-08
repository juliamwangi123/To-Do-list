let form = document.querySelector('#form');
let newActivity = [];
let x= 0;
let num=1;

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    addActivity();
    displayActivity();
    num++
    form.reset()
});
let addActivity = function(){
    let formData = new FormData(event.target);
    let activity = formData.get("activity");
    newActivity[x] = activity;
    x++; // this adds an item to the array
    localStorage.setItem("todo", JSON.stringify(newActivity)); // stores the array to local storage

}
//display activity

let displayActivity= function(){
    for(items of newActivity){
    }
    let showItem = document.getElementById("show");
    showItem .innerHTML +=`${num}.${items} </br>`;
}