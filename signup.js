function visibilitys()
{
  hide();
  hidead1();
  document.getElementById("adbutton1").className="ad-buttonh";
  document.getElementById("adbutton2").className="ad-buttonh";
  var s=document.getElementById("d-signup");
  s.style.height="450px";
  s.style.width="400px";
  s.style.padding="10px";
  s.className = "shows"; // Fade in
}
function hides()
{
  document.getElementById("adbutton1").className="ad-button";
  document.getElementById("adbutton2").className="ad-button";
  showad1();
  document.getElementById("d-signup").className = "hides";
}


function validates()
{
var name=document.fms.name.value;
var pass=document.fms.pass.value;
var pass2=document.fms.pass2.value;
var x=document.fms.email.value;
var status=false;
var atposition=x.indexOf("@");
var dotposition=x.lastIndexOf(".");

if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){
  document.getElementById("email1").innerHTML="<img height=15 width=15 src='unchecked.png'></img>";
  status=false;
}
else
{
document.getElementById("email1").innerHTML="<img height=15 width=15 src='checked.png'></img>";
status=true;
}

if(name.length<1)
{	document.getElementById("nameloc").innerHTML="<img height=15 width=15 src='unchecked.png'></img>";
status=false;
}
else
{
document.getElementById("nameloc").innerHTML="<img height=15 width=15 src='checked.png'></img>";
status=true;
}

if(pass.length<6)
{
document.getElementById("pas").innerHTML="<img height=15 width=15 src='unchecked.png'></img>";
status=false;
}
else
{
document.getElementById("pas").innerHTML="<img height=15 width=15 src='checked.png'></img>";
status=true;
}

if(pass!=pass2)
{
document.getElementById("pas2").innerHTML="<img height=15 width=15 src='unchecked.png'></img>";
status=false;
}
else if(pass.length>=6)
{
document.getElementById("pas2").innerHTML="<img height=15 width=15 src='checked.png'></img>";
status=true;
}
else
{
document.getElementById("pas2").innerHTML="<img height=15 width=15 src='unchecked.png'></img>";
status=false;
}
return status;
}
