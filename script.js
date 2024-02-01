'use strict';
/* 
console.log(document.querySelector('.message')); //<p class="message">Start guessing...</p>
console.log(document.querySelector('.message').textContent); //Start guessing...

document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

/* 
let secretNumber = Math.trunc(Math.random() * 20) + 1; // 創建隨機數1~20

let score = 20; // 預設分數是20分
let highscore = 0; // 預設最高分數是0

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // 原本的值是string , 所以要轉成number比對。
  console.log(guess, typeof guess); // 輸入5 //輸出 5 'number'

  // 假設input為空值,顯示沒有數字
  if (!guess) {
    document.querySelector('.message').textContent = '🆖 No number';

    // 當玩家贏的時候
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.background = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // 如果得分大於歷史高分 , 歷史高分賦值 = 得分
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // 當玩家猜太高的時候
  } else if (guess > secretNumber) {
    // 數字大於1時執行 , 等於0時lose
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    // 當玩家猜太小的時候
  } else if (guess < secretNumber) {
    // 數字大於1時執行 , 等於0時lose
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
*/
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
/*
實現遊戲休息功能，以便玩家可以做出新的猜測！ 具體方法如下：

1. 選擇具有“again”類別的元素並附加一個單擊事件處理程序
2. 在處理函數中，恢復score和secretNumber變數的初始值
3.恢復訊息、數字、分數、猜測輸入列的初始條件
4.同時恢復原來的背景顏色(#222)和數字寬度(15rem)

祝你好運😀
*/
/* 
// reset功能
document.querySelector('.again').addEventListener('click', function () {
  // 亂數重置
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //分數重置
  score = 20;
  document.querySelector('.score').textContent = score;
  // message重製
  document.querySelector('.message').textContent = 'Start guessing...';
  // 數字框框重製
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  // input重製
  document.querySelector('.guess').value = '';
  // 背景重製
  document.querySelector('body').style.background = '#222';
});
*/

// 整合又稱重構技術,可去除重複的代碼 , 重構的基本意思是重組代碼,但不改變它的工作方式,我們進行重構是為了改進代碼 ,消除重複代碼

let secretNumber = Math.trunc(Math.random() * 20) + 1; // 創建隨機數1~20
let score = 20; // 預設分數是20分
let highscore = 0; // 預設最高分數是0

// 要顯示的文字內容
const dispalyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // 原本的值是string , 所以要轉成number比對。
  console.log(guess, typeof guess); // 輸入5 //輸出 5 'number'

  // 假設input為空值,顯示沒有數字
  if (!guess) {
    // document.querySelector('.message').textContent = '🆖 No number';
    dispalyMessage('🆖 No number');
  }
  // 當玩家贏的時候
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    dispalyMessage('🎉 Correct Number!');

    document.querySelector('body').style.background = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // 如果得分大於歷史高分 , 歷史高分賦值 = 得分
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  // 當猜是錯誤的時候
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';

      dispalyMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      dispalyMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// reset功能
document.querySelector('.again').addEventListener('click', function () {
  // 亂數重置
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //分數重置
  score = 20;
  document.querySelector('.score').textContent = score;

  // message重製
  // document.querySelector('.message').textContent = 'Start guessing...';
  dispalyMessage('Start guessing...');

  // 數字框框重製
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  // input重製
  document.querySelector('.guess').value = '';
  
  // 背景重製
  document.querySelector('body').style.background = '#222';
});
