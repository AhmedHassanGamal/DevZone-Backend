// Fetch user data using callbacks
function getUserData(callback) {
    setTimeout(() => {
        const user = { id: 1, name: "Ahmed 7assan" };
        const error = null;
        callback(error, user);
    }, 1000);
}

// Fetch tasks data associated with a user using callbacks
function getUserTasks(userId, callback) {
    setTimeout(() => {
        const tasks = [
            { userId: 1, task: "Write code" },
            { userId: 1, task: "Test application" },
        ];
        const error = null;
        callback(error, tasks.filter(task => task.userId === userId));
    }, 1000);
}

// Fetch user data and tasks using callbacks
getUserData((userError, user) => {
    if (userError) {
        console.error(userError);
        return;
    }
    console.log("User data:", user);
    getUserTasks(user.id, (taskError, tasks) => {
        if (taskError) {
            console.error(taskError);
            return;
        }
        console.log("User tasks:", tasks);
    });
});