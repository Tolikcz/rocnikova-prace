const Light = require("../models/lights");

exports.getAllLights = async (req, res, next)=> {
    try {
        const data = await Light.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Lights found!",
                payload: data
            });
        }
        res.status(404).send({ message: "Lights not found!" });
    } catch (err){
        res.status(500).send(err);
    }
};
exports.getLightById = async (req, res, next)=> {
    try {
        const data = await Light.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Light found!",
                payload: data
            });
        }
        res.status(404).send({ message: "Light not found!" });
    } catch (err){
        res.status(500).send(err);
    }
};
exports.createLight = async (req, res, next)=> {
    try {
       const data = new Light({
        name: req.body.name,
        temperature: req.body.temperature,
        type: req.body.type
       });
       const result = await data.save();
       if(result){
        return res.status(201).send({
            message: "Light created!",
            payload: result,
        });
       }
       res.status(500).send({
        message: "Light not created!",
       })
    } catch (err){
        res.status(500).send(err);
    }
};
exports.updateLight = async (req, res, next)=> {
    try {
        const data ={
         name: req.body.name,
         temperature: req.body.temperature,
         type: req.body.type
        };
        const result = await Light.findByIdAndUpdate(req.params.id, data);
        if(result){
         return res.status(200).send({
             message: "Light updated!",
             payload: result,
         });
        }
        res.status(500).send({
         message: "Light not updated!",
        })
     } catch (err){
         res.status(500).send(err);
     }
};
exports.deleteLight = async (req, res, next)=> {
    try {
        
        const result = await Light.findByIdAndDelete(req.params.id);
        if(result){
         return res.status(200).send({
             message: "Light deleted!",
             payload: result,
         });
        }
        res.status(500).send({
         message: "Light not deleted!",
        })
     } catch (err){
         res.status(500).send(err);
     }
};