console.log("Nushrat Lifestyle Website Loaded");
function openMenu(){

let nav = document.querySelector("nav");

nav.classList.toggle("active");

}
let cart = 0;


function addCart(){

cart++;

document.getElementById("cartCount").innerHTML = cart;

}





function filterProduct(category){


let products = document.querySelectorAll(".product-card");


products.forEach(function(product){


if(category=="all"){

product.style.display="block";

}

else if(product.classList.contains(category)){

product.style.display="block";

}

else{

product.style.display="none";

}


});


}





// SEARCH PRODUCT


document.getElementById("searchBox").addEventListener("keyup",function(){


let value=this.value.toLowerCase();


let products=document.querySelectorAll(".product-card");


products.forEach(function(product){


let text=product.innerText.toLowerCase();


if(text.includes(value)){

product.style.display="block";

}

else{

product.style.display="none";

}


});


});
