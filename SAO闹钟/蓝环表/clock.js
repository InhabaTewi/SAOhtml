// JavaScript Document

var clockText=document.getElementById('clockText');
var colorText=document.getElementById('colorCodeText');


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
	var Colorvar=parseInt(255-Math.abs(255*(hours-12)/24));
	
	
	clockText.textContent=strTime;
	//colorText.textContent=Colorvar.toString();
	var imgbg=document.getElementById('imgbox');
	imgbg.style.backgroundColor='rgba(' + Colorvar+ ',' + Colorvar+ ',' + Colorvar + ',' + 1.00 + ')';//255white-----0black //b0---w12---b0
var deg=((hours%12)/12)*360;
var pointer=document.getElementById('pointer');
pointer.style.transform='rotate('+deg+'deg)';

	

}

setInterval( clockRun,1000);







