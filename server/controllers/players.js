const Player = require("../models/players");

exports.getAllPlayers = async (req, res, next)=> {
    try {
        const data = await Player.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Players found!",
                payload: data
            });
        }
        res.status(404).send({ message: "Players not found!" });
    } catch (err){
        res.status(500).send(err);
    }
};
exports.getPlayerById = async (req, res, next)=> {
    try {
        const data = await Player.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Player found!",
                payload: data
            });
        }
        res.status(404).send({ message: "Player not found!" });
    } catch (err){
        res.status(500).send(err);
    }
};
exports.createPlayer = async (req, res, next)=> {
    try {
       const data = new Player({
        name: req.body.name,
        game: req.body.game,
        hour: req.body.hour
       });
       const result = await data.save();
       if(result){
        return res.status(201).send({
            message: "Player created!",
            payload: result,
        });
       }
       res.status(500).send({
        message: "Player not created!",
       })
    } catch (err){
        res.status(500).send(err);
    }
};
exports.updatePlayer = async (req, res, next)=> {
    try {
        const data ={
            name: req.body.name,
            game: req.body.game,
            hour: req.body.hour
        };
        const result = await Player.findByIdAndUpdate(req.params.id, data);
        if(result){
         return res.status(200).send({
             message: "Player updated!",
             payload: result,
         });
        }
        res.status(500).send({
         message: "Player not updated!",
        })
     } catch (err){
         res.status(500).send(err);
     }
};
exports.deletePlayer = async (req, res, next)=> {
    try {
        
        const result = await Player.findByIdAndDelete(req.params.id);
        if(result){
         return res.status(200).send({
             message: "Player deleted!",
             payload: result,
         });
        }
        res.status(500).send({
         message: "Player not deleted!",
        })
     } catch (err){
         res.status(500).send(err);
     }
};