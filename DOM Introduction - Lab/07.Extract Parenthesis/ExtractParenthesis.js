// function extract(content) {
//     content = document.getElementById('content').innerText;
//     let result = [];
//     const pattern = /\(([^)]+)\)/g;

//     let match = pattern.exec(content);
//     while (match) {
//         result.push(match[1]);
//         match = pattern.exec(content);
//     }
//     return result.join('; ');
// }

// let text = extract('content');

function extract(content) {
    content = document.getElementById('content').innerText;
    let result = [];
    content = content.split(/[\(\)]+/)
    for (i=1; i<content.length; i+=2) {
        result.push(content[i]);
    }
    return result.join('; ');
}

let text = extract('content');