let images = [
  "Images/cover1.jpg",
  "Images/cover2.jpg",
  "Images/cover3.jpg"
];

let index = 0;

function changeImage() {
  index++;
  
  if (index >= images.length) {
    index = 0;
  }

  document.getElementById("cimg").src = images[index];
}

setInterval(changeImage, 5000);
