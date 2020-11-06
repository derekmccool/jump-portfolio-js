const pics = ["img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg"]
const picContainer = document.getElementById("pictures");
var currentIndex = 1;
setBannerImages(pics);
rotateImages();

function setBannerImages(picArray) {
    let i = 1;
    picArray.forEach(pic => {
        let img = document.createElement("img");
        let picDiv = document.createElement("div");
        img.setAttribute("src", pic);
        img.setAttribute("alt", pic);
        img.setAttribute("class", "hidden");
        img.setAttribute("id", i);
        i++
        picContainer.append(picDiv);
        picDiv.append(img);
    });
}


function rotateImages(){

    if(currentIndex === 3){
        document.getElementById(currentIndex).setAttribute("class", "image-fader");
        currentIndex = 1;
    }else{
        document.getElementById(currentIndex).setAttribute("class", "image-fader");
        currentIndex++;
    }
    

}
