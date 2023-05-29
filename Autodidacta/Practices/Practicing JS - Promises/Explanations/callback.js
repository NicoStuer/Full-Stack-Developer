//request-req: informacion del usuario
//response-res: informacion que le envia el servidor a los navegadores.
function requestHandler(request, response){
    userInfo.findById(request.userId, function(err, user) {
        if(err) {
            response.send(err);
        } else {
            Tasks.findById(user.tasksI, function(err, tasks) {
                if (err) {
                    return response.send(err);
                } else {
                    tasks.completed = true;
                    tasks.save(function(err) {
                        if (err) {
                            return response.send(err);
                        } else {
                            response.send('Task Completed');
                        }
                    })
                }
            })
        }
    })
    // whatever code Node
}