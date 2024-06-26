function pascalCase(text) {
    console.log(text.split(/(?=[A-Z])/).join(', '));   
}
