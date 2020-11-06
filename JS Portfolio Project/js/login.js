const handleSubmit = event => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    welcome.textContent = `Welcome ${username}`;
    welcome.setAttribute("class", "welcome-fade");
    form.setAttribute("class", "hidden");
    logout.setAttribute("class", "");
}

const submit = document.getElementById("submit");
submit.addEventListener("click", handleSubmit);

const welcome = document.getElementById("welcome");
const form = document.getElementById("login-form");
const logout = document.getElementById("logout");

function logOut(){
    logout.setAttribute("class", "hidden");
    form.setAttribute("class", "form");
}