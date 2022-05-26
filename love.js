var tableProportion = 0.75;
var tableWidth = 750;
var tableHeight = 1000;

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

    $("#body").css("width", screenWidth);
    $("#body").css("height", screenHeight);

    if (screenWidth / screenHeight > tableProportion)
    {
        $("#table").css("height", "100%");
        $("#table").css("width", screenHeight * tableProportion + "px");
        $("#table").css("top", "0px");
        $("#table").css("left", (screenWidth - screenHeight * tableProportion) / 2 + "px");
    }
    else
    {
        $("#table").css("width", "100%");
        $("#table").css("height", screenWidth / tableProportion + "px");
        $("#table").css("left", "0px");
        $("#table").css("top", (screenHeight - screenWidth / tableProportion) / 2 + "px");
    }
}

function initAlert()
{
    var width = $("#window").width();
    var height = $("#window").height();

    $("#alert").css("width", width + "px");
    $("#alert").css("height", height + "px");
    $("#alert").css("margin-top", -height / 2 + "px");
    $("#alert").css("margin-left", -width / 2 + "px");

    $("#exit").css("width", height / 10 + "px");
    $("#exit").css("height", height / 10 + "px");
    $("#exit").css("top", height * 0.03 + "px");
    $("#exit").css("right", height * 0.03 + "px");
    $("#exit").css("line-height" ,height / 10 + "px");
    $("#exit").css("font-size", height / 13 + "px");
}

function initFont()
{
    var textHeight = $("#window").height();
    var buttonHeight = $(".button").height();

    $("#text").css("font-size", textHeight * 0.07 + "px");
    $(".button").css("font-size", buttonHeight * 0.4 + "px");
    $("#inform").css("font-size", textHeight / 13 + "px");
}

function active(name, mouse)
{
    var buttonWidth = $("#yes").width();
    var radiusWidth = buttonWidth * activeProportion;

    $(name).stop();
    $(name).stop();
    $(name).css("left", "0px");
    $(name).css("top", "0px");
    $(name).css("width", "0px");
    $(name).css("height", "0px");
    $(name).css("margin-top", "0px");
    $(name).css("margin-left", "0px");
    $(name).css("background-color", "#EE82EE");
    $(name).css("left", mouse.offsetX + "px");
    $(name).css("top", mouse.offsetY + "px");
    $(name).show();
    $(name).animate({width: radiusWidth/2 + "px", height: radiusWidth/2 + "px", marginTop: -radiusWidth/4 + "px", marginLeft: -radiusWidth/4 + "px"}, activeTime / 2, "linear");
    $(name).animate({width: radiusWidth + "px", height: radiusWidth + "px", marginTop: -radiusWidth/2 + "px", marginLeft: -radiusWidth/2 + "px", backgroundColor: "#EE82EE00"}, activeTime / 2, "linear");
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

function meteor()
{
    var num = random();
    if (num < pMeteor)
    {
        var p = randFloat(0.8, 1.5, 2);
        var top = randInt(0,50);
        var right = randInt(0,50);
        var width = $("#window").width();
        var height = $("#window").height();
        var distance = width * p;
        var time = meteorTimeStandard * p;

        $("#body").append("<div class='meteor' id='meteor" + meteorCount + "'></div>");
        $("#meteor" + meteorCount).css("top", top + "%");
        $("#meteor" + meteorCount).css("right", right + "%");
        $(".meteor").css("width", height / 4 + "px");
        $(".meteor").css("height", height / 80 + "px");
        $(".meteor").css("border-top-left-radius", height / 80 + "px");
        $(".meteor").css("border-bottom-left-radius", height / 80 + "px");

        $("#meteor" + meteorCount).animate({top: "+=" + distance / 3 + "px", right: "+=" + distance / 3 + "px", opacity: "1"}, time / 3, "linear");
        $("#meteor" + meteorCount).animate({top: "+=" + distance / 3 + "px", right: "+=" + distance / 3 + "px"}, time / 3,"linear");
        $("#meteor" + meteorCount).animate({top: "+=" + distance / 3 + "px", right: "+=" + distance / 3 + "px", opacity: "0"}, time / 3, "linear");

        meteorCount += 1;
    }
}

function main()
{
    initScreen();
    initAlert();
    initFont();

    setInterval(function()
    {
        meteor();
        removeMeteor();
    }, meteorAppendTime);

    $("#no").click(function(mouse)
    {
        clickStatus = "no";
        if (buttonStatus == "normal")
        {
            active("#no-radius", mouse);
            changeText();
            clickTime += 1;
        }
    });

    $("#yes").click(function(mouse)
    {
        active("#yes-radius", mouse);
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