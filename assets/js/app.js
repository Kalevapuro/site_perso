app = {

  init:function(){
    console.log("coucou")
  },

  // Scroll to anchors
  myLastScrollTo: function(id)  {
    let e = document.getElementById(id);
    let box = e.getBoundingClientRect();
    window.scrollBy(0, (box.top - 100));
  },
  
  myScrollTo: function(id) {
    let e = document.getElementById(id);
    let box = e.getBoundingClientRect();
    let k, inc;
    inc = (box.top >= 0) ? 1 : -1;
    for (k = 0; k < 49; k++) setTimeout("window.scrollBy(0," + Math.floor(box.top / 50) + ")", 10 * k);
    setTimeout("app.myLastScrollTo('" + id + "')", 500);
  }
}

app.init();

// 