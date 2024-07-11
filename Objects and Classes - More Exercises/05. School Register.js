function schoolRegister(input) {
    let students = {};
    for (let line of input) {
        let tokens = line.split(", ");
        let grade = Number(tokens[1].split(": ")[1]) + 1;
        let name = tokens[0].split(": ")[1];
        let score = Number(tokens[2].split(": ")[1]);

        if (score >= 3) {
            if (!students.hasOwnProperty(grade)) {
                students[grade] = [];
            }
            students[grade].push({name: name, score: score});
        }
    }

    let sortedGrades = Object.entries(students).sort((a, b) => a[0] - b[0]);
    for (let grade of sortedGrades) {
        let studentsInGrade = grade[1];
        console.log(`${grade[0]} Grade`);
        console.log(`List of students: ${studentsInGrade.map(s => s.name).join(", ")}`);
        console.log(`Average annual score from last year: ${(studentsInGrade.map(s => s.score).reduce((a, b) => a + b) / studentsInGrade.length).toFixed(2)}\n`);
    }
}

