
var songrun=false;
var count=1;
var mod=1;
var path=[
    "songs\\Katravai Patravai.mp3",
    "songs\\Veera Soora.mp3",
    "songs\\Theemai Dhan Vellum.mp3",
    "songs\\Yelo Pullelo.mp3",
    "songs\\Pala Palakura.mp3",
    "songs\\Amizhdhe Nee.mp3",
    "songs\\Mazhai Kuruvi.mp3",
    "songs\\Yendhan Kan Munne.mp3",
    "songs\\Visiri.mp3",
    "songs\\life of ram.mp3",
    "songs\\Yakkai Thiri.mp3",  
    "songs\\Oh Supernova.mp3"         
];

var sname=[
    "Katravai Patravai",
    "Veera Soora",
    "Theemai Dhan Vellum",
    "Yelo Pullelo",
    "Pala Palakura",
    "Amizhdhe Nee",
    "Mazhai Kuruvi",
    "Yendhan Kan Munne",
    "Visiri",
    "life of ram",
    "Yakkai Thiri",  
    "Oh Supernova"        
];

var sd=["Artist:  Santhosh Narayanan<br>Movie: Kaala<br>Released: 2018",
"Artists: Yuvan Shankar Raja<br>Movie: Naane Varuven<br>Released: 2022"
,"Artists: Hiphop Tamizha, Arvind Swamy<br>Movie: thani oruvan<br>Released: 2015"
,"Artist: Masala coffe<br>Movie:Kannum Kannum Kollaiyadithaal<br>Released: 2020"
,"Artist: Harris Jayarai<br>Movie: ayan<br>Released: 2009"
,"Artists: Karthi<br>Movie: hi naana<br>Released: 2024"
,"Artist: A.R.Rahman<br>Movie: Chekka Chivantha Vaanam<br>Released: 2018<br>"
,"Artist: Harrish jayaraj<br>Movie: nanban<br>Released: 2012"
,"Artist: Sid Sriram<br>Movie: Enai Noki Paayum Thota<br>Released: 20019"
,"Artists: predeep kumar<br>Movie: 96<br>Released: 2018"
,"Artist: A. R. Rahman<br>Movie: Aaytha Ezhuthu<br>Released: 2004"
,"Artist: Harris Jayarai<br>Movie: ayan<br>Released: 2009"];

var bool=[];
for(var i=0; i<sd.length; i++)
	bool[i]=false;

var icon=["images\\\\1.jpg",
"images\\\\2.jpg",
"images\\\\3.jpg",
"images\\\\4.jpg",
"images\\\\5.jpg",
"images\\\\6.jpg",
"images\\\\7.jpg",
"images\\\\8.jpg",
"images\\\\9.jpg",
"images\\\\10.jpg",
"images\\\\11.jpg", 
"images\\\\12.jpg" 
];

var mood=[["1","2","3"],["4","5"],["6","7","8"],["9","10"],["11","12"]];
var mmm=["1.png","1.png","1.png","2.png","2.png","3.png","3.png","3.png","4.png","4.png","2.png","4.png"];

var songs=new Array(icon.length);
for (var i = 0; i<icon.length; i++) {
	songs[i]=new Array(4);
	songs[i][0]=path[i];
	songs[i][1]=sd[i];
	songs[i][2]=icon[i];
	songs[i][3]=mmm[i];
	console.log(songs[i][0]);
	console.log(songs[i][1]);
	console.log(songs[i][2]);
	var ins=document.createElement("div");
	ins.id='b'+i;
	//ins.onclick=function(){
	//next(this);
  	//};
	ins.setAttribute("class", "song");
	document.body.appendChild(ins);
	document.getElementById('b'+i).innerHTML='<div id="pic" style=\'background-image: url(\"'+songs[i][2]+'\");\'>  <input type="button" id="'+"a"+i+'" class="play" > <input type="button" id="'+"c"+i+'" class="add">  </div><div id="data"><br><br>'+songs[i][1]+'</div>';
	document.getElementById('a'+i).onclick=function(){
		play(this);
	};
	document.getElementById('c'+i).onclick=function(){
		addq(this);
	};	
}




function setmod(elem){
	mod=elem.value;
	if(!songrun){
		if(mod==2)
			getTime();
		if(mod==3)
			rand_play();
	}
}

function play(elem){
	console.log(elem.id);
	var x = elem.id.substring(1);
	var z=songs[x][0];
	document.getElementById("sname").innerHTML=sname[x];
	document.getElementById("sel").src= z;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
	songrun=true;

}

var eqc=1;
var sqc=1;

function addq(elem){
	console.log(elem.id);
	var x=elem.id.charAt(1);
	if(!songrun){
		var z=songs[x][0];
		document.getElementById("sname").innerHTML=sname[x];
		document.getElementById("sel").src= z;
		document.getElementById("main_slider").load();
		document.getElementById("main_slider").play();
		document.getElementById("emoji").style.backgroundImage="url('"+songs[x][3]+"')";
		songrun=true;		
		return;
	}
	if(bool[x]==true)
		return;
	
	bool[x]=true;
	var l=document.createElement("label");
	l.id="e"+eqc;
	l.name=x;
	l.innerHTML=sname[x]+"<br>";
	//var text=document.createTextNode(sname[x]+"<br>");
	//l.appendChild(text);
	document.getElementById("queue").appendChild(l);
	eqc=eqc+1;
}

function nextsong(){
	if(sqc==eqc){
				alert("Queue is empty.");
				return;
		}
		var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			bool[xa]=false;
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;

}

function next_in_Q(){
			songrun=false;
			if(sqc==eqc){
				alert("Queue is empty.");
				return;
			}
			var elem=document.getElementById("e"+sqc);
			var xa=elem.name;
			var pa=songs[xa][0];
			document.getElementById("sname").innerHTML=sname[xa];
			document.getElementById("sel").src= pa;
			document.getElementById("main_slider").load();
			document.getElementById("main_slider").play();
			document.getElementById("emoji").style.backgroundImage="url('"+songs[xa][3]+"')";
			songrun=true;
			document.getElementById("queue").removeChild(elem);	
			sqc=sqc+1;
			}

function rand_play(){
	var index=Math.random()*path.length;
	index=parseInt(index);
	var pa=songs[index][0];
	document.getElementById("sname").innerHTML=sname[index];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[index][3]+"')";
	songrun=true;

}
function moody(val){
	var index=Math.random()*mood[val].length;
	index=parseInt(index);
	var pa=songs[mood[val][index]-1][0];
	document.getElementById("sname").innerHTML=sname[mood[val][index]-1];
	document.getElementById("sel").src= pa;
	document.getElementById("main_slider").load();
	document.getElementById("main_slider").play();
	document.getElementById("emoji").style.backgroundImage="url('"+songs[mood[val][index]-1][3]+"')";
	songrun=true;
}

async function getTime() {
                let value = await eel.getEmotion()();
                if(value=="angry")
                	moody(0);
                else if(value=="happy")
                	moody(1);
                else if(value=="sad")
                	moody(2);
                else
                	moody(3);
            }