const pics = ["img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg"]
const picContainer = document.getElementById("pictures");
setBannerImages(pics);
var index = 1;

rotateImages();
setTimeout(rotateImages, 10000);
setTimeout(rotateImages, 20000);



function setBannerImages(picArray) {
    let i = 1;
    picArray.forEach(pic => {
        let img = document.createElement("img");
        let picDiv = document.createElement("div");
        img.setAttribute("src", pic);
        img.setAttribute("alt", pic);
        picDiv.setAttribute("class", "hidden");
        picDiv.setAttribute("id", `image-${i}`);
        i++;
        picContainer.append(picDiv);
        picDiv.append(img);
    });
}


function rotateImages(){
    document.getElementById(`image-${index}`).setAttribute("class", "image-fader");
    index++;    
}

