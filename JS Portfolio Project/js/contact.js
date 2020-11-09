var count = 1;
const addContact = event => {
    event.preventDefault();
    const nameDiv = addNameDiv(count, document.getElementById("name").value);
    const emailDiv = addEmailDiv(count, document.getElementById("email").value);
    const timeDiv = addTimeDiv()
    contactDiv.append(addDivRow(count,nameDiv, emailDiv, timeDiv));
    contactForm.reset();
    count++;
}
const contactDiv = document.getElementById("contacts");
const contactForm = document.getElementById("contact-form");
const contactMe = document.getElementById("contact-me");

contactMe.addEventListener("click", addContact);

function addDivRow(id, nameDiv, emailDiv, timeDiv){
    let row = document.createElement("div");
    row.setAttribute("class", "contact-row");
    row.setAttribute("id", `contact-${id}`);
    row.append(nameDiv);
    row.append(emailDiv);
    row.append(timeDiv)
    row.append(addBtnDiv(id));
    return row;
}

function addNameDiv(id, name){
    let rowName = document.createElement("div");
    rowName.setAttribute("class", "name-div");
    rowName.setAttribute("id", `name-${id}`);
    rowName.innerHTML = name;
    return rowName;
}

function addEmailDiv(id, email){
    let rowEmail = document.createElement("div");
    rowEmail.setAttribute("class", "email-div");
    rowEmail.setAttribute("id", `email-${id}`);
    rowEmail.innerHTML = email;
    return rowEmail;
}

function addTimeDiv(){
    let date = new Date().toUTCString();
    let rowTimeStamp = document.createElement("div");
    rowTimeStamp.setAttribute("class", "time-div");
    rowTimeStamp.innerHTML = date;
    return rowTimeStamp;
}

function addBtnDiv(id){
    
    let rowButtons = document.createElement("div");
    rowButtons.setAttribute("class", "button-div");
    
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete-btn");
    deleteBtn.setAttribute("value", id);
    deleteBtn.addEventListener("click", deleteRow);
    deleteBtn.innerHTML = "X";

    let messageBtn = document.createElement("button");
    messageBtn.setAttribute("class", "message-btn");
    messageBtn.setAttribute("value", id);
    messageBtn.addEventListener("click", messageContact);
    messageBtn.innerHTML = "message";

    rowButtons.append(deleteBtn);
    rowButtons.append(messageBtn);

    return rowButtons;

}

function deleteRow(event){
    document.getElementById(`contact-${event.target.value}`).remove();
}

function messageContact(event){
    
    let val = event.target.value;
    let name = document.getElementById(`name-${val}`).innerHTML;
    alert("Message sent to " + name);
}