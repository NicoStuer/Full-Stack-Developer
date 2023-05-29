//by Mongodb

async function requestHandler(req, res) {
    
    try {

        const user = await userInfo.findById(req.userId);
        const tasks = await Tasks.finById(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        res.send('Task Completed');

    }catch(err) {
        res.send(err);
    }

}