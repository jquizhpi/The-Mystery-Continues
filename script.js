"use strict";

let name = prompt("This is a mysterious game. Please enter your name to continue."),
    response;

document.writeln("<p class='js'>Welcome " + name + "!<br/></p>");

if (name) {
    response = "<p class='js'>Please press continue to enter the game.<br/></p>";
    $(".continue").show();
    $(".continue").click(function() {
        $(".brothers").show();
        $(".js").hide();
        $(".continue").hide();
    });

} else {
    response = "Too bad you don't want to try out this awesome game. Oh well. Have a good day I guess.<br/>";
}

document.writeln(response);

$(".onwardm").hide();
$(".onwardl").hide();
$(".onwardwl").hide();
$(".onwardw").hide();

$(".mario1").click(function() {
    $("body").css("background-image", "url(https://pixelz.cc/wp-content/uploads/2019/03/mario-background-wqhd-1440p-wallpaper.jpg)");
    $(".brothers").hide();
    $(".mario2").show();
    $(".mrun").show();
    $(".onwardm").show();
});

$(".mrun").click(function() {
    $(".mario3").show();
    $(".mrun").hide();
    $(".mario2").hide();
    $(".hintm1").show();
});

$(".luigi1").click(function() {
    $("body").css("background-image", "url(https://pixelz.cc/wp-content/uploads/2019/03/mario-background-wqhd-1440p-wallpaper.jpg)");
    $(".brothers").hide();
    $(".luigi2").show();
    $(".lrun").show();
    $(".onwardl").show();
});

$(".lrun").click(function() {
    $(".luigi3").show();
    $(".lrun").hide();
    $(".luigi2").hide();
    $(".hintl1").show();
});

$(".waluigi1").click(function() {
    $("body").css("background-image", "url(https://pixelz.cc/wp-content/uploads/2019/03/mario-background-wqhd-1440p-wallpaper.jpg)");
    $(".brothers").hide();
    $(".waluigi2").show();
    $(".wlrun").show();
    $(".onwardwl").show();
});

$(".wlrun").click(function() {
    $(".waluigi3").show();
    $(".wlrun").hide();
    $(".waluigi2").hide();
    $(".hintwl1").show();
});

$(".wario1").click(function() {
    $("body").css("background-image", "url(https://pixelz.cc/wp-content/uploads/2019/03/mario-background-wqhd-1440p-wallpaper.jpg)");
    $(".brothers").hide();
    $(".wario2").show();
    $(".warun").show();
    $(".onwardw").show();
});

$(".warun").click(function() {
    $(".wario3").show();
    $(".warun").hide();
    $(".wario2").hide();
    $(".hintw1").show();
});

$(".mario3").dblclick(function() {
    $(".msportal1").show();
});

$(".msportal1").click(function() {
    $(".mario3").hide();
    $(".msportal1").hide();
    $("body").css("background-image", "url(https://cdn.hipwallpaper.com/i/78/0/BSyVDg.png)");
    $(".bowser").show();
    $(".mario4").fadeIn(7000);
    $(".peach").show();
    $(".onwardm").hide();
    $(".hintm1").hide();
});

$(".luigi3").dblclick(function() {
    $(".lsportal1").show();
});

$(".lsportal1").click(function() {
    $(".luigi3").hide();
    $(".lsportal1").hide();
    $("body").css("background-image", "url(https://cdn.hipwallpaper.com/i/78/0/BSyVDg.png)");
    $(".donkeyKong").show();
    $(".luigi4").fadeIn(7000);
    $(".daisy").show();
    $(".onwardl").hide();
    $(".hintl1").hide();
});

$(".waluigi3").dblclick(function() {
    $(".wlsportal1").show();
});

$(".wlsportal1").click(function() {
    $(".waluigi3").hide();
    $(".wlsportal1").hide();
    $("body").css("background-image", "url(https://cdn.hipwallpaper.com/i/78/0/BSyVDg.png)");
    $(".boo").show();
    $(".waluigi4").fadeIn(7000);
    $(".rosalina").show();
    $(".onwardwl").hide();
    $(".hintwl1").hide();
});

$(".wario3").dblclick(function() {
    $(".wasportal1").show();
});

$(".wasportal1").click(function() {
    $(".wario3").hide();
    $(".wasportal1").hide();
    $("body").css("background-image", "url(https://cdn.hipwallpaper.com/i/78/0/BSyVDg.png)");
    $(".king-bomb-omb").show();
    $(".wario4").fadeIn(7000);
    $(".yoshi").show();
    $(".onwardw").hide();
    $(".hintw1").hide();
});

$(".bowser").dblclick(function() {
    $(".mario4").hide();
    $(".mario5").show();
    $(".peach").hide();
    $(".peachr").show();
    $(".bowser").hide();
    $(".bowserx_x").show();
});

$(".donkeyKong").dblclick(function() {
    $(".luigi4").hide();
    $(".luigi5").show();
    $(".daisy").hide();
    $(".daisyr").show();
    $(".donkeyKong").hide();
    $(".donkeyKongx_x").show();
});

$(".boo").dblclick(function() {
    $(".waluigi4").hide();
    $(".waluigi5").show();
    $(".rosalina").hide();
    $(".rosalinar").show();
    $(".boo").hide();
    $(".boox_x").show();
});

$(".king-bomb-omb").dblclick(function() {
    $(".wario4").hide();
    $(".wario5").show();
    $(".yoshi").hide();
    $(".yoshir").show();
    $(".king-bomb-omb").hide();
    $(".king-bomb-ombx_x").show();
});

$(".mario5").dblclick(function() {
    $(".msportal2").show();
});

$(".luigi5").dblclick(function() {
    $(".lsportal2").show();
});

$(".waluigi5").dblclick(function() {
    $(".wlsportal2").show();
});

$(".wario5").dblclick(function() {
    $(".wasportal2").show();
});

$(".msportal2").click(function() {
    $("body").css("background-image", "url(https://i.giphy.com/media/l1J3IHzSUmCpXThqo/giphy.webp)");
    $(".msportal2").hide();
    $(".mario5").hide();
    $(".peachr").hide();
    $(".bowserx_x").hide();
});

$(".lsportal2").click(function() {
    $("body").css("background-image", "url(https://i.giphy.com/media/l1J3IHzSUmCpXThqo/giphy.webp)");
    $(".lsportal2").hide();
    $(".luigi5").hide();
    $(".daisyr").hide();
    $(".donkeyKongx_x").hide();
});

$(".wlsportal2").click(function() {
    $("body").css("background-image", "url(https://i.giphy.com/media/l1J3IHzSUmCpXThqo/giphy.webp)");
    $(".wlsportal2").hide();
    $(".waluigi5").hide();
    $(".rosalinar").hide();
    $(".boox_x").hide();
});

$(".wasportal2").click(function() {
    $("body").css("background-image", "url(https://i.giphy.com/media/l1J3IHzSUmCpXThqo/giphy.webp)");
    $(".wasportal2").hide();
    $(".wario5").hide();
    $(".yoshir").hide();
    $(".king-bomb-ombx_x").hide();
});