
/*
 * GET home page.
 */
var url = require("url");
var querystring = require("querystring");

exports.index = function(req, res){
  res.render('calculator', { result: ""});
};

//http://127.0.0.1:3000/calculator?oper=*&p1=2&p2=1
exports.urlCalculator= function(req, res){
	
	var queryS = url.parse(req.url).query;
	console.log(queryS);
	var operator = querystring.parse(queryS)["oper"];

	var p1 = querystring.parse(queryS)["p1"];
	var p2 = querystring.parse(queryS)["p2"];
	var result = p1 + operator + p2;
	
	
	result = eval(result);
	console.log(result);
	res.render('index', { title: result});
};

exports.calculator = function(req, res){
	var operators = '+-*/=.';
	
	var eq = req.body.Input;
	eq = eq.replace(/ /g, '');
	if(eq.length === 0 || eq.length === 1){eq = 'Invalid input!';}
	else if(eq[0] === '+' || eq[0] === '*' ||eq[0] === '/' ||eq[0] === '.'||eq[0] === '=' || eq[eq.length-1] === '+' || eq[eq.length-1] === '*' ||eq[eq.length-1] === '/' ||eq[eq.length-1] === '.'||eq[eq.length-1] === '=' || eq[eq.length-1] === '-'){eq = 'Invalid input!';}
	
	else
	{
		var is_valid = true;
		for(var i = 0; i <= eq.length-2; i ++){
		
			if(operators.indexOf(eq[i]) > -1 && operators.indexOf(eq[i+1]) > -1){
				
				is_valid = false;
				break;
			}
		}
		if(is_valid === false){
			
			eq = 'Invalid input!';
		}
		else{eq = eval(eq);}
	}
	
	console.log(eq);
	res.render('calculator', { result: eq });
};