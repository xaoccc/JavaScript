function solve() {
  //TODO...
  let answers = [];
  const correctAnswers = {0: 'onclick', 1: 'JSON.stringify()', 2: 'A programming API for HTML and XML documents'};
  let [correctNum, totalQuestions] = [0, 0];
  let finalMsg = ''

  const results = document.querySelector('#results');

  Array.from(document.querySelectorAll('section')).forEach((section, index) => {
    
    Array.from(section.querySelectorAll('.answer-text')).forEach((answer) => {
      

      answer.addEventListener('click', function(e) {
        answers.push(answer.textContent);


        (correctAnswers[index] === answer.textContent) ? correctNum += 1 : null;
        totalQuestions += 1;

        section.style.display = 'none';

        if (totalQuestions < 3) {          
          section.nextElementSibling.style.display = 'block';
        } else {
          console.log(correctNum);
          results.style.display = 'block';
          (correctNum === totalQuestions) ? finalMsg = "You are recognized as top JavaScript fan!" : finalMsg = `You have ${correctNum} right answers`;
          results.querySelector('h1').textContent = finalMsg;
        }
        
      })

      
    })

  })

  



}
