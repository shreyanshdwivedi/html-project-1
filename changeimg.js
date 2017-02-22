var images = new Array();
 /*for (var i = 2; i < 11; i++) {
   images[i]="unchecked.gif";
 }*/
 images[0]="img1.jpg";
 images[1]="img2.jpg";
 images[2]="img3.jpg";
  images[3]="img4.jpg";
   images[4]="img5.jpg";
    images[5]="img6.jpg";
     images[6]="img7.jpg";

 var x = 1;
 function changeImage() {
   document.getElementById('ad').src = images[x];
   if (x < 6) {
     x += 1;
   } else {
     x = 0;
   }
 }

 function previousimg()
 {
   if(x==0)
    x=6;
  else if(x>=6)
    x=0;
   else {
    x=x-1;
   }
   document.getElementById('ad').src = images[x];
 }

function nextimg() {
  if(x>=6)
    x=0;
  else {
    x=x+1;
  }
  document.getElementById('ad').src = images[x];
}

 window.onload = function() {
   setInterval(function () {changeImage();}, 3000);
 }

function hidead1() {
document.getElementById("ad").className="hidead";
}
function showad1()
{
  document.getElementById("ad").className="showad";

}
