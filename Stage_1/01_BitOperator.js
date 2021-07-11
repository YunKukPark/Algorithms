// Run by Node.js

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let shift = {
  leftshift: 0,
  rightshift: 0,
};

rl.on('line', function (line) {
  // 여기에 코드 작성
  // 입력값은 스페이스로 구분하여 5=>공백=>3=>엔터 (즉 한줄.)
  const input = line.split(' ');

  shift.leftshift = input[0] >> input[1];
  shift.rightshift = input[0] << input[1];
  rl.close();
}).on('close', function () {
  console.log(shift.leftshift);
  console.log(shift.rightshift);
  process.exit();
});
