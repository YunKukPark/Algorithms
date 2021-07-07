const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  // 1. 숫자릅 입력 받는다.
  // 2. 숫자보다 작은 수를 계속해서 입력하여 0으로 나누어 떨어지는 수를 찾는다.
  let divisor = [];
  line = Number(line);

  getDivisor();
  const result = divisor.join(' ');

  console.log(`${result} `);
  rl.close();
}).on('close', () => {
  process.exit();
});

function getDivisor() {
  for (let i = 1; i <= line; i++) {
    if (line % i === 0) {
      divisor.push(i);
    }
  }
}
