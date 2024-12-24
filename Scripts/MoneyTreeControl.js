function renderMoneyTreeTable(){
	var htmlTableString = "";
	
	for (var i = 14; i >= 0; i--){
		htmlTableString += "<tr id='moneyTreeTr" + (i+1) + "'>";
		
		if(i == 4|| (i+1) === window.GameVariables.SecondHaven|| i == 14){
			htmlTableString += "<td class='moneyTreeLevelWhiteTd'>";
		}
		else{
			htmlTableString += "<td class='moneyTreeLevelTd'>";
		}
		
		htmlTableString += (i + 1);
		htmlTableString += "</td>"
		htmlTableString += "<td class='moneyTreeDiagonalTd'></td>"
		
		if(i == 4|| (i+1) === window.GameVariables.SecondHaven|| i == 14){
			htmlTableString += "<td class='moneyTreeAmountWhiteTd'>"
		}
		else{
			htmlTableString += "<td class='moneyTreeAmountTd'>"
		}
		
		if (window.GameVariables.Realmoneyon == true && i>=9){
			string = accounting.formatMoney(window.GameVariables.Realmoney[i-9], "", 0)
			htmlTableString += string + "  vnd";
		}
		else{
			htmlTableString += accounting.formatMoney(window.GameVariables.PrizeAmounts[i], " $A ", 0);
		}
		


		
		htmlTableString += "</td>"
		htmlTableString += "</tr>"
	}
	
	$('.moneyTreeTable').html(htmlTableString);
}

function slideInMoneyTree(){
	
	$('.moneyTreeDiv').transition({perspective:0, 'right': '-100px'}, 750, 'ease-in-out');
}

function slideoutMoneyTree(){
	
	$('.moneyTreeDiv').transition({perspective:0, 'right': '-1000px'}, 750, 'ease-in');
}

function blinkNextLevel(){
	up(window.GameVariables.QuestionLevel);	
		setTimeout(function(){
	down(window.GameVariables.QuestionLevel);
		}, 700);
}

function up(level){
	var targetI = '#moneyTreeTr' + level;		
		$(targetI + ' .moneyTreeAmountTd').transition({perspective:0,scale:1.15}, 600, 'ease');
			$(targetI + ' .moneyTreeAmountWhiteTd').transition({perspective:0,scale:1.15}, 600, 'ease');
}

function down(level){
	var targetI = '#moneyTreeTr' + level;						
		$(targetI + ' .moneyTreeAmountTd').transition({perspective:0,scale:1}, 700, 'ease');
		$(targetI + ' .moneyTreeAmountWhiteTd').transition({perspective:0,scale:1}, 700, 'ease');
}

function downim(level){
	var targetI = '#moneyTreeTr' + level;						
		$(targetI + ' .moneyTreeAmountTd').transition({perspective:0,scale:1}, 0);
}

function setLevelOnMoneyTree(level){
	$('.moneyTreeLevelWhiteTd').css('color','#FFFFFF');
	$('.moneyTreeLevelWhiteTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeAmountWhiteTd').css('color','#FFFFFF');
	$('.moneyTreeAmountWhiteTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeLevelTd').css('color','#F99B1C');
	$('.moneyTreeLevelTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeAmountTd').css('color','#F99B1C');
	$('.moneyTreeAmountTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeAmountWhiteTd').css('background-image','none');
	$('.moneyTreeAmountTd').css('background-image','none');
	$('.moneyTreeLevelWhiteTd').css('background-image','none');
	$('.moneyTreeLevelTd').css('background-image','none');
	$('.moneyTreeDiagonalTd').css('background-image','none');
	$('.moneyTreeDiagonalTd, .moneyTreeDiagonalWhiteTd').css('background-image','none');

	for(var i = 1; i < level; i++){
		var targetId = '#moneyTreeTr' + i;
		$(targetId + ' .moneyTreeDiagonalTd').css('background-image','url(' + 'Images/white_diagonal_money_tree.png' +')');
		
		if((i + 1) == level){
			$(targetId + ' td').css('background-image','url(' + 'Images/follower.png' +')');
			$(targetId + ' .moneyTreeLevelTd').css('color','#000000');
			$(targetId + ' .moneyTreeLevelTd').css('text-shadow','0px 0px transparent');
			$(targetId + ' .moneyTreeLevelWhiteTd').css('color','#FFFFFF');
			$(targetId + ' .moneyTreeAmountTd').css('color','#000000');
			$(targetId + ' .moneyTreeAmountTd').css('text-shadow','0px 0px transparent');
			$(targetId + ' .moneyTreeAmountWhiteTd').css('color','#FFFFFF');
			$(targetId + ' .moneyTreeDiagonalTd').css('background-image','url(' + 'Images/white_diagonal_money_tree_highlight.png' +')');
		}
	}
}

function setSecondHaven(){
	window.GameVariables.SecondHaven = window.GameVariables.QuestionLevel;
	startGeneralSound("safety_net_set.mp3");
}

function scaleTreeLevels(level){
	var targetId = '#moneyTreeTr' + level;
	
	var previousTargetId = '#moneyTreeTr' + (level - 1);
	
	$(targetId + ' td').css('background-image','url(' + 'Images/follower.png' +')');
	$(targetId + ' .moneyTreeLevelTd').css('color','#000000');
	$(targetId + ' .moneyTreeLevelTd').css('text-shadow','0px 0px transparent');
	$(targetId + ' .moneyTreeLevelWhiteTd').css('color','#FFFFFF');
	$(targetId + ' .moneyTreeAmountTd').css('color','#000000');
	$(targetId + ' .moneyTreeAmountTd').css('text-shadow','0px 0px transparent');
	$(targetId + ' .moneyTreeAmountWhiteTd').css('color','#FFFFFF');
	$(targetId + ' .moneyTreeDiagonalTd').css('background-image','url(' + 'Images/white_diagonal_money_tree_highlight.png' +')');
	
	if((level - 1) == 5|| (level - 1) == 15){
		$(previousTargetId + ' td').css('background-image','none');
		$(previousTargetId + ' .moneyTreeLevelWhiteTd').css('color','#FFFFFF');
		$(previousTargetId + ' .moneyTreeLevelWhiteTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
		$(previousTargetId + ' .moneyTreeAmountWhiteTd').css('color','#FFFFFF');
		$(previousTargetId + ' .moneyTreeAmountWhiteTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
		$(previousTargetId + ' .moneyTreeDiagonalTd').css('background-image','url(' + 'Images/white_diagonal_money_tree.png' +')');
	}
	else{
		$(previousTargetId + ' td').css('background-image','none');
		$(previousTargetId + ' .moneyTreeLevelTd').css('color','#F99B1C');
		$(previousTargetId + ' .moneyTreeLevelTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
		$(previousTargetId + ' .moneyTreeAmountTd').css('color','#F99B1C');
		$(previousTargetId + ' .moneyTreeAmountTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
		$(previousTargetId + ' .moneyTreeDiagonalTd').css('background-image','url(' + 'Images/white_diagonal_money_tree.png' +')');
	}
	
	if(level < 15){
		window.GameVariables.ScaleTreeTimeout = setTimeout(function(){
			scaleTreeLevels(level + 1);
		}, 150);
	}
}

function unscaleTreeLevels(level){
	clearTimeout(window.GameVariables.ScaleTreeTimeout);
	$('.moneyTreeLevelWhiteTd').css('color','#FFFFFF');
	$('.moneyTreeLevelWhiteTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeAmountWhiteTd').css('color','#FFFFFF');
	$('.moneyTreeAmountWhiteTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeLevelTd').css('color','#F99B1C');
	$('.moneyTreeLevelTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeAmountTd').css('color','#F99B1C');
	$('.moneyTreeAmountTd').css('text-shadow','2px 2px 5px black, -1px -1px 0px black, 0px -1px 0px black, 1px -1px 0px black, -1px 0px 0px black, 1px 0px 0px black, -1px 1px 0px black, 0px 1px 0px black, 1px 1px 0px black');
	$('.moneyTreeAmountWhiteTd').css('background-image','none');
	$('.moneyTreeAmountTd').css('background-image','none');
	$('.moneyTreeLevelWhiteTd').css('background-image','none');
	$('.moneyTreeLevelTd').css('background-image','none');
	$('.moneyTreeDiagonalTd').css('background-image','none');
	$('.moneyTreeDiagonalTd, .moneyTreeDiagonalWhiteTd').css('background-image','none');
	setLevelOnMoneyTree(window.GameVariables.QuestionLevel);
}


function showMoneyTree(){
	$('.moneyTreeDiv').transition({perspective:0, 'right': '-100px', opacity:1}, 0, 'ease-out');
	
	
}

function hideMoneyTree(){
	
	$('.moneyTreeDiv').css('opacity', 0);
}

function hideLevelStrap(){
	$('.currentLevelStrapDiv').transition({perspective:0, 'right':'-648px'}, 600, 'ease-in');
}
function hideLevelStrap2(){
	$('.currentLevelStrapDiv').transition({perspective:0, 'right':'-648px'}, 450, 'ease-in');
}

function showLevelStrap(){
	if(window.GameVariables.QuestionLevel < 15){
		$('.currentLevelStrapAmountDiv').html(accounting.formatMoney(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1], "  $A", 0));
	}
	else{
		$('.currentLevelStrapAmountDiv').html(accounting.formatMoney(window.GameVariables.PrizeAmounts[window.GameVariables.QuestionLevel - 1], "  $A", 0));
		$('.sideStrapGoldImg').css('opacity', 1);
	}
	$('.currentLevelStrapDiv').transition({perspective:0, 'right':'0px'}, 700, 'ease-out');
}

function animateLevelStrapGlow(){
	
}







