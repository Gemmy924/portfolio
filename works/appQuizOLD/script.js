// 質問 ///////////////////////
const quizData = [
  {
      food: "./img/food1.png",
      question: "たべたのだーれ？",
      choices: [
        {
          text: "選択肢A",
          imagePath: "./img/black1.png",
          baloon: "ねこはやってないよ",
          isCorrect: true
        },
        {
          text: "選択肢B",
          imagePath: "./img/kitti1.png",
          baloon: "あそぶ",
          isCorrect: false
        },
        {
          text: "選択肢C",
          imagePath: "./img/mike1.png",
          baloon: "・・・・・・・・",
          isCorrect: false
        },
        {
          text: "選択肢D",
          imagePath: "./img/sabi1.png",
          baloon: "ねこしらないよ",
          isCorrect: false
        },
        {
          text: "選択肢E",
          imagePath: "./img/Kneko1.png",
          baloon: "ねこをうたがうの？",
          isCorrect: false
        }
      ]
    },
    {
      food: "./img/food2.png",
      question: "たべたのだれ？？？？！",
      choices: [
        {
          text: "選択肢A",
          imagePath: "./img/kitti2.png",
          baloon: "あそぶ",
          isCorrect: true
        },
        {
          text: "選択肢B",
          imagePath: "./img/sabi2.png",
          baloon: "ねこがしってるわけないよ",
          isCorrect: false
        },
        {
          text: "選択肢C",
          imagePath: "./img/black2.png",
          baloon: "ねこはそこにいます",
          isCorrect: false
        },
        {
          text: "選択肢D",
          imagePath: "./img/Kneko2.png",
          baloon: "・・・・・・・・",
          isCorrect: false
        },
        {
          text: "選択肢E",
          imagePath: "./img/mike2.png",
          baloon: "あいつがあやしいよ",
          isCorrect: false
        }
      ]
    },
    {
      food: "./img/food3.png",
      question: "だめっていったでしょ？？？！！！！！",
      choices: [
        {
          text: "選択肢A",
          imagePath: "./img/sabi3.png",
          baloon: "・・・・・・・・",
          isCorrect: true
        },
        {
          text: "選択肢B",
          imagePath: "./img/Kneko3.png",
          baloon: "・・・・・・・・",
          isCorrect: false
        },
        {
          text: "選択肢C",
          imagePath: "./img/black3.png",
          baloon: "・・・・・・・・",
          isCorrect: false
        },
        {
          text: "選択肢D",
          imagePath: "./img/kitti3.png",
          baloon: "あそぶ",
          isCorrect: false
        },
        {
          text: "選択肢E",
          imagePath: "./img/mike3.png",
          baloon: "・・・・・・・・",
          isCorrect: false
        }
      ]
    },
];

const choicesContainer = document.getElementById("choices");

///////////////////////////////////
let countDownTimer = 10; // 制限時間
let isCorrect = false; // 最後まで回答したか
let successCount = 0;    // 正当数
let questionCount = 0;    // 問題数
//////////////////////////////////

// 最初は問題を解くボタンだけ表示
document.getElementById("ansArea").style.visibility = "hidden";

// タイマー /////////////////////////
const countTimer = () =>{
  if(isCorrect == false) { // isCorrectがfalseなら
      document.getElementById("countDown").innerHTML = `のこり${countDownTimer}びょうだよ`;
  if (!countDownTimer == 0) {
      setTimeout(() => {
          countDownTimer = countDownTimer - 1;
          countTimer();
      },1000);
  } else{
      setTimeout(()=>{
          alert("じかんぎれ");
          // カウントをリセットする
          countDownTimer = 5;
          questionCount = 0;
          successCount =0;

        // 問題を最初から表示する
        clearQuiz(); // 現在の問題をクリア
        showQuiz(0); // 最初の問題を表示

      // ボタンの表示を替える
      // 問題を非表示にし、ボタンを表示する
      document.getElementById("ansStartButton").style.visibility = "visible";
      document.getElementById("ansArea").style.visibility = "hidden";
      // ボタンの表示を替える
      document.getElementById("icon").src='./img/mondai_ballon2.png';
    })
   }
  }
}


/// 吹き出し要素の作成  /////////
const balloonElement = document.createElement("div");
balloonElement.className = "balloon";
document.body.appendChild(balloonElement);

// 正答数とスポンサーを表示しない
document.getElementById("answer").style.visibility = "hidden";
document.getElementById("sponser").style.visibility = "hidden";

// クイズを表示する関数 ///////////////
function showQuiz(index) {
      const quiz = quizData[index];
      // 質問foodイラストを表示
      const foodElement = document.createElement("img");
      foodElement.src = quiz.food; // imgContent から src に変更
      foodElement.alt = quiz.question; // alt 属性に質問文を追加
      foodElement.style.width = "20%"; // 幅を--%に設定
      foodElement.style.margin = "0 auto";
      choicesContainer.appendChild(foodElement);
      // 質問文を表示
      const questionElement = document.createElement("h2");
      questionElement.textContent = quiz.question;
      questionElement.style.width = "50%";
      questionElement.style.margin = "1% auto 3%";
      choicesContainer.appendChild(questionElement);
      // 選択肢を表示
      const choicesWrapper = document.createElement("div");
      choicesWrapper.className = "choices-wrapper"; // 選択肢を包む要素のクラス名を追加
      choicesContainer.appendChild(choicesWrapper);
  
      quiz.choices.forEach((choice, choiceIndex) => {
        const choiceElement = document.createElement("div");
        choiceElement.className = "choice-item"; // 選択肢の要素のクラス名を追加
        const choiceImage = document.createElement("img");
        choiceImage.src = choice.imagePath;
        choiceImage.alt = choice.text;

      // マウスオーバー時に吹き出しで文字列を表示
      choiceImage.addEventListener("mouseover", (event) => {
        const x = event.clientX;
        const y = event.clientY;
        showBalloon(choice.baloon, x, y);
      });

      // 吹き出しを表示する関数
      function showBalloon(text, x, y) {
        balloonElement.textContent = text;
        balloonElement.style.display = "block";

        // 指定した位置に吹き出しを表示
        balloonElement.style.left = x + "px";
        balloonElement.style.top = y - 30 + "px";  // 上にオフセットを加えて固定位置に調整
      }

      // 吹き出しを非表示にする関数
      function hideBalloon() {
        balloonElement.style.display = "none";
        balloonElement.textContent = "";  // テキストをクリア
      }

    // クイズをクリアする関数
    function clearQuiz() {
      choicesContainer.innerHTML = ""; // 選択肢をクリア
      hideBalloon();  // バルーンを非表示にする
    }

   // マウスオーバー時に吹き出しで文字列を表示
choiceImage.addEventListener("mouseover", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  showBalloon(choice.baloon, x, y);

  // マウスアウト時に吹き出しを非表示にする
  const hideBalloonHandler = () => {
    hideBalloon();
    // choiceImage.removeEventListener("mouseout", hideBalloonHandler);
  };

  choiceImage.addEventListener("mouseout", hideBalloonHandler);
// });


// クリックイベントが発生した場合もマウスアウトの処理を追加
choiceElement.addEventListener("click", () => {
  hideBalloon();
});
});
// 選択肢がクリックされた時の処理
choiceElement.addEventListener("click", () => {
  // 選択された選択肢が正解かどうかをチェックする関数を呼び出す
  checkAnswer(index, choiceIndex);
  
  // // クリック後もマウスアウトの処理を追加
  // choiceImage.removeEventListener("mouseout", hideBalloonHandler);
});

          choiceElement.appendChild(choiceImage);
          choicesWrapper.appendChild(choiceElement);
        });
      }

      // CSSで選択肢を横に並べるスタイルを追加 /////////////
      const styleElement = document.createElement("style");
      styleElement.textContent = `
      .choices-wrapper {
        display: flex;
        margin: 0 10%;
      }
      .balloon {
        position: absolute;
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 10px;
        display: none;
      }
      `;
      document.head.appendChild(styleElement);

///// ansStart関数を作る /////
     // 問題文表示
     const ansStart = () => {
        // 選択肢表示
    document.getElementById("ansStartButton").style.visibility = "hidden";
    document.getElementById("explain").style.visibility = "hidden";
    document.getElementById("ansArea").style.visibility = "visible";
    document.getElementById("answer").style.visibility = "hidden";
    countTimer();
    viewQuestion();
    };
  
/////// 解答ボタン ////////
function checkAnswer(questionIndex, choiceIndex) {
    const quiz = quizData[questionIndex];
    const choice = quiz.choices[choiceIndex];

    if (choice.isCorrect) {
      alert("あたり！");
      successCount = successCount + 1;
    } else {
      alert("はずれ！");
    }
    questionCount = questionCount + 1;

    // 次の問題を表示するか、クイズ終了処理を行う
    if (questionIndex + 1 < quizData.length) {
        // 次の問題がある場合は、次の問題を表示
        clearQuiz(); // 現在の問題をクリア
        showQuiz(questionIndex + 1); // 次の問題を表示

    } else {
        // クイズ終了処理を行う（例: 結果を表示する、リセットするなど）
        clearQuiz(); // 最後の問題をクリア
        alert("そうさのじかんはおわったよ。");
        document.getElementById("answer").innerHTML = `${successCount}ひきがみつかったね！`;
        document.getElementById("sponser").innerHTML = `🐈しゃしんのていきょう🐈<br>Kさん　Tさん　Mさん<br>ありがとうございました！`      
        document.getElementById("sponser").style.visibility = "visible";
        document.getElementById("answer").style.visibility = "visible";
        document.getElementById("countDown").style.visibility = "hidden";
        isCorrect = true;
  
        // // viewQuestion関数
        viewQuestion();
    }
}

  // クイズをクリアする関数
  function clearQuiz() {
    choicesContainer.innerHTML = ""; // 選択肢をクリア
  }

function showBalloon(text) {
    balloonElement.textContent = text;
    balloonElement.style.display = "block";
}
  // // 最初の問題を表示する
  showQuiz(0)