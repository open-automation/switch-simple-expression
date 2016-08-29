var express = {
    '+': function (l, r) { return l + r },
    '-': function (l, r) { return l - r },
    '/': function (l, r) { return l / r },
    '*': function (l, r) { return l * r },
    '%': function (l, r) { return l % r },
    '==': function (l, r) { return l == r },
    '!=': function (l, r) { return l != r },
    '===': function (l, r) { return l === r },
    '>': function (l, r) { return l > r },
    '>=': function (l, r) { return l >= r },
    '<': function (l, r) { return l < r },
    '<=': function (l, r) { return l <= r }
}

function jobArrived( s : Switch, job : Job )
{
	// Declare some stuff
	var expression_type = s.getPropertyValue('ExpressionType');
	var result_private_data_key = s.getPropertyValue('ResultPrivateDataKey');
	var left_operand = s.getPropertyValue('LeftOperand');
	var right_operand = s.getPropertyValue('RightOperand');

	// Get chosen operator
	var selected_operator;
	if(expression_type == "Arithmetic"){
		selected_operator = s.getPropertyValue('ArithmeticOperator');
		left_operand = parseInt(left_operand);
		right_operand = parseInt(right_operand);
	} else if(expression_type == "Boolean"){
		selected_operator = s.getPropertyValue('BooleanOperator');
	}

	// Get result
	var result = express[selected_operator](left_operand, right_operand);

	// Log
	s.log(1, "Expression result: " + result);

	// PD write
	job.setPrivateData(result_private_data_key, result);

	// Job routing
	var data_level = 1;
	if(expression_type == "Boolean"){
		if(result == false){
			data_level = 3;
		}
	}

	// Send out
	job.sendToData(data_level, job.getPath());

}
