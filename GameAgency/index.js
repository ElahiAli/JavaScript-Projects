let devBtn = document.getElementById("container");

const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.png"];

function imagesList(imageList) {
  let listImage = "";
  for (i = 0; i < imageList.length; i++) {
    listImage += `<img alt="Game Image" class="team-image" src="${imageList[i]}">`;
  }
  devBtn.innerHTML = listImage;
}

imagesList(images);
