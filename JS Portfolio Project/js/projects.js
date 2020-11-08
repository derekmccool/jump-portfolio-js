function toggleExpand(event){
    let val = document.getElementById(event.target.value);
    console.log(val.parentNode);
    if(val.className === "project-collapse"){
        val.setAttribute("class", "project-expand");
        console.log("expanded");
        event.target.innerHTML = "Collapse";
        val.parentNode.style.display = "flex";
        val.parentNode.style.height = "700px";
        console.log(val.parentNode.firstElementChild);
        

    }else{
        val.setAttribute("class", "project-collapse");
        console.log("collapsed");
        event.target.innerHTML = "See Details";
        val.parentNode.style.display = "block";

    }
}