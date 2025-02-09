const Platform = require("../models/gamesplatform");

exports.getAllPlatforms = async (req, res, next)=> {
    try {
        const data = await Platform.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Platforms found!",
                payload: data
            });
        }
        res.status(404).send({ message: "Platforms not found!" });
    } catch (err){
        res.status(500).send(err);
    }
};
exports.getPlatformById = async (req, res, next)=> {
    try {
        const data = await Platform.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Platform found!",
                payload: data
            });
        }
        res.status(404).send({ message: "Platform not found!" });
    } catch (err){
        res.status(500).send(err);
    }
};
exports.createPlatform = async (req, res, next)=> {
    try {
       const data = new Platform({
        name: req.body.name,
        developer: req.body.developer,
        year: req.body.year
       });
       const result = await data.save();
       if(result){
        return res.status(201).send({
            message: "Platform created!",
            payload: result,
        });
       }
       res.status(500).send({
        message: "Platform not created!",
       })
    } catch (err){
        res.status(500).send(err);
    }
};
exports.updatePlatform = async (req, res, next)=> {
    try {
        const data ={
            name: req.body.name,
            developer: req.body.developer,
            year: req.body.year
        };
        const result = await Platform.findByIdAndUpdate(req.params.id, data);
        if(result){
         return res.status(200).send({
             message: "Platform updated!",
             payload: result,
         });
        }
        res.status(500).send({
         message: "Platform not updated!",
        })
     } catch (err){
         res.status(500).send(err);
     }
};
exports.deletePlatform = async (req, res, next)=> {
    try {
        
        const result = await Platform.findByIdAndDelete(req.params.id);
        if(result){
         return res.status(200).send({
             message: "Platform deleted!",
             payload: result,
         });
        }
        res.status(500).send({
         message: "Platform not deleted!",
        })
     } catch (err){
         res.status(500).send(err);
     }
};