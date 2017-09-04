/* * *************************************************************
 * Copyright notice
 *
 * (c) 2013-2017 Chi Hoang
 *  All rights reserved
 *
 * **************************************************************/
  
function List() {
  this.observerList = [];
  this.sort = "";
  this.func = "";
  return this;
} 
List.prototype = {
  add : function( obj ){
    return this.observerList.push( obj );
  },
  unshift : function( obj ){
    return this.observerList.unshift( obj );
  },
  count : function() {
    return this.observerList.length;
  },
  get : function( index ){
    if( index > -1 && index < this.observerList.length ){
      return this.observerList[ index ];
    }
  },
  reset : function ( index ) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.ip2long > b.ip2long) ? 1 : (b.ip2long > a.ip2long) ? -1 : 0 : -1;});
    this.target();
	this.sort = "";
	this.func = "";
  },
  //http://stackoverflow.com/questions/17987015/ip-address-validation-with-proper-dots-in-between
	isIpAddress : function (s) {
	  if (typeof s !== 'string') { return false; }
		  // There must be 4 parts separated by dots.
		  var parts = s.split('.');
		  if (parts.length !== 4) { return false; }
		  // Each of the four parts must be an integer in the range 0 to 255.
		  for (var i = 0; i < 4; ++i) {
			var part = parts[i];
			// Each part must consist of 1 to 3 decimal digits.
			if (!/^\d{1,3}$/.test(part)) { return false; }
			var n = +part;
			if (0 > n || n > 0xff) { return false; }
		  }
		  return true;
	},
	target : function () {
		document.body.innerHTML = '';
		for (var i=0,x=this.observerList.length;i<x;i++) {
			this.observerList[i].navigation=0;
			if (this.observerList[i].type=="ip" && this.observerList[i].visibility=="show") {			
				
				colclass = (i % 2) ? "column1" : "column2";
	
				this.observerList[i].ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(this.observerList[i].ele);
				
				a = new Subject(100);
				a.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(a.ele);
				a.ele.appendChild(window.document.createTextNode(this.observerList[i].city));   
				
				b = new Subject(100);
				b.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(b.ele);
				b.ele.appendChild(window.document.createTextNode(this.observerList[i].region));
				
				c = new Subject(100);
				c.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(c.ele);
				c.ele.appendChild(window.document.createTextNode(this.observerList[i].country));    
				
				d = new Subject(100);
				d.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(d.ele);
				d.ele.appendChild(window.document.createTextNode(this.observerList[i].isp));
				
				e = new Subject(100);
				e.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(e.ele);
				e.ele.appendChild(window.document.createTextNode(this.observerList[i].proxyType));
				
				f = new Subject(100);
				f.ele.className = colclass + " " + this.observerList[i].ele.id;
				window.document.body.appendChild(f.ele);
				f.ele.appendChild(window.document.createTextNode(this.observerList[i].ipVersion));
				
				//g = new Subject(100);
				//g.ele.className = colclass + " " + this.observerList[i].ele.id;
				//window.document.body.appendChild(g.ele);
				//g.ele.appendChild(window.document.createTextNode(this.observerList[i].proxytype));
				
				h = new Subject(100);
				h.ele.className = "linebreak " + this.observerList[i].ele.id;		
				window.document.body.appendChild(h.ele);
				window.document.getElementById(h.ele.id).style.width=0;
				window.document.getElementById(h.ele.id).style.height=0;
				window.document.getElementById(h.ele.id).style.clear="both";
				window.document.getElementById(h.ele.id).style.float="none";
			 }
		}		
  },
  suipaddr  : function (index) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.iplong > b.iplong) ? 1 : (b.iplong > a.iplong) ? -1 : 0 : -1;});
    this.target();
	this.sort = "suipaddr";
	this.func = this.suipaddr;
  },
  sdipaddr  : function (index) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.iplong < b.iplong) ? 1 : (b.iplong < a.iplong) ? -1 : 0 : -1;});
	this.target();
	this.sort = "sdipaddr";
	this.func = this.sdipaddr;
  },
  sucity : function (index) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.city > b.city) ? 1 : (b.city > a.city) ? -1 : 0 : -1;});
    this.target();
	this.sort = "sucity";
	this.func = this.sucity;
  },
  sdcity : function (index) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.city < b.city) ? 1 : (b.city < a.city) ? -1 : 0 : -1;});
    this.target();
	this.sort = "sdcity";
	this.func = this.sdcity;
  },
  sdcountry : function (index) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.country < b.country) ? 1 : (b.country < a.country) ? -1 : 0 : -1;});
    this.target();
	this.sort = "sdcountry";
	this.func = this.sdcountry;
  },
   sucountry : function (index) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.country > b.country) ? 1 : (b.country > a.country) ? -1 : 0 : -1;});
    this.target();
	this.sort = "sucountry";
	this.func = this.sucountry;
  },
  suregion : function (index) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.region > b.region) ? 1 : (b.region > a.region) ? -1 : 0 : -1;});
    this.target();
	this.sort = "suregion";
	this.func = this.suregion;
  },
  sdregion : function (index) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.region < b.region) ? 1 : (b.region < a.region) ? -1 : 0 : -1;});
    this.target();
	this.sort = "sdregion";
	this.func = this.sdregion;
  },
  suproxytype : function ( index ) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.proxyType > b.proxyType) ? 1 : (b.proxyType > a.proxyType) ? -1 : 0 : -1;});
    this.target();
	this.sort = "suproxytype";
	this.func = this.suproxytype;
  },
  sdproxytype : function ( index ) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.proxyType < b.proxyType) ? 1 : (b.proxyType < a.proxyType) ? -1 : 0 : -1;});
    this.target();
	this.sort = "sdproxytype";
	this.func = this.sdproxytype;
  },
  suisp : function ( index ) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.isp > b.isp) ? 1 : (b.isp > a.isp) ? -1 : 0 : -1;});
    this.target();
	this.sort = "suisp";
	this.func = this.suisp;
  },
  sdisp : function ( index ) {
    this.observerList.sort(function(a,b){return (a.type=="ip") ? (a.isp < b.isp) ? 1 : (b.isp < a.isp) ? -1 : 0 : -1;});
    this.target();
	this.sort = "sdisp";
	this.func = this.sdisp;
  },
  selectcc : function ( index ) {
	 var j=0;
    for (var i=0,x=this.observerList.length;i<x;i++) {
      if (this.observerList[i].country==index || index=="All") {
        ++j;
		this.observerList[i].visibility="show";
      } else {
        this.observerList[i].visibility="hidden";
      }
    }
    this.target();
	this.sort = "selectcc";
	this.func = this.selectcc;
	l.scrollTomid("up",j);
  },
  indexOf : function( obj, startIndex ){
    var i = startIndex;
      while( i < this.observerList.length ){
       if( this.observerList[i] === obj ){
         return i;
       }
       i++;
     }
     return -1;
  },
  removeAt : function( from, to){
    this.from = from || 0;
    this.to = to || 1;    
    this.observerList.splice( from, to );
  }
};
 
var Subject = function (navigation,width,height) {
  this.width = width || "110px";
  this.height = height || "20px";
  this.navigation = navigation || 10;
  this.ele = document.createElement("div");
  this.ele.id = Math.floor((Math.random() * 768716276990) + 1);
  this.ele.className = "column";
  this.ele.style.whiteSpace="nowrap";
  this.ele.style.display="block";
  this.ele.style.cssFloat="left";
  this.ele.style.width = this.width;
  this.ele.style.height = this.height;
  return this;
}

Subject.prototype = {
  update : function (parent,id) {
    this.ele.b=null;
	//this.ele.b=setInterval( function () { parent.Notify(id); },parent.tinterval);
  }
}

var Publisher = function (observers)
{
  this.xhr=[];
  this.n = 25;  
  this.from=0;
  this.to=0;  
  this.observers = observers;
  this.seed = 768716276;
  this.tstart = 1000;
  this.tinterval = 1000000;
  this.step = 256;
  this.range=(100*this.step)-this.step;
  this.ccvalue="All";
  this.cc = ["AU","CN","JP","TH","IN","MY","KR","SG","TW","HK","PH","VN","NO","FR","GB","NL","DE","US","ES","DK","SE","CZ","BE","FI","RU","IT","GR","AE","AT","ZA","IL","CH","QA","KZ","PT","SA","IR","LT","CA","MX","SY","UA","KW","BH","LB","OM","JO","IQ","TR","RO","GE","BR","AZ","ZM","ZW","PS","SK","RS","IS","HU","BG","SI","MD","MK","AO","LI","JE","HR","PL","BA","EE","LV","KG","IE","IM","MT","GI","LY","LU","AM","AR","VG","YE","BY","GP","MQ","GY","GU","MP","DO","VE","PR","VI","NZ","BD","PK","ID","NP","PG","CL","CO","MO","LK","EC","CR","KY","UY","EG","BB","BS","LC","DM","KH","TK","MV","AF","NC","FJ","MN","WF","AL","CY","UZ","BL","ME","SM","CD","GG","TJ","BM","VC","NG","BO","LR","KE","GH","TZ","MG","NA","CI","SD","CM","MW","MU","GA","MZ","ML","BJ","TD","BW","CV","RW","CG","UG","GM","LS","MA","DZ","GN","SZ","BF","SO","SL","NE","CF","TG","SS","BI","GQ","SC","SN","DJ","MR","ET","KM","IO","RE","TN","YT","LA","MM","BN","NR","VU","BT","WS","FM","PF","TL","TO","GL","FO","BZ","NU","KI","MH","PW","SB","TV","KP","PE","PY","GF","SR","GT","HN","NI","SV","PA","VA","AD","MC","ER","GW","ST","TM","AG","CU","GD","HT","JM","KN","TT","CW","AI","UM","AW","PM","SX","MF","TC","AX","NF","AQ","AS","BQ","GS"];
  this.stepmenu = {"1": [1], "256" : [2], "65536" : [3], "16777216" : [4] };
  this.timeout = 900*60*3;

	//<ul id="drop-nav"><li><a href="javascript:void(0);">Interval</a><ul>	\
	//<li><a id=\'step1#\' href="javascript:void(0);" onclick="l.changeStep(\'#\',\'1\');">1</a></li>			\
	//<li><a id=\'step256#\' href="javascript:void(0);" onclick="l.changeStep(\'#\',\'256\');">2</a></li>	    \
	//<li><a id=\'step65536#\' href="javascript:void(0);" onclick="l.changeStep(\'#\',\'65536\');">3</a></li>	    \
	//<li><a id=\'step16777216#\' href="javascript:void(0);" onclick="l.changeStep(\'#\',\'16777216\');">4</a></li>	    \
	//</ul>
				
	this.navbar ='<ul id="drop-nav"><li><a href="javascript:void();">Sort</a><ul>	\
				<li><a id="suipaddr#" href="javascript:void(0);" onclick="l.observers.suipaddr(\'#\');">+ IPaddress</a></li>			\
				<li><a id="sdipaddr#" href="javascript:void(0);" onclick="l.observers.sdipaddr(\'#\');">- IPaddress</a></li>			\
				<li><a id="sucity#" href="javascript:void(0);" onclick="l.observers.sucity(\'#\');">+ city</a></li>		\
				<li><a id="sdcity#" href="javascript:void(0);" onclick="l.observers.sdcity(\'#\');">- city</a></li>		\
				<li><a id="suregion#" href="javascript:void(0);" onclick="l.observers.suregion(\'#\');">+ region</a></li>		\
				<li><a id="sdregion#" href="javascript:void(0);" onclick="l.observers.sdregion(\'#\');">- region</a></li>		\
				<li><a id="sucountry#" href="javascript:void(0);" onclick="l.observers.sucountry(\'#\');">+ country</a></li>		\
				<li><a id="sdcountry#" href="javascript:void(0);" onclick="l.observers.sdcountry(\'#\');">- country</a></li>		\
				<li><a id="suisp#" href="javascript:void(0);" onclick="l.observers.suisp(\'#\');">+ isp</a></li>		\
				<li><a id="sdisp#" href="javascript:void(0);" onclick="l.observers.sdisp(\'#\');">- isp</a></li>		\
				<li><a id="suproxytype#" href="javascript:void(0);" onclick="l.observers.suproxytype(\'#\');">+ proxytype</a></li>		\
				<li><a id="sdproxytype#" href="javascript:void(0);" onclick="l.observers.sdproxytype(\'#\');">- proxytype</a></li>		\
				<li><a id="reset# href="javascript:void(0);" onclick="l.observers.reset(\'#\');">Reset</a></li> \
				</ul></li>	\
				</ul> \
				</li> \
				Country Code:%\
				<input class=\'ipaddr\' type=\'text\' id=\'ipaddr#\' onblur=\'if(this.value=="") {this.value="IP address";this.style.color="LightGray" } else { this.style.color="red"} ;return false;\' \
				onfocus=\'this.value=""; this.style.color="black";return false;\' name=\'ipaddr\' value=\'IP address\' \> \
				<input class=\'button\' onclick=\'l.Search("#");\' type=\'button\' value=\'Search\'> \
				';
				this.AddNav();
  return this;
}

Publisher.prototype = {
	scrollTomid : function (dir,rows) {
		dir = dir || "down";
		rows = rows || this.observers.count();
		if (dir=="up") {
			var pos = window.innerHeight-window.outerHeight/10;
		} else {
			var pos = window.innerHeight-window.outerHeight/10;
		}	
		pos=rows/100*pos-100;
		console.log("scrollTo:"+ pos); 
		//http://stackoverflow.com/questions/15691569/javascript-issue-with-scrollto-in-chrome
		setTimeout(function() {window.scrollTo(0,pos);},500);
	},			
    SelectCC : function (id) {
		this.ccvalue = document.getElementById(id).options[document.getElementById(id).selectedIndex].value;
		this.observers.selectcc(this.ccvalue);
    },
	Reset : function () {
		this.ccvalue = "All";
		this.observers.selectcc(this.ccvalue);
	},
	Cache : function () {
		this.observers.func(this.ccvalue);
		//this.scrollTomid("up");
	},
	//http://stackoverflow.com/questions/17987015/ip-address-validation-with-proper-dots-in-between
	isIpAddress : function (s) {
	  if (typeof s !== 'string') { return false; }
		  // There must be 4 parts separated by dots.
		  var parts = s.split('.');
		  if (parts.length !== 4) { return false; }
		  // Each of the four parts must be an integer in the range 0 to 255.
		  for (var i = 0; i < 4; ++i) {
			var part = parts[i];
			// Each part must consist of 1 to 3 decimal digits.
			if (!/^\d{1,3}$/.test(part)) { return false; }
			var n = +part;
			if (0 > n || n > 0xff) { return false; }
		  }
		  return true;
	},
	changeStep : function (id,value) {
		this.step = Number(value);
		this.range=(100*this.step)-this.step;
		//this.AddNav();
		switch (this.direction) {
			case "down": {
				this.Request(Number(this.from),Number(this.to)+Number(this.step),"down");  
				break;
			};
			case "up": {
				this.Request(Number(this.from),Number(this.to)+Number(this.step),"down"); 
				break;
			}
			default: {
				this.Request(Number(this.from),Number(this.to)+Number(this.step),"down"); 
				break;
			}
		}
		this.AddNav();
	},
	 //http://stackoverflow.com/questions/15932650/body-scrollheight-doesnt-work-in-firefox
	getDocHeight : function () {
		var D = document;
		return Math.max(
			Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
			Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
			Math.max(D.body.clientHeight, D.documentElement.clientHeight)
		);
	},
	//http://stackoverflow.com/questions/14505224/js-set-window-height-using-current-window-size
	setWindowHeight : function (){
		//var windowHeight = window.innerHeight;
		var windowHeight = this.getDocHeight();
		if (windowHeight > 2550) {
			windowHeight = 2550;
		}
		document.body.style.height = windowHeight + "px";
		document.body.scrollHeight = windowHeight + "px";
		console.log("DocBodyStyleHeight:"+document.body.style.height);
		console.log("WinInnerHeight:"+window.innerHeight);
		console.log("WinScrollY:"+window.scrollY);
		console.log("DocBodyScrollHeight:"+document.body.scrollHeight);
	},
	//http://stackoverflow.com/questions/8105629/ip-addresses-stored-as-int-results-in-overflow
	ip2long : function (dot) {
		var d = dot.split('.');
		return ((((((+d[0])*256)+(+d[1]))*256)+(+d[2]))*256)+(+d[3]);
	},
	CreateRequestObject : function () {
		var xmlHttp = false;
		if (typeof(XMLHttpRequest) != 'undefined') {
			xmlHttp = new XMLHttpRequest();
		}
		if (!xmlHttp) {
			try {
				xmlHttp  = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				try {
					xmlHttp  = new ActiveXObject("Microsoft.XMLHTTP");
				} catch(e) {
					xmlHttp  = false;
				}
			}
		}
		return xmlHttp;
	},
	Search : function  (id) {
		if (this.isIpAddress(document.getElementById("ipaddr"+id).value)) {
			var i=0; var me=this;
			this.iplong = Number(this.ip2long(document.getElementById("ipaddr"+id).value));
			this.from=Math.floor(this.iplong/this.step)*this.step;
			this.to=(this.from+100*this.step)-this.step;
			this.range=(100*this.step)-this.step;
			this.direction = "down";
			this.xhr[i]= this.CreateRequestObject();		
			if (this.xhr[i]) {
				this.xhr[i].open('GET', 'ajax.php?from='
						+this.from
						+'&to='+this.to
						+'&step='+this.step
						+'&dir='+this.direction
                        +'&cc='+this.ccvalue,
						true);
				this.xhr[i].timeout = this.timeout; // time in milliseconds
				this.xhr[i].ontimeout = function (e) {
						// XMLHttpRequest timed out. Do something here.
					alert("Sorry, not found! Please try again!");
				};
				this.xhr[i].responseType = 'json';
				this.xhr[i].onreadystatechange = null;
				this.xhr[i].addEventListener( "load", function(e) { me.Response(e);}, false);
				this.xhr[i].send(null);
			}
		} else {
			document.getElementById("ipaddr"+id).style.color = "LightGray";
			document.getElementById("ipaddr"+id).value = "IP address";			
		}
	},
	Map : function  () {
		var i=0; var me=this; var dat={};
		for (var i=0,x=Math.min(this.observers.observerList.length,300);i<x;i++) {
			if (this.observers.observerList[i].country == this.ccvalue) {
				dat["\""+this.observers.observerList[i].latitude+"\",\""+this.observers.observerList[i].longitude+"\""] = {"lat":this.observers.observerList[i].latitude,"lng":this.observers.observerList[i].longitude};
				if (Object.keys(dat).length > 50) {
					break;
				}
			}
		}
		if (Object.keys(dat).length > 2 && Object.keys(dat).length < 100) {			
			this.xhr[i]= this.CreateRequestObject();		
			if (this.xhr[i]) {
				this.xhr[i].open('GET', 'map.php?points='
						+JSON.stringify(dat),
						true);
				this.xhr[i].timeout = this.timeout; // time in milliseconds
				this.xhr[i].ontimeout = function (e) {
						// XMLHttpRequest timed out. Do something here.
					alert("Sorry, not found! Please try again!");
				};
				this.xhr[i].responseType = 'json';
				this.xhr[i].onreadystatechange = null;
				this.xhr[i].addEventListener( "load", function(e) { me.ResMap(e);}, false);
				this.xhr[i].send(null);
			}
		} else {
			alert ("Not enough points!");
		}
	},
	Request : function  (from, to , direction) {
		var i=0; var me=this;
        this.from = from || this.from;
        this.to = to || this.to;
        this.direction=direction || "down";
		this.xhr[i]= this.CreateRequestObject();		
		if (this.xhr[i]) {
			this.xhr[i].open('GET', 'ajax.php?from='
					+this.from
					+'&to='+this.to
					+'&step='+this.step
					+'&dir='+this.direction
                    +'&cc='+this.ccvalue,
					true);
			this.xhr[i].timeout = this.timeout; // time in milliseconds
			this.xhr[i].ontimeout = function (e) {
					// XMLHttpRequest timed out. Do something here.
				alert("Sorry, not found! Please try again!");
			};
			this.xhr[i].responseType = 'json';
			this.xhr[i].onreadystatechange = null;
			this.xhr[i].addEventListener( "load", function(e) { me.Response(e);}, false);
			this.xhr[i].send(null);
		}
	},
	ResMap : function (request) {
		j=request.target.response;
		//alert(j);
		substring = "png";
		if (j!="" && j.indexOf(substring) !== -1) {
			document.body.innerHTML = '';	
			var img = document.createElement("img");
			img.src = j;
			window.document.body.appendChild(img);	
			//window.document.write("<input class=\'button\' onclick=\'l.Request();\' type=\'button\' value=\'Back\'>");		
			var button = document.createElement("input");
			button.type = "button";
			button.value = "Back";
			button.className = "Button"
			button.onclick = function(){
				//l.Request();return false;
				l.Cache();return false;
			};
			window.document.body.appendChild(button);
			this.scrollTomid("up",1);
		} else if (j!="") {
			alert ("No imagecreate function!");
		}
		this.AddNav();
	},
	Response : function (request) {
		j=request.target.response;	
		if (j!=null) {
			e=j.length-1;
			if (e>1 && e<100) {
				if (this.direction=="down") {
					this.from=Number(j[0].from);
					this.to=Number(j[e].from)+this.step;
				} else {
					this.from=Number(j[e].from);
					this.to=Number(j[0].from);
				}
				switch (this.direction) { 
					case "search": {
						document.body.innerHTML = '';
						this.setWindowHeight();
						this.observers.observerList=[];
						for (var i=0,e=j.length;i<e;i++) {
						  this.Down(new Subject(100),j[i].ipaddr,j[i].countryCode, 
								j[i].regionName,j[i].cityName,j[i].isp,j[i].proxyType,j[i].ipVersion,i)                 
						}
						this.direction = "down";
						if (this.observers.sort!="") {
							this.observers.func();
						}			
					}
					break;
					case "down": {
						var t = this.observers.count();
						var p=0;
						for (var i=0,e=j.length;i<e;i++) {
							for (k=0;k<t;k++) {
							  if (j[i].ipaddr==this.observers.observerList[k].ipaddr) {
								  break;
							  }
							}
							if (k==t || t==0) {
								this.Down(new Subject(100),j[i].ipaddr,j[i].countryCode, 
								j[i].regionName,j[i].cityName,j[i].isp,j[i].proxyType,j[i].ipVersion,i);
								++p;
							}         
						} 
						var t = this.observers.count();
						if (t>100) {		
							for (var a=0;a<p;a++) {
								e = window.document.getElementById(this.observers.get(a).ele.id);
								if (e!=null) {
									var elem = document.getElementsByClassName(e.className);
									this.RemoveClass(elem);					
									this.RemoveClass(document.getElementsByClassName("linebreak "+e.id))
								}
							}
							if (e!=null) {
								this.observers.removeAt(0,p);
							}
						}					
						if (this.observers.sort!="") {
							this.observers.func(this.ccvalue);
						} else {
							this.scrollTomid("down");
						}
					}
					break;
					case "up" : {					
						var t = this.observers.count();
						//for (var i=j.length-1;i>0;i--) {
						for (var i=0,e=j.length;i<e;i++) {	
							for (k=0;k<t;k++) {
								  if (j[i].ipaddr==this.observers.observerList[k].ipaddr) {
									  break;
								  }
							}
							if (k==t || t==0) {
								this.Up(new Subject(100),j[i].ipaddr,j[i].countryCode, 
								j[i].regionName,j[i].cityName,j[i].isp,j[i].proxyType,j[i].ipVersion,i);                 
							}
						}
						var t = this.observers.count();
						if (t>100) {			   
							for (var a=100,b=t;a<b;a++) {
								e = window.document.getElementById(this.observers.get(a).ele.id);
								if (e!=null) {
									var elem = document.getElementsByClassName(e.className);
									this.RemoveClass(elem);	
									this.RemoveClass(document.getElementsByClassName("linebreak "+e.id));
								}
							}
							if (e!=null) {
								this.observers.removeAt(100,b);
							}
						}
						if (this.observers.sort!="") {
							this.observers.func(this.ccvalue);
						} else {		
							this.scrollTomid("up");
						}
					}
				}
				this.setWindowHeight();
				this.AddNav();
			}
		}		
  },
  Up : function(ip,ipaddr,country,region,city,isp,proxyType,ipVersion,z) {
	var me=this;
    ip.ipaddr = ipaddr || 0;
    ip.country = country || 0;
    ip.region = region || 0;
    ip.city = city || 0;
	ip.isp = isp || 0;
	ip.proxyType = proxyType || 0;
	ip.ipVersion = ipVersion || 0;
    ip.navigation = 0;
    ip.type = "ip";
    ip.visibility = "show";
    ip.z = z;
	ip.iplong = me.ip2long(ipaddr);
	
    h = new Subject(100);
	h.ele.className = "linebreak " + ip.ele.id;    
    window.document.body.insertBefore(h.ele,window.document.body.childNodes[0]);
    window.document.getElementById(h.ele.id).style.width=0;
    window.document.getElementById(h.ele.id).style.height=0;
    window.document.getElementById(h.ele.id).style.clear="both";
    window.document.getElementById(h.ele.id).style.float="none";
       
    colclass = (z % 2) ? "column1" : "column2";

    //g = new Subject(100);    
    //g.ele.className = colclass + " " + ip.ele.id;
    //window.document.body.insertBefore(g.ele,window.document.body.childNodes[0]);
    //g.ele.appendChild(window.document.createTextNode(ip.ipNumber));
    
    f = new Subject(100);
    f.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(f.ele,window.document.body.childNodes[0]);
    f.ele.appendChild(window.document.createTextNode(ip.ipVersion));
       
    e = new Subject(100);
    e.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(e.ele,window.document.body.childNodes[0]);
    e.ele.appendChild(window.document.createTextNode(ip.proxyType));
    
    d = new Subject(100);
    d.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(d.ele,window.document.body.childNodes[0]);
    d.ele.appendChild(window.document.createTextNode(ip.isp));
    
    c = new Subject(100);
    c.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(c.ele,window.document.body.childNodes[0]);
    c.ele.appendChild(window.document.createTextNode(ip.country));    
  
    b = new Subject(100);
    b.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(b.ele,window.document.body.childNodes[0]);
    b.ele.appendChild(window.document.createTextNode(ip.region));
    
    a = new Subject(100);    
    a.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(a.ele,window.document.body.childNodes[0]);
    a.ele.appendChild(window.document.createTextNode(ip.city));   
    
    ip.ele.className = colclass + " " + ip.ele.id;
    window.document.body.insertBefore(ip.ele,window.document.body.childNodes[0]);
    ip.ele.appendChild(window.document.createTextNode(ip.ipaddr));    
    
	this.observers.unshift(ip);
    var me=this;
    ip.b=setInterval( function () { me.Notify(ip.ele.id); },this.tstart);	
  },
  Down : function(ip,ipaddr,country,region,city,isp,proxyType,ipVersion,z) {
	var me=this;
    ip.ipaddr = ipaddr || 0;
    ip.country = country || 0;
    ip.region = region || 0;
    ip.city = city || 0;
	ip.isp = isp || 0;
	ip.proxyType = proxyType || 0;
	ip.ipVersion = ipVersion || 0;
    ip.navigation = 0;
    ip.type = "ip";
    ip.visibility = "show";
    ip.iplong = me.ip2long(ipaddr);
	ip.z = z;
    
    colclass = (z % 2) ? "column1" : "column2";
    
    ip.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(ip.ele);
    ip.ele.appendChild(window.document.createTextNode(ip.ipaddr));
        
    a = new Subject(100);
    a.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(a.ele);
    a.ele.appendChild(window.document.createTextNode(ip.city));   
    
    b = new Subject(100);
    b.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(b.ele);
    b.ele.appendChild(window.document.createTextNode(ip.region));
    
    c = new Subject(100);
    c.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(c.ele);
    c.ele.appendChild(window.document.createTextNode(ip.country));    
    
    d = new Subject(100);
    d.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(d.ele);
    d.ele.appendChild(window.document.createTextNode(ip.isp));
    
    e = new Subject(100);
    e.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(e.ele);
    e.ele.appendChild(window.document.createTextNode(ip.proxyType));
    
    f = new Subject(100);
    f.ele.className = colclass + " " + ip.ele.id;
    window.document.body.appendChild(f.ele);
    f.ele.appendChild(window.document.createTextNode(ip.ipVersion));
    
    //g = new Subject(100);
    //g.ele.className = colclass + " " + ip.ele.id;
    //window.document.body.appendChild(g.ele);
    //g.ele.appendChild(window.document.createTextNode(ip.ipNumber));
    
    h = new Subject(100);
	h.ele.className = "linebreak " + ip.ele.id;    
    window.document.body.appendChild(h.ele);
    window.document.getElementById(h.ele.id).style.width=0;
    window.document.getElementById(h.ele.id).style.height=0;
    window.document.getElementById(h.ele.id).style.clear="both";
    window.document.getElementById(h.ele.id).style.float="none";
	
	this.observers.add(ip);    
	var me=this;
    ip.b=setInterval( function () { me.Notify(ip.ele.id); },this.tstart);
  },
  AddCountry : function (country, acronym, name) {
    country.acronym = acronym || "test";
	country.name = name || "test";
    country.navigation = 0;
    country.type = "country";
    this.observers.add(country);
  },
  Removeip : function(observer) {
    this.observers.removeAt( this.observers.indexOf( observer, 0 ) );
    return this.observers.count();
  },
  //http://stackoverflow.com/questions/3387427/remove-element-by-id
  RemoveId : function (id) {
    return (elem=document.getElementById(id)).parentNode.removeChild(elem);
  },
  //http://stackoverflow.com/questions/4777077/removing-elements-by-class-name
  //http://stackoverflow.com/questions/10842471/remove-all-elements-of-a-certain-class-with-javascript
  RemoveClass : function (elem) {
	while(elem.length > 0){
        elem[0].parentNode.removeChild(elem[0]);
    }
    return true;
  },
  AddNav : function (){
		var elem = document.getElementsByClassName('nav');
		this.RemoveClass(elem);
		
        var observerCount = this.observers.count();
        //var r = Math.floor((Math.random() * this.seed) + 1);
        var r = 666;
		
        var a = document.createElement("div");
        a.id = r;
        a.className = "nav";
        
        var t = this.navbar.replace(/#/g, r);
		
		t += '<input class=\'button\' onclick=\'l.Reset();\' type=\'button\' value=\'Reset\'> ';
		
		//if (observerCount > 0 && this.ccvalue != "" && this.ccvalue != "All") {
		//	t += '<input class=\'button\' onclick=\'l.Map("#");\' type=\'button\' value=\'Map\'>';
		//}
		
		//t += '<div style="float:right;padding-right:100px">If the list is empty move the scrollbar up and down!</div>';
		
        this.cc.sort();
        //http://stackoverflow.com/questions/17001961/javascript-add-select-programmatically
        var options_str = '<option value="All">All</option>';
        this.cc.forEach( function(cc) {
		  if (cc==this.ccvalue) {
			options_str += '<option selected="selected" value="' + cc + '">' + cc + '</option>';  
		  }	else {
			var list=[];
			for (i=0,e=observerCount;i<e;i++) {				
				if (this.observers.get(i).country == cc && !list[cc]) {
					list[cc]=true;
					options_str += '<option value="' + cc + '">' + cc + '</option>';
				}
			}	
		  }
        },this);
        sel ="<select class='sel' onChange=\"l.SelectCC('Select"+r+"');\" id=\"Select"+r+"\" name=\"cc"+r+"\">"+ options_str + "</select>";
		
		a.innerHTML = t.replace(/%/g, sel);		
		document.body.insertBefore(a,document.body.childNodes[0]);
		//document.getElementById("step"+this.step+r).innerHTML = "[ "+this.stepmenu[this.step][0]+" ]";
		if (this.observers.sort!="" && this.observers.sort!="selectcc") {
			var t=document.getElementById(this.observers.sort+r).innerHTML;
			document.getElementById(this.observers.sort+r).innerHTML = "[ "+t+" ]";
		}		
		if (this.observerList != null) {
			this.observers.get(0).navigation=1;
		}
/*		
		for(var i=0; i < observerCount; i++){
			if (i % this.n == 0 && i != 0 && this.observers.get(i).type=="ip" && this.observers.get(i).visibility=="show") {		  
				e = document.getElementById(this.observers.get(i).ele.id).previousElementSibling;
				if (e.className.indexOf("linebreak")!=-1 && e != undefined) {
					this.observers.get(i).navigation=1;
					r=Math.floor((Math.random() * this.seed) + 1);
					var a = document.createElement("div");
					a.id = r;
					a.className = "nav";
                    var t = this.navbar.replace(/#/g, r);
                    sel = "<select class='sel' onChange=\"l.SelectCC('Select"+r+"');\" id=\"Select"+r+"\" name=\"cc"+r+"\">"+ options_str + "</select>";
					a.innerHTML =  t.replace(/%/g, sel);
					e.outerHTML+=a.outerHTML;		
					document.getElementById("step"+this.step+r).innerHTML = "[ "+this.stepmenu[this.step][0]+" ]";
					if (this.observers.sort!="") {
						var t=document.getElementById(this.observers.sort+r).innerHTML;
						document.getElementById(this.observers.sort+r).innerHTML = "[ "+t+" ]";
					}						
				}
			}   
	   }
*/
   },  
   Notify : function(id){
	   observerZ=this.observers.count();
	   for(var i=0; i < observerZ; i++){
			a=this.observers.get(i);
			if (a.ele.id==id) {
				a.update(this,id);
				break;
			}		
	   }
	   if (a.ele.id==id && i==0 && a.navigation==0 && this.direction=="up") {
			a.navigation=1;
			this.AddNav();  
		} else  if (a.ele.id==id && i==observerZ-1 && a.navigation==0 && this.direction=="down") {
			a.navigation=1;
			//this.AddNav();  
		}
   }
}