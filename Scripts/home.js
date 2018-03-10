$(document).ready(function(){
    //Initial Setup
    $("#aboutPage").hide();
    $("#contactPage").hide();
    $("#gamePage").hide();
    $("#blogPage").hide();
    //MENU Section
	$('#ham').click(function(){
        $(this).toggleClass('open');
        $('.menu').toggleClass('open');
    });
    
    $('.banner, #gamePage, #blogPage, #aboutPage').click(function(){
        if($('#ham').hasClass('open')){
            $('#ham').toggleClass('open');
            $('.menu').toggleClass('open')
        }
    });
    //END of MENU Section

    //BANNER Section
    var x = 0; // for slideshow
    var y = 0; // for slideshow
    var bannerImagesCounter = document.getElementsByClassName("gameBanner").length;
    function slide() {
        document.getElementsByClassName("gameBanner")[y].style.width = "0px";
        document.getElementsByClassName("gameBanner")[x].style.width = "100%";
        y = x;
        if (y === 0){
            document.getElementsByClassName("googlePlay")[0].style.opacity = "0";
            document.getElementsByClassName("googlePlay")[0].style.display = "none";
        
        }
        else{
            document.getElementsByClassName("googlePlay")[0].style.display = "block"; 
            document.getElementsByClassName("googlePlay")[0].style.opacity = "1";
        }
        //for GooglePlay link of Natives
        if (y === 1) 
            document.getElementsByClassName("googlePlay")[0].href = "https://play.google.com/store/apps/details?id=com.loyalsheep.Natives";
        //for GooglePlay link of Airavat
        if (y === 2) 
            document.getElementsByClassName("googlePlay")[0].href = "https://play.google.com/store/apps/details?id=com.loyalsheep.Airavat";

        x = (x + 1) % bannerImagesCounter;
    }

    slide();

    var slider = setInterval(function(){
        slide();
    }, 5000);
    //END of BANNER Section

/////////////////////////PAGES//////////////////////////
    
//FOR Home Page
    var home = document.getElementById("home");
    home.onclick = function () {
        $(".updates").show();
        $(".banner").show();

        $("#gamePage").hide();
        $("#blogPage").hide();
        $("#aboutPage").hide();

        $("footer").removeClass("getdown");
    }
//END of Home Page  

//FOR Games Page
    var games = document.getElementsByClassName("menuitem")[0];
    games.onclick = function () {
        $("#aboutPage").hide();
        $(".updates").hide();
        $(".banner").hide();
        $("#blogPage").hide(); 

        $("#gamePage").show();
        $("footer").addClass("getdown");

        if($('#ham').hasClass('open')){
            $('#ham').toggleClass('open');
            $('.menu').toggleClass('open')
        }

        $(".game:nth-child(1)").click(function () { //Natives
            window.open("https://play.google.com/store/apps/details?id=com.loyalsheep.Natives");
        });

        $(".game:nth-child(2)").click(function () { //Airavat
            window.open("https://play.google.com/store/apps/details?id=com.loyalsheep.Airavat");
        });
    }

//END of Games Page

//FOR Blog Page
var blog = document.getElementsByClassName("menuitem")[1];
blog.onclick = function () {
    $("#aboutPage").hide();
    $(".updates").hide();
    $(".banner").hide();
    $("#gamePage").hide(); 

    $("#blogPage").show();
    document.getElementById("blogPage").innerHTML = "";
    $("footer").addClass("getdown");   //******************REMOVE THIS*******************/

    if($('#ham').hasClass('open')){
        $('#ham').toggleClass('open');
        $('.menu').toggleClass('open');
    }
    var i, j;

    var request = new XMLHttpRequest();
    request.open("GET", "http://loyalsheep.com/Pages/blogPosts.json");
    request.onload = function () {
        var blogData = JSON.parse(request.responseText);
        for (i = 0; i < blogData.length; i++){
            document.getElementById("blogPage").innerHTML += "<h1>" + blogData[i].heading + "</h1>";
            document.getElementById("blogPage").innerHTML += "<h6>" + blogData[i].dated + "</h6>";
            for(j = 0; j < blogData[i].content.length; j++)
                document.getElementById("blogPage").innerHTML += "<p>" + blogData[i].content[j] + "</p>";
            
        $("footer").removeClass("getdown");
        }
    }
    request.send();
}

//END of Blog Page

//FOR About Page
    var about = document.getElementById("about");
    about.onclick = function () {
        $("#aboutPage").show();
        
        $(".updates").hide();
        $(".banner").hide();
        $("#gamePage").hide();
        $("#blogPage").hide();
        
        $("footer").addClass("getdown");

        if($('#ham').hasClass('open')){
            $('#ham').toggleClass('open');
            $('.menu').toggleClass('open')
        }
        
        var request = new XMLHttpRequest();
        request.open("GET", "http://loyalsheep.com/Pages/about.json");
        request.onload = function () {
            var data = JSON.parse(request.responseText);
            //console.log(data);
            document.getElementById("aboutPage").innerHTML = '<h5>A message from '+ data.CEO +'</h5><br />' + data.message;
        }
        request.send();
    }
//End of About Page

//For Updates
    $(".update:nth-child(1)").click(function () {
        window.open("https://www.youtube.com/watch?v=TwQ_LQzWwOc&list=LLie230PyK4Ts6JaVHsAfFYw&index=3");
    });

    $(".update:nth-child(3)").click(function () {
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

         // iOS detection
        if ((/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream)|| (navigator.userAgent.indexOf('Mac OS X') != -1)) {
            window.open("https://itunes.apple.com/us/app/steppy-pants/id1094138419?mt=8");
        }
        //Android Detection
        else {
            window.open("https://play.google.com/store/apps/details?id=com.sgames.steppypants&hl=en");
        }
    });
//End of Updates
});


