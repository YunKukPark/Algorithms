const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

function getMultiplierOf_3(number){
  
}


rl.on("line", function(line) {
	const input = Number(line);
  const reducer = (accumulator, current) => accumulator + current;
  let MultOf_3 = [];
  let MultOf_5 = [];
	// 1. line 에서 받은 숫자의 3의 배수를 구한다. 
  // 2. line 에서 받은 숫자의 5의 배수를 구한다. 
  // 3. line 에서 받은 숫자의 15의 배수를 구한다.
  // 4. 3의 배수와 5의 배수의 합을 구한다.
  // 5. 4번에서 3번을 빼준다.
  for(let loopNum = 1; loopNum <= input; loopNum++){
    if(loopNum % 3 === 0){
      MultOf_3.push(loopNum);
    }else if(loopNum % 5 === 0){
      MultOf_5.push(loopNum);
    }
  }

  const concatMults = MultOf_3.concat(MultOf_5);
  console.log(concatMults.reduce(reducer));
	rl.close();
}).on("close", function() {
	process.exit();
});
