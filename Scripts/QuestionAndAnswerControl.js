function setQuestion(isSettingSwitchQuestion){
	var targetQuestion = null;
	
	if(isSettingSwitchQuestion == false){
		targetQuestion = window.GameVariables.QuestionsAndAnswers[window.GameVariables.QuestionLevel - 1];
	}
	else{
		targetQuestion = window.GameVariables.SwitchQuestionsAndAnswers[window.GameVariables.QuestionLevel - 1];
	}
	
	window.GameVariables.CurrentCorrectAnswer = targetQuestion.CorrectAnswer;
	
	$('.questionTd').html(targetQuestion.Question);
	$('#answerA .answerP').html(targetQuestion.AnswerA);
	$('#answerB .answerP').html(targetQuestion.AnswerB);
	$('#answerC .answerP').html(targetQuestion.AnswerC);
	$('#answerD .answerP').html(targetQuestion.AnswerD);

	var MaxQCharacter = 150;
	var MaxACharacter = 40;
	
    const characterCount = targetQuestion.Question.length;
		if(characterCount < MaxQCharacter) {
			$('.questionTd').css('fontSize', 40);
		}
		else if(characterCount > MaxQCharacter) {
			$('.questionTd').css('fontSize', 32);
		}
	const AnsACount = targetQuestion.AnswerA.length;
			if(AnsACount < MaxACharacter) {
			$('#answerA .answerP').css('fontSize', 38);
				$('#answerA .answerP').css('top', 26);
		}
		else if(AnsACount > MaxACharacter) {
			$('#answerA .answerP').css('fontSize', 32);
				$('#answerA .answerP').css('top', 15);	
		}
	const AnsBCount = targetQuestion.AnswerB.length;
		if(AnsBCount < MaxACharacter) {
			$('#answerB .answerP').css('fontSize', 38);
				$('#answerB .answerP').css('top', 26);
		}
		else if(AnsBCount > MaxACharacter) {
			$('#answerB .answerP').css('fontSize', 32);
				$('#answerB .answerP').css('top', 15);	
		}
	const AnsCCount = targetQuestion.AnswerC.length;
		if(AnsCCount < MaxACharacter) {
			$('#answerC .answerP').css('fontSize', 38);
				$('#answerC .answerP').css('top', 26);
		}
		else if(AnsCCount > MaxACharacter) {
			$('#answerC .answerP').css('fontSize', 32);
				$('#answerC .answerP').css('top', 15);	
		}
	const AnsDCount = targetQuestion.AnswerD.length;
		if(AnsDCount < MaxACharacter) {
			$('#answerD .answerP').css('fontSize', 38);
				$('#answerD .answerP').css('top', 26);
		}
		else if(AnsDCount > MaxACharacter) {
			$('#answerD .answerP').css('fontSize', 32);
				$('#answerD .answerP').css('top', 15);	
		}
}


function revealQuestionAndAnswerStraps(){
	$('.answerStrapDiv').css('opacity', 1);
	$('.questionStrapDiv').css('opacity', 1);
	
	if(window.GameVariables.IsSTQLifeLineActiveAtStart == true){
		window.GameVariables.IsSTQLifeLineActiveAtStart = false;
		showLifeLineCentered('#stqLifeLineCenterImg');
	}
}

function revealQuestionAndAnswerStraps2(){
	$('.answerStrapDiv').transition({perspective:0,opacity:1}, 300, 'linear');
	$('.questionStrapDiv').transition({perspective:0,opacity:1}, 300, 'linear');
	
	if(window.GameVariables.IsSTQLifeLineActiveAtStart == true){
		window.GameVariables.IsSTQLifeLineActiveAtStart = false;
		showLifeLineCentered('#stqLifeLineCenterImg');
	}
}

function showQuestionAndAnswerStraps(){
	$('.answerStrapDiv').css('opacity', 1);
	$('.questionStrapDiv').css('opacity', 1);
}

function showQuestionAndAnswerStrapsUp(){
	$('.answerGroupBDiv').transition({perspective:4096, 'bottom':'0px'}, 500, 'ease-out');
	$('.answerGroupADiv').transition({perspective:4096, 'bottom':'0px'}, 500, 'ease-out');
	$('.questionStrapDiv').transition({perspective:4096, 'bottom':'220px'}, 550, 'ease-out');
}

function hideQuestionAndAnswerStraps(){
	$('.answerStrapDiv').css('opacity', 0);
	$('.questionStrapDiv').css('opacity', 0);
	clearTimeout(window.GameVariables.ShowAnswerTimeout);
}

function hideQuestionAndAnswerStraps2(){
	$('.answerStrapDiv').transition({perspective:0,opacity:0}, 500, 'linear');
	$('.questionStrapDiv').transition({perspective:0,opacity:0}, 500, 'linear');
	clearTimeout(window.GameVariables.ShowAnswerTimeout);
}

function hideQuestionAndAnswerStrapsDown(){
	$('.answerGroupBDiv').transition({perspective:4096, 'bottom':'-450px'}, 500, 'linear');
	$('.answerGroupADiv').transition({perspective:4096, 'bottom':'-450px'}, 500, 'linear');
	$('.questionStrapDiv').transition({perspective:4096, 'bottom':'-350px'}, 550, 'linear');
	clearTimeout(window.GameVariables.ShowAnswerTimeout);
}

function revealAnswersOneByOne(){
	window.GameVariables.RevealAnswerCounter++;
	
	if(window.GameVariables.RevealAnswerCounter == 1){
		$('#answerA .letterP').css('opacity', 1);
		$('#answerA .answerP').css('opacity', 1);
		$('#answerA .diagonalImg').css('opacity', 1);
	}
	else if(window.GameVariables.RevealAnswerCounter == 2){
		$('#answerB .letterP').css('opacity', 1);
		$('#answerB .answerP').css('opacity', 1);
		$('#answerB .diagonalImg').css('opacity', 1);
	}
	else if(window.GameVariables.RevealAnswerCounter == 3){
		$('#answerC .letterP').css('opacity', 1);
		$('#answerC .answerP').css('opacity', 1);
		$('#answerC .diagonalImg').css('opacity', 1);		
	}
	else if(window.GameVariables.RevealAnswerCounter == 4){
		$('#answerD .letterP').css('opacity', 1);
		$('#answerD .answerP').css('opacity', 1);
		$('#answerD .diagonalImg').css('opacity', 1);
		window.GameVariables.RevealAnswerCounter = 0;
	}
}

function revealAllAnswersAtOnce(){
	$('#answerA .letterP, #answerB .letterP, #answerC .letterP, #answerD .letterP').css('opacity', 1);
	$('#answerA .answerP, #answerB .answerP, #answerC .answerP, #answerD .answerP').css('opacity', 1);
	$('#answerA .diagonalImg, #answerB .diagonalImg, #answerC .diagonalImg, #answerD .diagonalImg').css('opacity', 1);
}

function lockInFinalAnswer(answer){
	$('#answer' + answer + ' .finalImg').css('opacity', 1);
	$('#answer' + answer + ' .letterP').css('color', '#000000');
	$('#answer' + answer + ' .answerP').css('color', '#000000');
	$('#answer' + answer + ' .diagonalImg').attr('src', 'Images/white_diagonal.png');
	window.GameVariables.QuestionSequenceCounter = 6;
}

function showFinalToCorrectAnswerStep1(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 150, 'linear');
	$('#answer' + answer + ' .letterP').css('color', '#000000');
	$('#answer' + answer + ' .answerP').css('color', '#000000');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		showFinalToCorrectAnswerStep2(answer);
	}, 75);
}

function showFinalToCorrectAnswerStep2(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:0}, 150, 'linear');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		showFinalToCorrectAnswerStep3(answer);
	}, 75);
}

function showFinalToCorrectAnswerStep3(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 150, 'linear');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		showFinalToCorrectAnswerStep4(answer);
	}, 75);
}
function showFinalToCorrectAnswerStep4(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:0}, 150, 'linear');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		showFinalToCorrectAnswerStep5(answer);
	}, 75);
}

function showFinalToCorrectAnswerStep5(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 150, 'linear');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		showFinalToCorrectAnswerStep6(answer);
	}, 75);
}
function showFinalToCorrectAnswerStep6(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:0}, 150, 'linear');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		showFinalToCorrectAnswerStep7(answer);
	}, 75);
}

function showFinalToCorrectAnswerStep7(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 100, 'linear');
}

/****************************************************************************************************************/
/* Reveal correct answer animation 2 */
/****************************************************************************************************************/

function toshowFinalToCorrectAnswerStep1(answer){
	
	$('#answer' + answer + ' .letterP').css('color', '#000000');
	$('#answer' + answer + ' .answerP').css('color', '#000000');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		toshowFinalToCorrectAnswerStep2(answer);
	}, 100);
}
function toshowFinalToCorrectAnswerStep2(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 100, 'linear');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		toshowFinalToCorrectAnswerStep3(answer);
	}, 150);
}
function toshowFinalToCorrectAnswerStep3(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:0}, 100, 'linear');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		toshowFinalToCorrectAnswerStep4(answer);
	}, 150);
}

function toshowFinalToCorrectAnswerStep4(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 100, 'linear');
}







function revealNormalToCorrectAnswerStep1(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 100, 'linear');
	$('#answer' + answer + ' .diagonalImg').attr('src', 'Images/white_diagonal.png');
	$('#answer' + answer + ' .letterP').css('color', '#000000');
	$('#answer' + answer + ' .answerP').css('color', '#000000');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		revealNormalToCorrectAnswerStep2(answer);
	}, 150);
}

function revealNormalToCorrectAnswerStep2(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:0}, 100, 'linear');
	$('#answer' + answer + ' .diagonalImg').attr('src', 'Images/orange_diagonal.png');
	$('#answer' + answer + ' .letterP').css('color', '#FF8000');
	$('#answer' + answer + ' .answerP').css('color', '#FFFFFF');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		revealNormalToCorrectAnswerStep3(answer);
	}, 150);
}

function revealNormalToCorrectAnswerStep3(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 100, 'linear');
	$('#answer' + answer + ' .diagonalImg').attr('src', 'Images/white_diagonal.png');
	$('#answer' + answer + ' .letterP').css('color', '#000000');
	$('#answer' + answer + ' .answerP').css('color', '#000000');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		revealNormalToCorrectAnswerStep4(answer);
	}, 150);
}

function revealNormalToCorrectAnswerStep4(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:0}, 100, 'linear');
	$('#answer' + answer + ' .diagonalImg').attr('src', 'Images/orange_diagonal.png');
	$('#answer' + answer + ' .letterP').css('color', '#FF8000');
	$('#answer' + answer + ' .answerP').css('color', '#FFFFFF');
	window.GameVariables.ShowAnswerTimeout = setTimeout(function(){
		revealNormalToCorrectAnswerStep5(answer);
	}, 150);
}

function revealNormalToCorrectAnswerStep5(answer){
	$('#answer' + answer + ' .correctImg').transition({perspective:0,opacity:1}, 100, 'linear');
	$('#answer' + answer + ' .diagonalImg').attr('src', 'Images/white_diagonal.png');
	$('#answer' + answer + ' .letterP').css('color', '#000000');
	$('#answer' + answer + ' .answerP').css('color', '#000000');
}	

function resetAnswerStraps(){
	$('#answerA .letterP, #answerA .answerP').css('opacity', 0);
	$('#answerB .letterP, #answerB .answerP').css('opacity', 0);
	$('#answerC .letterP, #answerC .answerP').css('opacity', 0);
	$('#answerD .letterP, #answerD .answerP').css('opacity', 0);
	$('.finalImg, .correctImg, .diagonalImg').css('opacity', 0);
	$('.diagonalImg').attr('src', 'Images/orange_diagonal.png');
	$('.answerP').css('color','#FFFFFF');
	$('.letterP').css('color','#FF8000');
	$('#ataPercentStrapA').parent().transition({perspective:0, opacity:0}, 250, 'linear');
	$('#ataPercentStrapB').parent().transition({perspective:0, opacity:0}, 250, 'linear');
	$('#ataPercentStrapC').parent().transition({perspective:0, opacity:0}, 250, 'linear');
	$('#ataPercentStrapD').parent().transition({perspective:0, opacity:0}, 250, 'linear');
	window.GameVariables.AnswerAIsOut = false;
	window.GameVariables.AnswerBIsOut = false;
	window.GameVariables.AnswerCIsOut = false;
	window.GameVariables.AnswerDIsOut = false;
	window.GameVariables.CurrentTargetAnswer = "";
}

function undoFinaledAnswer(){
	window.GameVariables.CurrentTargetAnswer = "";
	
	if(window.GameVariables.AnswerAIsOut == false){
		$('#answerA .finalImg').css('opacity', 0);
		$('#answerA .diagonalImg').attr('src', 'Images/orange_diagonal.png');
		$('#answerA .answerP').css('color','#FFFFFF');
		$('#answerA .letterP').css('color','#FF8000');
	}
	
	if(window.GameVariables.AnswerBIsOut == false){
		$('#answerB .finalImg').css('opacity', 0);
		$('#answerB .diagonalImg').attr('src', 'Images/orange_diagonal.png');
		$('#answerB .answerP').css('color','#FFFFFF');
		$('#answerB .letterP').css('color','#FF8000');
	}
	
	if(window.GameVariables.AnswerCIsOut == false){
		$('#answerC .finalImg').css('opacity', 0);
		$('#answerC .diagonalImg').attr('src', 'Images/orange_diagonal.png');
		$('#answerC .answerP').css('color','#FFFFFF');
		$('#answerC .letterP').css('color','#FF8000');
	}
	
	if(window.GameVariables.AnswerDIsOut == false){
		$('#answerD .finalImg').css('opacity', 0);
		$('#answerD .diagonalImg').attr('src', 'Images/orange_diagonal.png');
		$('#answerD .answerP').css('color','#FFFFFF');
		$('#answerD .letterP').css('color','#FF8000');
	}
}

function showFinalToIncorrectAnswer(answer){
	$('#answer'+answer+' .finalImg').css('opacity', 0);
	$('#answer'+answer+' .letterP').css('opacity', 0.25);
	$('#answer'+answer+' .answerP').css('opacity', 0.25);
	$('#answer'+answer+' .diagonalImg').css('opacity', 0.25);
	$('#answer'+answer+' .answerP').css('color','#FFFFFF');
	$('#answer'+answer+' .letterP').css('color','#DFAA14');

}















