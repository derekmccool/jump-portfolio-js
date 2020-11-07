function toggleExpand(event){
    let val = document.getElementById(event.target.value);
    if(val.className === "project-collapse"){
        val.setAttribute("class", "project-expand");
        console.log("expanded");
        event.target.innerHTML = "Collapse";

    }else{
        val.setAttribute("class", "project-collapse");
        console.log("collapsed");
        event.target.innerHTML = "See Details";
    }
}