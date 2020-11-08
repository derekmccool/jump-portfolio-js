
class Image {
    constructor(index, url, opacity, top, left, right){
        this.index = index;
        this.url = url;
        this.opacity = opacity;
        this.top = top;
        this.left = left;
        this.right = right;
    }

    setAllAttributes(img) {
        img.setAttribute("src", this.url);
        img.setAttribute("alt", this.url);
        img.setAttribute("class", `image-fader-${this.index}`);
        img.setAttribute("id", `image-${this.index}`);
    }
    resetStyles(img){
        img.style.top = this.top;
        img.style.left = this.left;
        img.style.right = this.right;
        img.style.opacity = this.opacity;
        img.setAttribute("class", `image-fader-${this.index}`);
    }
}
const image1 = new Image(1, "img/banner1.jpg",0, null, "25%", null);
const image2 = new Image(2, "img/banner2.jpg",0, null, null, "25%");
const image3 = new Image(3, "img/banner3.jpg",0, "25%", null, null);
const images = [];
var index = 1;
var sectionToggle = false;
var currentSection;
var sectionBox = document.getElementById("section-box")
var sections = document.getElementsByClassName("profile-container");
images.push(image1);
images.push(image2);
images.push(image3);
setBannerImages(images);
// startRotation();

// function startRotation(){
//     rotateImages();
//     setTimeout(rotateImages, 5000);
//     setTimeout(rotateImages, 10000);
// }

function setBannerImages(imageArray) {
    imageArray.forEach(image => {
        let img = document.createElement("img");
        image.setAllAttributes(img);
        sectionBox.append(img);
        img.style;
    });
}


// function rotateImages(){
//     document.getElementById(`image-${index}`).setAttribute("class", `image-fader-${index}`);
//     index++;    
// }

function resetImages(imageArray){
    imageArray.forEach(image => {
        image.resetStyles(document.getElementById(`image-${image.index}`));
    });
    console.log(sections)
    section = document.getElementById(`section-${currentSection}`);
    section.style.display = "none";
    section.style.opacity = 0;
    sectionBox.style.width = "100%";
    sectionBox.style.height = "25em";
    sectionBox.style.boxShadow = "";

}

function clearFades(index){
    switch(index){

        case 1:
            document.getElementById("image-2").setAttribute("class", "");
            document.getElementById("image-3").setAttribute("class", "");
            console.log("clear fades case 1");
            break;
        case 2:
            document.getElementById("image-1").setAttribute("class", "");
            document.getElementById("image-3").setAttribute("class", "");
            console.log("clear fades case 2");
            break;
        case 3:
            document.getElementById("image-1").setAttribute("class", "");
            document.getElementById("image-2").setAttribute("class", "");
            console.log("clear fades case 3");
            break;
        default:
            document.getElementById("image-1").setAttribute("class", "");
            document.getElementById("image-2").setAttribute("class", "");
            document.getElementById("image-3").setAttribute("class", "");
            console.log("clear fades default");
            break;
    }
}

function showSection(event){
    let i = event.target.value;
    let img =  document.getElementById(`image-${i}`);
    let section = document.getElementById(`section-${i}`);
    console.log(i);
    console.log(img);
    if(!sectionToggle){
        clearFades(i);
        setImageStyleValues(i, img);
        currentSection = i;
        sectionToggle = true;
        section.style.display = "block";
        section.style.opacity = 1;
        console.log("show section  case 1")
    }else{
        if(currentSection == event.target.value){
            clearFades(0); //runs the default case
            resetImages(images, sections);

            currentSection = 0;
            sectionToggle = false;
            console.log("show section  case 2")

        }else{
            resetImages(images);
            clearFades(0); //runs the default case
            setImageStyleValues(i, img);

            currentSection = i;
            sectionToggle = true;
            section.style.display = "block";
            section.style.opacity = 1;
            console.log("show section case 3")

        }
    }
}
function setImageStyleValues(index, img){
    sectionBox.style.boxShadow = "var(--bs)";
    sectionBox.style.width = "60%";
    sectionBox.style.height = "27em";
    if(index == 1){
            img.setAttribute("class", "");
            img.style.opacity = 1;
            img.style.left = "1em";
            img.style.top = "1em";
            console.log("set image styles case 1");
        }else if(index == 2){
            img.setAttribute("class", "");
            img.style.opacity = 1;
            img.style.right = "1em";
            img.style.top = "1em";
            console.log("set image styles case 2");
        }else{
            img.setAttribute("class", "");
            img.style.opacity = 1;
            img.style.top = "1em";
            console.log("set image styles case 3");
        }
   
    }   


