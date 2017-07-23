var db = require("../db/database");
var path = require("path");

module.exports = function(app){
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../client/index.html"));
    });

    app.get("/api/data", function(req, res){
        db.find({}, function(err, data){
            res.send(data);
        });
        //I just need to send(nice) all the data to the angular app so i can show all my users. Help me?!
    });

    app.post("/api/post", function(req, res){
        //I need to save my data to my database and send a response back to the front end, can you write it out? My creator started but couldn't finish. 
        new db({
            name: req.body.name,
            age: req.body.age,
            occupation: req.body.occupation,
        }).save(function(err){
            if(err){
                console.log(err);
            }else{
                res.redirect("/index");
            }
        });
    });

    app.put("/api/update/:id", function(req, res){
        //My creator was pretty lazy, he starts code but doesn't finish, can you please finish this update function and have it give a response back to the front end?
        db.findByIdAndUpdate(req.query.id, {$set: {"name": req.body.name, "age": req.body.age, "occupation": req.body.occupation}}, function(err, doc){
            console.log(doc);
            if(err){
                res.redirect("/index?update=fail");
            }else{
                res.redirect("/index?update=success");
            }
        });
    });

    app.delete("/api/delete/:id", function(req, res){
        db.remove({"_id": req.query.db}, function(err, post){
            if(err){
                console.log(err);
            }else{
                res.redirect("/index");
            }
        });
        // So my creator left me before he can finish me, can you please write out the delete function to remove data from my database?
    });
}