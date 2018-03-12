(function($) {
  function start(it, arr, x, timer){
    if(x < arr.length){
      setTimeout(function(){
        input = arr[x];
        bililiteRange(it).bounds("selection").sendkeys(input).select();
        start(it, arr, x+1,timer);
      }, timer);
    }
  }
  $.fn.sendkeys = function(x, y) {
    if(y == undefined || y == 0){
      timer = 0;
    }else{
      timer = y/x.length;
    }
    if(timer > 0){
      x = x.replace(/([^{])\n/g, "$1{enter}").match(/.{1}/g);
      return this.each(function() {
        start(this, x, 0, timer);
        this.focus();
      });
    }else{
      x = x.replace(/([^{])\n/g, "$1{enter}");
      return this.each(function() {
        bililiteRange(this).bounds("selection").sendkeys(x).select();
        this.focus();
      });
    }
  };
  $.event.special.keydown = $.event.special.keydown || {};
  $.event.special.keydown._default = function(e) {
    if (e.isTrusted) {
      return false;
    }
    if (e.ctrlKey || (e.altKey || e.metaKey)) {
      return false;
    }
    if (e.key == null) {
      return false;
    }
    var target = e.target;
    if (target.isContentEditable || (target.nodeName == "INPUT" || target.nodeName == "TEXTAREA")) {
      var key = e.key;
      if (key.length > 1 && key.charAt(0) != "{") {
        key = "{" + key + "}";
      }
      $(target).sendkeys(key);
      return true;
    }
    return false;
  };
})(jQuery);
