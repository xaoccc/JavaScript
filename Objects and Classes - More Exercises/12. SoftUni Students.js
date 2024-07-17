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
    let courses = {};

    for (let line of input) {
        if (line.indexOf(':') !== -1) {
            let [courseName, capacity] = line.split(': ');  
            capacity = Number(capacity);
            if (!courses[courseName]) {
                courses[courseName] = new Course(courseName, capacity);
            } else {
                courses[courseName].capacity += capacity;
            }

        } else if (line.indexOf('email') !== -1) {         
            const regex = /(.+)\[(\d+)\] with email (.+) joins (.+)/;            
            const match = line.match(regex);
            if (match) {
                const userName = match[1];
                const credits = Number(match[2]);
                const email = match[3];
                const courseName = match[4];

                if (courses[courseName] && courses[courseName].capacity > courses[courseName].students.length) {
                    courses[courseName].students.push(new Student(userName, email, credits));
                }
            }
        }
    }

    let sortedCourses = Object.values(courses).sort((a, b) => b.students.length - a.students.length);
 
    for (let course of sortedCourses) {
        console.log(`${course.courseName}: ${course.capacity - course.students.length} places left`);
        course.students.sort((a, b) => b.credits - a.credits);
        for (let student of course.students) {
            console.log(`--- ${student.credits}: ${student.userName}, ${student.email}`);
        }
    }
    
}

students(['JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore']
    );

