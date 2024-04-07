const Desk = require('../models/deskIt');

exports.newRequest = (req, res, next) => {
    const requestData = req.body.request;
    delete requestData._id;
    const request = new Desk({
        ...requestData,
    });
    request.save()
        .then(() => res.status(201).json({ message: 'Request send',}))
        .catch((error) => res.status(403).json({error: error, message: "Oops, somenthing went wrong"}));
};

exports.editRequest = (req, res, next) => {
    Desk.findOne({_id: req.params.id})
        .then(request=>{
            if(request.userId = req.token.userId || req.token.isAdmin){
                const requestData = req.body.request;
                Desk.updateOne({
                    ...requestData, _id: req.params.id
                })
                .then(() => res.status(201).json({ message: 'Request updated' }))
                .catch((error) => res.status(400).json({ error: error }));
            }else{
                return res.status(403).json({message : "Unallowed action"})
            }
        })
    .catch((error) => res.status(500).json({ error: error }));
};

exports.getAllRequests = (req, res, next) => {
    Desk.find()
        .then((requests) => res.status(200).json(requests))
        .catch((error) => res.status(403).json({error: error, message: "Oops, somenthing went wrong"}));
};

exports.getOnerequest = (req, res, next) =>{
    Desk.findOne({_id: req.params.id})
        .then((request) => res.status(200).json(request))
        .catch((error) => res.status(403).json({error: error, message: "Oops, somenthing went wrong"}));
};