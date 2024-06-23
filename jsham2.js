var arr=[]

function add(){
    var item_id = document.getElementById("id").value
    var item_name = document.getElementById("name").value

    var item ={
        Id :item_id,
        Name :item_name,
    }

    let index = arr.findIndex((a)=>a.Id==item.Id)

    if(index >= 0){
        arr.splice(index,1,item)
    } else{
        arr.push(item)
    }
    render()
    clear()
}
function render(){
    table = `<tr>
            <th>Id</th>
            <th>Name</th>
            <th>Delete</th>
            <th>Edit</th>
            </tr>`
            for(let i = 0; i < arr.length; i++){
            table += `<tr>
            <th>${arr[i].Id}</th>
            <th>${arr[i].Name}</th>
            <th><button onclick="deleteitem(${arr[i].Id})">Delete</button></th>
            <th><button onclick="edititem(${arr[i].Id})">Edit</button></th>
           
            </tr>`
            }
            document.getElementById('render').innerHTML = table
} 
function clear(){
    document.getElementById("id").value="";
    document.getElementById("name").value="";
}
function deleteitem(d){
    for(let i = 0; i < arr.length;i++){
        if(arr[i].Id==d){
            arr.splice(i,1)
            render();
        }
    }
}
function edititem(d){
    for(let i = 0; i < arr.length;i++){
        if(arr[i].Id==d){
           document.getElementById("id").value = arr[i].Id;
           document.getElementById("name").value = arr[i].Name;
        }
    }
}


