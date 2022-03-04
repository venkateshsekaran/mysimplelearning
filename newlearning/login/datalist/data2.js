
var entry= document.getElementById("entry");
entry.addEventListener("click",displayDetails);
var row=1;

function displayDetails()
{
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var grade=document.getElementById("grade").value;

    if(!name || !age || !grade)
    {
        alert("Please fill all the boxes");
        return;
    }

    var displays = document.getElementById("display");
    var newRow = displays.insertRow(row);
    var cell1 =newRow.insertCell(0);
    var cell2 =newRow.insertCell(1);
    var cell3 =newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = age;
    cell3.innerHTML = grade;
    
    row++;

}