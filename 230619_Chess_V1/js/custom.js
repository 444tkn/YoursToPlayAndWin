window.onload = function() {

    
}

$(document).ready(function() {
    console.log("ready!");
    
});


document.addEventListener('DOMContentLoaded', (event) => {

   changeClass();

});


function changeClass() {

    $(".cell").on("click", function() {

        // permet d'écrire sans les parenthèses, optimise la vitesse du code
        let $this = $(this);

        if ($this.hasClass("yellow")) {

            $this.addClass("blue");
            $this.removeClass("yellow");

        } else if ($this.hasClass("blue")) {

            $this.removeClass("blue")

        } else {

            $(this).addClass("yellow");

        }

    }).on("click", function() {
        let $this = $(this);
        $this.toggleClass("rotation")
    });

}