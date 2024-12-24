(function(gameVariables) {
	/* Initialization Variables */
	gameVariables.IsFFLifeLineUsed = false;
	gameVariables.IsPAFLifeLineUsed = false;
	gameVariables.IsATALifeLineUsed = false;
	gameVariables.IsSTQLifeLineUsed = false;
	gameVariables.IsSTQLifeLineActiveAtStart = false;
	gameVariables.StartingQuestionLevel = 15;
	
	gameVariables.ContestantFirstName = "Trần Lưu Duy Minh";
	gameVariables.ContestantLastName = "";
	gameVariables.ContestantLocation = "An Giang";
	
	/* Do not modify the value of this variable, fastest finger is not fully implemented yet... */
	gameVariables.IsPlayingFasestFinger = false;
	/**************/
	
	/* Boolean Variables */
	gameVariables.IsNameStrapShowing = false;
	gameVariables.IsMoneyTreeShowing = false;
	gameVariables.IsLogoShowing = false;
	gameVariables.IsExplainingRules = true;
	gameVariables.IsFirstQuestionOfGame = true;
	gameVariables.IsInCommercial = true;
	gameVariables.IsLevelStrapShowing = false;
	gameVariables.IsLifeLineStrapShowing = false;
	gameVariables.IsTotalPrizeMoneyShowing = false;
	gameVariables.IsSecondHavenSet = false;
	gameVariables.IsWalkingAway = false;
	gameVariables.CannotLockInFinalAnswer = false;
	gameVariables.QuestionInProgress = false;
	gameVariables.ContinuePulsingLifeLineCenter = false;
	gameVariables.AnswerAIsOut = false;
	gameVariables.AnswerBIsOut = false;
	gameVariables.AnswerCIsOut = false;
	gameVariables.AnswerDIsOut = false;
	gameVariables.ShowLifeLineCenteredAnimation = false;
	gameVariables.FirstTierBackgroundSoundPlaying = false;
	gameVariables.DoubleDipsOn = false;
	gameVariables.SecondDips = false;
	gameVariables.PoIsOn = false;
	gameVariables.Poused = false;
	gameVariables.Realmoneyon = false;
	gameVariables.firsttier = false;
	gameVariables.LightDown = false;
	gameVariables.SkipTierOne = true;
	gameVariables.VotingInProgress = false;
	gameVariables.BlinkNextQ = false;

	/* Number Variables */
	gameVariables.AnswerAPercent = 0;
	gameVariables.AnswerBPercent = 0;
	gameVariables.AnswerCPercent = 0;
	gameVariables.AnswerDPercent = 0;
	gameVariables.AnswerAVoteCount = 0;
	gameVariables.AnswerBVoteCount = 0;
	gameVariables.AnswerCVoteCount = 0;
	gameVariables.AnswerDVoteCount = 0;
	gameVariables.AnswersTotalVoteCount = 0;
	gameVariables.QuestionLevel = null;
	gameVariables.Lightdown = null;
	gameVariables.RevealAnswerCounter = 0;
	gameVariables.commericalSequenceCounter = 0;
	gameVariables.RevealFastestFingerWinnersCounter = 0;
	gameVariables.RevealFastestFingerContestantCounter = 0;
	gameVariables.FastestFingerConstestantWinner = 4;
	gameVariables.FastestFingerRevealAnswerCounter = 0;
	gameVariables.FastestFingerSequenceCounter = 0;
	gameVariables.MoneyTreeSequenceCounter = 0;
	gameVariables.QuestionSequenceCounter = 0;
	gameVariables.pafLifeLineSequenceCounter = 0;
	gameVariables.ataLifeLineSequenceCounter = 0;
	gameVariables.stqLifeLineSequenceCounter = 0;
	gameVariables.rulesSequenceCounter = 0;
	gameVariables.walkAwaySequenceCounter = 0;
	gameVariables.ScaleTreeCounter = 0;
	gameVariables.LifeLineAnimationCounter = 0;
	gameVariables.SetLevelCounter = 0;
	gameVariables.STQUnlockedLevel = 0;
	gameVariables.endLifeLineSequenceCounter = 0;	
	gameVariables.SecondHaven = 10;
	gameVariables.OldRulesCounter = 0;
		
	/* String and Char Variables */
	gameVariables.CurrentCorrectAnswer = "";
	gameVariables.CurrentTargetAnswer = "";
	
	/* Audio Variables */
	gameVariables.GeneralSound = null;
	gameVariables.LifelineActiveSound = null;
	gameVariables.LifelinePassiveSound = null;
	gameVariables.LongActiveSound = null;
	gameVariables.LongPassiveSound = null;
	gameVariables.ShortActiveSound = null;
	gameVariables.ShortPassiveSound = null;

	/* Array Variables */
	gameVariables.QuestionsAndAnswers = [];
	gameVariables.SwitchQuestionsAndAnswers = [];
	gameVariables.AskTheAudienceVotingPercents = [];
	gameVariables.PrizeAmounts = [100,200,300,400,500,1000,2000,5000,10000,25000,50000,125000,250000,500000,1000000];
	gameVariables.Realmoney = [2000,5000,10000,25000,50000,100000]
	gameVariables.FastestFingerContestantWinners = [true,true,true,true];
	gameVariables.FastestFingerContestantTimes = [9.86,8.12,7.28,7.27];
	gameVariables.FastestFingerContestants = []
	gameVariables.LightsDownSounds = ["q1_to_q5_lights_down.mp3","q1_to_q5_lights_down.mp3","q1_to_q5_lights_down.mp3","q1_to_q5_lights_down.mp3","q1_to_q5_lights_down.mp3","lights_down_1.mp3","lights_down_2.mp3","lights_down_3.mp3","lights_down_4.mp3","lights_down_5.mp3","lights_down_0.mp3","lights_down_2.mp3","lights_down_3.mp3","lights_down_4.mp3","lights_down_5.mp3"];
	gameVariables.RoundBackgroundSounds = ["q1_to_q5_bed.mp3","q1_to_q5_bed.mp3","q1_to_q5_bed.mp3","q1_to_q5_bed.mp3","q1_to_q5_bed.mp3","q6_bed.mp3","q7_bed.mp3","q8_bed.mp3","q9_bed.mp3","q10_bed.mp3","q11_bed.mp3","q12_bed.mp3","q13_bed.mp3","q14_bed.mp3","q15_bed.mp3"];
	gameVariables.FinalAnswerSounds = ["","","","","","final_answer_1.mp3","final_answer_2.mp3","final_answer_3.mp3","final_answer_4.mp3","final_answer_5.mp3","final_answer_11.mp3","final_answer_22.mp3","final_answer_33.mp3","final_answer_44.mp3","final_answer_55.mp3"];
	gameVariables.CorrectAnswerSounds = ["q1_to_q4_correct.mp3","q1_to_q4_correct.mp3","q1_to_q4_correct.mp3","q1_to_q4_correct.mp3","q5_correct.mp3","q6_correct.mp3","q7_correct.mp3","q8_correct.mp3","q9_correct.mp3","q10_correct_no_safety_net.mp3","q11_correct.mp3","q12_correct.mp3","q13_correct.mp3","q14_correct.mp3","q15_correct.mp3"];
	gameVariables.WrongAnswerSounds = ["q1_to_q5_lose.mp3","q1_to_q5_lose.mp3","q1_to_q5_lose.mp3","q1_to_q5_lose.mp3","q1_to_q5_lose.mp3","q6_lose.mp3","q7_lose.mp3","q8_lose.mp3","q9_lose.mp3","q10_lose.mp3","q11_lose.mp3","q12_lose.mp3","q13_lose.mp3","q14_lose.mp3","q15_lose.mp3"];

	/* Interval/Timeout Variables */
	gameVariables.ShowAnswerTimeout = null;
	gameVariables.ShowWinnerTimeout = null;
	gameVariables.ScaleTreeTimeout = null;
	gameVariables.PAFClockTimeout = null;

})(window.GameVariables = window.GameVariables || {});








