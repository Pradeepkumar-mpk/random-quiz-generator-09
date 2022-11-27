function getRandomNumber(max){
	var randomNumber = max * Math.random();
	randomNumber = parseInt(randomNumber);
	return randomNumber;
}


function problem091(){
	var inputData = [{
		'distance': 35,
		'time': 50
		},
		{
		'distance': 55,
		'time': 70
		},
		{
		'distance': 12,
			'time': 26
		},
		{
		'distance': 23,
			'time': 56
		},
		{
		'distance': 15,
			'time': 45
		}],
		randomIndex = getRandomNumber(inputData.length),
		distance= inputData[randomIndex]['distance'],
		time = inputData[randomIndex]['time'],
		speed,
		question = {};

	distance=parseInt(distance);
	time=parseInt(time*60);
	speed=((distance/time)*(18/5));

	question = {
		'type': 'single',
		'id': '091',
		'question': 'A car travells a distance ' + distance + 'km at ' + time + ' sec. Calculate the speed of the train.',
		'options': {
			'A': speed,
			'B': speed - parseInt(Math.random()*10),
			'C': speed + parseInt(Math.random()*10),
			'D': speed - parseInt(Math.random()*10)
		},
		'answer': 'A',
		'author-id': '09'
	}
	
	return question;
	
}

function problem092(){
	var inputData = [{
		'number': 5,
		},
		{
		'number': 6,
		},
		{
		'number': 9,
		},
		{
		'number': 3,		
		},
		{
		'number': 10,
		}],
		randomIndex = getRandomNumber(inputData.length),
		number= inputData[randomIndex]['number'],
		average,
		question = {};

	number = parseInt(number);
    average = (number-1)/2;

	question = {
		'type': 'single',
		'id': '092',
		'question': 'find the average of first 10 ' + number + 'whole numbers.',
		'options': {
			'A': average + parseInt(Math.random()*10),
			'B': average - parseInt(Math.random()*10),
			'C': average,
			'D': average- parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '09'
	}
	
	return question;
}

function problem093(){
	var inputData = [{
		'cp': 35,
		'lp': 50
		},
		{
		'cp': 55,
		'lp': 70
		},
		{
		'cp': 12,
		'lp': 26
		},
		{
		'cp': 23,
		'lp': 56
		},
		{
		'cp': 15,
		'lp': 45
		}],
		randomIndex = getRandomNumber(inputData.length),
	    cp = inputData[randomIndex]['cp'],
		lp = inputData[randomIndex]['lp'],
		sp,
		question = {};

	cp = parseInt(cp);
    lp = parsefloat(lp);
	sp = (lp * cp)/100 - cp ;

	question = {
		'type': 'single',
		'id': '092',
		'question': 'A man purchases TV for ' + cp + 'rs ans sells it at ' + lp + ' loss percentage. what is the sp of the TV?',
		'options': {
			'A': sp - parseFloat(Math.random()*10),
			'B': sp - parseFloat(Math.random()*10),
			'C': sp + parseFloat(Math.random()*10),
			'D': sp 
		},
		'answer': 'D',
		'author-id': '09'
    }
	return question;
}
function problem094(){
	var inputData = [{
		'tankCap': 25,
		'buckCap': 2/5
		},
		{
		'tankCap': 30,
			'buckCap': 2/5
		},
		{
		'tankCap': 40,
			'buckCap': 2/5
		},
		{
		'tankCap': 45,
			'buckCap': 2/5
		},
		{
		'tankCap': 50,
			'buckCap': 2/5
		}],
		randomIndex = getRandomNumber(inputData.length),
	    tankCap= inputData[randomIndex]['tankCap'],
		buckCap = inputData[randomIndex]['buckCap'],
		nBuck,
		question = {};

	tankCap = parseInt(tankCap);
    buckCap = parseFloat(buckCap;
    nBuck = tankCap/buckCap;

	question = {
		'type': 'single',
		'id': '094',
		'question': 'To fill a tank ' + tankCap + 'buckets of water is required. How many buckets of water will be required to fill the same tank if the capacity of the bucket is reduced to ' + buckCap + ' two fifth of its present?',
		'options': {
			'A': nBuck - parseFloat(Math.random()*10),
			'B': nBuck ,
			'C': nBuck + parseFloat(Math.random()*10),
			'D': nBuck - parseFloat(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '09'
    }
	return question;
}
function problem095(){
	var inputData = [{
		'sp': 25,
		'pp': 2/5
		},
		{
		'sp': 30,
		'pp': 2/5
		},
		{
		'sp': 40,
		'pp': 2/5
		},
		{
		'sp': 45,
		'pp': 2/5
		},
		{
		'sp': 50,
		'pp': 2/5
		}],
		randomIndex = getRandomNumber(inputData.length),
	    sp= inputData[randomIndex]['sp'],
		pp = inputData[randomIndex]['pp'],
		cp,
		question = {};

	sp = parseInt(sp);
    pp = parseFloat(pp;
    cp = 100/(100+pp)*sp;

	question = {
		'type': 'single',
		'id': '095',
		'question': 'suresh bought a cell phone from a shop. If he sells it at ' + sp + ' rs to mahesh and earns a profit ' + pp + ' percentage . Find the price at which suresh bought the cell phone.'
		'options': {
			'A': cp - parseInt(Math.random()*10),
			'B': cp,
			'C': cp + parseInt(Math.random()*10),
			'D': cp - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '09'
    }
	return question;
}