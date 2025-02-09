const Vacuumcleaner = require("../models/vacuumcleaner");

exports.getAllVacuumcleaners = async (req, res, next)=> {
    try {
        const data = await Vacuumcleaner.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Vacuumcleaners found!",
                payload: data
            });
        }
        res.status(404).send({ message: "Vacuumcleaners not found!" });
    } catch (err){
        res.status(500).send(err);
    }
};
exports.getVacuumcleanerById = async (req, res, next)=> {
    try {
        const data = await Vacuumcleaner.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Vacuumcleaner found!",
                payload: data
            });
        }
        res.status(404).send({ message: "Vacuumcleaner not found!" });
    } catch (err){
        res.status(500).send(err);
    }
};
exports.createVacuumcleaner = async (req, res, next)=> {
    try {
       const data = new Vacuumcleaner({
        name: req.body.name,
        brand: req.body.brand,
        price: req.body.price
       });
       const result = await data.save();
       if(result){
        return res.status(201).send({
            message: "Vacuumcleaner created!",
            payload: result,
        });
       }
       res.status(500).send({
        message: "Vacuumcleaner not created!",
       })
    } catch (err){
        res.status(500).send(err);
    }
};
exports.updateVacuumcleaner = async (req, res, next)=> {
    try {
        const data ={
         name: req.body.name,
         brand: req.body.brand,
         price: req.body.price
        };
        const result = await Vacuumcleaner.findByIdAndUpdate(req.params.id, data);
        if(result){
         return res.status(200).send({
             message: "Vacuumcleaner updated!",
             payload: result,
         });
        }
        res.status(500).send({
         message: "Vacuumcleaner not updated!",
        })
     } catch (err){
         res.status(500).send(err);
     }
};
exports.deleteVacuumcleaner = async (req, res, next)=> {
    try {
        
        const result = await Vacuumcleaner.findByIdAndDelete(req.params.id);
        if(result){
         return res.status(200).send({
             message: "Vacuumcleaner deleted!",
             payload: result,
         });
        }
        res.status(500).send({
         message: "Vacuumcleaner not deleted!",
        })
     } catch (err){
         res.status(500).send(err);
     }
};