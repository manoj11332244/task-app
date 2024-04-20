const btnele=document.querySelector(".btn")
const inputele=document.querySelector("#input-field")
const taskele=document.querySelector(".listitem")

btnele.addEventListener("click",()=>{
    if(inputele===""){
        alert("please add your task first.")
    }
    else{
       let listele=document.createElement("li")
       listele.textContent=inputele.value
       taskele.appendChild(listele)
       
       let spanele=document.createElement("span")
       spanele.textContent="\u00d7"
       listele.appendChild(spanele)
    }
    inputele.value=""
    savele()
})

taskele.addEventListener("click",(e)=>{
 if (e.target.tagName=="LI"){
    e.target.classList.toggle("checked")
    savele()
  }
  else if(e.target.tagName=="SPAN"){
    e.target.parentElement.remove()
    savele()
  }
})


function savele(){
    localStorage.setItem("task",taskele.innerHTML)
}

function getele(){
    taskele.innerHTML=localStorage.getItem("task")
}

getele()