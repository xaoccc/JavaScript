function students(input) {
    for (let line of input) {
        
        if (line.indexOf(':') !== -1) {
            let [courseName, capacity] = line.split(': ');
            

        } else if (line.indexOf('email') !== -1) {
        
            const regex = /{([^}]+)}\[(\d+)\] with email ([^ ]+) joins (.+)/;

            
            const match = line.match(regex);

            if (match) {
                const username = match[1];
                const creditsCount = match[2];
                const email = match[3];
                const courseName = match[4];

                console.log(`Username: ${username}`);
                console.log(`Credits Count: ${creditsCount}`);
                console.log(`Email: ${email}`);
                console.log(`Course Name: ${courseName}`);
            }


        }

    }
}

students(['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore']);