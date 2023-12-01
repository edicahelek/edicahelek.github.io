/**
* This generic javascript function auto slides images & function gets triggered on page load.

HTML structure of images on page - 

<div id="carousel">
    <div class="inactive">
       <img width="946" height="473" alt="" src="/files/hp_photo_2.jpg" class="car-img">
   </div>
   <div class="inactive">
       <img width="946" height="473" alt="" src="/files/hp_photo_3.jpg" class="car-img">
   </div>
   <div class="active">
       <img width="946" height="472" alt="" src="/files/home-hero-2.jpg" class="car-img">
   </div>
   <div class="inactive">
       <img width="946" height="472" src="/files/home-hero-4.jpg" alt="" class="car-img">
   </div>
</div>


**/

onload = function() {

            var e, i = 0;
            e = document.getElementById('carousel').getElementsByTagName ('div');
                while (e[i++]) {
                 e.onmouseover = function () {
                 clearTimeout(t);
                 }

                 e.onmouseout = function () {
                 t=setTimeout("timedCount()",timeOut);
                 }
         }
}

c=0;
timeOut = 5000;
var t;
t=setTimeout("timedCount()",timeOut);

function timedCount() {
        var getImage = document.getElementById('carousel').getElementsByTagName('div');
        img = getImage.length-1;
             for (var a=0; a<getImage.length; a++) {
                 if (getImage[a].className.indexOf("active") == 0) {
                     getImage[a].className = 'inactive';
                     c = a;
                 }
            }
         c++;
         if (c>img) {c=0;}
         getImage[c].className = 'active';
         t=setTimeout("timedCount()",timeOut);
}


