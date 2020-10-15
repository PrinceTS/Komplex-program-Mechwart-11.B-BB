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

$(document).ready(function()
{
  $("#HDDpopup").hover(function()
  {
    $(".HDDpopup").css("visibility", "visible");
  },
  function()
  {
    $(".HDDpopup").css("visibility", "hidden");
    
  }
  );

  $("#SSDpopup").hover(function()
  {
    $(".SSDpopup").css("visibility", "visible");
  },
  function()
  {
    $(".SSDpopup").css("visibility", "hidden");
    
  }
  );

  $("#viruspopup").hover(function()
  {
    $(".viruspopup").css("visibility", "visible");
  },
  function()
  {
    $(".viruspopup").css("visibility", "hidden");
    
  }
  );

  $("#POSTpopup").hover(function()
  {
    $(".POSTpopup").css("visibility", "visible");
  },
  function()
  {
    $(".POSTpopup").css("visibility", "hidden");
    
  }
  );
}
);

function Test()
{
var points = 0;
console.log(document.getElementById('hdd3').value)
if(document.getElementById('hdd3').checked) points++;
console.log(points);
console.log(document.getElementById('ssd1').value)
if(document.getElementById('ssd1').value == "Solid State Drive") points++;
console.log(points);
console.log(document.getElementById('virus2').value)
if(document.getElementById('virus2').checked) points++;
console.log(points);
console.log(document.getElementById('POST2').value)
if(document.getElementById('POST2').checked) points++;
console.log(points);

alert("Ennyi pontod lett:" + points);
}
