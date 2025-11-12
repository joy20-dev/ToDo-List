const cards = document.querySelectorAll(".card");
const lists =document.querySelectorAll(".list");

const addTask = document.getElementById("add-btn")
const taskStr = document.getElementById("taskStr")
const forms = document.getElementById("formid")
let i =1;



for(const card of cards){
    card.addEventListener("dragstart",dragStart)
    card.addEventListener("dragend",dragEnd)


}

for(const list of lists){
    list.addEventListener("dragleave",dragLeave)
    list.addEventListener("dragover",dragOver)
    list.addEventListener("dragenter",dragEnter)
    list.addEventListener("drop",dragDrop)
}

function dragStart(e){



    //this will store the data of the html element, need it when we drop it in different list
    e.dataTransfer.setData("text/plain",this.id);

}

function dragEnd(){
    console.log("drag ended")
}

function dragOver(e){
    e.preventDefault()
}

function dragEnter(e){
    e.target.classList.add("over")
}

function dragLeave(e){
    e.target.classList.remove("over")
}

function dragDrop(e){
    const data = e.dataTransfer.getData("text/plain");
    const card = document.getElementById(data);
    const divCard = this.querySelector("div")
    console.log(card)

    divCard.appendChild(card);
    this.classList.remove("over");
}




forms.addEventListener("submit",appendToDo)



function appendToDo(event){
    event.preventDefault();

    const taskAdded = taskStr.value.trim();
    if(taskAdded ==="") return;


    const para = document.createElement("p");
    para.textContent= taskAdded ;
    para.classList.add("card")
    para.setAttribute("draggable","true")
    para.id ="added"+ i;

    para.addEventListener("dragstart",dragStart)
    para.addEventListener("dragend",dragEnd)
    const todo = document.querySelector(".list.todo >div")
    todo.appendChild(para);
    taskStr.value ="";
    todo.scrollTop = todo.scrollHeight;
    i +=1;

    

}