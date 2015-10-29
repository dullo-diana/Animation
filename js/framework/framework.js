var T = function(selector) {
  return document.querySelectorAll(selector);
}

NodeList.prototype.outside = function (prop, val) {
  Array.prototype.forEach.call(this, function(item){
    item.addEventListener('click', function()
    {
      var id = window.frames[0].document.getElementById('sentData');
      id.innerHTML = id.innerHTML + 'Hello from outside';
    }, false)
  })
};

NodeList.prototype.inside = function (prop, val) {
  Array.prototype.forEach.call(this, function(item){
    item.addEventListener('click', function()
    {
      var id = window.parent.document.getElementById('gotData');
      id.innerHTML = id.innerHTML + 'Hello from inside';
    }, false)
  })
};
