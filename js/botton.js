document.getElementById('img_open_botton').addEventListener("click",function(){
  var image = document.getElementById('image');
  if (image.style.display == 'none') {
    image.style.display = 'block';
  }else {
    image.style.display = 'none';
  }
});
