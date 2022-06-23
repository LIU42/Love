var colorList = [ "#FFFFFF", "#FF0000", "#FFFF00", "#00BFFF", "#00FF00", "#A000A0", "#FFA500" ];
var pFirework = 0.5;
var fireworkOnScreen = 6;
var fireTime = 500;
var fireworkCount = 0;
var firePathCount = 15;
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
        var range = randFloat(0.5, 1);
        var height = screenHeight * range;
        var uptime = uptimeStandard * range;
        var alpha = randInt(-alphaMax, alphaMax);
        var beta = randInt(0, 360);
        var color = randChoice(colorList);

        $("#body").append(
            '<div class="container" id="firework' + fireworkCount + '">'+
                '<div class="fire-container" id="fire-container' + fireworkCount + '"></div>'+
                '<div class="up-path" id="up-path' + fireworkCount + '">'+
                    '<div class="up-item" id="up-item' + fireworkCount + '"></div>'+
                '</div>'+
            '</div>'
        );

        for (var i = 0; i < firePathCount; i++)
        {
            $("#fire-container" + fireworkCount).append(
                '<div class="fire-path fire-path' + i + '">'+
                    '<div class="fire-item fire-item' + fireworkCount + '"></div>'+
                '</div>'
            );
        }

        $("#firework" + fireworkCount).css({
            "height": height + "px",
            "width": screenHeight * 0.5 + "px",
            "left": (screenWidth - screenHeight * 0.5) * 0.5 + "px",
            "transform": "rotate(" + alpha + "deg)"
        });

        $("#fire-container" + fireworkCount).css({
            "height": $(".container").width(),
            "transform": "rotate(" + beta + "deg)"
        });

        $("#up-path" + fireworkCount).css({ "height": height - $(".container").width() / 2 + "px" });

        $("#up-item" + fireworkCount).css({
            "height": $(".up-path").width() * 30 + "px",
            "border-top-left-radius": $(".up-path").width() + "px",
            "border-top-right-radius": $(".up-path").width() + "px",
            "background-image": "linear-gradient(to bottom," + color + "FF," + color + "00 100%)"
        });

        $(".fire-item" + fireworkCount).css({
            "border-top-right-radius": $(".fire-path").height() + "px",
            "border-bottom-right-radius": $(".fire-path").height() + "px",
            "background-image": "linear-gradient(to left," + color + "FF," + color + "00 100%)"
        });

        $("#up-item" + fireworkCount).animate({ top: "0%" }, uptime, "linear");
        $("#up-item" + fireworkCount).animate({ opacity: "0" }, 0, "linear");

        $(".fire-item" + fireworkCount).animate({ right: "100%" }, uptime, "linear");
        $(".fire-item" + fireworkCount).animate({ right: "70%" }, flameTime / 2, "linear");
        $(".fire-item" + fireworkCount).animate({ right: "40%", opacity: "0" }, flameTime / 2, "linear");

        fireworkCount += 1;
    }
}

function fireworkInterval()
{
    addFirework();
    removeFirework();
}

function main() { setInterval(fireworkInterval, fireTime); }