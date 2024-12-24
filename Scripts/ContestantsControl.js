function getContestantsForGame(){
	for(var i = 0; i < 4; i++){
		if(i == 0)
		{
			var contestant = new Contestant("Trần Thành", "Vinh", "TP HCM");
			window.GameVariables.FastestFingerContestants.push(contestant);
			
			var targetId = '#fastestContestant' + (i + 1);
			$(targetId + ' .fastestContestantNameP').html(window.GameVariables.FastestFingerContestants[i].FirstName + ' ' + window.GameVariables.FastestFingerContestants[i].LastName)
		}
		if(i == 1)
		{
			var contestant = new Contestant("Nguyễn Cao Hà", "Sơn", "Tuyên Quang");
			window.GameVariables.FastestFingerContestants.push(contestant);
			
			var targetId = '#fastestContestant' + (i + 1);
			$(targetId + ' .fastestContestantNameP').html(window.GameVariables.FastestFingerContestants[i].FirstName + ' ' + window.GameVariables.FastestFingerContestants[i].LastName)
		}
		if(i == 2)
		{
			var contestant = new Contestant("Nguyễn Thành", "Trung", "Đà Nẵng");
			window.GameVariables.FastestFingerContestants.push(contestant);
			
			var targetId = '#fastestContestant' + (i + 1);
			$(targetId + ' .fastestContestantNameP').html(window.GameVariables.FastestFingerContestants[i].FirstName + ' ' + window.GameVariables.FastestFingerContestants[i].LastName)
		}
		if(i == 3)
		{
			var contestant = new Contestant("Nguyễn Đức", "Thắng", "Hà Nội");
			window.GameVariables.FastestFingerContestants.push(contestant);
			
			var targetId = '#fastestContestant' + (i + 1);
			$(targetId + ' .fastestContestantNameP').html(window.GameVariables.FastestFingerContestants[i].FirstName + ' ' + window.GameVariables.FastestFingerContestants[i].LastName)
		}
	}
}

function Contestant(firstName, lastName, location){
	this.FirstName = firstName;
	this.LastName = lastName;
	this.Location = location;
}

function showNameStrap(){
	$('.contestantNameAndLocationDiv').transition({perspective:4096, opacity:1, 'rotateX':'90deg'}, 0 , 'linear');
	$('.contestantNameAndLocationDiv').transition({perspective:4096, 'rotateX':'0deg'}, 250 , 'ease-in-out');
	
	$('.contestantNameP').transition({perspective:0, opacity:1}, 500 , 'ease-out');
	$('.contestantLocationP').transition({perspective:0, opacity:1}, 500 , 'ease-out');
}

function hideNameStrap(){
	$('.contestantNameAndLocationDiv').transition({perspective:4096, 'rotateX':'90deg'}, 250 , 'ease-in-out');
	$('.contestantNameP').transition({perspective:0, opacity:0}, 400 , 'linear');
	$('.contestantLocationP').transition({perspective:0, opacity:0}, 400 , 'linear');
}