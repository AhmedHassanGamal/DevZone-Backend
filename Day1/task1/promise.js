// Fetch user data using promises
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: 1, name: "Ahmed 7assan" };
            const error = null;
            if (error) {
                reject(error);
            } else {
                resolve(user);
            }
        }, 1000);
    });
}

// Fetch tasks data associated with a user using promises
function getUserTasks(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const tasks = [
                { userId: 1, task: "Write code" },
                { userId: 1, task: "Test application" },
            ];
            const error = null;
            if (error) {
                reject(error);
            } else {
                resolve(tasks.filter(task => task.userId === userId));
            }
        }, 1000);
    });
}

// Fetch user data and tasks using promises
getUserData()
    .then(user => {
        console.log("User data:", user);
        return getUserTasks(user.id);
    })
    .then(tasks => {
        console.log("User tasks:", tasks);
    })
    .catch(error => {
        console.error("Error:", error);
    });