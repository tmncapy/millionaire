$(document).ready(function(){
	$(document).on('keydown',function(e)
	{
		if(e.keyCode == 37) // key 'left arrow' for fastest-finger / money tree hide and show
		{
			if(window.GameVariables.IsLogoShowing == false && window.GameVariables.IsInCommercial == false)
			{
				if(window.GameVariables.IsPlayingFasestFinger == true)
				{
					if(window.GameVariables.FastestFingerSequenceCounter == -1)
					{
						startGeneralSound("fastest_finger_lights_down.mp3");
					}
					if(window.GameVariables.FastestFingerSequenceCounter <= 3)
					{
						if(window.GameVariables.FastestFingerSequenceCounter == 0)
						{
							changebg("Background\\fffm.png",300);
							startShortActiveSound("fastest_finger_contestants.mp3");
						}
						// reveal contestants one at a time
						revealFastestFingerContestants();
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 4)
					{
						hideContestantNameAndLocation();
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 5)
					{
						
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 6)
					{
						changebg("Background\\fff.png",300);
						$('.answerGroupBDiv').transition({perspective:0, 'bottom':'-450px', scale:[3,3]}, 0);
						$('.answerGroupADiv').transition({perspective:0, 'bottom':'-450px', scale:[3,3]}, 0);
						$('.questionStrapDiv').transition({perspective:0, 'bottom':'-350px', scale:[3,3]}, 0);
						revealFastestFingerQuestion();
						$('.questionStrapDiv').transition({perspective:0, 'bottom':'220px', scale:[1,1]}, 450, 'ease-out', function(){
						setTimeout(function(){
							$('.answerGroupADiv').transition({perspective:0, 'bottom':'0px', scale:[1,1]}, 350, 'ease-out');
						}, 0);
						setTimeout(function(){
							$('.answerGroupBDiv').transition({perspective:0, 'bottom':'0px', scale:[1,1]}, 350, 'ease-out');
						}, 150);
					});
						startShortPassiveSound("fastest_finger_read_question.mp3");
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 7)
					{
						startShortActiveSound("fastest_finger_3_stabs.mp3");
						setTimeout(stopShortPassiveSound, 200);
						changebg("Background\\fff2.png",10);
						setTimeout(function(){
							changebg("Background\\fff1.png", 100);
						}, 150);
						setTimeout(function(){
							changebg("Background\\fff2.png", 25);
						}, 450);
						setTimeout(function(){
							changebg("Background\\fff1.png", 100);
						}, 600);
						setTimeout(function(){
							changebg("Background\\fff2.png", 25);
						}, 850);
						setTimeout(function(){
							changebg("Background\\fff1.png", 400);
						}, 1100);
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 8)
					{
						revealAllAnswersAtOnce();
						startShortPassiveSound("fastest_finger_think.mp3");
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 9)
					{	
						changebg("Background\\main.png", 200);
						$('.answerGroupBDiv').transition({perspective:0, 'bottom':'-450px', scale:[3,3]}, 350, 'ease-in', function(){
						setTimeout(function(){
							$('.answerGroupADiv').transition({perspective:0, 'bottom':'-450px', scale:[3,3]}, 350, 'ease-in');
						}, 0);
						setTimeout(function(){
							$('.questionStrapDiv').transition({perspective:0, 'bottom':'-350px', scale:[3,3]}, 450, 'ease-in');
						}, 250)
						setTimeout(function(){
							hideFastestFingerQuestionAndAnswers();
						}, 1050)
						});					
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 10)
					{
						changebg("Background\\hoststand.png", 0);
						startShortPassiveSound("fastest_finger_read_answer_order.mp3");
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 11)
					{
						$('.stageBackgroundDiv').transition({perspective:0, 'left':'-650px', scale:[1,1]}, 550, 'ease-out');
						showFastestFingerAnswerTree();
					}
					else if(window.GameVariables.FastestFingerSequenceCounter <= 15)
					{
						var soundToPlay = "";
					
						revealFastestFingerAnswersinCorrectOrder();
						
						if(window.GameVariables.FastestFingerSequenceCounter == 12){
							soundToPlay = "fastest_finger_answer_correct_1.mp3";
						}
						else if(window.GameVariables.FastestFingerSequenceCounter == 13){
							soundToPlay = "fastest_finger_answer_correct_2.mp3";
						}
						else if(window.GameVariables.FastestFingerSequenceCounter == 14){
							soundToPlay = "fastest_finger_answer_correct_3.mp3";
						}
						else if(window.GameVariables.FastestFingerSequenceCounter == 15){
							soundToPlay = "fastest_finger_answer_correct_4.mp3";
						}
						
						startGeneralSound(soundToPlay);
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 16)
					{
						$('.stageBackgroundDiv').transition({perspective:0, 'left':'0px', scale:[1,1]}, 0, 'ease-out');
						hideFastestFingerAnswerTree();
						showFastestFingerContestants();
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 17)
					{
						revealFastestFingerWinnersAndTimes();
						startShortActiveSound("drumroll.mp3");
						setTimeout(stopShortPassiveSound, 200);
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 18)
					{
						flashFastestTimeStep1();
						startGeneralSound("fastest_finger_winner.mp3");
						setTimeout(stopShortPassiveSound, 200);
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 19)
					{
						showTheFastestFingerWinner();
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 20)
					{
						hideTheFastestFingerWinner();
					}
					else if(window.GameVariables.FastestFingerSequenceCounter == 21)
					{
						startShortActiveSound("hello_long.mp3");
						window.GameVariables.IsPlayingFasestFinger = false;
					}
					
					window.GameVariables.FastestFingerSequenceCounter++;
				}
				else if(window.GameVariables.QuestionInProgress == false && window.GameVariables.IsInCommercial == false){
					// money tree animations
					if(window.GameVariables.MoneyTreeSequenceCounter == 0)
					{
						if(window.GameVariables.QuestionLevel < 8){
							startLongPassiveSound("explain_rules_v2.mp3");
						}
						else{
							startLongPassiveSound("game_resume.mp3");
						}
					}
					else if(window.GameVariables.MoneyTreeSequenceCounter == 1)
					{
						window.GameVariables.IsMoneyTreeShowing = true;
					
						setTimeout(function(){
							slideInMoneyTree();
						}, 400);
					}
					else if(window.GameVariables.MoneyTreeSequenceCounter == 2)
					{
						scaleTreeLevels(window.GameVariables.QuestionLevel);
					}
					else if(window.GameVariables.MoneyTreeSequenceCounter == 3)
					{
						unscaleTreeLevels();
					}
					else if(window.GameVariables.MoneyTreeSequenceCounter >= 4)
					{
							window.GameVariables.IsMoneyTreeShowing == true ? slideoutMoneyTree() : showMoneyTree();

							window.GameVariables.IsMoneyTreeShowing == true ? setLevelOnMoneyTree(window.GameVariables.QuestionLevel) : null;			
							window.GameVariables.IsMoneyTreeShowing = !window.GameVariables.IsMoneyTreeShowing;
							window.GameVariables.IsExplainingRules = false;
					}
					
					window.GameVariables.MoneyTreeSequenceCounter++;
				}
			} 
		}
		else if(e.keyCode == 39) // key 'right arrow' for question navigation
		{
			if(window.GameVariables.IsPlayingFasestFinger == false && window.GameVariables.IsMoneyTreeShowing == false && window.GameVariables.IsExplainingRules == false && window.GameVariables.IsInCommercial == false && window.GameVariables.IsNameStrapShowing == false){
				if(window.GameVariables.QuestionSequenceCounter == -1){
					return;
				}			
				else if(window.GameVariables.QuestionSequenceCounter == 0){
					// play lights down sound
					if(window.GameVariables.QuestionLevel < 5){
						window.GameVariables.firsttier = true;
					}
					else if(window.GameVariables.QuestionLevel > 5){
						window.GameVariables.firsttier = false;
					}
					changebg("Background\\main.png", 0);
					window.GameVariables.LightDown = true;
					playLightsDownSound();
					
				}
				else if(window.GameVariables.QuestionSequenceCounter == 1){
					if(window.GameVariables.QuestionLevel >= window.GameVariables.STQUnlockedLevel){
						stqLifeLineSlideIn();
					}
					setQuestion(false);
					window.GameVariables.QuestionInProgress = true;
					// setup question and answers
					$('.answerGroupBDiv').transition({perspective:4096, 'bottom':'-240px', 'rotateX':'0deg'}, 0);
					$('.answerGroupADiv').transition({perspective:4096, 'bottom':'-240px', 'rotateX':'0deg'}, 0);
					$('.questionStrapDiv').transition({perspective:4096, 'bottom':'-192px', 'rotateX':'0deg'}, 0);
					revealQuestionAndAnswerStraps();
						setTimeout(function(){
							playBackgroundSound();
						}, 1000);
					$('.questionStrapDiv').transition({perspective:4096, 'bottom':'30px'}, 700, 'cubic-bezier(0.5, 2, 0.5, 1)');
				}
				else if(window.GameVariables.QuestionSequenceCounter == 2){
					revealAnswersOneByOne();
					$('.questionStrapDiv').transition({perspective:4096, 'bottom':'30px'}, 0, function(){
						setTimeout(function(){
							$('.questionStrapDiv').transition({perspective:4096, 'bottom':'220px'}, 650, 'cubic-bezier(0.5, 1.5, 0.5, 1)');
						}, 0);
						setTimeout(function(){
							$('.answerGroupADiv').transition({perspective:4096, 'bottom':'0px'}, 600, 'cubic-bezier(0.5, 1.25, 0.5, 1)');
						}, 250);
						setTimeout(function(){
							$('.answerGroupBDiv').transition({perspective:4096, 'bottom':'0px'}, 600, 'cubic-bezier(0.5, 1.25, 0.5, 1)');
						}, 350);
					});
				
				}
				else if(window.GameVariables.QuestionSequenceCounter <= 5){
					revealAnswersOneByOne();
					if(window.GameVariables.QuestionSequenceCounter == 5){
						window.GameVariables.QuestionSequenceCounter = -1;
						return;
					}
				}
				else if(window.GameVariables.QuestionSequenceCounter == 6){
					if(window.GameVariables.CurrentCorrectAnswer == window.GameVariables.CurrentTargetAnswer){
						
						if(window.GameVariables.QuestionLevel != 5 && window.GameVariables.QuestionLevel != 10 && window.GameVariables.QuestionLevel < 11){
							toshowFinalToCorrectAnswerStep1(window.GameVariables.CurrentTargetAnswer.toUpperCase());
						}
						else{
							showFinalToCorrectAnswerStep1(window.GameVariables.CurrentTargetAnswer.toUpperCase());
						}
						
						playCorrectAnswerSound();
						hideLevelStrap2();
						
					}
					else if(window.GameVariables.CurrentTargetAnswer != window.GameVariables.CurrentCorrectAnswer){
						revealNormalToCorrectAnswerStep1(window.GameVariables.CurrentCorrectAnswer.toUpperCase());
						window.GameVariables.QuestionSequenceCounter = 8;
						window.GameVariables.QuestionInProgress = false;
						playWrongAnswerSound();
					
					}
					
						hideLifeLineCentered();
					
					if(window.GameVariables.IsLevelStrapShowing == true){
						hideLevelStrap();
						window.GameVariables.IsLevelStrapShowing = false;
					}
				}
				else if(window.GameVariables.QuestionSequenceCounter == 7){
					if(window.GameVariables.QuestionLevel == 15){
					hideQuestionAndAnswerStrapsDown();
						
						
							showMillionaireTitleStrap();
					
					}
					else{
					$('.winningsP').css('opacity', 0);
						$('.winStrapDiv').transition({perspective:4096, 'bottom':'162px', 'rotateX':'90deg'}, 0);
						$('.answerGroupBDiv').transition({perspective:4096, 'rotateX':'-90deg'}, 300, 'ease-in-out');
						$('.answerGroupADiv').transition({perspective:4096, 'rotateX':'-90deg'}, 300, 'ease-in-out');
						$('.questionStrapDiv').transition({perspective:4096, 'bottom':'162px', 'rotateX':'-90deg'}, 350, 'ease-in', function(){
							$('.winStrapDiv').transition({perspective:4096, 'bottom':'50px', 'rotateX':'0deg'}, 450, 'ease-out', function(){
								$('.winningsP').transition({perspective:0,opacity:1}, 150, 'linear');
								hideQuestionAndAnswerStraps();
								resetAnswerStraps();
							});
						});
						showAmountWon();
					}
				}
				else if(window.GameVariables.QuestionSequenceCounter == 8){
					if(window.GameVariables.QuestionLevel == 15){
						hideMillionaireTitleStrap();
						
						window.GameVariables.IsWalkingAway = true;
					}
					else {
						$('.winStrapDiv').transition({perspective:4096, 'bottom':'50px', scale:[1,1]}, 0, 'ease-in');
						$('.winStrapDiv').transition({perspective:4096, 'bottom':'-200px', scale:[1,1], 'rotateX':'90deg'}, 350, 'ease-in');
						$('.winStrapDiv').transition({perspective:0, 'bottom':'50px', scale:[1,1]}, 0, 'ease-out',  function(){
							hideAmountWon();
						});
					}
					
					window.GameVariables.QuestionLevel++;
					setLevelOnMoneyTree(window.GameVariables.QuestionLevel);
					
					window.GameVariables.QuestionInProgress = false;
					
					if(window.GameVariables.QuestionLevel < 6){
						window.GameVariables.QuestionSequenceCounter = 0;
					}
					else{
						window.GameVariables.QuestionSequenceCounter = -1;
					}
					/* END OF CORRECT ANSWER GIVEN CONTROL */
				}
				else if(window.GameVariables.QuestionSequenceCounter == 9){
					/* START OF WRONG ANSWER GIVEN CONTROL */
					reduceAmountWon();
					hideQuestionAndAnswerStraps();
					window.GameVariables.QuestionInProgress = false;
					window.GameVariables.IsWalkingAway = true;
					window.GameVariables.QuestionSequenceCounter = 0;
				}
				
				window.GameVariables.QuestionSequenceCounter++;
			}
		}
		else if(e.keyCode == 40) // key 'down arrow' for total prize money
		{
			if(window.GameVariables.QuestionInProgress == false && window.GameVariables.IsMoneyTreeShowing == false  && window.GameVariables.IsNameStrapShowing == false){
				if(window.GameVariables.QuestionLevel - 1 == 15){
					window.GameVariables.IsTotalPrizeMoneyShowing == true ? $('.millionaireWinnerTitleDiv').transition({perspective:0, 'bottom':'-450px', scale:[1,1]}, 500, 'ease-in') : $('.millionaireWinnerTitleDiv').transition({perspective:0, 'bottom':'0px', scale:[1,1]}, 500, 'ease-out');
				
				}
				else{
					window.GameVariables.IsTotalPrizeMoneyShowing == true ? hideTotalPrizeMoneyStrap() : showTotalPrizeMoneyStrap();
				}
				
				window.GameVariables.IsTotalPrizeMoneyShowing = !window.GameVariables.IsTotalPrizeMoneyShowing;
				
				if(window.GameVariables.IsWalkingAway == true){
					window.GameVariables.QuestionLevel > 10 == true ? startGeneralSound("walk_away_small.mp3") : startGeneralSound("walk_away_small.mp3");
					window.GameVariables.IsWalkingAway = false;
				}
				
			}
		}
		else if(e.keyCode == 49) // key '1' to lock in 'A' as final
		{
			if(window.GameVariables.QuestionInProgress == true && window.GameVariables.CannotLockInFinalAnswer == false && window.GameVariables.AnswerAIsOut == false && window.GameVariables.CurrentTargetAnswer == "" && window.GameVariables.QuestionSequenceCounter == -1 && window.GameVariables.stqLifeLineSequenceCounter == 0){
				lockInFinalAnswer('A');
				window.GameVariables.CurrentTargetAnswer = "a";
				
				if(window.GameVariables.IsWalkingAway == false){
					playFinalAnswerSound();
				}
			}
			else if(window.GameVariables.stqLifeLineSequenceCounter == 1 && window.GameVariables.AnswerAIsOut == false){
				showFirstAudienceAnswer('A');
				window.GameVariables.stqLifeLineSequenceCounter++;
			} else if(window.GameVariables.stqLifeLineSequenceCounter == 2 && window.GameVariables.AnswerAIsOut == false){
				showSecondAudienceAnswer('A');
				window.GameVariables.stqLifeLineSequenceCounter++;
			} else if(window.GameVariables.stqLifeLineSequenceCounter == 3 && window.GameVariables.AnswerAIsOut == false){
				showThirdAudienceAnswer('A');
				window.GameVariables.stqLifeLineSequenceCounter++;
			}
			if(window.GameVariables.ataLifeLineSequenceCounter == 4 && window.GameVariables.AnswerAIsOut == false){
				window.GameVariables.AnswerAVoteCount++;
				window.GameVariables.AnswersTotalVoteCount++;
			}
		}
		else if(e.keyCode == 50) // key '2' to lock in 'B' as final
		{
			if(window.GameVariables.QuestionInProgress == true && window.GameVariables.CannotLockInFinalAnswer == false && window.GameVariables.AnswerBIsOut == false && window.GameVariables.CurrentTargetAnswer == "" && window.GameVariables.QuestionSequenceCounter == -1 && window.GameVariables.stqLifeLineSequenceCounter == 0){
				lockInFinalAnswer('B');
				window.GameVariables.CurrentTargetAnswer = "b";
				
				if(window.GameVariables.IsWalkingAway == false){
					playFinalAnswerSound();
				}
			}
			else if(window.GameVariables.stqLifeLineSequenceCounter == 1 && window.GameVariables.AnswerBIsOut == false){
				showFirstAudienceAnswer('B');
				window.GameVariables.stqLifeLineSequenceCounter++;
			} else if(window.GameVariables.stqLifeLineSequenceCounter == 2 && window.GameVariables.AnswerBIsOut == false){
				showSecondAudienceAnswer('B');
				window.GameVariables.stqLifeLineSequenceCounter++;
			} else if(window.GameVariables.stqLifeLineSequenceCounter == 3 && window.GameVariables.AnswerBIsOut == false){
				showThirdAudienceAnswer('B');
				window.GameVariables.stqLifeLineSequenceCounter++;
			}
			if(window.GameVariables.ataLifeLineSequenceCounter == 4 && window.GameVariables.AnswerBIsOut == false){
				window.GameVariables.AnswerBVoteCount++;
				window.GameVariables.AnswersTotalVoteCount++;
			}			
		}
		else if(e.keyCode == 51) // key '3' to lock in 'C' as final
		{
			if(window.GameVariables.QuestionInProgress == true && window.GameVariables.CannotLockInFinalAnswer == false && window.GameVariables.AnswerCIsOut == false && window.GameVariables.CurrentTargetAnswer == "" && window.GameVariables.QuestionSequenceCounter == -1 && window.GameVariables.stqLifeLineSequenceCounter == 0){
				lockInFinalAnswer('C');
				window.GameVariables.CurrentTargetAnswer = "c";
				
				if(window.GameVariables.IsWalkingAway == false){
					playFinalAnswerSound();
				}		
			}
			else if(window.GameVariables.stqLifeLineSequenceCounter == 1 && window.GameVariables.AnswerCIsOut == false){
				showFirstAudienceAnswer('C');
				window.GameVariables.stqLifeLineSequenceCounter++;
			} else if(window.GameVariables.stqLifeLineSequenceCounter == 2 && window.GameVariables.AnswerCIsOut == false){
				showSecondAudienceAnswer('C');
				window.GameVariables.stqLifeLineSequenceCounter++;
			} else if(window.GameVariables.stqLifeLineSequenceCounter == 3 && window.GameVariables.AnswerCIsOut == false){
				showThirdAudienceAnswer('C');
				window.GameVariables.stqLifeLineSequenceCounter++;
			}
			if(window.GameVariables.ataLifeLineSequenceCounter == 4 && window.GameVariables.AnswerCIsOut == false){
				window.GameVariables.AnswerCVoteCount++;
				window.GameVariables.AnswersTotalVoteCount++;
			}			
		}
		else if(e.keyCode == 52) // key '4' to lock in 'D' as final
		{
			if(window.GameVariables.QuestionInProgress == true && window.GameVariables.CannotLockInFinalAnswer == false && window.GameVariables.AnswerDIsOut == false && window.GameVariables.CurrentTargetAnswer == "" && window.GameVariables.QuestionSequenceCounter == -1 && window.GameVariables.stqLifeLineSequenceCounter == 0){
				lockInFinalAnswer('D');
				window.GameVariables.CurrentTargetAnswer = "d";
				
				if(window.GameVariables.IsWalkingAway == false){
					playFinalAnswerSound();
				}
			}
			else if(window.GameVariables.stqLifeLineSequenceCounter == 1 && window.GameVariables.AnswerDIsOut == false){
				showFirstAudienceAnswer('D');
				window.GameVariables.stqLifeLineSequenceCounter++;
			} else if(window.GameVariables.stqLifeLineSequenceCounter == 2 && window.GameVariables.AnswerDIsOut == false){
				showSecondAudienceAnswer('D');
				window.GameVariables.stqLifeLineSequenceCounter++;
			} else if(window.GameVariables.stqLifeLineSequenceCounter == 3 && window.GameVariables.AnswerDIsOut == false){
				showThirdAudienceAnswer('D');
				window.GameVariables.stqLifeLineSequenceCounter++;
			}
			if(window.GameVariables.ataLifeLineSequenceCounter == 4 && window.GameVariables.AnswerDIsOut == false){
				window.GameVariables.AnswerDVoteCount++;
				window.GameVariables.AnswersTotalVoteCount++;
			}
		}
		else if(e.keyCode == 72) // key 'h' for Ask The Host animations
		{
			if(window.GameVariables.IsMoneyTreeShowing == true){
				if(window.GameVariables.IsSTQLifeLineUsed == false) {
					athPulseLifeLine();
					startGeneralSound("lifeline_4_on.mp3");
				}
			}
			else if(window.GameVariables.QuestionInProgress == true){
				if(window.GameVariables.stqLifeLineSequenceCounter == 0){
					showLifeLineCentered('#athLifeLineCenterImg');
					startLifelineActiveSound("ath.mp3");
					setTimeout(stopLongPassiveSound, 200);
					window.GameVariables.FirstTierBackgroundSoundPlaying = false;
					window.GameVariables.CannotLockInFinalAnswer = true;
				}
				else if(window.GameVariables.stqLifeLineSequenceCounter == 1){
					startLifelinePassiveSound("gunshot.mp3");
					stqLifeLineDisable();
					setTimeout(stopLifelineActiveSound, 100);
					setTimeout(function(){
						playBackgroundSound();
					}, 1000);
					window.GameVariables.CannotLockInFinalAnswer = false;
					window.GameVariables.stqLifeLineSequenceCounter = -1;
					hideLifeLineCentered();
					
				}
				
				window.GameVariables.stqLifeLineSequenceCounter++;
			}			
		}
		else if(e.keyCode == 67) // key 'c' for commerical in/out
		{
			if(window.GameVariables.IsMoneyTreeShowing == false){
				if(window.GameVariables.QuestionInProgress == false){
					if(window.GameVariables.IsInCommercial == true){
						hideMillionaireLogo();
						
						if(window.GameVariables.IsFirstQuestionOfGame == false){
							startShortActiveSound("commercial_out.mp3");
						}
						else{
						if(window.GameVariables.QuestionInProgress == false  && window.GameVariables.QuestionLevel > 1){
							startShortActiveSound("hello_long_old.mp3");
							}
						else{
							startShortActiveSound("hello_long.mp3");
							}
						}
					}
					else{
						showMillionaireLogo();
						window.GameVariables.FirstTierBackgroundSoundPlaying = false;
						setTimeout(stopLongPassiveSound, 250);
						setTimeout(stopLongActiveSound, 250);
						startShortActiveSound("commercial_in.mp3");
					
					}
					
					window.GameVariables.IsInCommercial = !window.GameVariables.IsInCommercial;
				}
				else if(window.GameVariables.QuestionInProgress == true){
					if(window.GameVariables.commericalSequenceCounter == 0){
						hideQuestionAndAnswerStraps();
						$('.currentLevelStrapDiv').css('opacity', 0);
						$('.lifelineCenterImg').css('opacity', 0);
						window.GameVariables.CannotLockInFinalAnswer = true;
					}					
					else if(window.GameVariables.commericalSequenceCounter == 1){						
						window.GameVariables.FirstTierBackgroundSoundPlaying = false;
						setTimeout(stopLongPassiveSound, 250);
						setTimeout(stopLongActiveSound, 250);
						showMillionaireLogo();
						startShortActiveSound("commercial_in.mp3");
						window.GameVariables.LightDown = false;
					}
					else if(window.GameVariables.commericalSequenceCounter == 2){
						startShortActiveSound("commercial_out.mp3");
						hideMillionaireLogo();
					}
					else if(window.GameVariables.commericalSequenceCounter == 3){
						if(window.GameVariables.QuestionLevel < 11){
							startLongPassiveSound("lights_down_1.mp3");
						}
						else{
						playLightsDownSound();
						}
						
						window.GameVariables.LightDown = true;
						window.GameVariables.CannotLockInFinalAnswer = false;
					}
					else if(window.GameVariables.commericalSequenceCounter == 4){
						showQuestionAndAnswerStraps();					
						$('.lifelineCenterImg').css('opacity', 1);
						$('.currentLevelStrapDiv').css('opacity', 1);
						if(window.GameVariables.QuestionSequenceCounter == -1){
							playBackgroundSound();
						}
						else if(window.GameVariables.QuestionSequenceCounter == 6){
							if(window.GameVariables.QuestionLevel > 5){
								playFinalAnswerSound();
							}
							else{
								playBackgroundSound();
							}
						}
						window.GameVariables.commericalSequenceCounter = -1;
					}
					
					window.GameVariables.commericalSequenceCounter++;
				}
			}
		}
		else if(e.keyCode == 69) // key 'e' for explain rules sound
		{
			if(window.GameVariables.QuestionInProgress == false && window.GameVariables.IsInCommercial == false)
			{
				if(window.GameVariables.QuestionLevel < 8){
					startLongPassiveSound("explain_rules_v2.mp3");
				}
				else{
					startLongPassiveSound("explain_rules_v2.mp3");
				}
			}
		}
		else if(e.keyCode == 73) // key 'i' to demonstrate safety nets
		{
			if(window.GameVariables.IsMoneyTreeShowing == true){
				if (window.GameVariables.SetLevelCounter == 0){
					setLevelOnMoneyTree(6);
				}
				else if (window.GameVariables.SetLevelCounter== 1){
					setLevelOnMoneyTree(11);
				}
				else if (window.GameVariables.SetLevelCounter== 2){
					setLevelOnMoneyTree(16);
				}
				else if (window.GameVariables.SetLevelCounter== 3){
					setLevelOnMoneyTree(1);
					window.GameVariables.SetLevelCounter = -1;
				}
			window.GameVariables.SetLevelCounter++
			}
		}
		else if(e.keyCode == 70) // key 'f' for fifty-fifty animations
		{
			if(window.GameVariables.IsMoneyTreeShowing == true){
				if(window.GameVariables.IsFFLifeLineUsed == false){
					ffPulseLifeLine();
					startGeneralSound("lifeline_1_on.mp3");
				}
			}
			else if(window.GameVariables.QuestionInProgress == true && window.GameVariables.IsFFLifeLineUsed == false){
				if(window.GameVariables.AnswerAIsOut == false && window.GameVariables.AnswerBIsOut == false && window.GameVariables.AnswerCIsOut == false && window.GameVariables.AnswerDIsOut == false){
					ffRemoveTwoWrongAnswers();
					ffLifeLineDisable();
					startLifelineActiveSound("fifty_fifty.mp3");
				}
			}
		}
		else if(e.keyCode == 71) // key 'g' for game over
		{
			if(window.GameVariables.QuestionInProgress == false){
				if (window.GameVariables.endLifeLineSequenceCounter == 0){
					startGeneralSound("game_over.mp3");
					setTimeout(stopLongPassiveSound, 500);
					setTimeout(stopLifelineActiveSound, 500);					
				}
				else if (window.GameVariables.endLifeLineSequenceCounter == 1){
					changebg("Background\\Main.png",0)
				}
				else if (window.GameVariables.endLifeLineSequenceCounter == 2){
					setTimeout(stopShortActiveSound, 100);
					if(window.GameVariables.IsWalkingAway == true){
						showTotalPrizeMoneyStrap();
					}
					startShortPassiveSound("close_theme.mp3");
					window.GameVariables.QuestionSequenceCounter = 0;
					window.GameVariables.MoneyTreeSequenceCounter = 0;
					window.GameVariables.IsFirstQuestionOfGame = true;
					$('.moneyTreeDiv').transition({perspective:0, opacity:1, right:"-760px"}, 1)
				}
				else if (window.GameVariables.endLifeLineSequenceCounter == 3){
					hideTotalPrizeMoneyStrap();
				}
		
				window.GameVariables.endLifeLineSequenceCounter++
				/*window.GameVariables.QuestionInProgress = false;
				hideLifeLineCentered();
				setTimeout(function(){
					hideQuestionAndAnswerStraps();
					resetAnswerStraps();
				}, 1500);
				if(window.GameVariables.stqLifeLineSequenceCounter != 0){
					window.GameVariables.IsSTQLifeLineActiveAtStart = true;
					window.GameVariables.CannotLockInFinalAnswer = false;
				}*/
			}
		}
		else if(e.keyCode == 76) // key 'l' for life line strap animations
		{
			if(window.GameVariables.QuestionInProgress == true){
				window.GameVariables.IsLifeLineStrapShowing == true ? slideLifeLineStrapOut() : slideLifeLineStrapIn();
				window.GameVariables.IsLifeLineStrapShowing = !window.GameVariables.IsLifeLineStrapShowing
			}
		}
		else if(e.keyCode == 77) // key 'm' for money level amount strap animations
		{
			if(window.GameVariables.QuestionInProgress == true){
				window.GameVariables.IsLevelStrapShowing == true ? hideLevelStrap() : showLevelStrap();
				window.GameVariables.IsLevelStrapShowing = !window.GameVariables.IsLevelStrapShowing;
			}
		}
		else if(e.keyCode == 78) // key 'n' for name strap animations
		{
			if(window.GameVariables.QuestionInProgress == false && window.GameVariables.IsInCommercial == false && window.GameVariables.IsMoneyTreeShowing == false && window.GameVariables.IsTotalPrizeMoneyShowing == false){
				window.GameVariables.IsNameStrapShowing == true ? hideNameStrap() : showNameStrap();
				window.GameVariables.IsNameStrapShowing = !window.GameVariables.IsNameStrapShowing;
			}
		}
		else if(e.keyCode == 65) // key 'a' for ask the audience
		{
			if(window.GameVariables.IsMoneyTreeShowing == true){
				if(window.GameVariables.IsATALifeLineUsed == false){
					ataPulseLifeLine();
					startGeneralSound("lifeline_3_on.mp3");
				}
			}
			else if(window.GameVariables.QuestionInProgress == true && window.GameVariables.IsATALifeLineUsed == false){
				if(window.GameVariables.ataLifeLineSequenceCounter == 0){
					// play ata start sound
					window.GameVariables.CannotLockInFinalAnswer = true;
					window.GameVariables.VotingInProgress = true;
					$('.ataicon').transition({perspective:4096, scale:[0, 0] , 'rotateX':'-45deg'}, 0);
					$('.ata').transition({perspective:0, 'top':'250px', 'right':'380px', scale:[0, 0], opacity:1}, 0); 
					$('.ataGraphDiv').transition({perspective:4096, 'rotateY':'-85deg'}, 0, 'ease-out'); 
					$('.LetterD').transition({'top':'300px', opacity:1}, 0);
					$('.LetterC').transition({'top':'300px', opacity:1}, 0);	
					$('.LetterB').transition({'top':'300px', opacity:1}, 0);	
					$('.LetterA').transition({'top':'300px', opacity:1}, 0);	
					hideLevelStrap2();
					window.GameVariables.LightDown = false;
					window.GameVariables.firsttier = false;
					startLifelineActiveSound("ata_start.mp3");
					
					setTimeout(stopLongPassiveSound, 200);
					//resetVoteCount();
					window.GameVariables.FirstTierBackgroundSoundPlaying = false;
					
				}
				else if(window.GameVariables.ataLifeLineSequenceCounter == 1){
					slideInATAGraph();
				}
				else if(window.GameVariables.ataLifeLineSequenceCounter == 2){
					// play ata vote sound
					
					generateGraphPercentanges();
					
						setTimeout(votingInProgress, 1000);
					startLifelinePassiveSound("ata_vote.mp3");					
					setTimeout(stopLifelineActiveSound, 200);
				}
				else if(window.GameVariables.ataLifeLineSequenceCounter == 3){
					window.GameVariables.VotingInProgress = false;
					stopVoteProgress();
				}
				else if(window.GameVariables.ataLifeLineSequenceCounter == 4){
					// play ata stop vote sound
					sumVotePercentages();
					revealGraphPercentages();					
					setTimeout(function(){
					startLifelineActiveSound("ata_end.mp3");
					}, 100);
					setTimeout(stopLifelinePassiveSound, 200);
					
					window.GameVariables.LightDown = true;
					setTimeout(function(){
						playBackgroundSound();
					}, 400);
				}
				else if(window.GameVariables.ataLifeLineSequenceCounter == 5){
					slideOutATAGraph();
					window.GameVariables.CannotLockInFinalAnswer = false;
					window.GameVariables.ataLifeLineSequenceCounter = -1;
					
				}
				
				window.GameVariables.ataLifeLineSequenceCounter++;
			}
		}
		else if(e.keyCode == 81) // key 'q' for game resume
		{
			if(window.GameVariables.QuestionInProgress == false){
				startLongPassiveSound("game_resume.mp3");
			}
		}
		else if(e.keyCode == 90) // key 'z' for host entrance and lets play
		{
			if(window.GameVariables.QuestionInProgress == false  && window.GameVariables.QuestionLevel > 1){
				startShortActiveSound("host_entranceR.mp3");
			}
			else if(window.GameVariables.QuestionInProgress == false){
				startShortPassiveSound("host_entranceR.mp3");
			}
		}
		else if(e.keyCode == 84) // key 't' NOT ASSIGNED
		{
			
		}
		else if(e.keyCode == 89) // key 'y' NOT ASSIGNED
		{
			
		}
		else if(e.keyCode == 79) // key 'o' NOT ASSIGNED
		{
			
		}
		else if(e.keyCode == 75) // key 'k' NOT ASSIGNED
		{
			
		}

		else if(e.keyCode == 85) // key 'u' for undo final answer / restart question
		{
			if(window.GameVariables.QuestionSequenceCounter == 6 || window.GameVariables.IsWalkingAway == true){
				undoFinaledAnswer();
				setTimeout(stopLongActiveSound, 200);
				window.GameVariables.IsWalkingAway = false;
				window.GameVariables.walkAwaySequenceCounter = 0;
				window.GameVariables.QuestionSequenceCounter = -1;
			}
			
			if(window.GameVariables.QuestionInProgress){
				playBackgroundSound();
			}
		}
		else if(e.keyCode == 87) // key 'w' for walk away
		{
			if(window.GameVariables.QuestionInProgress == true){
				if(window.GameVariables.walkAwaySequenceCounter == 0){
					window.GameVariables.LightDown = false;
					window.GameVariables.QuestionLevel > 10 == true ? startShortActiveSound("quit_small.mp3") : startShortActiveSound("quit_small.mp3");
					setTimeout(stopLongPassiveSound, 200);
					window.GameVariables.IsWalkingAway = true;
				}
				else if(window.GameVariables.walkAwaySequenceCounter == 1){
					if(window.GameVariables.CurrentTargetAnswer == "" || (window.GameVariables.CurrentTargetAnswer != window.GameVariables.CurrentCorrectAnswer)){
						revealNormalToCorrectAnswerStep1(window.GameVariables.CurrentCorrectAnswer.toUpperCase());
					}
					else if(window.GameVariables.CurrentTargetAnswer == window.GameVariables.CurrentCorrectAnswer){
						showFinalToCorrectAnswerStep1(window.GameVariables.CurrentCorrectAnswer.toUpperCase());
					}
					
					hideLifeLineCentered();
				}
				else if(window.GameVariables.walkAwaySequenceCounter == 2){
					hideQuestionAndAnswerStraps();
					window.GameVariables.QuestionInProgress = false;
					window.GameVariables.walkAwaySequenceCounter = -1;
				}
				
				window.GameVariables.walkAwaySequenceCounter++;
			}
		}
		else if(e.keyCode == 13) // key 'enter' to Introduce old rules
		{
			if(window.GameVariables.IsMoneyTreeShowing == true && window.GameVariables.IsExplainingRules == true){
				if(window.GameVariables.OldRulesCounter == -0){
				
					startShortPassiveSound("drum_beat.mp3");
					var targetI = '#moneyTreeTr' + 5;						
					$(targetI + ' .moneyTreeLevelWhiteTd').transition({perspective:0,scale:1.15}, 400, 'ease-out');
					$(targetI + ' .moneyTreeAmountWhiteTd').transition({perspective:0,scale:1.15}, 400, 'ease-out');
					setTimeout(function(){
					$(targetI + ' .moneyTreeLevelWhiteTd').transition({perspective:0,scale:1}, 500, 'ease');
					$(targetI + ' .moneyTreeAmountWhiteTd').transition({perspective:0,scale:1}, 500, 'ease');
					}, 400);
				}	
				else if(window.GameVariables.OldRulesCounter == 1){
					
					startShortPassiveSound("drum_beat.mp3");
					var targetI = '#moneyTreeTr' + 15;						
					$(targetI + ' .moneyTreeLevelWhiteTd').transition({perspective:0,scale:1.15}, 400, 'ease-out');
					$(targetI + ' .moneyTreeAmountWhiteTd').transition({perspective:0,scale:1.15}, 400, 'ease-out');
					setTimeout(function(){
					$(targetI + ' .moneyTreeLevelWhiteTd').transition({perspective:0,scale:1}, 500, 'ease');
					$(targetI + ' .moneyTreeAmountWhiteTd').transition({perspective:0,scale:1}, 500, 'ease');
					}, 400);
				}	
				else if(window.GameVariables.OldRulesCounter == 2){
					setLevelOnMoneyTree(1);
				}	
				else if(window.GameVariables.OldRulesCounter == 3){
					setLevelOnMoneyTree(11);
					window.GameVariables.QuestionLevel = 10;
					
				}
				else if(window.GameVariables.OldRulesCounter == 4){
					
					setSecondHaven();
					setLevelOnMoneyTree(10);
					renderMoneyTreeTable();
					setLevelOnMoneyTree(window.GameVariables.QuestionLevel);
					
					var targetI = '#moneyTreeTr' + 10;						
					$(targetI + ' .moneyTreeLevelWhiteTd').transition({perspective:0,scale:1.15}, 400, 'ease-out');
					$(targetI + ' .moneyTreeAmountWhiteTd').transition({perspective:0,scale:1.15}, 400, 'ease-out');
					setTimeout(function(){
					$(targetI + ' .moneyTreeLevelWhiteTd').transition({perspective:0,scale:1}, 500, 'ease');
					$(targetI + ' .moneyTreeAmountWhiteTd').transition({perspective:0,scale:1}, 500, 'ease');
					}, 400);
					
					
					window.GameVariables.IsSecondHavenSet = true;
					
				}
				else if(window.GameVariables.OldRulesCounter == 5){
					setLevelOnMoneyTree(1);
					renderMoneyTreeTable();
					startShortPassiveSound("lifeline_5_on.mp3");
					window.GameVariables.QuestionLevel = 1;
					
				}					
				window.GameVariables.OldRulesCounter++;
			}	
		
		}
		else if(e.keyCode == 82) // key 'r' for close underscore
		{
			if(window.GameVariables.QuestionInProgress == false){
				startShortActiveSound("close_underscore.mp3");
			}
		}
		else if(e.keyCode == 54) // key '6' to reactive fifty fifty
		{
			if(window.GameVariables.IsMoneyTreeShowing == true){
				ffLifeLineEnable();
				ffPulseLifeLine();
				window.GameVariables.IsFFLifeLineUsed = false;
				startGeneralSound("lifeline_4_on_alt.mp3");
			}
		}
		else if(e.keyCode == 53) // key '5' NOT ASSIGNED
		{
		
		}
		else if(e.keyCode == 55) // key '7' to reactive phone a friend
		{
			if(window.GameVariables.IsMoneyTreeShowing == true){
				pafLifeLineEnable();
				pafPulseLifeLine();
				window.GameVariables.IsPAFLifeLineUsed = false;
				startGeneralSound("lifeline_4_on_alt.mp3");
			}
		}
		else if(e.keyCode == 56) // key '8' to reactive ask the audience
		{
			if(window.GameVariables.IsMoneyTreeShowing == true){
				ataLifeLineEnable();
				ataPulseLifeLine();
				window.GameVariables.IsATALifeLineUsed = false;
				startGeneralSound("lifeline_4_on_alt.mp3");
			}
		}
		else if(e.keyCode == 48) // key '0' to blink next level
		{
			blinkNextLevel();	
		}
		else if(e.keyCode == 57) // key '9' to reactive ask the three audience member
		{
			if(window.GameVariables.IsMoneyTreeShowing == true){
				ddLifeLineEnable();
				ddPulseLifeLine();
				window.GameVariables.IsSTQLifeLineUsed = false;
				startGeneralSound("lifeline_4_on_alt.mp3");
			}
		}
		else if(e.keyCode == 189) // key '-' NOT ASSIGNED
		{
						
		}
		else if(e.keyCode == 38) // key 'up' for Sliding money tree in
		{
			if(window.GameVariables.QuestionInProgress == false){
				if(window.GameVariables.rulesSequenceCounter == 0){
					window.GameVariables.IsMoneyTreeShowing == true ? slideoutMoneyTree() : slideInMoneyTree();
					window.GameVariables.IsMoneyTreeShowing = !window.GameVariables.IsMoneyTreeShowing;
				}
				else if(window.GameVariables.rulesSequenceCounter == 1){
					window.GameVariables.IsMoneyTreeShowing == true ? slideoutMoneyTree() : slideInMoneyTree()
					window.GameVariables.IsMoneyTreeShowing = !window.GameVariables.IsMoneyTreeShowing;
				}
			window.GameVariables.rulesLifeLineSequenceCounter++;
			window.GameVariables.rulesLifeLineSequenceCounter = 0;
			}
		}
		else if(e.keyCode == 80) // key 'p' for phone a friend animations
		{
			if(window.GameVariables.IsMoneyTreeShowing == true){
				if(window.GameVariables.IsPAFLifeLineUsed == false){
					pafPulseLifeLine();
					startGeneralSound("lifeline_2_on.mp3");
				}
			}
			else if(window.GameVariables.QuestionInProgress == true && window.GameVariables.IsPAFLifeLineUsed == false){
				if(window.GameVariables.pafLifeLineSequenceCounter == 0){
					startLifelineActiveSound("paf_start.mp3");
					//setTimeout(stopLongPassiveSound, 200);
					fadeOutLongPassiveSound(1);
					window.GameVariables.CannotLockInFinalAnswer = true;
					window.GameVariables.FirstTierBackgroundSoundPlaying = false;
					$('.pafClockDiv').transition({perspective:0, 'opacity': 1, scale:[0]}, 0)
				}
				else if(window.GameVariables.pafLifeLineSequenceCounter == 1){
					hideQuestionAndAnswerStraps();
					hideLevelStrap2();

					if(window.GameVariables.ShowLifeLineCenteredAnimation == true){
						hideJustLifeLineCenteredContainer();
					}
				}
				else if(window.GameVariables.pafLifeLineSequenceCounter == 2){
					
					revealQuestionAndAnswerStraps();
					pafRevealClock();
					
					if(window.GameVariables.ShowLifeLineCenteredAnimation == true){
						showJustLifeLineCenteredContainer();
					}
				}
				else if(window.GameVariables.pafLifeLineSequenceCounter == 3){
					pafEndClockEarly();
					setTimeout(stopLifelinePassiveSound, 200);
				}
				
				window.GameVariables.pafLifeLineSequenceCounter++;
			}
		}
		else if(e.keyCode == 88) // key 'x' for reseting question progress
		{
			if(window.GameVariables.QuestionInProgress == true){
				setTimeout(stopLongPassiveSound, 500);
				setTimeout(stopLifelineActiveSound, 500);
				window.GameVariables.QuestionSequenceCounter = 0;
				window.GameVariables.QuestionInProgress = false;
				hideLifeLineCentered();
				setTimeout(function(){
					hideQuestionAndAnswerStraps();
					resetAnswerStraps();
					hideAmountWon();
					hideMillionaireTitleStrap();
					window.GameVariables.LightDown = false;
					if(window.GameVariables.IsLevelStrapShowing == true){
						hideLevelStrap2();
						window.GameVariables.IsLevelStrapShowing = false;
					}
				}, 400);
				
				if(window.GameVariables.QuestionLevel >= 5){
					renderBackground(false);
				}

				if(window.GameVariables.stqLifeLineSequenceCounter != 0){
					window.GameVariables.IsSTQLifeLineActiveAtStart = true;
					window.GameVariables.CannotLockInFinalAnswer = false;
				}
			}
		}
	});
});

