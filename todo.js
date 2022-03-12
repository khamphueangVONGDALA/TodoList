

const addBtn = document.querySelector(".add-btn")
const dele =document.querySelector('.detail-remove .remove-btn')
const update =document.querySelector('.update-btn')
const search =document.querySelector(".search__btn")
const removeAll =document.querySelector(".bulk-remove-btn")

const nameTask =document.querySelector("#new-task") 
const des =document.querySelector("#description") 
const date =document.querySelector("#date") 
const prio =document.querySelector("#priority") 
const input_search = document.querySelector("#search-task")




var tasks=[];
addBtn.addEventListener('click',function(){
    if(!des.value &&  !nameTask.value){
        alert("vui long nhap ten")
        return false;
    }
    tasks.push({
        name:nameTask.value,
        description:des.value,
        date:date.value,
        priority:prio.value
    })
    render(tasks); 
    nameTask.value=""
    des.value=""
    date.value=""
})

update.addEventListener("click",function(id){
    const maUpdate = update.getAttribute("id") 
    tasks[maUpdate] = {
        name:nameTask.value,
        description:des.value,
        date:date.value,
        priority:prio.value
    }
    render(tasks); 
    update.style.display = "none";
    addBtn.style.display = "block";
    nameTask.value=""
    des.value=""
    date.value=""
    prio.value="low";
})   


search.addEventListener("click",function(){

   const search_result = tasks.filter((e)=>{     
        return e.name === input_search.value 
    })
    render(search_result)
   
})


function remove(id){
    tasks.splice(id,1);
    nameTask.value=""
    des.value=""
    date.value=""
    prio.value="low";
    input_search.value ='';
    update.style.display = "none";
    addBtn.style.display = "block";
    console.log();
    render(tasks);
}


function edit(id){

    update.style.display = "block";
    addBtn.style.display = "none";
    update.setAttribute("id",id)

    if(tasks.length >= 0){
        nameTask.value=tasks[id].name
        des.value=tasks[id].description
        date.value=tasks[id].date
        prio.value= tasks[id].priority
    }

}
function render(task=[]){

    const data = task.map((e,index)=>{
        return `<div id="show-List-todo">
        <div class="show-recent-todo">
            <input type="checkbox" id="${index}">
            <label>${e.name}</label><br>
        </div>
        <div class="detail-remove">
            <button class="detail-btn" onclick="edit(${index});">Detail</button>
            <button class="remove-btn" onclick="remove(${index});">Remove</button>
        </div>
    </div>`
    })
    const showResult = document.querySelector(".content-show")
    showResult.innerHTML = data.join("")
    
}    
const check =document.querySelector('input[id="check"]')
removeAll.addEventListener('click',function(){
    
    const test =check.getAttribute("id")
    console.log(test);

})

// const check =document.querySelector('input[id="check"]')

// check.addEventListener('click',function(){

//     console.log(check.checked);
// })