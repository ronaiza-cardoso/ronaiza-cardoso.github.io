(function() {
    'use strict';

    window.onscroll = () => { scrollFunction() }

    function scrollFunction() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrool_btn").style.display = "block";
        }
        else {
            document.getElementById("scrool_btn").style.display = "none";
        }
    }

    function topButton() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
})
