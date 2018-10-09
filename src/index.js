module.exports = function solveEquation(equation) {
  let solutions = [];
  let A, B, C;
  let equationSplit = equation.split(" ");
  if (equationSplit[3]==="-") B = (+equationSplit[4])*(-1);
  if (equationSplit[3]==="+") B = +equationSplit[4];
  if (equationSplit[7]==="-") C = (+equationSplit[8])*(-1);
  if (equationSplit[7]==="+") C = +equationSplit[8];
  A = +equationSplit[0];
  let D = Math.sqrt(B**2 - 4*A*C);
  var x1 = Math.round(((-B) + D)/(2*A));
  var x2 = Math.round(((-B) - D)/(2*A));
  solutions.push(x1,x2);
  return solutions.sort((a, b) => {
    return a - b;
  });
}
