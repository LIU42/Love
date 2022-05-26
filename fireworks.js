var colorList = ["#FFFFFF","#FF0000","#FFFF00","#00BFFF","#00FF00","#A000A0","#FFA500"];
var pFirework = 0.5;
var fireworkOnScreen = 6;
var fireTime = 500;
var fireworkCount = 0;
var alphaMax = 10;
var uptimeStandard = 1500;
var flameTime = 1200;

function removeFirework()
{
    for (var i = 0; i < fireworkCount - fireworkOnScreen; i++)
    {
        $("#firework" + i).remove();
    }
}

function firework()
{
    var screenWidth = $("#body").width();
    var screenHeight = $("#body").height();
    var num = random();

    if (num < pFirework)
    {
        var p = randFloat(0.5, 1, 2);
        var height = screenHeight * p;
        var uptime = uptimeStandard * p;
        var alpha = randInt(-alphaMax, alphaMax);
        var beta = randInt(0, 360);
        var color = randChoice(colorList);

        $("#body").append(''+
        '<div class="table" id="firework' + fireworkCount + '">'+
            '<div class="fire-zone" id="zone' + fireworkCount + '">'+
                '<div class="zone-path zone-path0">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path1">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path2">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path3">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path4">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path5">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path6">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path7">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path8">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path9">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path10">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path11">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path12">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path13">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="zone-path zone-path14">'+
                    '<div class="zone-work zone-work' + fireworkCount + '"></div>'+
                '</div>'+
            '</div>'+
            '<div class="path" id="path' + fireworkCount + '">'+
                '<div class="path-work" id="path-work' + fireworkCount + '"></div>'+
            '</div>'+
        '</div>');

        $("#firework" + fireworkCount).css("height", height + "px");
        $(".table").css("width", screenHeight * 0.5 + "px");
        $(".table").css("left", (screenWidth - screenHeight * 0.5) * 0.5 + "px");
        $(".fire-zone").css("height", $(".table").width());

        $("#path" + fireworkCount).css("height", height - $(".table").width() / 2 + "px");
        $(".path-work").css("height", $(".path").width() * 30 + "px");
        $(".path-work").css("border-top-left-radius", $(".path").width() + "px");
        $(".path-work").css("border-top-right-radius", $(".path").width() + "px");

        $(".zone-work").css("border-top-right-radius", $(".zone-path").height() + "px");
        $(".zone-work").css("border-bottom-right-radius", $(".zone-path").height() + "px");

        $("#firework" + fireworkCount).css("transform", "rotate(" + alpha + "deg)");
        $("#zone" + fireworkCount).css("transform", "rotate(" + beta + "deg)");
        $("#path-work" + fireworkCount).css("background-image", "linear-gradient(to bottom," + color + "FF," + color + "00 100%)");
        $(".zone-work" + fireworkCount).css("background-image", "linear-gradient(to left," + color + "FF," + color + "00 100%)");

        $("#path-work" + fireworkCount).animate({top: "0%"}, uptime, "linear");
        $("#path-work" + fireworkCount).animate({opacity: "0"}, 0, "linear");
        $(".zone-work" + fireworkCount).animate({right: "100%"}, uptime, "linear");
        $(".zone-work" + fireworkCount).animate({right: "70%"}, flameTime / 2, "linear");
        $(".zone-work" + fireworkCount).animate({right: "40%", opacity: "0"}, flameTime / 2, "linear");

        fireworkCount += 1;
    }
}

function main()
{
    setInterval(function()
    {
        firework();
        removeFirework();
    }, fireTime);
}