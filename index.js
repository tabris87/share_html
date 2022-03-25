function changeImage(sNewImageId) {
    var images = document.querySelectorAll('body>div.image_plane');
    for(var i = 0; i < images.length; i++) {
        images[i].classList.remove('active');
    }
    
    var newImage = document.getElementById(sNewImageId);
    newImage.classList.add('active');
}