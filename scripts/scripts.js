$(document).ready(function() {

    //author:Sherwayne Palmer

    $("#inner_container").load("views/Home.html"); //load home page by default

    if (window.matchMedia("(min-width: 769px)").matches) //if media query size min-width is 769px show slider
    {
        $("#wowslider-container").show();
    }

    $(".home").click(function() {

        $("#inner_container").load("views/Home.html"); //load home page on click	

        if (window.matchMedia("(min-width: 769px)").matches) //if media query size min-width is 769px show slider
        {
            $("#wowslider-container").show();
        }
    });

    $(".products").click(function() {
        $("#inner_container").load("views/Products.html"); //load contact us page on click
        $("#wowslider-container").hide();
    });

    $(".productview").click(function() {
        $("#inner_container").load("views/ProductView.html"); //load contact us page on click
        $("#wowslider-container").hide();
    });

    $(".testpage").click(function() {
        $("#inner_container").load("views/TestPage.html"); //load contact us page on click
        $("#wowslider-container").hide();
    });

    $(".aboutus").click(function() {
        $("#inner_container").load("views/AboutUs.html"); //load contact us page on click
        $("#wowslider-container").hide();
    });

    $(".contactus").click(function() {
        $("#inner_container").load("views/ContactUs.html"); //load contact us page on click
        $("#wowslider-container").hide();
    });

    $(".faqs").click(function() {
        $("#inner_container").load("views/FAQs.html"); //load contact us page on click
        $("#wowslider-container").hide();
    });
    $(".partners").click(function() {
        $("#inner_container").load("views/partners.html"); //load partners us page on click
        $("#wowslider-container").hide();
    });

    $('.main').addClass('highlight'); //set home to highlighted on page load

    //highlight current page
    $('.home,.products,.aboutus,.contactus').click(function() {

        var pageIdentArr = this.className;
        var pageIdent = pageIdentArr.split(" ");
        if (pageIdent[0] == "home") {
            $("#products").removeClass('highlight');
            $("#aboutus").removeClass('highlight');
            $("#contactus").removeClass('highlight');
            $("#home").addClass('highlight');
        } else if (pageIdent[0] == "products") {
            $("#home").removeClass('highlight');
            $("#aboutus").removeClass('highlight');
            $("#contactus").removeClass('highlight');
            $("#products").addClass('highlight');
        } else if (pageIdent[0] == "aboutus") {
            $("#home").removeClass('highlight');
            $("#contactus").removeClass('highlight');
            $("#products").removeClass('highlight');
            $("#aboutus").addClass('highlight');
        } else if (pageIdent[0] == "contactus") {
            $("#home").removeClass('highlight');
            $("#products").removeClass('highlight');
            $("#aboutus").removeClass('highlight');
            $("#contactus").addClass('highlight');
        }
    });

    /*$('#mainNav a').click(function() {
        $('#mainNav a').removeClass('highlight');
        $(this).addClass('highlight');
        alert(this.className);
    });*/
    /*$('#headerNav li a').click(function() {
        $('#headerNav li a').removeClass('highlight');
        $(this).addClass('highlight');
    });*/

    $(window).resize(function() { //performs functionality based on screen resize event


        if (window.matchMedia("(min-width: 769px)").matches && pageIdent == "homePage") //if media query size min-width is 769px show slider
        {
            $("#wowslider-container").show();
        } else {
            $("#wowslider-container").hide();
        }

    });

});


/**
 * Get the button, and when the user clicks on it, execute navButton function
 * 
 * date: 13/03/2019
 * author: Deivid Mafra
 **/

function navButton() {
    document.getElementById("myDropdown").classList.toggle("show");
}

/**
 * navButton toggles between adding and removing the show class,
 * which is used to hide and show the dropdown content
 * 
 * date: 13/03/2019
 * author: Deivid Mafra
 **/



window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction() {
    var x = document.getElementById("mainNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}