
const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { Employee } = require("../models/employee");

router.get("/", (req, res) => {
  Employee.find((err, docs) => {
    if (!err) {
      res.send(docs);
    } else {
      console.log(
        "Error in Retriving Employees :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.get("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Employee.findById(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Retriving Employee :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.post("/", (req, res) => {
    console.log(req.body);
  var emp = new Employee({
    firstName: req.body.firstName,
    lastname: req.body.lastname,
    address1: req.body.address1,
    address2: req.body.address2,
    address3: req.body.address3,
    city: req.body.city,
    state: req.body.state,
    pin: req.body.pin,
    phone: req.body.phone,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  });
  emp.save((err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Employee Save :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  var emp = {
    firstName: req.body.firstName,
    lastname: req.body.lastname,
    address1: req.body.address1,
    address2: req.body.address2,
    address3: req.body.address3,
    city: req.body.city,
    state: req.body.state,
    pin: req.body.pin,
    phone: req.body.phone,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword
  };
  Employee.findByIdAndUpdate(
    req.params.id,
    { $set: emp },
    { new: true },
    (err, doc) => {
      if (!err) {
        res.send(doc);
      } else {
        console.log(
          "Error in Employee Update :" + JSON.stringify(err, undefined, 2)
        );
      }
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id : ${req.params.id}`);

  Employee.findByIdAndRemove(req.params.id, (err, doc) => {
    if (!err) {
      res.send(doc);
    } else {
      console.log(
        "Error in Employee Delete :" + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

module.exports = router;
