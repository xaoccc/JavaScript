function fortmatTheText() {
  
    let text = document.getElementById('input').value;
    let sentences = text.split('.').filter(x => x !== '');
    let result = '';
  
    for (let i = 0; i < sentences.length; i++) {
      let sentence = sentences[i].trim();
      result += sentence + '.';
      if (sentence.length > 0) {
        result += ' ';
      }
    }

  
    document.getElementById('output').textContent = result;
}