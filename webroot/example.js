/***************************************************************
* Copyright notice
*
* (c) 2010-2017 Chi Hoang
*  All rights reserved
*
***************************************************************/
 function scrollTomid(dir) {
	if (dir=="up") {
		var pos = window.innerHeight-window.outerHeight/2*-6;
	} else {
		var pos = window.innerHeight-window.outerHeight/2*-6;
	}	
	console.log("scrollTo:"+ pos); 
	//http://stackoverflow.com/questions/15691569/javascript-issue-with-scrollto-in-chrome
	setTimeout(function() {window.scrollTo(0,pos);},500);
 }			
 //http://stackoverflow.com/questions/15932650/body-scrollheight-doesnt-work-in-firefox
 function getDocHeight() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}
//http://stackoverflow.com/questions/14505224/js-set-window-height-using-current-window-size
function setWindowHeight(){
	//var windowHeight = window.innerHeight;
	var windowHeight = getDocHeight();
	document.body.style.height = windowHeight + "px";
	document.body.scrollHeight = windowHeight + "px";
	console.log("DocBodyStyleHeight:"+document.body.style.height);
	console.log("WinInnerHeight:"+window.innerHeight);
	console.log("WinScrollY:"+window.scrollY);
    console.log("DocBodyScrollHeight:"+document.body.scrollHeight);
}
window.addEventListener("resize",setWindowHeight,false);

window.onload = function ready () {
	 setWindowHeight();
	 l = new Publisher(new List());
	 var iplong=0;
	 var start=Math.floor(iplong/Number(l.step))*Number(l.step);
	 var end=(start+100*Number(l.step))-Number(l.step);
	 l.Request(start,end, "down");
	 
	 window.onscroll = function(ev) {
		 
		//http://stackoverflow.com/questions/15484084/make-element-fixed-on-scroll
		var el = document.getElementById('666');
		
		if (el != null && document.body.scrollTop > 50){
			el.style.position = 'fixed';
			el.style.top = '0px';
		}
		else if (el != null)
		{
			el.style.position = 'static';
			el.style.top = 'auto';
		}
		
		//http://blog.grayghostvisuals.com/js/detecting-scroll-position/     
		if (document.body.scrollTop == 0) {
			console.log("Top of page");
			setWindowHeight();
			
			var t = l.observers.count();				
			switch (l.direction) {
				case "down": {					
					//var page = Math.floor((a-100)/100)*Number(l.range) + Number(l.range)+Math.floor((a-100)/100)*Number(l.step);
					if (t<=100) {
						var page = Number(l.range)*10;
					} else if (t<=200) {
						var page =  Number(l.range)+2*Number(l.step);
					}
					l.Request(Number(l.from)-page-Number(l.step)-Number(l.step),Number(l.from)-page+Number(l.range)-Number(l.step),"up");
					break;
				};
				case "up": {
					l.Request(Number(l.from)-Number(l.range)*10,Number(l.from),"up");
					break;
				}
				default: {
					l.Request(Number(l.from)-Number(l.range)-Number(l.step)-Number(l.step),Number(l.from)-Number(l.step),"up");
					break;
				}
			} 
			//scrollTomid("up");			
		}
		//http://stackoverflow.com/questions/15260184/strange-behaviour-of-chrome-at-window-scrollto
		if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
			// you're at the bottom of the page
			console.log("Bottom of page");
			setWindowHeight();
			
			switch (l.direction) {
				case "down": {
					l.Request(Number(l.to)+Number(l.step),Number(l.to)+Number(l.range)+Number(l.step),"down");  
					break;
				};
				case "up": {
					l.Request(Number(l.to)+Number(l.range)+Number(l.range)+Number(l.step)+Number(l.step),Number(l.to)+Number(l.range)+Number(l.range)+Number(l.range)+Number(l.step)+Number(l.step),"down"); 
					break;
				}
				default: {
					l.Request(Number(l.to)+Number(l.step),Number(l.to)+Number(l.range)+Number(l.step),"down"); 
					break;
				}
			}
			//scrollTomid("down");
		}
	};
}

