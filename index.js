const images = [
    "images/image-1.jpg",
    "images/image-2.jpg",
    "images/image-3.jpg",
    "images/image-4.jpg",
    "images/image-5.jpg",
    "images/image-6.jpg",
    "images/image-7.jpg",
    "images/image-8.jpg",
    "images/image-9.jpg",
    "images/image-10.jpg"
];
const imageSrc = document.getElementById("slider-img");

let index = 0;
setInterval( () => {
    if(index === images.length){
        index = 0;
    }
    let imageUrl = images[index];
    imageSrc.setAttribute("src" , imageUrl);
    index++;
}, 1000)