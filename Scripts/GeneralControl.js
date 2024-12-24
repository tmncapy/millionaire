function hideMillionaireLogo(){
	window.GameVariables.IsLogoShowing = false;
	changebg("Background\\main.png",0);
	$('.logoContainerDiv').transition({perspective:0,opacity:0}, 0, 'linear');
}

function showMillionaireLogo(){
	window.GameVariables.IsLogoShowing = true;
		changebg("Background\\milback.png",0);
	$('.logoContainerDiv').transition({perspective:0, scale:[0.9, 0.9], opacity:1}, 0, 'linear');
}


function playLightsDownSound(){
	if(window.GameVariables.IsFirstQuestionOfGame == true || window.GameVariables.QuestionLevel < 7){
		window.GameVariables.IsFirstQuestionOfGame = false;
		startLongActiveSound(window.GameVariables.LightsDownSounds[window.GameVariables.QuestionLevel - 1]);
		setTimeout(stopLongPassiveSound, 200);
	}
	else if(window.GameVariables.QuestionLevel == window.GameVariables.SecondHaven + 1){
		startLongActiveSound("lights_down_1.mp3");
		setTimeout(stopLongPassiveSound, 500);
	}
	else if(window.GameVariables.QuestionLevel == 6 || window.GameVariables.QuestionLevel == 11 & window.GameVariables.QuestionLevel != window.GameVariables.SecondHaven){
		startLongActiveSound(window.GameVariables.LightsDownSounds[window.GameVariables.QuestionLevel - 1]);
		setTimeout(stopLongPassiveSound, 500);
	}
	else{
		startLongActiveSound(window.GameVariables.LightsDownSounds[window.GameVariables.QuestionLevel - 1]);
		setTimeout(stopLongPassiveSound, 200);
	}
}

function playBackgroundSound(){
	if (window.GameVariables.DoubleDipsOn == true){
		startLongPassiveSound('dd_start.mp3');
		setTimeout(stopLongActiveSound, 200);
	}
	else if(window.GameVariables.QuestionLevel < 6 && window.GameVariables.FirstTierBackgroundSoundPlaying == false){
		window.GameVariables.FirstTierBackgroundSoundPlaying = true;
		startLongPassiveSound(window.GameVariables.RoundBackgroundSounds[window.GameVariables.QuestionLevel - 1]);
	}
	else if(window.GameVariables.QuestionLevel > 5){
		startLongPassiveSound(window.GameVariables.RoundBackgroundSounds[window.GameVariables.QuestionLevel - 1]);
		setTimeout(stopLongActiveSound, 200);
	}
}

function playFinalAnswerSound(){
	if (window.GameVariables.DoubleDipsOn == true && window.GameVariables.SecondDips == false){
		startLongActiveSound('dd_first_final.mp3');
		setTimeout(stopLongPassiveSound, 200);
	}
	else if (window.GameVariables.DoubleDipsOn == true && window.GameVariables.SecondDips == true){
		startLongActiveSound('dd_second_final.mp3');
		setTimeout(stopLongPassiveSound, 200);
	}
	else if(window.GameVariables.QuestionLevel > 5){
		startLongActiveSound(window.GameVariables.FinalAnswerSounds[window.GameVariables.QuestionLevel - 1]);
		setTimeout(stopLongPassiveSound, 200);
	}
}

function playCorrectAnswerSound(){
	if(window.GameVariables.QuestionLevel < 6){
		stopLongActiveSound();
		startGeneralSound(window.GameVariables.CorrectAnswerSounds[window.GameVariables.QuestionLevel - 1]);
		
		if(window.GameVariables.QuestionLevel == 5){
			setTimeout(stopLongPassiveSound, 500);
		}
	}
	else if(window.GameVariables.QuestionLevel == window.GameVariables.SecondHaven){
		if(window.GameVariables.QuestionLevel == 10){
			startLongPassiveSound("q10_correct.mp3");
		}
		else{
			startLongPassiveSound("q10_correct.mp3");
		}
		setTimeout(stopLongActiveSound, 200);
	}
	else if(window.GameVariables.QuestionLevel == 15){
		startLongPassiveSound(window.GameVariables.CorrectAnswerSounds[window.GameVariables.QuestionLevel - 1]);
		setTimeout(stopLongActiveSound, 0);
	}
	else{
		startLongPassiveSound(window.GameVariables.CorrectAnswerSounds[window.GameVariables.QuestionLevel - 1]);
		setTimeout(stopLongActiveSound, 200);
	}
}

function playWrongAnswerSound(){
	if(window.GameVariables.QuestionLevel < 6){
		startGeneralSound(window.GameVariables.WrongAnswerSounds[window.GameVariables.QuestionLevel - 1]);
		setTimeout(stopLongPassiveSound, 200);
	}
	else if(window.GameVariables.QuestionLevel == 6 || window.GameVariables.QuestionLevel == 11){
		startLongPassiveSound(window.GameVariables.WrongAnswerSounds[window.GameVariables.QuestionLevel - 1]);
		setTimeout(stopLongActiveSound, 1000);
	}
	else{
		startLongPassiveSound(window.GameVariables.WrongAnswerSounds[window.GameVariables.QuestionLevel - 1]);
		setTimeout(stopLongActiveSound, 200);
	}
}

function changebg(bg,timedown){

	var oldbg = document.getElementById("stageBackgroundImg").src;
	document.getElementById("tempstageBackgroundImg").src = oldbg;
	$('.tempstageBackgroundDiv').animate({perspective:0, opacity:1}, 0,'linear',function(){
		document.getElementById("stageBackgroundImg").src = bg;
		$('.tempstageBackgroundDiv').animate({perspective:0, opacity:0}, timedown,'linear');
	});
	

}

function lightdownbgchange(){
	if(window.GameVariables.QuestionLevel < 6){
		changebg("Background\\tier 1.png",2500)
	}
	else if(window.GameVariables.QuestionLevel < 11){
		changebg("Background\\tier 2.png",2500)
	}
	else if(window.GameVariables.QuestionLevel < 15){
		changebg("Background\\tier 3.png",2500)
	}
	else if(window.GameVariables.QuestionLevel == 15){
		changebg("Background\\tier 4.png",2500)
	}
}
function lightdownbgchange2(){
	if(window.GameVariables.QuestionLevel < 6){
		changebg("Background\\tier 1.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 11){
		changebg("Background\\tier 2.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 15){
		changebg("Background\\tier 3.png",0)
	}
	else if(window.GameVariables.QuestionLevel == 15){
		changebg("Background\\tier 4.png",0)
	}
}
function hostbgchange(){
	if(window.GameVariables.LightDown == false){
		changebg("Background\\Hmain.png",0)
	}
	else if(window.GameVariables.QuestionLevel <= 5){
		changebg("Background\\H1.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 11){
		changebg("Background\\H2.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 15){
		changebg("Background\\H34.png",0)
	}
	else if(window.GameVariables.QuestionLevel == 15){
		changebg("Background\\H34.png",0)
	}
}
function cbgchange(){
	if(window.GameVariables.LightDown == false){
		changebg("Background\\Cmain.png",0)
	}
	else if(window.GameVariables.QuestionLevel <= 5){
		changebg("Background\\C1.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 11){
		changebg("Background\\C2.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 15){
		changebg("Background\\C3.png",0)
	}
	else if(window.GameVariables.QuestionLevel == 15){
		changebg("Background\\C4.png",0)
	}
}
function hostbgchange2(){
	if(window.GameVariables.QuestionInProgress == false){
		changebg("Background\\Hmain.png",0)
	}
	else if(window.GameVariables.Lightdown == true && window.GameVariables.QuestionLevel < 11){
		changebg("Background\\H2.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 15  && window.GameVariables.Lightdown == true){
		changebg("Background\\H34.png",0)
	}
	else if(window.GameVariables.Lightdown == true && window.GameVariables.QuestionLevel == 15){
		changebg("Background\\H34.png",0)
	}
}
function cbgchange2(){
	if(window.GameVariables.QuestionInProgress == false){
		changebg("Background\\Cmain.png",0)
	}
	else if(window.GameVariables.Lightdown == true && window.GameVariables.QuestionLevel < 11){
		changebg("Background\\C2.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 15  && window.GameVariables.Lightdown == true){
		changebg("Background\\C3.png",0)
	}
	else if(window.GameVariables.Lightdown == true && window.GameVariables.QuestionLevel == 15){
		changebg("Background\\C4.png",0)
	}
}

function lifelinebgchange(lf){
	if(window.GameVariables.QuestionLevel < 6){
		changebg("Background\\tier 1 "+ lf +".png",250)
	}
	else if(window.GameVariables.QuestionLevel < 11){
		changebg("Background\\tier 2 "+ lf +".png",250)
	}
	else if(window.GameVariables.QuestionLevel < 15){
		changebg("Background\\tier 3 "+ lf +".png",250)
	}
	else if(window.GameVariables.QuestionLevel == 15){
		changebg("Background\\tier 4 "+ lf +".png",250)
	}
}
function clbgchange(){
	if(window.GameVariables.QuestionLevel < 6){
		changebg("Background\\Close1.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 11){
		changebg("Background\\Close2.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 15){
		changebg("Background\\Close3.png",0)
	}
	else if(window.GameVariables.QuestionLevel == 15){
		changebg("Background\\Close4.png",0)
	}
}
function sbgchange(){
	if(window.GameVariables.QuestionLevel < 6){
		changebg("Background\\side1.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 11){
		changebg("Background\\side2.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 15){
		changebg("Background\\side3.png",0)
	}
	else if(window.GameVariables.QuestionLevel == 15){
		changebg("Background\\side4.png",0)
	}
}
function upbgchange(){
	if(window.GameVariables.LightDown == false){
		changebg("Background\\upmain.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 6){
		changebg("Background\\up1.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 11){
		changebg("Background\\up2.png",0)
	}
	else if(window.GameVariables.QuestionLevel < 15){
		changebg("Background\\up3.png",0)
	}
	else if(window.GameVariables.QuestionLevel == 15){
		changebg("Background\\up4.png",0)
	}
}