        var form = document.querySelector(".map__form");
        var link = document.querySelector(".promo__link");
        
		form.classList.remove("form__open");

        link.addEventListener("click", function(event){
            if(form.classList.contains("form__open")){
                event.preventDefault();
                form.classList.remove("form__open");
            }else{
                event.preventDefault();
                form.classList.add("form__open");
            }
        });
