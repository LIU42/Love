var color_list = ["#FFFFFF","#FF0000","#FFFF00","#00BFFF","#00FF00","#A000A0","#FFA500"];
var p_firework = 0.5;
var firework_onscreen = 6;
var fire_time = 500;
var firework_count = 0;
var alpha_max = 10;
var uptime_standard = 1500;
var flame_time = 1200;

function remove_firework()
{
    for (var i=0;i<firework_count-firework_onscreen;i++)
    {
        $("#firework"+i).remove();
    }
}

function firework()
{
    var screen_width = $("#body").width();
    var screen_height = $("#body").height();
    var num = random();

    if (num < p_firework)
    {
        var p = randfloat(0.5,1,2);
        var height = screen_height * p;
        var uptime = uptime_standard * p;
        var alpha = randint(-alpha_max,alpha_max);
        var beta = randint(0,360);
        var color = randchoice(color_list);

        $("#body").append(''+
        '<div class="table" id="firework' + firework_count + '">'+
            '<div class="fire_zone" id="zone' + firework_count + '">'+
                '<div class="zone_path zone_path0">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path1">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path2">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path3">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path4">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path5">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path6">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path7">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path8">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path9">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path10">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path11">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path12">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path13">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
                '<div class="zone_path zone_path14">'+
                    '<div class="zone_work zone_work' + firework_count + '"></div>'+
                '</div>'+
            '</div>'+
            '<div class="path" id="path' + firework_count + '">'+
                '<div class="path_work" id="path_work' + firework_count + '"></div>'+
            '</div>'+
        '</div>');

        $("#firework" + firework_count).css("height",height + "px");
        $(".table").css("width",screen_height * 0.5 + "px");
        $(".table").css("left",(screen_width - screen_height * 0.5) * 0.5 + "px");
        $(".fire_zone").css("height",$(".table").width());

        $("#path" + firework_count).css("height",height - $(".table").width()/2 + "px");
        $(".path_work").css("height",$(".path").width() * 30 + "px");
        $(".path_work").css("border-top-left-radius",$(".path").width() + "px");
        $(".path_work").css("border-top-right-radius",$(".path").width() + "px");

        $(".zone_work").css("border-top-right-radius",$(".zone_path").height() + "px");
        $(".zone_work").css("border-bottom-right-radius",$(".zone_path").height() + "px");

        $("#firework" + firework_count).css("transform","rotate(" + alpha + "deg)");
        $("#zone" + firework_count).css("transform","rotate(" + beta + "deg)");
        $("#path_work" + firework_count).css("background-image","linear-gradient(to bottom," + color + "FF," + color + "00 100%)");
        $(".zone_work" + firework_count).css("background-image","linear-gradient(to left," + color + "FF," + color + "00 100%)");

        $("#path_work" + firework_count).animate({top: "0%"},uptime,"linear");
        $("#path_work" + firework_count).animate({opacity: "0"},0,"linear");
        $(".zone_work" + firework_count).animate({right: "100%"},uptime,"linear");
        $(".zone_work" + firework_count).animate({right: "70%"},flame_time/2,"linear");
        $(".zone_work" + firework_count).animate({right: "40%",opacity: "0"},flame_time/2,"linear");

        firework_count += 1;
    }
}

function main()
{
    setInterval(function()
    {
        firework();
        remove_firework();
    },fire_time);
}