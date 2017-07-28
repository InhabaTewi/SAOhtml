// JavaScript Document

var clockText=document.getElementById('clockText');
var cssFiles=["style1.css","style2.css","style3.css","style4.css","clock.css"];
var bgImgs=["img/blueCycle.png","img/blackCycle.png","img/blackCycle.png","img/blackCycle.png","img/blackCycle.png"];
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
function opacityUp(){
	
	var imgbotbox=document.getElementById('imgbotbox');
	var oimgbox=window.getComputedStyle(imgbotbox).getPropertyValue("opacity");
	if (oimgbox<1&&oimgbox!==null){
	imgbotbox.style.opacity=parseFloat(oimgbox)+0.1;
	}
	else{
		imgbotbox.style.opacity=0.1;
	}
}
function opacityDown(){
	
	var imgbotbox=document.getElementById('imgbotbox');
	var oimgbox=window.getComputedStyle(imgbotbox).getPropertyValue("opacity");
	if (oimgbox>0.1&&oimgbox!==null){
	imgbotbox.style.opacity=parseFloat(oimgbox)-0.1;
	}
	else{
		imgbotbox.style.opacity=1;
	}
}
function dateOrTime()
{
	if(/:/g.test(clockText.textContent)==true){
	   var time=new Date();
		var year=time.getFullYear();
	   var day=time.getDate();
		var month=time.getMonth();
		var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
		var week=weekday[time.getDay()];
		document.getElementById('clockText').textContent=year.toString().charAt(2)+year.toString().charAt(3)+'-'+month.toString()+'-'+day.toString();
		document.getElementById('weekText').textContent=week;
		
	}
	   else{
	   document.getElementById('clockText').textContent='00:00:00';
		   document.getElementById('weekText').textContent=null;
	   }
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
	if(/:/g.test(clockText.textContent)===true){
	clockText.textContent=strTime;}
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







