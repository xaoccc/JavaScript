function students(input) {
    class Course {
        constructor(courseName, capacity) {
            this.courseName = courseName;
            this.capacity = Number(capacity);
            this.students = [];
        }
    }
    class Student {
        constructor(userName, email, credits) {
            this.userName = userName;
            this.email = email;
            this.credits = credits;
        }
    }
    let courses = [];

    for (let line of input) {
        if (line.indexOf(':') !== -1) {
            let [courseName, capacity] = line.split(': ');  
            let courseFound = false; 
            for (let course of courses) {
                if (course.courseName === courseName) {
                    course.capacity += Number(capacity);
                    courseFound = true; 
                } 
            }
            if (!courseFound) {
                courses.push(new Course(courseName, Number(capacity)));
            }

        } else if (line.indexOf('email') !== -1) {         
            const regex = /(.+)\[(\d+)\] with email (.+) joins (.+)/;            
            const match = line.match(regex);
            if (match) {
                const userName = match[1];
                const credits = Number(match[2]);
                const email = match[3];
                const courseName = match[4];

                for (let course of courses) {
                    if (course.courseName === courseName && course.capacity > 0) {
                        let studentFound = false;
                        for (let student of course.students) {
                            if (student.userName === userName) {
                                studentFound = true;                            
                            }
                        }
                        if (!studentFound) {
                            course.students.push(new Student(userName, email, credits));
                            course.capacity -= 1;
                        }
                    }
                }
            }
        }
    }

    courses = courses.sort((a, b) => b.students.length - a.students.length);

    for (let course of courses) {
        console.log(`${course.courseName}: ${course.capacity} places left`);
        course.students = course.students.sort((a, b) => b.credits - a.credits);
        for (let student of course.students) {
            console.log(`--- ${student.credits}: ${student.userName}, ${student.email}`);
        }
    }
    
}

