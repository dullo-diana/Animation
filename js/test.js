function Animate(selector) {
    this.id = [].slice.call(document.querySelectorAll(selector));
}

Animate.prototype.minimize = function(selector,selector2)
{
  this.id.forEach(function(entry){
    entry.addEventListener('click', function()
    {
      var id  = [].slice.call(document.querySelectorAll(selector));
      var id2 = [].slice.call(document.querySelectorAll(selector2));
      var max = [].slice.call(document.querySelectorAll("#max"));

      id.forEach(function(e){
        e.style.webkitAnimationName = 'minimize';
      })

      id2.forEach(function(e){
        e.style.display = 'none';
      })

      max.forEach(function(ent){
        ent.style.display = "block";
      })

      entry.style.display = "none";
    }, false)
  })
}

Animate.prototype.maximize = function(selector, selector2)
{
  this.id.forEach(function(entry){
    entry.addEventListener('click', function()
    {
      var id  = [].slice.call(document.querySelectorAll(selector));
      var id2 = [].slice.call(document.querySelectorAll(selector2));
      var min = [].slice.call(document.querySelectorAll("#min"));

      id.forEach(function(e){
        e.style.webkitAnimationName = 'maximize';
      })

      id2.forEach(function(e){
        e.style.display = 'block';
      })

      min.forEach(function(ent){
        ent.style.display = "block";
      })

      entry.style.display = "none";
    }, false)
  })
}

var x = new Animate("#min");
var y = new Animate("#max");

x.minimize(".white_content",".black_overlay");
y.maximize(".white_content",".black_overlay");
