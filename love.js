var table_proportion = 0.75;
var table_width = 750;
var table_height = 1000;
var text_code = 1;
var text_change_time = 200;
var active_time = 1000;
var active_proportion = 3.5;
var alert_change_time = 200;
var exit_change_time = 200;
var click_status = "no";
var click_time = 0;
var p_meteor = 0.08;
var meteor_onscreen = 8
var meteor_count = 0;
var meteor_append_time = 150;
var meteor_time_standard = 2500;
var button_status = "normal";
var button_broken_time = 2500;

function init_screen()
{
    var screen_width = window.innerWidth;
    var screen_height = window.innerHeight;

    $("#body").css("width", screen_width);
    $("#body").css("height", screen_height);

    if (screen_width / screen_height > table_proportion)
    {
        $("#table").css("height", "100%");
        $("#table").css("width", screen_height * table_proportion + "px");
        $("#table").css("top", "0px");
        $("#table").css("left", (screen_width - screen_height*table_proportion) / 2 + "px");
    }
    else
    {
        $("#table").css("width", "100%");
        $("#table").css("height", screen_width / table_proportion + "px");
        $("#table").css("left", "0px");
        $("#table").css("top", (screen_height - screen_width / table_proportion) / 2 + "px");
    }
}

function init_alert()
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

function init_font()
{
    var text_height = $("#window").height();
    var button_height = $(".button").height();

    $("#text").css("font-size", text_height * 0.07 + "px");
    $(".button").css("font-size", button_height * 0.4 + "px");
    $("#inform").css("font-size", text_height / 13 + "px");
}

function active(name,mouse)
{
    var button_width = $("#yes").width();
    var radius_width = button_width * active_proportion;

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
    $(name).animate({width: radius_width/2 + "px",height: radius_width/2 + "px",marginTop: -radius_width/4 + "px", marginLeft: -radius_width/4 + "px"}, active_time / 2, "linear");
    $(name).animate({width: radius_width + "px",height: radius_width + "px",marginTop: -radius_width/2 + "px", marginLeft: -radius_width/2 + "px", backgroundColor: "#EE82EE00"}, active_time / 2, "linear");
}

function change_text()
{
    if (text_code <= 10)
    {
        $("#text").fadeOut(text_change_time);
		setTimeout(function()
        {
            text = document.getElementById("text");
            switch (text_code)
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
            text_code += 1;
        },text_change_time);
		$("#text").fadeIn(text_change_time);
    }
    else if (click_time > 99)
    {
        button_status = "broken";
        $("#no").animate({backgroundColor: "#AAAAAAAA", color: "#AAAAAA00"}, button_broken_time);
        $("#inform").html("按钮被你按坏啦!");
        $("#dark").fadeIn(alert_change_time);
    }
    else
    {
        $("#inform").html("哼! 你不同意我就赖着不走了~");
        $("#dark").fadeIn(alert_change_time);
    }
}

function remove_meteor()
{
    for (var i = 0; i <= meteor_count - meteor_onscreen; i++)
    {
        $("#meteor" + i).remove();
    }
}

function meteor()
{
    var num = random();
    if (num < p_meteor)
    {
        var p = randfloat(0.8, 1.5, 2);
        var top = randint(0,50);
        var right = randint(0,50);
        var width = $("#window").width();
        var height = $("#window").height();
        var distance = width * p;
        var time = meteor_time_standard * p;

        $("#body").append("<div class='meteor' id='meteor" + meteor_count + "'></div>");
        $("#meteor" + meteor_count).css("top", top + "%");
        $("#meteor" + meteor_count).css("right", right + "%");
        $(".meteor").css("width", height / 4 + "px");
        $(".meteor").css("height", height / 80 + "px");
        $(".meteor").css("border-top-left-radius", height / 80 + "px");
        $(".meteor").css("border-bottom-left-radius", height / 80 + "px");

        $("#meteor" + meteor_count).animate({top: "+=" + distance / 3 + "px", right: "+=" + distance / 3 + "px", opacity: "1"}, time / 3, "linear");
        $("#meteor" + meteor_count).animate({top: "+=" + distance / 3 + "px", right: "+=" + distance / 3 + "px"}, time / 3,"linear");
        $("#meteor" + meteor_count).animate({top: "+=" + distance / 3 + "px", right: "+=" + distance / 3 + "px", opacity: "0"}, time / 3, "linear");

        meteor_count += 1;
    }
}

function main()
{
    init_screen();
    init_alert();
    init_font();

    setInterval(function()
    {
        meteor();
        remove_meteor();
    }, meteor_append_time);

    $("#no").click(function(mouse)
    {
        click_status = "no";
        if (button_status == "normal")
        {
            active("#no_radius", mouse);
            change_text();
            click_time += 1;
        }
    });

    $("#yes").click(function(mouse)
    {
        active("#yes_radius", mouse);
        click_status = "yes";
        $("#inform").html("就知道你一定会同意的!");
        $("#dark").fadeIn(alert_change_time);
    });

    $("#exit").hover(function()
    {
        $("#exit").stop();
        $("#exit").animate({backgroundColor: "#FF0000"}, exit_change_time);
    });

    $("#exit").mouseleave(function()
    {
        $("#exit").stop();
        $("#exit").animate({backgroundColor: "#FFFFFF00"}, exit_change_time);
    });

    $("#exit").click(function()
    {
        $("#dark").fadeOut(alert_change_time);
        if (click_status == "yes") { window.open("fireworks.html","_self"); }
    });
}