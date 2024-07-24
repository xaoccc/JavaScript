function solve() {
  // Reset the output
  document.getElementById('output').innerHTML = '';

  let text = document.getElementById('input').value;
  let sentences = text.split('.').filter(x => x !== '');
  let result = [];
  let paragraph = document.createElement("p");

  for (let i = 1; i < sentences.length + 1; i++) {
    let sentence = sentences[i - 1].trim();
    paragraph.textContent += sentence + '.';

    if (i % 3 === 0) {
      result.push(paragraph);
      paragraph = document.createElement("p");
    }
  }
  // If paragraphs number is not divisible by 3, it means that there is one paragraph left and we need to add it to the result
  if (paragraph.textContent !== '') {
    result.push(paragraph);
  }

  for (par of result) {
    document.getElementById('output').appendChild(par);
  }

}