let tasks = [
    {
        task: "first task",
        checked: false
    }
];
var hr = document.createElement("hr");
function strike(id) {
    tasks[id].checked = !tasks[id].checked;
    renderLeft(tasks);
}

function cross(id) {
    tasks.splice(id,1);
    renderLeft(tasks);
}

function addTask(e,value){
    if(e.keyCode==13 && value!=""){
        var inp = document.getElementById("taskinput");
        inp.value = "";
        var new_task = {
            task:value,
            checked:false
        }
        tasks.push(new_task);
        renderLeft(tasks);
    }
}

function renderLeft(tasks) {
    var maindiv = document.getElementById("tasks");
    maindiv.innerHTML = "";
    for (var i = 0; i < tasks.length; i++) {
        var bigdiv = document.createElement("div");
        bigdiv.setAttribute("class","row");
        bigdiv.setAttribute("id",i);

        var innerdiv = document.createElement("div");
        innerdiv.setAttribute("class","col-sm-6");

        var input1 = document.createElement("input");
        input1.setAttribute("type","checkbox");
        input1.setAttribute("class","my-auto col-sm-1 offset-4");
        input1.setAttribute("id",i);
        input1.setAttribute("onclick","strike(id)");

        var input2 = document.createElement("button");
        input2.setAttribute("class","col-sm-1 close");
        input2.setAttribute("id",i);
        input2.setAttribute("onclick","cross(id)");
        input2.innerHTML = "&times;";
        if(tasks[i].checked){
            input1.setAttribute("checked","true");
            innerdiv.innerHTML = "<strike>"+tasks[i].task;+"</strike>";
        }
        else{
            innerdiv.innerHTML = tasks[i].task;
        }
        bigdiv.appendChild(innerdiv);
        bigdiv.appendChild(input1);
        bigdiv.appendChild(input2);
        maindiv.appendChild(bigdiv);
        maindiv.innerHTML+="<hr>";

    }
}