// Add task
let title = document.getElementById("title");
let addItem = document.getElementById("Add-item");
let mood = "Add"
let tmp;
let data;


if(localStorage.task != null) {
    data = JSON.parse(localStorage.task)
}else {
    data = [];
}

addItem.onclick = function () {
    let newTask = {
        title: title.value.toLowerCase()
    }
    if(mood == "Add") {
        data.push(newTask);
    }
    else {
        data[tmp] = newTask;
        mood = "Add";
        addItem.innerHTML = "Add";
    }
    
    localStorage.setItem('task', JSON.stringify(data))
    cleardata();
    showData();
}

// clear inputs
function cleardata() {
    title.value = '';
}

// read 
function showData() {
    let table = '';
    for(let i = 0; i < data.length; i++) {
        table += ` <tr>
        <td>${i}</td>
        <td>${data[i].title}</td>
        <td><button onclick="updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
    </tr>`
    }
    // console.log(table);
    document.getElementById('tbody').innerHTML = table;

}
showData()

// delete

function deleteData(i) {
    data.splice(i,1);
    localStorage.task = JSON.stringify(data);
    showData();
}


// update 
function updateData(i) {
    title.value = data[i].title;
    addItem.innerHTML = "update"
    mood = "update"
    tmp = i;
}


// search 

function searchData(value) {
    let table = '';
    for(let i = 0; i < data.length; i++) {
        if(data[i].title.includes(value.toLowerCase())) {
            table += ` <tr>
            <td>${i}</td>
            <td>${data[i].title}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>`
        }
    }
    document.getElementById('tbody').innerHTML = table;
}