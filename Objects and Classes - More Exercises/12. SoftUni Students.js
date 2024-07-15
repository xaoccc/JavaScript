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
            const regex = /([a-zA-Z0-9]+)\[([0-9]+)\] with email ([a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]+) joins ([a-zA-Z#]+)/;            
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
    console.log(courses);
}

students(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);
// students(['JavaBasics: 2', 'JavaBasics: 5', 'C#Advanced: 3', 'JSCore: 4', 'user13[50] with email user13@user.com joins JSCore']);