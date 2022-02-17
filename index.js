function addTodo(){

    const inputElement = document.getElementById("myInput");

    if(inputElement.value == ""){
        alert("Input Value is Required");
    }
    else{
       
        const newTodo = document.createElement("li");
        newTodo.innerHTML = inputElement.value;
        const unorderedList = document.getElementById("myUL");
        unorderedList.prepend(newTodo);         //appencChild cha jagi prepend....start lach add hoyl element
        inputElement.value = "";        //to empty the dialog box after entering
    }
}

function addCloseButtons(){
    const listItems = document.getElementsByTagName("li");

    for(let i = 0;i<listItems.length;i++)
    {
        const item = listItems[i];
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "DELETE";

        deleteButton.addEventListener("click",()=>{
            item.remove();
        });
        item.appendChild(deleteButton);
    }
}

addCloseButtons();