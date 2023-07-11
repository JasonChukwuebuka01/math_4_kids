window.onload = () => {
   const num1 = document.querySelector("#num1");
   const num2 = document.querySelector("#num2");
   const answerNum = document.querySelector("#answer_num");
   const dummy1 = document.querySelector("#dummy1");
   const dummy2 = document.querySelector("#dummy2");
   const optionNumbers = document.querySelectorAll(".opt_box");
   let error = document.querySelector("#error");
   let correct = document.querySelector("#correct");
   let pc = document.querySelectorAll(".pc");
   let scorePoint = document.querySelector("#scorePoint");
   let scoreBoard = document.querySelector("#scores");
   const record = document.querySelector("#record");

   let answer;
   let score = 0;

   solve(); // function () to start up the process.

   // using forEach() to add event handlers to individual array values. it adds eventListener to each value. if the value's innerHTML == answer then call the following method.
   optionNumbers.forEach((option) => {
      option.addEventListener("click", function () {
         if (this.innerHTML == answer) {
            solve();
            correct.play();
            correctColor(option);
            showScoreBoard();
            scorePoint.innerHTML = `+1`;
            record.innerHTML = ++score;
            scorePoint.style.color = "lime";
         } else {
            error.play();
            errorColor(this);
            showScoreBoard();

            score = score === 0 ? 0 : --score;
            record.innerHTML = score;
            scorePoint.innerHTML = `-1`;
            scorePoint.style.color = "red";
         }
      });
   });

   function solve() {
      let numb1 = Math.floor(Math.random() * 13);
      let numb2 = Math.floor(Math.random() * 13);
      let dummyNum1 = Math.floor(Math.random() * 13);
      let dummyNum2 = Math.floor(Math.random() * 13);

      answer = numb1 + numb2;

      num1.innerHTML = numb1;
      num2.innerHTML = numb2;

      //making sure no random number be identical. if anyone becomes identical,add number else retain number.
      dummyNum1 = dummyNum1 === dummyNum2 ? dummyNum1 + 4 : dummyNum1;
      dummyNum2 = dummyNum2 === answer ? dummyNum2 + 2 : dummyNum2;
      dummyNum1 = dummyNum1 === answer ? dummyNum1 + 3 : dummyNum1;

      let answerArr = [answer, dummyNum1, dummyNum2];
      let shuffleAnswer = []; // swaping values in answerArr[];

      for (let i = answerArr.length; i--; ) {
         shuffleAnswer.push(
            answerArr.splice(Math.floor(Math.random() * (i + 1)), 1)
         );
      } // End of for Loop

      answerNum.innerHTML = shuffleAnswer[0];
      dummy1.innerHTML = shuffleAnswer[1];
      dummy2.innerHTML = shuffleAnswer[2];
   } // End of solve() ;

   // functions that adds a class and removes it after 3seconds.
   function correctColor(x) {
      x.className = "active";

      setTimeout(() => {
         x.className = x.className.replace("active", "");
      }, 3000);
   }

   function errorColor(u) {
      u.className = "offline";

      setTimeout(() => {
         u.className = u.className.replace("offline", "");
      }, 3000);
   }

   function showScoreBoard() {
      scoreBoard.className = "visible";

      setTimeout(() => {
         scoreBoard.className = scoreBoard.className.replace("visible", "");
      }, 2000);
   }

   // click event event subtract and multiply li tags.
   pc.forEach((each) => {
      each.addEventListener("click", () => {
         alert(
            "This needs a laptop to write its own function. this was coded on mobile phone. T for Thanks"
         );
      });
   });
}; // End of General()✅
