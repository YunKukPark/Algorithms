const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const compareNumber = (a,b) => {
  if(a > b){
    console.log('>');
  }else if(a < b){
    console.log('<')
  }else if(a===b){
    console.log('=')
  }
}
rl.on('line', function (line) {
  const input = line.split(' ');
  const result = compareNumber(Number(input[0]),Number(input[1]));
  console.log(result);
  rl.close();
}).on('close', function () {
  process.exit();
});
