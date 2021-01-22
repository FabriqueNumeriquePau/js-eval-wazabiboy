

let coll = document.querySelectorAll("header","picto");
let i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.visibility === "hidden" || content.style.visibility === "" )
         {
            content.style.visibility = "visible"; 
            content.style.height = "auto";
        }  else {
            content.style.visibility = "hidden";
            content.style.height = "0px"
        }

    });
}

import dj from "./js/dj.js";

xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function(){

    if(xhr.readyState===4&& xhr.status===200){
        console.log(xhr.response);
    }
});

xhr.open("GET","data/menu.json",true);

xhr.send();