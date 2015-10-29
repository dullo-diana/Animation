function Style(selector) {
    this.id = [].slice.call(document.querySelectorAll(selector));
}

Style.prototype.display = function(value)
{
  this.id.forEach(function(entry){
    entry.style.display = value;
  })
}

Style.prototype.size = function(width, height)
{
  this.id.forEach(function(entry){
    entry.style.width  = width;
    entry.style.height = height;
  })
}

Style.prototype.position = function(top, right, bottom, left, type)
{
  this.id.forEach(function(entry){
    entry.style.top      = top;
    entry.style.left     = left;
    entry.style.bottom   = bottom;
    entry.style.right    = right;
    entry.style.position = type;
  })
}

Style.prototype.css = function(property, value)
{
  this.id.forEach(function(entry){
    entry.style.setProperty(property, value);
  })
}
