function imgSlider(anything){
    document.querySelector('.cars').src=anything;
}
  var shopping__cart=document.getElementById("shopping__cart");
  shopping__cart.onclick=function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
      shopping__cart.src="ri-moon-line";
    }else{
      shopping__cart.src="ri-sun-line";
    }

    }

