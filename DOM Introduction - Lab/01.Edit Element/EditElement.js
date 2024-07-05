function editElement(obj, match, replacer) {
    let text = obj.textContent;
    let matcher = new RegExp(match, 'g');
    let newText = text.replace(matcher, replacer);
    obj.textContent = newText;
}