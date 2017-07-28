// JavaScript Document

var clockText=document.getElementById('clockText');
var cssFiles=["style1.css","style2.css","clock.css"];
var bgImgs=["img/blueCycle.png","img/blackCycle.png","img/blackCycle.png"];
var i=0;
function nextStyle()
{	
	if (i>=cssFiles.length)
		{
			i=0;
		}
	var asheet=cssFiles[i];
	var aimg=bgImgs[i];
	document.getElementById('styleCss').setAttribute('href',asheet);
	document.getElementById('clockbg').setAttribute('src',aimg);
	i++;
	
}
function clockRun(){
var time=new Date();
var hours=time.getHours();
var mins=time.getMinutes();
var seconds=time.getSeconds();
var stringhours=hours.toString();
var stringmins=mins.toString();
var stringseconds=seconds.toString();
	if(stringhours.length<2)
		{
			stringhours='0'+stringhours;
		}
	if(stringmins.length<2)
		{
			stringmins='0'+stringmins;
		}
	if(stringseconds.length<2)
		{
			stringseconds='0'+stringseconds;
		}
	
	var strTime=stringhours+':'+stringmins+':'+stringseconds;
	var Colorvar;
	if(i===2){
	 Colorvar=parseInt(255-Math.abs(255*(hours-12)/24));
	}
	else{
		 Colorvar=parseInt(255-Math.abs(255*(hours-12)/24));
		
	}
	
	clockText.textContent=strTime;
	//colorText.textContent=Colorvar.toString();
	//var imgbg=document.getElementById('imgbox');
	var imgbg2=document.getElementById('imgbotbox');
	//imgbg.style.backgroundColor='rgba(' + Colorvar+ ',' + Colorvar+ ',' + Colorvar + ',' + 1.00 + ')';//255white-----0black //b0---w12---b0
	imgbg2.style.backgroundColor='rgba(' + Colorvar+ ',' + Colorvar+ ',' + Colorvar + ',' + 1.00 + ')';
var deg=((hours%12)/12)*360;
var pointer=document.getElementById('pointer');
pointer.style.transform='rotate('+deg+'deg)';
}

setInterval( clockRun,1000);







