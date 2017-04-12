// ==UserScript==
// @name         Goliath for mobiles
// @version      0.1
// @description  Make Goliath more user friendly for mobiles and smaller platforms.
// @author       _Rikardo_
// @icon         https://i.imgur.com/mS8hx5D.png
// @match        https://goliath.hypixel.net*
// @match        https://goliath.hypixel.net/*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js
// ==/UserScript==
var url = window.location.href;
var nav = "<ul class='uk-navbar-nav'><li class='uk-parent' data-uk-dropdown='' aria-haspopup='true' aria-expanded='false'><a href=''>Tools <i class='uk-icon-caret-down'></i></a><div class='uk-dropdown uk-dropdown-navbar' style=''><ul class='uk-nav uk-nav-navbar'><li class='uk-nav-header'>STAFF</li><li><a href='/'><i class='uk-icon-home'></i> Home</a></li><li><a href='/userinfo'><i class='uk-icon-search'></i> User Lookup</a></li><li><a href='/punish'><i class='uk-icon-gavel'></i> Punisher</a></li><li><a href='/staffchat'><i class='uk-icon-comment'></i> Chat</a></li><li><a href='/guilds'><i class='uk-icon-users'></i> Guild Manager</a></li><li><a href='/chatreports'><i class='uk-icon-flag'></i> Chat Reports</a></li><li><a href='/reportslookup'><i class='uk-icon-search'></i> Reports Lookup</a></li><li><a href='/cheatwatcher'><i class='uk-icon-crosshairs'></i> Cheat Watcher</a></li><li><a href='/dongdar'><i class='uk-icon-picture-o'></i> Dongdar</a></li><li><a href='/stafflist'><i class='uk-icon-list-ul'></i> Online List</a></li><li><a href='/welcomer'><i class='uk-icon-heart'></i> Welcomer</a></li><li><a href='/profile'><i class='uk-icon-user'></i> Profile</a></li><li><a href='/logout'><i class='uk-icon-sign-out'></i> Sign Out</a></li></ul></div></li></ul>";

var version = 0.1;
var request = new XMLHttpRequest();
request.onreadystatechange = function()
{
    if (request.readyState == XMLHttpRequest.DONE)
    {
        var updatedScriptVersion = request.responseText;
        if(version < updatedScriptVersion)
        {
            console.log("Update script");
            window.location.href = "https://github.com/Rikeardo/Mobile-Goliath/raw/master/MobileGoliath.user.js";
        }
    }
};
request.open('GET', 'https://raw.githubusercontent.com/Rikeardo/Mobile-Goliath/master/MobileVersion.json', true);
request.send(null);

$("<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'>").insertAfter("title:first");

if(url.includes("https://goliath.hypixel.net/?redirect=")||url == ("https://goliath.hypixel.net/"))
{
    $("<style type='text/css'>body{width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;}#content{top:initial;left:initial;margin:0;display:flex;flex-direction:column;justify-content:center;align-items:center;}@media(max-width:330px){#content{width: 100vw;}.uk-form-row{width:80vw;}.uk-form-horizontal,.uk-form-controls,.uk-button{margin:0!important;}.uk-form-controls{display:flex;flex-direction:column;justify-content:center;align-items:center;}}</style>").insertAfter("body:first");
}

if(url == ("https://goliath.hypixel.net/home"))
{
    $('.uk-navbar-nav').remove();
    $('.uk-navbar-flip').remove();
    $('span[style*="text-align: right; float: right; display: inline-block; padding-right: 10px;"]').remove();

    $(nav).appendTo(".container:first");
    $("<style type='text/css'>.container{min-width:initial;}.uk-width-medium-1-3, .uk-width-medium-2-6,.uk-width-medium-2-3, .uk-width-medium-4-6{width:100%;}@media(max-width:1220px){.uk-navbar-flip{float:left;}.uk-grid{display:flex;flex-direction:column;justify-content:center;align-items:center;}}</style>").insertAfter("body:first");
}
if(url == ("https://goliath.hypixel.net/staffchat"))
{
    $('.uk-navbar-nav').remove();
    $('.uk-navbar-flip').remove();
    $('.uk-width-3-10').remove();
    $('span[style*="text-align: right; float: right; display: inline-block; padding-right: 10px;"]').remove();
    $(nav).appendTo(".container:first");
    $("<style type='text/css'>.container{min-width:initial;}.uk-width-7-10{width:100%;}#chat{font-size:80%;max-height:65vh;}#content{padding:25px 10px 25px 10px;}</style>").insertAfter("body:first");
}
if(url.includes("https://goliath.hypixel.net/userinfo"))
{
    $('.uk-navbar-nav').remove();
    $('.uk-navbar-flip').remove();
    $('.gray:first').remove();
    $('span[style*="text-align: right; float: right; display: inline-block; padding-right: 10px;"]').remove();
    $(nav).appendTo(".container:first");
    $("<style type='text/css'>.container{min-width:initial;}#columnx{width:initial;}.uk-width-1-4{width:initial;margin-top:50px;}.uk-grid{display:flex;flex-direction:column;}#punisher{width:initial;height:350px;}.uk-form-horizontal,.uk-form-controls-spaced{margin-left:0!important;}@media(max-width:1220px){}</style>").insertAfter("body:first");

    var names = [];
    var maxInLine = 4; // Users shown
    socket.on("autocompleteResponse", function(data) {
        data = JSON.parse(data);
        names = data;
        html = "<br />Online players: ";
        $("#autocompleteChoices").css("display","flex");
        $("#autocompleteChoices").css("flex-direction","row");
        $("#autocompleteChoices").css("flex-wrap","wrap");
        $("#autocompleteChoices").css("align-items","flex-end");
        for (var index = 0; index < (data.length > maxInLine ? maxInLine : data.length); index++) {
            if (index === 0)
            {
                html += "<a style='margin: 0 7px 0 7px;' href='/userinfo?player=" + names[index] + "'>" + names[index] + "</a>";
            }
            else
            {
                html += "<a style='margin-right: 7px;' href='/userinfo?player=" + names[index] + "'>" + names[index] + "</a>";
            }
        }
        $('.showAll').remove();
        if (data.length > maxInLine) {
            html += " and " + (data.length - maxInLine) + " more.";
            $("<div class='showAll' style='height: 20px;display:flex;flex-direction:colum;justify-content:center;align-items:center;cursor:pointer;margin: 10px 0 0 0;border: 1px solid white;font-size:90%;border-radius:4px;width: 80px;'>Show all</div>").insertAfter("#autocompleteChoices");
            document.getElementsByClassName('showAll')[0].addEventListener('click', displayNames, false);
        } else if (data.length === 0) {
            html += "<span class='gray' style='margin: 0 7px 0 7px;'>None.</span>";
        }

        $("#autocompleteChoices").html(html);
    });
}

if(url == ("https://goliath.hypixel.net/punish"))
{
    $('.uk-navbar-nav').remove();
    $('.uk-navbar-flip').remove();
    $('span[style*="text-align: right; float: right; display: inline-block; padding-right: 10px;"]').remove();
    $(nav).appendTo(".container:first");
    $("<style type='text/css'>.container{min-width:initial;}#punisher{width:initial;height:350px;}.uk-form-horizontal,.uk-form-controls-spaced{margin-left:0!important;}</style>").insertAfter("body:first");
}

if(url.includes("https://goliath.hypixel.net/guilds"))
{
    $('.uk-navbar-nav').remove();
    $('.uk-navbar-flip').remove();
    $('.uk-width-5-10').remove();

    $('span[style*="text-align: right; float: right; display: inline-block; padding-right: 10px;"]').remove();
    $(nav).appendTo(".container:first");
    $('.uk-grid:first').css("display","flex");
    $('.uk-grid:first').css("flex-directiong","column");
    $("<style type='text/css'>.container{min-width:initial;}.uk-width-2-10,.uk-width-3-10{width:initial;padding:0;}.uk-grid{margin:0;display:flex;flex-direction:row;}img{margin-right:10px;}@media(max-width:959px){.uk-form-controls-spaced{margin-left:0!important;}}</style>").insertAfter("body:first");

    var names = [];
    var maxInLine = 4; // Guilds shown
    socket.on("autocompleteResponse", function(data) {
        data = JSON.parse(data);
        names = data;
        html = "<br />Guilds: ";
        $("#autocompleteChoices").css("display","flex");
        $("#autocompleteChoices").css("flex-direction","row");
        $("#autocompleteChoices").css("flex-wrap","wrap");
        $("#autocompleteChoices").css("align-items","flex-end");
        for (var index = 0; index < (data.length > maxInLine ? maxInLine : data.length); index++) {
            if (index === 0)
            {
                html += "<a style='margin: 0 7px 0 7px;' href='/guilds?name=" + names[index] + "'>" + names[index] + "</a>";
            }
            else
            {
                html += "<a style='margin-right: 7px;' href='/guilds?name=" + names[index] + "'>" + names[index] + "</a>";
            }
        }
        $('.showAll').remove();
        if (data.length > maxInLine) {
            html += " and " + (data.length - maxInLine) + " more.";
            $("<div class='showAll' style='height: 20px;display:flex;flex-direction:colum;justify-content:center;align-items:center;cursor:pointer;margin: 10px 0 0 0;border: 1px solid white;font-size:90%;border-radius:4px;width: 80px;'>Show all</div>").insertAfter("#autocompleteChoices");
            document.getElementsByClassName('showAll')[0].addEventListener('click', displayGuildNames, false);
        } else if (data.length === 0) {
            html += "<span class='gray' style='margin: 0 7px 0 7px;'>None.</span>";
        }

        $("#autocompleteChoices").html(html);
    });
}

if(url == ("https://goliath.hypixel.net/chatreports"))
{
    $('.uk-navbar-nav').remove();
    $('.uk-navbar-flip').remove();
    $('span[style*="text-align: right; float: right; display: inline-block; padding-right: 10px;"]').remove();
    $(nav).appendTo(".container:first");
    $("<style type='text/css'>.container{min-width:initial;}.uk-grid{display:flex;flex-wrap:wrap;}@media(max-width:1300px){.uk-width-1-4,.uk-width-2-4{width:initial;}#punisher{width:initial;height:350px;}.uk-form-horizontal,.uk-form-controls-spaced{margin-left:0!important;}#previousMutes{margin-top:20px;}.uk-table{width:initial;font-size:60%;}}</style>").insertAfter("body:first");
}

if(url == ("https://goliath.hypixel.net/dongdar"))
{
    $('.uk-navbar-nav').remove();
    $('.uk-navbar-flip').remove();
    $('span[style*="text-align: right; float: right; display: inline-block; padding-right: 10px;"]').remove();
    $(nav).appendTo(".container:first");
}

if(url == ("https://goliath.hypixel.net/stafflist"))
{
    $('.uk-navbar-nav').remove();
    $('.uk-navbar-flip').remove();
    $('span[style*="text-align: right; float: right; display: inline-block; padding-right: 10px;"]').remove();
    $(nav).appendTo(".container:first");
    $("<style type='text/css'>.container{min-width:initial;}</style>").insertAfter("body:first");
}

if(url == ("https://goliath.hypixel.net/welcomer"))
{
    $('.uk-navbar-nav').remove();
    $('.uk-navbar-flip').remove();
    $('#content').empty();
    $("<p>You should be online and not on your phone / mobile device when doing this ;)<p>").appendTo("#content:first");
    $('span[style*="text-align: right; float: right; display: inline-block; padding-right: 10px;"]').remove();
    $(nav).appendTo(".container:first");
    $("<style type='text/css'>.container{min-width:initial;}</style>").insertAfter("body:first");
}

if(url == ("https://goliath.hypixel.net/profile"))
{
    $('.uk-navbar-nav').remove();
    $('.uk-navbar-flip').remove();
    $('span[style*="text-align: right; float: right; display: inline-block; padding-right: 10px;"]').remove();
    $(nav).appendTo(".container:first");
    $("<style type='text/css'>.container{min-width:initial;}</style>").insertAfter("body:first");
}

function displayNames()
{
    var htmlText = "<br />Online players: ";
    $('.showAll').remove();
    for (var index = 0; index < names.length; index++)
    {
        if (index === 0)
        {
            htmlText += "<a style='margin: 0 7px 0 7px;' href='/userinfo?player=" + names[index] + "'>" + names[index] + "</a>";
        }
        else
        {
            htmlText += "<a style='margin-right: 7px;' href='/userinfo?player=" + names[index] + "'>" + names[index] + "</a>";
        }
    }
    $("#autocompleteChoices").html(htmlText);

}
function displayGuildNames()
{
    var htmlText = "<br />Guilds: ";
    $('.showAll').remove();
    for (var index = 0; index < names.length; index++)
    {
        if (index === 0)
        {
            htmlText += "<a style='margin: 0 7px 0 7px;' href='/guilds?name=" + names[index] + "'>" + names[index] + "</a>";
        }
        else
        {
            htmlText += "<a style='margin-right: 7px;' href='/guilds?name=" + names[index] + "'>" + names[index] + "</a>";
        }
    }
    $("#autocompleteChoices").html(htmlText);
}
