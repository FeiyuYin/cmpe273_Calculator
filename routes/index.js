
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('calculator', { result: ""});
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