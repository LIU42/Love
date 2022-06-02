var colorList = [ "#FFFFFF","#FF0000","#FFFF00","#00BFFF","#00FF00","#A000A0","#FFA500" ];
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

function addFirework()
{
    var screenWidth = $("#body").width();
    var screenHeight = $("#body").height();

    if (random() < pFirework)
    {
        var range = randFloat(0.5, 1, 2);
        var height = screenHeight * range;
        var uptime = uptimeStandard * range;
        var alpha = randInt(-alphaMax, alphaMax);
        var beta = randInt(0, 360);
        var color = randChoice(colorList);

        $("#body").append(''+
        '<div class="container" id="firework' + fireworkCount + '">'+
            '<div class="fire-container" id="fire-container' + fireworkCount + '">'+
                '<div class="fire-path fire-path0">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path1">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path2">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path3">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path4">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path5">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path6">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path7">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path8">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path9">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path10">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path11">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path12">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path13">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
                '<div class="fire-path fire-path14">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'+
            '</div>'+
            '<div class="up-path" id="up-path' + fireworkCount + '">'+
                '<div class="up-item" id="up-item' + fireworkCount + '"></div>'+
            '</div>'+
        '</div>');

        $("#firework" + fireworkCount).css("height", height + "px");
        $(".container").css("width", screenHeight * 0.5 + "px");
        $(".container").css("left", (screenWidth - screenHeight * 0.5) * 0.5 + "px");
        $(".fire-container").css("height", $(".container").width());

        $("#up-path" + fireworkCount).css("height", height - $(".container").width() / 2 + "px");
        $(".up-item").css("height", $(".up-path").width() * 30 + "px");
        $(".up-item").css("border-top-left-radius", $(".up-path").width() + "px");
        $(".up-item").css("border-top-right-radius", $(".up-path").width() + "px");

        $(".fire-item").css("border-top-right-radius", $(".fire-path").height() + "px");
        $(".fire-item").css("border-bottom-right-radius", $(".fire-path").height() + "px");

        $("#firework" + fireworkCount).css("transform", "rotate(" + alpha + "deg)");
        $("#fire-container" + fireworkCount).css("transform", "rotate(" + beta + "deg)");
        $("#up-item" + fireworkCount).css("background-image", "linear-gradient(to bottom," + color + "FF," + color + "00 100%)");
        $(".fire-item" + fireworkCount).css("background-image", "linear-gradient(to left," + color + "FF," + color + "00 100%)");

        $("#up-item" + fireworkCount).animate({top: "0%"}, uptime, "linear");
        $("#up-item" + fireworkCount).animate({opacity: "0"}, 0, "linear");
        $(".fire-item" + fireworkCount).animate({right: "100%"}, uptime, "linear");
        $(".fire-item" + fireworkCount).animate({right: "70%"}, flameTime / 2, "linear");
        $(".fire-item" + fireworkCount).animate({right: "40%", opacity: "0"}, flameTime / 2, "linear");

        fireworkCount += 1;
    }
}

function main()
{
    setInterval(function()
    {
        addFirework();
        removeFirework();
    }, fireTime);
}