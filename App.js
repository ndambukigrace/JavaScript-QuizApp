function showResults() {
    // Gets the quiz container and result container elements
    var quizContainer = document.getElementById("quiz-container");
    var resultContainer = document.getElementById("result-container");
  
    // Hides the quiz container
    quizContainer.style.display = "none";
  
    // Shows the result container
    resultContainer.style.display = "block";
  
    // Calculates the score
    var score = 0;
  
    // Check the answers for each question
    var answers = {
      Q1: "a",
      Q2: "a",
      Q3: "b",
      Q4: "a",
    };
  
    var totalQuestions = Object.keys(answers).length;
  
    for (var i = 1; i <= totalQuestions; i++) {
      var questionName = "Q" + i;
      var selectedOption = document.querySelector('input[name="' + questionName + '"]:checked');
  
      if (selectedOption) {
        var selectedValue = selectedOption.value;
        if (selectedValue === answers[questionName]) {
          score++;
        }
      }
    }
  
    // Displays the score
    var scoreElement = document.getElementById("score");
    scoreElement.innerHTML = "Your score: " + score + " out of " + totalQuestions;
  
    // Displays feedback based on the score
    var feedbackElement = document.getElementById("feedback");
    if (score === totalQuestions) {
      feedbackElement.innerHTML = "Congratulations! You got all the answers correct.";
    } else {
      feedbackElement.innerHTML = "You can do better. Keep practicing!";
    }
  }
  
  // Adds event listener to the submit button
  var submitButton = document.getElementById("submit-btn");
  submitButton.addEventListener("click", showResults);
  