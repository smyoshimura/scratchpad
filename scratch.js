var Operator = function (hasPrecedence) {
  Operator.prototype.hasPrecedence = hasPrecedence;
};
var Addition = function () {
	Operator.call(this, false);

	this.add = function (num1, num2) {
		return num1 + num2;
	};
};
Addition.prototype = Object.create(Operator.prototype);
Addition.prototype.constructor = Addition;

var Subtraction = function (hasPrecedence) {
	Operator.call(this, false);

	this.subtract = function (num1, num2) {
		return num1 - num2;
	};
}
Subtraction.prototype = Object.create(Operator.prototype);
Subtraction.prototype.constructor = Subtraction;
var Division = function () {
	Operator.call(this, true);

	this.divide =function (num1, num2) {
		return num1 / num2;
	};
}
Division.prototype = Object.create(Operator.prototype);
Division.prototype.constructor = Division;

var Multiplication = function () {
	Operator.call(this, true);

	this.multiply = function (num1, num2) {
		return num1 * num2;
	};
}
Multiplication.prototype = Object.create(Operator.prototype);
Multiplication.prototype.constructor = Multiplication;;

var op1 = new Addition();
console.log(op1.hasPrecedence);
console.log(op1.add(3,4));
