function menuSlidesIn(){
    var checkbox = document.getElementById("btnControl")
    var menu = document.getElementById("menu-items")

    if(checkbox.checked == true){
        menu.style.top= "100%"

    }
    else{
        menu.style.top= "-100%"
    }
}



var a = 0;
$(window).scroll(function() {

    var oTop = $('#impact-info').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }

});

