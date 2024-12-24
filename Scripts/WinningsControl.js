function showAmountWon(){
	if (window.GameVariables.Realmoneyon == true && window.GameVariables.QuestionLevel >= 10){
		console.log(window.GameVariables.Realmoney[window.GameVariables.QuestionLevel-10])
		string = accounting.formatMoney(window.GameVariables.Realmoney[window.GameVariables.QuestionLevel-10], "", 0);
		$('.winningsP').html(string + " VND");
		$('.totalPrizeMoneyWonDiv').html(string + " VND");
	}
	else{
		$('.winningsP').html(accounting.formatMoney(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1], " $A", 0));
		$('.totalPrizeMoneyWonDiv').html(accounting.formatMoney(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1], " $A", 0));
	}
	
	$('.winStrapDiv').css('opacity', 1);
}

function hideAmountWon(){
	$('.winStrapDiv').css('opacity', 0);
}

function reduceAmountWon(){
	if(window.GameVariables.QuestionLevel < 6){
		$('.totalPrizeMoneyWonDiv').html("0");
	}
	else if(window.GameVariables.QuestionLevel < window.GameVariables.SecondHaven + 1){
		$('.totalPrizeMoneyWonDiv').html(accounting.formatMoney(window.GameVariables.PrizeAmounts[4], " $A", 0));
	}
	else {
		$('.totalPrizeMoneyWonDiv').html(accounting.formatMoney(window.GameVariables.PrizeAmounts[window.GameVariables.SecondHaven - 1], " $A", 0));
	}
}

function showMillionaireTitleStrap(){
	$('.millionaireWinnerTitleDiv').transition({perspective:0, 'bottom':'-450px', scale:[1,1]}, 0, 'ease-out');
	$('.millionaireWinnerTitleDiv').css('opacity', 1);
	$('.millionaireWinnerTitleDiv').transition({perspective:0, 'bottom':'0px', scale:[1,1]}, 500, 'ease-out');
}

function hideMillionaireTitleStrap(){
	$('.millionaireWinnerTitleDiv').transition({perspective:0, 'bottom':'-450px', scale:[1,1]}, 500, 'ease-in');
}
function showTotalPrizeMoneyStrap(){
	$('.totalPrizeMoneyWonDiv').css('opacity', 0);
	$('.totalPrizeMoneyDiv').transition({perspective:0, 'bottom':'-450px', scale:[1,1]}, 0, 'ease-out');
	$('.totalPrizeMoneyDiv').css('opacity', 1);
	$('.totalPrizeMoneyDiv').transition({perspective:0, 'bottom':'0px', scale:[1,1]}, 500, 'ease-out');
	setTimeout(function(){
	$('.totalPrizeMoneyWonDiv').transition({perspective:0, opacity:1}, 500, 'linear');
	}, 500)
}

function hideTotalPrizeMoneyStrap(){
	$('.totalPrizeMoneyDiv').transition({perspective:0, 'bottom':'-450px', scale:[1,1]}, 500, 'ease-in');
}