function solve(text, conv) {
  text = document.getElementById('text').value.toLowerCase().split(' ');
  conv = document.getElementById('naming-convention').value;
  let result = [];  
  for (word of text) {
    result.push(word.substring(0, 1).toUpperCase() + word.substring(1));
  }

  if (conv === 'Pascal Case') {
    result = result.join('');
  }
  else if (conv === 'Camel Case') {
    result = result.join('');
    result = result.substring(0, 1).toLowerCase() + result.substring(1);
  }
  else {
    result = 'Error!'
  }
  document.getElementById('result').textContent = result;
}