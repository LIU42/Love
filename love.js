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

var buttonStatus = "normal";
var buttonBrokenTime = 2500;

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
        "width": height / 10 + "px",
        "height": height / 10 + "px",
        "top": height * 0.03 + "px",
        "right": height * 0.03 + "px",
        "line-height": height / 10 + "px",
        "font-size": height / 11 + "px"
    });
}

function initFont()
{
    var textHeight = $("#window").height();
    var buttonHeight = $(".button").height();

    $("#text").css("font-size", textHeight * 0.07 + "px");
    $(".button").css("font-size", buttonHeight * 0.4 + "px");
    $("#inform").css("font-size", textHeight / 14 + "px");
}

function buttonOnClick(name, mouse)
{
    var buttonWidth = $("#yes").width();
    var radiusWidth = buttonWidth * activeProportion;

    $(name).stop();
    $(name).stop();

    $(name).css({
        "left": "0px",
        "top": "0px",
        "width": "0px",
        "height": "0px",
        "margin-top": "0px",
        "margin-left": "0px",
        "opacity": "1",
        "background-image": "radial-gradient(circle, #FF149360, #FF1493A0, #FF149360)"
    });
    
    $(name).css({
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
        $("#text").fadeOut(textChangeTime);
		setTimeout(function()
        {
            text = document.getElementById("text");
            switch (textCode)
            {
                case 1: text.innerHTML = "你的出现<br>是上天给我最好的礼物"; break;
                case 2: text.innerHTML = "每天要做的事:<ul><li>想你想你~</li><li>爱你爱你~</li></ul>"; break;
                case 3: text.innerHTML = "永远给你最好的!"; break;
                case 4: text.innerHTML = "春风十里不如你~"; break;
                case 5: text.innerHTML = "愿得一人心<br>白首不相离"; break;
                case 6: text.innerHTML = "斯人若彩虹<br>遇上方知有"; break;
                case 7: text.innerHTML = "你的过去<br>我来不及参与<br>你的未来<br>我奉陪到底"; break;
                case 8: text.innerHTML = "答案很长<br>我准备用余生的时间<br>给你答案"; break;
                case 9: text.innerHTML = "不说分手~"; break;
                default: text.innerHTML = "好不好嘛~"; break;
            }
            textCode += 1;
        },textChangeTime);
		$("#text").fadeIn(textChangeTime);
    }
    else if (clickTime > 99)
    {
        buttonStatus = "broken";
        $("#no").animate({backgroundColor: "#AAAAAAAA", color: "#AAAAAA00"}, buttonBrokenTime);
        $("#inform").html("按钮被你按坏啦!");
        $("#dark").fadeIn(alertChangeTime);
    }
    else
    {
        $("#inform").html("哼! 你不同意我就赖着不走了~");
        $("#dark").fadeIn(alertChangeTime);
    }
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
            "top": top + "%",
            "right": right + "%"
        });

        $(".meteor").css({
            "width": height / 4 + "px",
            "height": height / 80 + "px",
            "border-top-left-radius": height / 80 + "px",
            "border-bottom-left-radius": height / 80 + "px"
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

function main()
{
    initScreen();
    initAlert();
    initFont();

    $("#hide").remove();

    setInterval(function()
    {
        addMeteor();
        removeMeteor();
    }, meteorAppendTime);

    $("#no").click(function(mouse)
    {
        clickStatus = "no";
        if (buttonStatus == "normal")
        {
            buttonOnClick("#no-circle", mouse);
            changeText();
            clickTime += 1;
        }
    });

    $("#yes").click(function(mouse)
    {
        buttonOnClick("#yes-circle", mouse);
        clickStatus = "yes";
        $("#inform").html("就知道你一定会同意的!");
        $("#dark").fadeIn(alertChangeTime);
    });

    $("#exit").hover(function()
    {
        $("#exit").stop();
        $("#exit").animate({backgroundColor: "#FF0000"}, exitChangeTime);
    });

    $("#exit").mouseleave(function()
    {
        $("#exit").stop();
        $("#exit").animate({backgroundColor: "#FFFFFF00"}, exitChangeTime);
    });

    $("#exit").click(function()
    {
        $("#dark").fadeOut(alertChangeTime);
        if (clickStatus == "yes") { window.open("fireworks.html","_self"); }
    });
}