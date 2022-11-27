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
			'D': speed * parseInt(Math.random()*10)
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
			'D': average * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '09'
	}
	
	return question;
}

function problem093(){
	var inputData = [{
		'cp': 8000,
		'lp': 10
		},
		{
		'cp': 7500,
		'lp': 12
		},
		{
		'cp': 7000,
		'lp': 10
		},
		{
		'cp': 6500,
		'lp': 10
		},
		{
		'cp': 6000,
		'lp': 10
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
		'id': '093',
		'question': 'A man purchases TV for ' + cp + 'rs ans sells it at ' + lp + ' loss percentage. what is the sp of the TV?',
		'options': {
			'A': sp - parseFloat(Math.random()*10),
			'B': sp * parseFloat(Math.random()*10),
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
			'A': nBuck * parseFloat(Math.random()*10),
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
		'sp': 8400,
		'pp': 12
		},
		{
		'sp': 7000,
		'pp': 12
		},
		{
		'sp': 6500,
		'pp': 12
		},
		{
		'sp': 6000,
		'pp': 15
		},
		{
		'sp': 8200,
		'pp':12
		}],
		randomIndex = getRandomNumber(inputData.length),
	    sp = inputData[randomIndex]['sp'],
		pp = inputData[randomIndex]['pp'],
		cp,
		question = {};

	sp = parseInt(sp);
    pp = parseFloat(pp;
    cp = 100/(100+pp)*sp;

	question = {
		'type': 'single',
		'id': '095',
		'question': 'suresh bought a cell phone from a shop. If he sells it at ' + sp + ' rs to mahesh and earns a profit ' + pp + ' percentage . Find the price at which suresh bought the cell phone.',
		'options': {
			'A': cp * parseInt(Math.random()*10),
			'B': cp,
			'C': cp + parseInt(Math.random()*10),
			'D': cp - parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '09'
    }
	return question;
}
function problem096(){
	var inputData = [{
		'us': 8,
		'ds': 4
		},
		{
		'us': 10,
		'ds': 4
		},
		{
		'us': 12,
		'ds': 6
		},
		{
		'us': 16,
		'ds': 4
		},
		{
		'us': 14,
		'ds': 12
		}],
		randomIndex = getRandomNumber(inputData.length),
	    us = inputData[randomIndex]['us'],
		ds = inputData[randomIndex]['ds'],
		ss,
		question = {};

	us = parseInt(us);
    ds = parseInt(ds;
    ss = (us+ds)/2;

	question = {
		'type': 'single',
		'id': '096',
		'question': 'suresh bought a cell phone from a shop. If he sells it at ' + sp + ' rs to mahesh and earns a profit ' + pp + ' percentage . Find the price at which suresh bought the cell phone.',
		'options': {
			'A': ss - parseInt(Math.random()*10),
			'B': ss + parseInt(Math.random()*10),
			'C': ss,
			'D': ss * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '09'
    }
	return question;
}
function problem097(){
	var inputData = [{
		'p': 12600,
		'n': 2,
		'r':10
		},
		{
		'p': 12400,
		'n': 2,
		'r':4		
		},
		{
		'p': 12600,
		'n': 2,
		'r':8
		},
		{
		'p': 12600,
		'n': 2,
		'r':12
		},
		{
		'p': 12400,
		'n': 2,
		'r':8
		}],
		randomIndex = getRandomNumber(inputData.length),
	    p = inputData[randomIndex]['p'],
		n = inputData[randomIndex]['n'],
		r = inputData[randomIndex]['r'],
		a,
		ci,
		question = {};

	p = parseInt(p);
    n = parseInt(n);
    r = parseInt(r);
	a = p*(1+(r/100))**n;
	ci = a - p,

	question = {
		'type': 'single',
		'id': '097',
		'question': 'Find the compound interest on' + p + ' rs for ' + n + ' years at ' + r + ' percentage per annum completed annualy.',
		'options': {
			'A': ci * parseInt(Math.random()*10),
			'B': ci + parseInt(Math.random()*10),
			'C': ci - parseInt(Math.random()*10),
			'D': ci 
		},
		'answer': 'D',
		'author-id': '09'
    }
	return question;
}
function problem098(){
	var inputData = [{
		'p': 45000,
		'n': 6,
		'r':4
		},
		{
		'p': 45000,
		'n': 2,
		'r':6		
		},
		{
		'p': 40000,
		'n': 6,
		'r':6
		},
		{
		'p': 46000,
		'n': 6,
		'r':4
		},
		{
		'p': 44000,
		'n': 2,
		'r':6
		}],
		randomIndex = getRandomNumber(inputData.length),
	    p = inputData[randomIndex]['p'],
		n = inputData[randomIndex]['n'],
		r = inputData[randomIndex]['r'],
		si,
		question = {};

	p = parseInt(p);
    n = parseInt(n);
    r = parseInt(r);
    si=p*n*r/100;
	
	question = {
		'type': 'single',
		'id': '098',
		'question': 'Find the simple interest when ' + p + ' rs rate of interest ' + r + ' percentage per annum, time ' + n + ' years.',
		'options': {
			'A': si - parseInt(Math.random()*10),
			'B': si + parseInt(Math.random()*10),
			'C': si * parseInt(Math.random()*10),
			'D': si 
		},
		'answer': 'D',
		'author-id': '09'
    }
	return question;
}
function problem099(){
	var inputData = [{
		'l':8,
		'b':4
		},
		{
		'l':6,
		'b':3
		},
		{
		'l': 12,
		'b': 6
		},
		{
		'l': 4,
		'b': 3
		},
		{
		'l': 4,
		'b': 2
		}],
		randomIndex = getRandomNumber(inputData.length),
	    l = inputData[randomIndex]['l'],
	    b = inputData[randomIndex]['b'],
		a,
		question = {};

	l = parseInt(l);
    b = parseInt(b);
    a = l*b;
	
	question = {
		'type': 'single',
		'id': '099',
		'question': 'If the length ' + l + ' m and its breadth ' + b +' m. find the area'+ a + ' m? ',
		'options': {
			'A': a * parseInt(Math.random()*10),
			'B': a 
			'C': a - parseInt(Math.random()*10),
			'D': a + parseInt(Math.random()*10)
		},
		'answer': 'B',
		'author-id': '09'
    }
	return question;
}
function problem0910(){
	var inputData = [{
		'a': 5,
		},
		{
		'a': 4,
		},
		{
		'a': 9,
		},
		{
		'a': 3,		
		},
		{
		'a': 10,
		}],
		randomIndex = getRandomNumber(inputData.length),
		a = inputData[randomIndex]['a'],
		area,
		question = {};

	a = parseInt(a);
    area = a*a ;

	question = {
		'type': 'single',
		'id': '0910',
		'question': 'If one side of square is ' + a + ' m. find the area'+ a + ' m?' 
		'options': {
			'A': area + parseInt(Math.random()*10),
			'B': area - parseInt(Math.random()*10),
			'C': area,
			'D': area * parseInt(Math.random()*10)
		},
		'answer': 'C',
		'author-id': '09'
	}
	
	return question;
}