app = {

  init:function(){
    app.dragToScroll();
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
  },

  dragToScroll: function(){
    const slider = document.querySelector('.project__list');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  }
}



app.init();

// 