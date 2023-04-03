var mySong = document.getElementById("mySong");
		var icon = document.getElementById("icon"); 

		icon.onclick = function(){
			if(mySong.paused){
				mySong.play();
				icon.src = "assets/image/pause.png";
					}
			else{
				mySong.pause();
				icon.src= "assets/image/play.png";
					}
			}
			if(typeof mySong.loop == 'boolean'){
			mySong.loop = true;
		}