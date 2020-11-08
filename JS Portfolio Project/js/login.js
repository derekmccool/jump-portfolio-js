const handleSubmit = event => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    welcome.textContent = `Welcome ${username}`;
    welcome.setAttribute("class", "welcome-fade");
    logout.setAttribute("class", "");
    document.getElementById("login-overlay").style.display = "none";
    document.getElementById("login").style.display = "none";

}

const submit = document.getElementById("submit");
submit.addEventListener("click", handleSubmit);

const welcome = document.getElementById("welcome");
const form = document.getElementById("login-form");
const logout = document.getElementById("logout");

function logOut(){
    document.getElementById("login").style.display = "block";
    document.getElementById("logout").style.display = "none";

}

function logIn(event){
    document.getElementById("login-overlay").style.display = "block";
}

function hideOverlay(){
    document.getElementById("login-overlay").style.display = "none";
}