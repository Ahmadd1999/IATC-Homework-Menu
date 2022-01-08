var elements = document.getElementsByClassName("box");
for(var i = 0; i < elements.length; i++){
    elements[i].onclick = function(){
        
        var el = elements[0];
        while(el){
            if(el.tagName === "LI"){
                el.classList.remove("active");
            }
            el = el.nextSibling;
        }

        this.classList.add("active");
    }
}


