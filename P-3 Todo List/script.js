const items_container = document.getElementById("items")
const item_template = document.getElementById("template")
const add_btn = document.getElementById("add")

let items = getItems();

function getItems() { 
    const value = localStorage.getItem("todo") || "[]"; //Or Logic
    
    return JSON.parse(value)

    console.log(value)
}

function setItems(items) { 
    let itemsJSON = JSON.stringify(items)

    localStorage.setItem("todo",itemsJSON)
} 

function addItem() { 
    items.unshift({             //Unshift for adding item at start
        description: "",
        completed: false   
    })             
    setItems(items);
    refreshList();
}

function updateItem(item,key,value) { 
    item[key] = value;
    setItems();
    refreshList();
}

function refreshList() { 
    // Todo Sort Items
    items.sort((a, b) => { 
        if (a.completed) { 
            return 1;
        }
        if (b.completed) { 
            return -1;
        }

        return a.description < b.description ? -1 : 1;
    })

    items_container.innerHTML = "";

    for (const item of items) { 
        const itemElement = item_template.content.cloneNode(true)
        const descriptionInput = itemElement.querySelector(".item-description")
        const completedInput = itemElement.querySelector(".item-completed")

        descriptionInput.value = item.description
        completedInput.checked = item.completed

        descriptionInput.addEventListener("change", () => {
            updateItem(item,"description",descriptionInput.value)
        })
        completedInput.addEventListener("change", () => {
            updateItem(item,"completed",completedInput.checked)
        })

        items_container.append(itemElement)
    }
}

add_btn.addEventListener("click", () => { 
    addItem();
})

refreshList();