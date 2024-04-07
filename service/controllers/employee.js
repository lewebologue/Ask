// FOR DEV PURPOSE ONLY

const Employee = require('../models/Employee');
const user = require('../models/User');

exports.createEmployee = (req, res, next)=>{
    if(user.isAdmin = req.token.isAdmin){
        Employee.findOne({employeeCode: req.body.code})
            .then(employee=>{
                if(employee){
                    return res.status(406).json({Message: "Code aloready used"})
                }
                const employeeData = req.body.employee;
                delete employeeData._id;
                const newEmployee = new Employee({
                    ...employeeData,
                });
                newEmployee.save()
                    .then(() => res.status(201).json({ message: 'Request send',}))
                    .catch((error) => res.status(403).json({error: error, message: "Oops, somenthing went wrong"})
                );
            })
            .catch((error) => res.status(500).json({ error: error }));
    }
};