/****************************************************************************************************************/
/* Plus One Life Line Functions */
/****************************************************************************************************************/

function poPulseLifeLine(){
	$('.poLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, 'ease-out', function(){
		$('.poLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in-out', function(){
			
		});
	});
	
	$('.poLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.poLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.poStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, 'ease-out', function(){
		$('.poStrapLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.poStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.poStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
}

function poLifeLineDisable(){
	$('.poLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.poLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.poStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.poStrapLifeLine .lifelineStrapImg').css('opacity', 1);
}
function poLifeLineEnable(){
	$('.poLifeLine .lifelineUsedImg').css('opacity', 0);
	$('.poLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.poStrapLifeLine .lifelineUsedStrapImg').css('opacity', 0);
	$('.poStrapLifeLine .lifelineStrapImg').css('opacity', 1);
}




/****************************************************************************************************************/
/* Fifty-Fifty Life Line Functions */
/****************************************************************************************************************/

function ffPulseLifeLine(){
	$('.ffLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, function(){
		$('.ffLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.ffLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.ffLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.ffStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, 'ease-out', function(){
		$('.ffStrapLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.ffStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.ffStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
}

function ffLifeLineDisable(){
	$('.ffLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.ffLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.ffStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.ffStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	window.GameVariables.IsFFLifeLineUsed = true;
}
function ffLifeLineEnable(){
	$('.ffLifeLine .lifelineUsedImg').css('opacity', 0);
	$('.ffLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.ffStrapLifeLine .lifelineUsedStrapImg').css('opacity', 0);
	$('.ffStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	window.GameVariables.IsFFLifeLineUsed = false;
}

function ffRemoveTwoWrongAnswers(){
	var canRemoveTwo = true;
	var counter = 0;
		
	if(window.GameVariables.AnswerAIsOut == true || window.GameVariables.AnswerBIsOut == true || window.GameVariables.AnswerCIsOut == true || window.GameVariables.AnswerDIsOut == true){
		canRemoveTwo = false;
	}
	
	if(canRemoveTwo == true){
		ffLifeLineDisable();
	
		while(counter < 2){
			var randomAnswerValue = Math.ceil(Math.random() * 4);
			
			if(randomAnswerValue == 1 && window.GameVariables.AnswerAIsOut == false && window.GameVariables.CurrentCorrectAnswer != "a"){
				$('#answerA .letterP').css('opacity', 1);
				$('#answerA .answerP').css('opacity', 0);
				$('#answerA .diagonalImg').css('opacity', 1);
				window.GameVariables.AnswerAIsOut = true;
				counter++;
			}
			
			if(randomAnswerValue == 2 && window.GameVariables.AnswerBIsOut == false && window.GameVariables.CurrentCorrectAnswer != "b"){
				$('#answerB .letterP').css('opacity', 1);
				$('#answerB .answerP').css('opacity', 0);
				$('#answerB .diagonalImg').css('opacity', 1);
				window.GameVariables.AnswerBIsOut = true;
				counter++;
			}
			
			if(randomAnswerValue == 3 && window.GameVariables.AnswerCIsOut == false && window.GameVariables.CurrentCorrectAnswer != "c"){
				$('#answerC .letterP').css('opacity', 1);
				$('#answerC .answerP').css('opacity', 0);
				$('#answerC .diagonalImg').css('opacity', 1);
				window.GameVariables.AnswerCIsOut = true;
				counter++;
			}
			
			if(randomAnswerValue == 4 && window.GameVariables.AnswerDIsOut == false && window.GameVariables.CurrentCorrectAnswer != "d"){
				$('#answerD .letterP').css('opacity', 1);
				$('#answerD .answerP').css('opacity', 0);
				$('#answerD .diagonalImg').css('opacity', 1);
				window.GameVariables.AnswerDIsOut = true;
				counter++;
			}
		}
	}
}

/****************************************************************************************************************/
/* Ask the Audience Life Line Functions */
/****************************************************************************************************************/

function ataPulseLifeLine(){
	$('.ataLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, function(){
		$('.ataLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.ataLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.ataLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.ataStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, 'ease-out', function(){
		$('.ataStrapLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.ataStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.ataStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
}

function ataLifeLineDisable(){
	$('.ataLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.ataLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.ataStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.ataStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	window.GameVariables.IsATALifeLineUsed = true;
}

function slideInATAGraph(){
	var barAHeight = 5 + "px";
	var barBHeight = 5 + "px";
	var barCHeight = 5 + "px";
	var barDHeight = 5 + "px";
	
	$('#graphBarD').transition({'height':'270px'}, 550, function(){
		$('#graphBarD').transition({'height':barDHeight}, 550);
	});
	setTimeout(function(){
		$('#graphBarC').transition({'height':'270px'}, 550, function(){
			$('#graphBarC').transition({'height':barCHeight}, 550);
			
			
		});
	}, 50);
	setTimeout(function(){
		$('#graphBarB').transition({'height':'270px'}, 550, function(){
			$('#graphBarB').transition({'height':barBHeight}, 550);
			
		});
	}, 100);
	setTimeout(function(){
		$('#graphBarA').transition({'height':'270px'}, 550, function(){
			$('#graphBarA').transition({'height':barAHeight}, 550);
			setTimeout(function(){
				$('.LetterD').transition({'top':'350px', opacity:1}, 550);
			}, 50);
			setTimeout(function(){
				$('.LetterC').transition({'top':'350px', opacity:1}, 550);
			}, 100);	
			setTimeout(function(){
				$('.LetterB').transition({'top':'350px', opacity:1}, 550);
			}, 150);
				setTimeout(function(){
				$('.LetterA').transition({'top':'350px', opacity:1}, 550);
			}, 200);
			
		});
	}, 150);
	
		$('.ataGraphDiv').transition({perspective:4096, 'rotateY':'0deg'}, 1000, 'ease-out'); 
	$('.ata').transition({perspective:0, 'top':'195px', 'right':'330px',scale:[1.06, 1.06], opacity:1}, 800, 'ease-out'); 
	
	setTimeout(function(){
	$('.ataicon').transition({perspective:4096, scale:[1, 1], opacity:1 , 'rotateX':'0deg'}, 500, 'ease-out');
	}, 100);
	$('.ata').transition({perspective:4096, scale:[1, 1], opacity:1}, 250, 'ease-in'); 
	
	 $('#graphPercentA').transition({'top': '300px'}, 0, 'linear');
	 $('#graphPercentB').transition({'top': '300px'}, 0, 'linear');
	 $('#graphPercentC').transition({'top': '300px'}, 0, 'linear');
	 $('#graphPercentD').transition({'top': '300px'}, 0, 'linear');
}

function generateGraphPercentanges(){

	var percentageOfDifficulty = (window.GameVariables.QuestionLevel - 1) * 0;
	var beDevious = (Math.random() * 100) > 90 ? true : false;

	if(window.GameVariables.AnswerAIsOut == true){
		window.GameVariables.AnswerAPercent = 0;
	}
	
	if(window.GameVariables.AnswerBIsOut == true){
		window.GameVariables.AnswerBPercent = 0;
	}
	
	if(window.GameVariables.AnswerCIsOut == true){
		window.GameVariables.AnswerCPercent = 0;
	}
	
	if(window.GameVariables.AnswerDIsOut == true){
		window.GameVariables.AnswerDPercent = 0;
	}
	
	if(beDevious != true){
		if(window.GameVariables.CurrentCorrectAnswer == "a" && window.GameVariables.AnswerAIsOut == false){
			window.GameVariables.AnswerAPercent = Math.ceil(Math.random() * (100 - percentageOfDifficulty));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerAPercent));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerAPercent - window.GameVariables.AnswerBPercent));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : 100 - window.GameVariables.AnswerAPercent - window.GameVariables.AnswerBPercent  - window.GameVariables.AnswerCPercent;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "b" && window.GameVariables.AnswerBIsOut == false){
			window.GameVariables.AnswerBPercent = Math.ceil(Math.random() * (100 - percentageOfDifficulty));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerBPercent));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerBPercent - window.GameVariables.AnswerCPercent));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : 100 - window.GameVariables.AnswerBPercent - window.GameVariables.AnswerCPercent  - window.GameVariables.AnswerDPercent;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "c" && window.GameVariables.AnswerCIsOut == false){
			window.GameVariables.AnswerCPercent = Math.ceil(Math.random() * (100 - percentageOfDifficulty));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerCPercent));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerCPercent - window.GameVariables.AnswerDPercent));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : 100 - window.GameVariables.AnswerCPercent - window.GameVariables.AnswerDPercent  - window.GameVariables.AnswerAPercent;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "d" && window.GameVariables.AnswerDIsOut == false){
			window.GameVariables.AnswerDPercent = Math.ceil(Math.random() * (100 - percentageOfDifficulty));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerDPercent));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerDPercent - window.GameVariables.AnswerAPercent));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : 100 - window.GameVariables.AnswerDPercent - window.GameVariables.AnswerAPercent  - window.GameVariables.AnswerBPercent;
		}
	}
	else{
		if(window.GameVariables.AnswerAIsOut == false){
			window.GameVariables.AnswerAPercent = Math.ceil(Math.random() * (100));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerAPercent));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerAPercent - window.GameVariables.AnswerBPercent));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : 100 - window.GameVariables.AnswerAPercent - window.GameVariables.AnswerBPercent  - window.GameVariables.AnswerCPercent;
		}
		
		if(window.GameVariables.AnswerBIsOut == false){
			window.GameVariables.AnswerBPercent = Math.ceil(Math.random() * (100));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerBPercent));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerBPercent - window.GameVariables.AnswerCPercent));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : 100 - window.GameVariables.AnswerBPercent - window.GameVariables.AnswerCPercent  - window.GameVariables.AnswerDPercent;
		}
		
		if(window.GameVariables.AnswerCIsOut == false){
			window.GameVariables.AnswerCPercent = Math.ceil(Math.random() * (100));
			window.GameVariables.AnswerDPercent = window.GameVariables.AnswerDIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerCPercent));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerCPercent - window.GameVariables.AnswerDPercent));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : 100 - window.GameVariables.AnswerCPercent - window.GameVariables.AnswerDPercent  - window.GameVariables.AnswerAPercent;
		}
		
		if(window.GameVariables.AnswerDIsOut == false){
			window.GameVariables.AnswerDPercent = Math.ceil(Math.random() * (100));
			window.GameVariables.AnswerAPercent = window.GameVariables.AnswerAIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerDPercent));
			window.GameVariables.AnswerBPercent = window.GameVariables.AnswerBIsOut == true ? 0 : Math.ceil(Math.random() * (100 - window.GameVariables.AnswerDPercent - window.GameVariables.AnswerAPercent));
			window.GameVariables.AnswerCPercent = window.GameVariables.AnswerCIsOut == true ? 0 : 100 - window.GameVariables.AnswerDPercent - window.GameVariables.AnswerAPercent  - window.GameVariables.AnswerBPercent;
		}
		
		
	}
	
	var sumOfAllPercents = window.GameVariables.AnswerAPercent + window.GameVariables.AnswerBPercent + window.GameVariables.AnswerCPercent + window.GameVariables.AnswerDPercent;
		
	if(sumOfAllPercents < 100){
		if(window.GameVariables.CurrentCorrectAnswer == "a" && window.GameVariables.AnswerAIsOut == false){
			window.GameVariables.AnswerAPercent += 100 - sumOfAllPercents;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "b" && window.GameVariables.AnswerBIsOut == false){
			window.GameVariables.AnswerBPercent += 100 - sumOfAllPercents;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "c" && window.GameVariables.AnswerCIsOut == false){
			window.GameVariables.AnswerCPercent += 100 - sumOfAllPercents;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "d" && window.GameVariables.AnswerDIsOut == false){
			window.GameVariables.AnswerDPercent += 100 - sumOfAllPercents;
		}
	}
}

function randomizePercentage(){
	var percentageOfDifficulty = (window.GameVariables.QuestionLevel - 1) * 5;
	var beDevious = (Math.random() * 100) > 90 ? true : false;
	
	if(beDevious != true){
			window.GameVariables.AnswerAPercent = Math.ceil(Math.random() * (100 - percentageOfDifficulty));
			
			window.GameVariables.AnswerBPercent = Math.ceil(Math.random() * (100 - percentageOfDifficulty));

			window.GameVariables.AnswerCPercent = Math.ceil(Math.random() * (100 - percentageOfDifficulty));

			window.GameVariables.AnswerDPercent = Math.ceil(Math.random() * (100 - percentageOfDifficulty));
	}
	
	var sumOfAllPercents = window.GameVariables.AnswerAPercent + window.GameVariables.AnswerBPercent + window.GameVariables.AnswerCPercent + window.GameVariables.AnswerDPercent;
		
	if(sumOfAllPercents < 100){
		if(window.GameVariables.CurrentCorrectAnswer == "a"){
			window.GameVariables.AnswerAPercent += 100 - sumOfAllPercents;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "b"){
			window.GameVariables.AnswerBPercent += 100 - sumOfAllPercents;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "c"){
			window.GameVariables.AnswerCPercent += 100 - sumOfAllPercents;
		}
		
		if(window.GameVariables.CurrentCorrectAnswer == "d"){
			window.GameVariables.AnswerDPercent += 100 - sumOfAllPercents;
		}
	}
}

function votingInProgress(){
	 randomizePercentage();
	 
	const MAXA = 40;
	const MINA = 300;
	var barAHeight = (270 * (window.GameVariables.AnswerAPercent) / 100) + "px";
	var barBHeight = (270 * (window.GameVariables.AnswerBPercent) / 100) + "px";
	var barCHeight = (270 * (window.GameVariables.AnswerCPercent) / 100) + "px";
	var barDHeight = (270 * (window.GameVariables.AnswerDPercent) / 100) + "px";
	var PercentA = ((MAXA - MINA) * (window.GameVariables.AnswerAPercent) / 100 + MINA) + "px";
	var PercentB = ((MAXA - MINA) * (window.GameVariables.AnswerBPercent) / 100 + MINA) + "px";
	var PercentC = ((MAXA - MINA) * (window.GameVariables.AnswerCPercent) / 100 + MINA) + "px";
	var PercentD = ((MAXA - MINA) * (window.GameVariables.AnswerDPercent) / 100 + MINA) + "px";
	
    if(window.GameVariables.VotingInProgress == true){
       
		
		$('#graphPercentA').transition({'top': PercentA}, 200, 'linear');
		$('#graphBarA').transition({'height':barAHeight}, 200, 'linear');
		$('#graphPercentA').html(window.GameVariables.AnswerAPercent + "%");
		$('#ataPercentStrapA').html(window.GameVariables.AnswerAPercent + "%");
	
		$('#graphPercentB').transition({'top': PercentB}, 200, 'linear');
		$('#graphBarB').transition({'height':barBHeight}, 200, 'linear');
		$('#graphPercentB').html(window.GameVariables.AnswerBPercent + "%");
		$('#ataPercentStrapB').html(window.GameVariables.AnswerBPercent + "%");
	
		$('#graphPercentC').transition({'top': PercentC}, 200, 'linear');
		$('#graphBarC').transition({'height':barCHeight}, 200, 'linear');
		$('#graphPercentC').html(window.GameVariables.AnswerCPercent + "%");
		$('#ataPercentStrapC').html(window.GameVariables.AnswerCPercent + "%");
		
		$('#graphPercentD').transition({'top': PercentD}, 200, 'linear');
		$('#graphBarD').transition({'height':barDHeight}, 200, 'linear');
		$('#graphPercentD').html(window.GameVariables.AnswerDPercent + "%");
		$('#ataPercentStrapD').html(window.GameVariables.AnswerDPercent + "%");

	
        setTimeout(votingInProgress, 250);
	
    }
}

function stopVoteProgress(){
	
	window.GameVariables.AnswerAPercent = 0;
	window.GameVariables.AnswerBPercent = 0;
	window.GameVariables.AnswerCPercent = 0;
	window.GameVariables.AnswerDPercent = 0;
	
	const MAXA = 40;
	const MINA = 300;
	var barAHeight = 5 + "px";
	var barBHeight = 5 + "px";
	var barCHeight = 5 + "px";
	var barDHeight = 5 + "px";
	
	var PercentA = 295 + "px";
	var PercentB = 295 + "px";
	var PercentC = 295 + "px";
	var PercentD = 295 + "px";
	
	
	
	
	

		$('#graphBarD').transition({'height':barDHeight}, 550);
		$('#graphPercentD').html(window.GameVariables.AnswerDPercent + "%");
		$('#ataPercentStrapD').html(window.GameVariables.AnswerDPercent + "%");
				$('#graphPercentD').transition({'top': PercentA}, 550,);
	setTimeout(function(){
		$('#graphBarC').transition({'height':barCHeight}, 550);
			$('#graphPercentC').html(window.GameVariables.AnswerCPercent + "%");
		$('#ataPercentStrapC').html(window.GameVariables.AnswerCPercent + "%");
			$('#graphPercentC').transition({'top': PercentA}, 550);
	}, 50);
	setTimeout(function(){
			$('#graphBarB').transition({'height':barBHeight}, 550);		
			$('#graphPercentB').html(window.GameVariables.AnswerBPercent + "%");
			$('#ataPercentStrapB').html(window.GameVariables.AnswerBPercent + "%");
				$('#graphPercentB').transition({'top': PercentA}, 550);
	}, 100);
	setTimeout(function(){		
			$('#graphBarA').transition({'height':barAHeight}, 550);
				$('#graphPercentA').html(window.GameVariables.AnswerAPercent + "%");
		$('#ataPercentStrapA').html(window.GameVariables.AnswerAPercent + "%");
		$('#graphPercentA').transition({'top': PercentA}, 550);
	}, 150);
}

function sumVotePercentages(){
	window.GameVariables.AnswerAPercent = Math.round(100 * window.GameVariables.AnswerAVoteCount / window.GameVariables.AnswersTotalVoteCount);
	window.GameVariables.AnswerBPercent = Math.round(100 * window.GameVariables.AnswerBVoteCount / window.GameVariables.AnswersTotalVoteCount);
	window.GameVariables.AnswerCPercent = Math.round(100 * window.GameVariables.AnswerCVoteCount / window.GameVariables.AnswersTotalVoteCount);
	window.GameVariables.AnswerDPercent = Math.round(100 * window.GameVariables.AnswerDVoteCount / window.GameVariables.AnswersTotalVoteCount);
	
}


function revealGraphPercentages(){
	sumVotePercentages();
	
	const MAXA = 40;
	const MINA = 300;
	var barAHeight = (270 * (window.GameVariables.AnswerAPercent) / 100) + "px";
	var barBHeight = (270 * (window.GameVariables.AnswerBPercent) / 100) + "px";
	var barCHeight = (270 * (window.GameVariables.AnswerCPercent) / 100) + "px";
	var barDHeight = (270 * (window.GameVariables.AnswerDPercent) / 100) + "px";
	var PercentA = ((MAXA - MINA) * (window.GameVariables.AnswerAPercent) / 100 + MINA) + "px";
	var PercentB = ((MAXA - MINA) * (window.GameVariables.AnswerBPercent) / 100 + MINA) + "px";
	var PercentC = ((MAXA - MINA) * (window.GameVariables.AnswerCPercent) / 100 + MINA) + "px";
	var PercentD = ((MAXA - MINA) * (window.GameVariables.AnswerDPercent) / 100 + MINA) + "px";
	
	
	
	$('#graphPercentA').transition({'top': PercentA}, 50, 'ease-out');
	$('#graphBarA').transition({'height':barAHeight}, 50, 'ease-out');
	$('#graphPercentA').html(window.GameVariables.AnswerAPercent + "%");
	$('#ataPercentStrapA').html(window.GameVariables.AnswerAPercent + "%");
	
		$('#graphPercentB').transition({'top': PercentB}, 50, 'ease-out');
		$('#graphBarB').transition({'height':barBHeight}, 50, 'ease-out');
		$('#graphPercentB').html(window.GameVariables.AnswerBPercent + "%");
		$('#ataPercentStrapB').html(window.GameVariables.AnswerBPercent + "%");

		$('#graphPercentC').transition({'top': PercentC}, 50, 'ease-out');
		$('#graphBarC').transition({'height':barCHeight}, 50, 'ease-out');
		$('#graphPercentC').html(window.GameVariables.AnswerCPercent + "%");
		$('#ataPercentStrapC').html(window.GameVariables.AnswerCPercent + "%");
	
		$('#graphPercentD').transition({'top': PercentD}, 50, 'ease-out');
		$('#graphBarD').transition({'height':barDHeight}, 50, 'ease-out');
		$('#graphPercentD').html(window.GameVariables.AnswerDPercent + "%");
		$('#ataPercentStrapD').html(window.GameVariables.AnswerDPercent + "%");
}

function ataLifeLineEnable(){
	$('.ataLifeLine .lifelineUsedImg').css('opacity', 0);
	$('.ataLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.ataStrapLifeLine .lifelineUsedStrapImg').css('opacity', 0);
	$('.ataStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	window.GameVariables.IsATALifeLineUsed = false;
}

function resetVoteCount(){
	window.GameVariables.AnswersTotalVoteCount = 0;
		window.GameVariables.AnswerAVoteCount = 0;
		window.GameVariables.AnswerBVoteCount = 0;
		window.GameVariables.AnswerCVoteCount = 0;
		window.GameVariables.AnswerDVoteCount = 0;
}

function slideOutATAGraph(){
	
	$('.ata').transition({perspective:0,'right':'-380px'}, 750, 'ease-in', function(){
	
		$('#graphBarA').css('height', "0px");
		$('#graphBarB').css('height', "0px");
		$('#graphBarC').css('height', "0px");
		$('#graphBarD').css('height', "0px");
		$('#graphPercentA').html("");
		$('#graphPercentB').html("");
		$('#graphPercentC').html("");
		$('#graphPercentD').html("");
		ataLifeLineDisable();
	});
	setTimeout(function(){
	$('#graphBarA').css('height', "0px");
	$('#graphBarB').css('height', "0px");
	$('#graphBarC').css('height', "0px");
	$('#graphBarD').css('height', "0px");
	}, 800);
	

}	

/****************************************************************************************************************/
/* Ask The Host Life Line Functions */
/****************************************************************************************************************/

function stqLifeLineSlideIn(){
	$('.ffLifeLine').transition({perspective:0, 'left':'-146px'}, 1000);
	$('.pafLifeLine').transition({perspective:0, 'left':'203px'}, 1000);
	$('.ataLifeLine').transition({perspective:0, 'left':'338px'}, 1000);
	$('.stqLifeLine').transition({perspective:0, opacity: 1, 'left':'468px'}, 1000);
	
	$('.pafStrapLifeLine').transition({perspective:0, 'left':'625px'}, 500);
	$('.ataStrapLifeLine').transition({perspective:0, 'left':'850px'}, 500);
	$('.stqStrapLifeLine').transition({perspective:0, 'left':'1075px'}, 500);
}

function stqLifeLineSlideOut(){
	window.GameVariables.LifeLineAnimationCounter = 0;
	$('.ffLifeLine').transition({perspective:0, 'left':'-50px'}, 1000);
	$('.pafLifeLine').transition({perspective:0, 'left':'240px'}, 1000);
	$('.athLifeLine').transition({perspective:0, 'left':'375px'}, 1000);
	$('.stqLifeLine').transition({perspective:0, opacity: 0, 'left':'760px'}, 1000);
	
	$('.ffStrapLifeLine').transition({perspective:0, 'left':'400px'}, 500);
	$('.pafStrapLifeLine').transition({perspective:0, 'left':'745px'}, 500);
	$('.athStrapLifeLine').transition({perspective:0, 'left':'1090px'}, 500);
	$('.stqStrapLifeLine').transition({perspective:0, 'left':'1870px'}, 500);
}

function stqPulseLifeLine(){
	$('.stqLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, 'ease-out', function(){
		$('.stqLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.stqLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.stqLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.stqStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, 'ease-out', function(){
		$('.stqStrapLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.stqStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.stqStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
}

function stqLifeLineDisable(){
	$('.stqLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.stqLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.stqStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.stqStrapLifeLine .lifelineStrapImg').css('opacity', 1);
}

function stqLifeLineDisable(){
	$('.stqLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.stqLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.stqStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.stqStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	window.GameVariables.IsSTQLifeLineUsed = true;
}
function athPulseLifeLine(){
	$('.stqLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, 'ease-out', function(){
		$('.stqLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.stqLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.stqLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.stqStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, 'ease-out', function(){
		$('.stqStrapLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.stqStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.stqStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
}

function athLifeLineDisable(){
	$('.athLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.athLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.athStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.athStrapLifeLine .lifelineStrapImg').css('opacity', 1);
}

/****************************************************************************************************************/
/* Double Dips Life Line Functions */
/****************************************************************************************************************/
function ddPulseLifeLine(){
	$('.stqLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, 'ease-out', function(){
		$('.stqLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.stqLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.stqLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.stqStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, 'ease-out', function(){
		$('.stqStrapLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.stqStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.stqStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
}

function ddLifeLineDisable(){
	$('.stqLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.stqLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.stqStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.stqStrapLifeLine .lifelineStrapImg').css('opacity', 1);
}
function ddLifeLineEnable(){
	$('.stqLifeLine .lifelineUsedImg').css('opacity', 0);
	$('.stqLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.stqStrapLifeLine .lifelineUsedStrapImg').css('opacity', 0);
	$('.stqStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	window.GameVariables.IsSTQLifeLineUsed = false;
}

/****************************************************************************************************************/
/* Ask Three of the Audience Member Life Line Functions */
/****************************************************************************************************************/

function showFirstAudienceAnswer(answer){
    $('.a3taFirstStrapAnswerDiv').html(answer);
    $('.a3taFirstStrapDiv').transition({perspective:0, 'right':'-420px'}, 300, 'ease-out');
    startGeneralSound("lifeline_1_on.mp3");
}

function showSecondAudienceAnswer(answer){
    $('.a3taSecondStrapAnswerDiv').html(answer);
    $('.a3taSecondStrapDiv').transition({perspective:0, 'right':'-420px'}, 300, 'ease-out');
    startGeneralSound("lifeline_2_on.mp3");
}

function showThirdAudienceAnswer(answer){
    $('.a3taThirdStrapAnswerDiv').html(answer);
    $('.a3taThirdStrapDiv').transition({perspective:0, 'right':'-420px'}, 300, 'ease-out');
    startGeneralSound("lifeline_3_on.mp3");
}

function hideAudienceAnswers(){
    $('.a3taFirstStrapDiv').transition({perspective:0, 'right':'-665px'}, 400, 'ease-in');
    $('.a3taSecondStrapDiv').transition({perspective:0, 'right':'-665px'}, 400, 'ease-in');
    $('.a3taThirdStrapDiv').transition({perspective:0, 'right':'-665px'}, 400, 'ease-in');
    setTimeout(function(){
        $('.a3taFirstStrapAnswerDiv').html("");
        $('.a3taSecondStrapAnswerDiv').html("");
        $('.a3taThirdStrapAnswerDiv').html("");
    }, 1000);
}

/****************************************************************************************************************/
/* Other Life Line Functions */
/****************************************************************************************************************/

function showLifeLineCentered(target){
	window.GameVariables.ContinuePulsingLifeLineCenter = true;
	window.GameVariables.ShowLifeLineCenteredAnimation = true;
	
	$(target).css('opacity', 1);
		
	$('.answerStrapLifeLineCenterContainerDiv').transition({perspective:0, scale:[1,1], opacity:1}, 200, 'ease-out', function(){
		pulseLifeLineCenteredGlow();
	});
}

function pulseLifeLineCenteredGlow(){
	$('.lifelineCenterGlowImg').transition({perspective:0, scale:[1.2,1.2]}, 1000, function(){
		$('.lifelineCenterGlowImg').transition({perspective:0, scale:[1,1]}, 1000, function(){
			if(window.GameVariables.ContinuePulsingLifeLineCenter == true){
				setTimeout(pulseLifeLineCenteredGlow, 1000);
			}
		});
	});
}

function hideLifeLineCentered(){
	window.GameVariables.ContinuePulsingLifeLineCenter = false;
	window.GameVariables.ShowLifeLineCenteredAnimation = false;
	$('.answerStrapLifeLineCenterContainerDiv').transition({perspective:0, scale:[0.2,0.2], opacity:0}, 200, 'ease-in', function(){
		$('.lifelineCenterImg').css('opacity', 0);
	});
}

function hideJustLifeLineCenteredContainer(){
	$('.answerStrapLifeLineCenterDiv').css('opacity', 0);
}

function showJustLifeLineCenteredContainer(){
	$('.answerStrapLifeLineCenterDiv').css('opacity', 1);
}

function slideLifeLineStrapIn(){
	$('.lifeLinesLeftStrapDiv').transition({perspective:0, 'left':'600px', opacity:1}, 400, 'ease-out');
}

function slideLifeLineStrapOut(){
	$('.lifeLinesLeftStrapDiv').transition({perspective:0, 'left':'1650px', opacity:1}, 400, 'ease-in');

}

/****************************************************************************************************************/
/* Phone a Friend Life Line Functions */
/****************************************************************************************************************/

function pafPulseLifeLine(){
	$('.pafLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, function(){
		$('.pafLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.pafLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.pafLifeLine .lifelineYellowTreeImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.pafStrapLifeLine').transition({perspective:0, scale:[1.25,1.25]}, 250, 'ease-out', function(){
		$('.pafStrapLifeLine').transition({perspective:0, scale:[1,1]}, 500, 'ease-in', function(){
			
		});
	});
	
	$('.pafStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 1}, 250, 'ease-out', function(){
		$('.pafStrapLifeLine .lifelineYellowStrapImg').transition({perspective:0, opacity: 0}, 500, 'ease-in', function(){
			
		});
	});
}

function pafLifeLineDisable(){
	$('.pafLifeLine .lifelineUsedImg').css('opacity', 1);
	$('.pafLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.pafStrapLifeLine .lifelineUsedStrapImg').css('opacity', 1);
	$('.pafStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	window.GameVariables.IsPAFLifeLineUsed = true;
}
function pafLifeLineEnable(){
	$('.pafLifeLine .lifelineUsedImg').css('opacity', 0);
	$('.pafLifeLine .lifelineTreeImg').css('opacity', 1);
	$('.pafStrapLifeLine .lifelineUsedStrapImg').css('opacity', 0);
	$('.pafStrapLifeLine .lifelineStrapImg').css('opacity', 1);
	window.GameVariables.IsPAFLifeLineUsed = false;
}

function pafAnimateAtom(){
	$('.pafAtomDiv').transition({perspective:0, 'rotate':'360deg'}, 100000, 'linear', function(){
		$('.pafAtomDiv').transition({perspective:0, 'rotate':'0deg'}, 0, 'linear');
		pafAnimateAtom();
	});
}

function pafRevealClock(){
	$('#pafDotTimer1Img').css('opacity', 0);
	$('#pafDotTimer2Img').css('opacity', 0);
	$('#pafDotTimer3Img').css('opacity', 0);
	$('#pafDotTimer4Img').css('opacity', 0);
	$('#pafDotTimer5Img').css('opacity', 0);
	$('#pafDotTimer6Img').css('opacity', 0);
	$('#pafDotTimer7Img').css('opacity', 0);
	$('#pafDotTimer8Img').css('opacity', 0);
	$('#pafDotTimer9Img').css('opacity', 0);
	$('#pafDotTimer10Img').css('opacity', 0);
	$('#pafDotTimer11Img').css('opacity', 0);
	$('#pafDotTimer12Img').css('opacity', 0);
	$('#pafDotTimer13Img').css('opacity', 0);
	$('#pafDotTimer14Img').css('opacity', 0);
	$('#pafDotTimer15Img').css('opacity', 0);
	$('#pafDotTimer16Img').css('opacity', 0);
	$('#pafDotTimer17Img').css('opacity', 0);
	$('#pafDotTimer18Img').css('opacity', 0);
	$('#pafDotTimer19Img').css('opacity', 0);
	$('#pafDotTimer20Img').css('opacity', 0);
	$('#pafDotTimer21Img').css('opacity', 0);
	$('#pafDotTimer22Img').css('opacity', 0);
	$('#pafDotTimer23Img').css('opacity', 0);
	$('#pafDotTimer24Img').css('opacity', 0);
	$('#pafDotTimer25Img').css('opacity', 0);
	$('#pafDotTimer26Img').css('opacity', 0);
	$('#pafDotTimer27Img').css('opacity', 0);
	$('#pafDotTimer28Img').css('opacity', 0);
	$('#pafDotTimer29Img').css('opacity', 0);
	$('#pafDotTimer30Img').css('opacity', 1);
	pafAnimateAtom();
	
	$('.pafClockDiv').transition({perspective:0, 'opacity': 1, scale:[0.75]}, 600, 'ease-in-out', function(){
		setTimeout(function(){
			pafCountDownClock(0);
			startLifelinePassiveSound("paf_countdown.mp3");
			setTimeout(stopLifelineActiveSound, 200);
		});
	});
}

function pafCountDownClock(timeConsumed){
	if(timeConsumed == 30){
		$('.pafClockTimeDiv').html("0");
	}
	else{
		$('.pafClockTimeDiv').html(30 - timeConsumed);
	}

	if(timeConsumed == 0){
		$('#pafDotTimer1Img').css('opacity', 0);
		$('#pafDotTimer2Img').css('opacity', 0);
		$('#pafDotTimer3Img').css('opacity', 0);
		$('#pafDotTimer4Img').css('opacity', 0);
		$('#pafDotTimer5Img').css('opacity', 0);
		$('#pafDotTimer6Img').css('opacity', 0);
		$('#pafDotTimer7Img').css('opacity', 0);
		$('#pafDotTimer8Img').css('opacity', 0);
		$('#pafDotTimer9Img').css('opacity', 0);
		$('#pafDotTimer10Img').css('opacity', 0);
		$('#pafDotTimer11Img').css('opacity', 0);
		$('#pafDotTimer12Img').css('opacity', 0);
		$('#pafDotTimer13Img').css('opacity', 0);
		$('#pafDotTimer14Img').css('opacity', 0);
		$('#pafDotTimer15Img').css('opacity', 0);
		$('#pafDotTimer16Img').css('opacity', 0);
		$('#pafDotTimer17Img').css('opacity', 0);
		$('#pafDotTimer18Img').css('opacity', 0);
		$('#pafDotTimer19Img').css('opacity', 0);
		$('#pafDotTimer20Img').css('opacity', 0);
		$('#pafDotTimer21Img').css('opacity', 0);
		$('#pafDotTimer22Img').css('opacity', 0);
		$('#pafDotTimer23Img').css('opacity', 0);
		$('#pafDotTimer24Img').css('opacity', 0);
		$('#pafDotTimer25Img').css('opacity', 0);
		$('#pafDotTimer26Img').css('opacity', 0);
		$('#pafDotTimer27Img').css('opacity', 0);
		$('#pafDotTimer28Img').css('opacity', 0);
		$('#pafDotTimer29Img').css('opacity', 0);
		$('#pafDotTimer30Img').css('opacity', 1);
	}
	else if(1 <= timeConsumed <= 30){
		$('#pafDotTimer' + (31 - timeConsumed) + 'Img').css('opacity',0);
		if(timeConsumed != 30){
			$('#pafDotTimer' + (30 - timeConsumed) + 'Img').css('opacity',1);
		}
	}
	
	if(timeConsumed == 30){
		window.GameVariables.PAFClockTimeout = setTimeout(pafHideClock, 250);
	}
	else{
		window.GameVariables.PAFClockTimeout = setTimeout(function(){
			pafCountDownClock(timeConsumed + 1);
		}, 995);
	}
}

function pafEndClockEarly(){
	clearTimeout(window.GameVariables.PAFClockTimeout);
	pafHideClock();
	startLifelineActiveSound("paf_end_call_early.mp3");
}                               

function pafHideClock(){
	$('.pafClockDiv').transition({perspective:0, 'opacity': 1, scale:[0]}, 400, 'ease-in', function(){
		$('.pafClockTimeDiv').html(30);
		window.GameVariables.pafLifeLineSequenceCounter = 0;
		window.GameVariables.CannotLockInFinalAnswer = false;
		pafLifeLineDisable();
	});
	
	setTimeout(playBackgroundSound, 500);
}
