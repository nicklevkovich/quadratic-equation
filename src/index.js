module.exports = function solveEquation(equation) {
  // your implementation
  var solutions = [];
  let equationsplit = equation.split(" ");
  /*var array = [];
  for (i=0;i<equationsplit.length; i++) {
    array.push(+equationsplit[i]);
  };*/
  if (equationsplit[3]==="-") {var five = (+equationsplit[4])*(-1)};
  if (equationsplit[3]==="+") var five = +equationsplit[4];
  if (equationsplit[7]==="-") {var nine = (+equationsplit[8])*(-1)};
  if (equationsplit[7]==="+") var nine = +equationsplit[8];
  var one = +equationsplit[0];
  var D = Math.sqrt(five*five - 4*one*nine);
  var x1 = (((-1*five) + D)/(2*one));
  var x2 = (((-1*five) - D)/(2*one));
  solutions.push(x1,x2);
  return (solutions);
}
