var req = new XMLHttpRequest();
req.open("GET", "./json/image_list.json");
req.onreadystatechange = function(){
  if(this.readyState == 4){
    //console.log(this.response);
    var data = JSON.parse(this.response);
    for(var i  = 0; i < data.length; i++){
      var div = document.createElement("div");
      div.setAttribute("class", "image");
      // Define onclick event function
      div.onclick = function(){
        /*if(this.getAttribute("class").indexOf("image-selected") == -1){
          this.setAttribute("class", "image image-selected");
        } else {
            this.setAttribute("class", "image image");
        }*/

        // Using API
        this.classList.toggle("image-selected");
      }
      // The function of change the pictures size
      div.onmouseover = function(){
        var element = this;
        this.timerId = setTimeout(function(){
          element.classList.add("image-magnified");
        }, 1000);
      }
      div.onmouseout = function(){
        clearTimeout(this.timerId);
        this.classList.remove("image-magnified");
      }

      var img = document.createElement("img");
      img.src = data[i];
      div.appendChild(img);
      document.body.appendChild(div);
    }
  }
}
req.send();

function selectAll(btn){
  var images = document.getElementsClassName("image");
  for(var i = 0; i<images.length; i++){
    if(btn.value == "Unselect All"){
      images[i].classList.remove("image-selected");
    } else{
      images[i].classList.add("image-selected");
    }

    if(btn.value == "Unselect All"){
      btn.value = "Select All";
    } else{
      btn.value = "Unselect All";
    }
  }
}
