var myvar = setInterval(Time, 1000)

function Time()
{
var TimeDate = new Date();
var TimeHour = TimeDate.getHours();
var TimeMin = TimeDate.getMinutes();
var TimeSec = TimeDate.getSeconds();

if(TimeHour < 10) TimeHour = "0" + TimeHour
if(TimeMin < 10) TimeMin = "0" + TimeMin
if(TimeSec < 10) TimeSec = "0" + TimeSec

document.getElementById("timeOut").innerHTML = TimeHour + ":" + TimeMin + ":"+ TimeSec
}

$(document).ready(function(){
  $("#viruspopup").hover(function(){
    $(".viruspopup").css("visibility", "visible");
  },function(){
    $(".viruspopup").css("visibility", "hidden");
  });
});
