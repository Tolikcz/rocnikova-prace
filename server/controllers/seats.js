const Seat = require("../models/seats");

exports.getAllSeats = async (req, res, next)=> {
    try {
        const data = await Seat.find();
        if (data && data.length !== 0) {
            return res.status(200).send({
                message: "Seats found!",
                payload: data
            });
        }
        res.status(404).send({ message: "Seats not found!" });
    } catch (err){
        res.status(500).send(err);
    }
};
exports.getSeatById = async (req, res, next)=> {
    try {
        const data = await Seat.findById(req.params.id);
        if (data) {
            return res.status(200).send({
                message: "Seat found!",
                payload: data
            });
        }
        res.status(404).send({ message: "Seat not found!" });
    } catch (err){
        res.status(500).send(err);
    }
};
exports.createSeat = async (req, res, next)=> {
    try {
       const data = new Seat({
        name: req.body.name,
        material: req.body.material,
        price: req.body.price
       });
       const result = await data.save();
       if(result){
        return res.status(201).send({
            message: "Seat created!",
            payload: result,
        });
       }
       res.status(500).send({
        message: "Seat not created!",
       })
    } catch (err){
        res.status(500).send(err);
    }
};
exports.updateSeat = async (req, res, next)=> {
    try {
        const data ={
            name: req.body.name,
            material: req.body.material,
            price: req.body.price
        };
        const result = await Seat.findByIdAndUpdate(req.params.id, data);
        if(result){
         return res.status(200).send({
             message: "Seat updated!",
             payload: result,
         });
        }
        res.status(500).send({
         message: "Seat not updated!",
        })
     } catch (err){
         res.status(500).send(err);
     }
};
exports.deleteSeat = async (req, res, next)=> {
    try {
        
        const result = await Seat.findByIdAndDelete(req.params.id);
        if(result){
         return res.status(200).send({
             message: "Seat deleted!",
             payload: result,
         });
        }
        res.status(500).send({
         message: "Seat not deleted!",
        })
     } catch (err){
         res.status(500).send(err);
     }
};