let myList =  ["bananas","milk","apples","eggs","cake","coke"];
const btnAdd = document.querySelector("#addNew");
const output = document.querySelector(".output");
const newItem = document.querySelector("#addItem");

btnAdd.addEventListener("click",function(){
    if(newItem.value){
        myList.push(newItem.value);
        build();
        newItem.value = "";
    }
})

document.addEventListener("DOMContentLoaded",build);

function build(){
    output.innerHTML = "<h2>My List</h2>";
    const tbl = document.createElement("table");
    for(let i=0; i<myList.length; i++){
        const row = document.createElement("tr");
        row.ind = i;
        const cell1 = document.createElement("td");
        cell1.innerText = myList[i];
        row.appendChild(cell1);
        const cell2 = document.createElement("td");
        const span1 = document.createElement("span");
        span1.innerText = "Delete";
        span1.addEventListener("click",function(){
            //let temp = this.closest("tr").ind;
            let itemOut = myList.splice(i,1);
            build();
        });
        cell2.appendChild(span1);
        const span2 = document.createElement("span");
        span2.innerText = "Edit";
        span2.addEventListener("click",function(){
            row.style.backgroundColor = "Orange";
            let tempEle = row.firstElementChild;
            const newInput = document.createElement("input");
            newInput.value = tempEle.innerText;
            newInput.focus();
            tempEle.innerHTML = "";
            tempEle.appendChild(newInput);
            newInput.addEventListener("blur",function(){
                tempEle.innerHTML = newInput.value;
                row.style.backgroundColor = "Black";
                myList[i] = newInput.value;            
            })
        });
        cell2.appendChild(span2);
        row.appendChild(cell2);
        tbl.appendChild(row);
    }
    output.appendChild(tbl);
}