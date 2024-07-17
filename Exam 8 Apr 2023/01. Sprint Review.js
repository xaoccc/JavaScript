function sprintReview(input) {
    class Task {
        constructor(title, status, estimatedPoints){
            this.title = title;
            this.status = status;
            this.estimatedPoints = Number(estimatedPoints);
        }
    }    
    let sprinters = {};
    let points = {'ToDo': 0, 'In Progress': 0, 'Code Review': 0, 'Done': 0};
    
    input.slice(1, Number(input[0]) + 1).forEach((sprinterData) => {
        let [assignee, taskId, title, status, estimatedPoints] = sprinterData.split(':');
        let task = new Task(title, status, estimatedPoints);
        if (!sprinters[assignee]) {
            sprinters[assignee] = {[taskId]: task};
        } else {
            sprinters[assignee][taskId] = task;
        }
    })

    input.slice(Number(input[0]) + 1).forEach((line) => {
        let [action, assignee, ...other] = line.split(':');
        switch (action) {
            case 'Add New':
                if (!sprinters[assignee]) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                } else {
                    let task = new Task(...other.slice(1));  
                    sprinters[assignee][other[0]] = task;
                }
                break;
            case 'Change Status':
                let [taskId, newStatus] = other;
                if (!sprinters[assignee]) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                } else if (!sprinters[assignee][taskId]) {
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                } else {
                    sprinters[assignee][taskId].status = newStatus;
                }
                break;
            case 'Remove Task':
                let index = Number(other[0]);
                if (!sprinters[assignee]) {
                    console.log(`Assignee ${assignee} does not exist on the board!`);
                } else if (index >= Object.keys(sprinters[assignee]).length || index < 0) {
                    console.log(`Index is out of range!`);
                } else {
                    delete sprinters[assignee][Object.keys(sprinters[assignee])[index]];
                }
                break;
        }
    })
    for (let sprinter in sprinters) {
        for (let task in sprinters[sprinter]) {
            points[sprinters[sprinter][task]['status']] += Number(sprinters[sprinter][task]['estimatedPoints']);
        }
    }
    points['Done Points'] = points['Done'];
    delete points['Done'];

    for (let entry in points) {
        console.log(`${entry}: ${points[entry]}pts`);
    }
    let totalPoints = Object.values(points).reduce((a,b) => a + b, 0);
    let donePoints = Object.values(points)[3]

    if (totalPoints - donePoints > donePoints) {
        console.log('Sprint was unsuccessful...');
    } else {
        console.log('Sprint was successful!');
    }

}

sprintReview(  [
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:12',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]


)