var containerProportion = 0.75;
var containerWidth = 750;
var containerHeight = 1000;

var textCode = 1;
var textChangeTime = 200;

var activeTime = 1000;
var activeProportion = 3.5;
var alertChangeTime = 200;
var exitChangeTime = 200;

var clickStatus = "no";
var clickTime = 0;

var pMeteor = 0.08;
var meteorOnScreen = 8
var meteorCount = 0;
var meteorAppendTime = 150;
var meteorTimeStandard = 2500;

function initScreen()
{
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    $("#body").css({
        "width": screenWidth,
        "height": screenHeight
    });

    if (screenWidth / screenHeight > containerProportion)
    {
        $("#container").css({
            "height": "100%",
            "width": screenHeight * containerProportion + "px",
            "top": "0px",
            "left": (screenWidth - screenHeight * containerProportion) / 2 + "px"
        });
    }
    else
    {
        $("#container").css({
            "width": "100%",
            "height": screenWidth / containerProportion + "px",
            "left": "0px",
            "top": (screenHeight - screenWidth / containerProportion) / 2 + "px"
        });
    }
}

function initAlert()
{
    var width = $("#window").width();
    var height = $("#window").height();

    $("#alert").css({
        "width": width + "px",
        "height": height + "px",
        "margin-top": -height / 2 + "px",
        "margin-left": -width / 2 + "px"
    });

    $("#exit").css({
        "width": height * 0.1 + "px",
        "height": height * 0.1 + "px",
        "top": height * 0.03 + "px",
        "right": height * 0.03 + "px",
        "line-height": height / 10 + "px",
        "font-size": height / 11 + "px"
    });

    $("#exit-img").css({
        "width": height * 0.06 + "px",
        "height": height * 0.06 + "px",
        "margin-top": -height * 0.03 + "px",
        "margin-left": -height * 0.03 + "px"
    });
}

function initFont()
{
    var textHeight = $("#window").height();
    var buttonHeight = $(".button").height();

    $("#text").css({ "font-size": textHeight * 0.07 + "px" });
    $(".button").css({ "font-size": buttonHeight * 0.4 + "px" });
    $("#inform").css({ "font-size": textHeight / 13 + "px" });
}

function buttonClickEffect(name, mouse)
{
    var buttonWidth = $("#yes").width();
    var radiusWidth = buttonWidth * activeProportion;

    $(name).stop();
    $(name).stop();

    $(name).css({
        "width": "0px",
        "height": "0px",
        "margin-top": "0px",
        "margin-left": "0px",
        "opacity": "1",
        "background-image": "radial-gradient(circle, #FF149360, #FF1493A0, #FF149360)",
        "left": mouse.offsetX + "px",
        "top": mouse.offsetY + "px"
    });

    $(name).animate({
        width: radiusWidth / 2 + "px",
        height: radiusWidth / 2 + "px",
        marginTop: -radiusWidth / 4 + "px",
        marginLeft: -radiusWidth / 4 + "px"
    }, activeTime / 2, "linear");

    $(name).animate({
        width: radiusWidth + "px",
        height: radiusWidth + "px",
        marginTop: -radiusWidth / 2 + "px",
        marginLeft: -radiusWidth / 2 + "px",
        opacity: "0"
    }, activeTime / 2, "linear");  
}

function changeText()
{
    if (textCode <= 10)
    {
        setTimeout(switchText, textChangeTime);
        $("#text").fadeOut(textChangeTime);
		$("#text").fadeIn(textChangeTime);
    }
    else
    {
        $("#inform").html("哼! 你不同意我就赖着不走了~");
        $("#dark").fadeIn(alertChangeTime);
    }
}

function switchText()
{
    switch (textCode)
    {
        case 1:  $("#text").html("你的出现<br>是上天给我最好的礼物"); break;
        case 2:  $("#text").html("每天要做的事:<ul><li>想你想你~</li><li>爱你爱你~</li></ul>"); break;
        case 3:  $("#text").html("永远给你最好的!"); break;
        case 4:  $("#text").html("春风十里不如你~"); break;
        case 5:  $("#text").html("愿得一人心<br>白首不相离"); break;
        case 6:  $("#text").html("斯人若彩虹<br>遇上方知有"); break;
        case 7:  $("#text").html("你的过去<br>我来不及参与<br>你的未来<br>我奉陪到底"); break;
        case 8:  $("#text").html("答案很长<br>我准备用余生的时间<br>给你答案"); break;
        case 9:  $("#text").html("不说分手~"); break;
        default: $("#text").html("好不好嘛~"); break;
    }
    textCode += 1;
}

function removeMeteor()
{
    for (var i = 0; i <= meteorCount - meteorOnScreen; i++)
    {
        $("#meteor" + i).remove();
    }
}

function addMeteor()
{
    if (random() < pMeteor)
    {
        var range = randFloat(0.8, 1.5, 2);
        var top = randInt(0, 50);
        var right = randInt(0, 50);
        var width = $("#window").width();
        var height = $("#window").height();
        var distance = width * range;
        var time = meteorTimeStandard * range;

        $("#body").append("<div class='meteor' id='meteor" + meteorCount + "'></div>");

        $("#meteor" + meteorCount).css({
            "width": height / 4 + "px",
            "height": height / 80 + "px",
            "border-top-left-radius": height / 80 + "px",
            "border-bottom-left-radius": height / 80 + "px",
            "top": top + "%",
            "right": right + "%"
        });

        $("#meteor" + meteorCount).animate({
            top: "+=" + distance / 3 + "px",
            right: "+=" + distance / 3 + "px",
            opacity: "1"
        }, time / 3, "linear");

        $("#meteor" + meteorCount).animate({
            top: "+=" + distance / 3 + "px",
            right: "+=" + distance / 3 + "px"
        }, time / 3,"linear");

        $("#meteor" + meteorCount).animate({
            top: "+=" + distance / 3 + "px",
            right: "+=" + distance / 3 + "px",
            opacity: "0"
        }, time / 3, "linear");

        meteorCount += 1;
    }
}

function meteorInterval()
{
    addMeteor();
    removeMeteor();
}

function buttonNoClick(mouse)
{
    clickStatus = "no";
    clickTime += 1;
    buttonClickEffect("#no-circle", mouse);
    changeText();
}

function buttonYesClick(mouse)
{
    clickStatus = "yes";
    buttonClickEffect("#yes-circle", mouse);
    $("#inform").html("就知道你一定会同意的!");
    $("#dark").fadeIn(alertChangeTime);
}

function buttonExitClick()
{
    $("#dark").fadeOut(alertChangeTime);
    if (clickStatus == "yes") { window.open("fireworks.html","_self"); }
}

function buttonExitHover()
{
    $("#exit").stop();
    $("#exit").animate({ backgroundColor: "#FF0000FF" }, exitChangeTime);
}

function buttonExitMouseLeave()
{
    $("#exit").stop();
    $("#exit").animate({ backgroundColor: "#FFFFFF00" }, exitChangeTime);
}

function main()
{
    initScreen();
    initAlert();
    initFont();

    $("#hide").remove();

    $("#no").click(buttonNoClick);
    $("#yes").click(buttonYesClick);

    $("#exit").click(buttonExitClick);
    $("#exit").hover(buttonExitHover);
    $("#exit").mouseleave(buttonExitMouseLeave);

    setInterval(meteorInterval, meteorAppendTime);
}