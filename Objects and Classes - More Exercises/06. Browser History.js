function browserHistroy(browserData, actions) {
    for (let action of actions) {
        if (action === 'Clear History and Cache') {
            browserData = {'Browser Name': browserData['Browser Name'], 'Open Tabs': [], 'Recently Closed': [], 'Browser Logs': [] };
            continue;
        }

        let [actionType, actionTarget] = action.split(' ');
        if (actionType === 'Open') {
            if (!browserData['Open Tabs'].find((tab) => tab === actionTarget)) {
                browserData['Open Tabs'].push(actionTarget);
                browserData['Browser Logs'].push(action);
            }
        } else if (actionType === 'Close') {
            if (browserData['Open Tabs'].find((tab) => tab === actionTarget)) {
                browserData['Open Tabs'] = browserData['Open Tabs'].filter(element => element !== actionTarget);
                browserData['Recently Closed'].push(actionTarget);
                browserData['Browser Logs'].push(action);
            }
        } 
    }
    console.log(browserData['Browser Name']);
    for ([log, items] of Object.entries(browserData).slice(1)) {
        console.log(`${log}: ${items.join(', ')}`);
    }
    
}
