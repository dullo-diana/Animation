function Popup() {}

Popup.prototype.drawInside = function()
{
  var inside_popup = new Style("#light");
  var max = new Style("#max");

  inside_popup.size("50%", "50%");
  inside_popup.position("25%",0,0,"25%","absolute");
  inside_popup.css("padding", "16px");
  inside_popup.css("background", "white");
  inside_popup.css("border", "16px solid orange");
  inside_popup.css("z-index", "1002");
  inside_popup.css("overflow", "auto");
  inside_popup.css("animation-duration", "1s");
  inside_popup.css("animation-fill-mode", "forwards");
  max.display("none");
}

Popup.prototype.drawOutside = function()
{
  var outside_popup = new Style("#fade");

  outside_popup.size("100%", "100%");
  outside_popup.position(0,0,0,0,"absolute");
  outside_popup.css("background-color", "black");
  outside_popup.css("opacity", 0.80);
  outside_popup.css("z-index", "1001");
  outside_popup.css("-webkit-animation-name", "minimizebackground");
}

function Animation(selector)
{
  this.id = [].slice.call(document.querySelectorAll(selector));
}

Animation.prototype.minimize = function()
{
  this.id.forEach(function(entry){
    entry.addEventListener('click', function()
    {
        var inside_popup = new Style("#light");
        var i = 25;
        var b = 50;
        function increment(by){
            return i = (i) % 360 + by;
        }
        function decrement(by){
            return b = (b) % 360 - by;
        }

        var pos = setInterval(function(){
          var counter = increment(2);
          inside_popup.position(""+counter+"%",0,0,""+counter+"%","absolute");
          if(counter == 89)
          {
            clearInterval(pos);
          }
        }, 1);

        var size = setInterval(function(){
          var counter = decrement(2);
          inside_popup.size(""+counter+"%",""+counter+"%");
          if(counter == 4)
          {
            clearInterval(size);
          }
        }, 1);
        var outside_popup = new Style("#fade");
        var max = new Style("#max");
        var min = new Style("#min");
        inside_popup.css("background","orange");
        inside_popup.css("border","5px solid black");
        max.display("block");
        min.display("none");
        outside_popup.display("none");
    }, false)
  })
}

Animation.prototype.maximize = function()
{
  this.id.forEach(function(entry){
    entry.addEventListener('click', function()
    {
      var inside_popup = new Style("#light");
      var i = 4;
      var b = 89;
      function increment(by){
          return i = (i) % 360 + by;
      }

      function decrement(by){
          return b = (b) % 360 - by;
      }

      var pos = setInterval(function(){
        var counter = decrement(2);
        inside_popup.position(""+counter+"%",0,0,""+counter+"%","absolute");
        if(counter == 25)
        {
          clearInterval(pos);
        }
      }, 1);

      var size = setInterval(function(){
        var counter = increment(2);
        inside_popup.size(""+counter+"%",""+counter+"%");
        if(counter == 50)
        {
          clearInterval(size);
        }
      }, 1);
      var outside_popup = new Style("#fade");
      var max = new Style("#max");
      var min = new Style("#min");
      inside_popup.css("background","white");
      inside_popup.css("border","16px solid orange");
      max.display("none");
      min.display("block");
      outside_popup.display("block");
    }, false)
  })
}

var pop = new Popup();
var min = new Animation("#min");
var max = new Animation("#max");

pop.drawInside();
pop.drawOutside();
min.minimize();
max.maximize();
