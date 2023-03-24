const express = require("express");
const userSchema = require("../Model/Schema");
const router = express.Router();
// router.get("GET/v1/events",async(req,res)=>{
//     res.status(400).json({

//     })
// })
//post event
router.use(express.json())
router.post("/POST/v1/events",(req,res)=>{
    const user = userSchema.create(req.body)
    .then((data) => {
        res.status(201).send({ data });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
   });
//Get Events
router.get("/GET/v1/events", (req, res) => {
    userSchema.find()
      .then((data) => {
        res.status(201).send({ data });
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });
  //Get Particulal Event
  router.get("/GET/v1/events/:id",(req, res) => {
    userSchema.find({_id:req.params.id})
      .then((data) => {
        res.status(201).send({ data });
      })
      .catch((err) => {
        res.status(400).send("There Is No Event That Id");
      });
  });

  // Delete Event
  router.delete("/DELETE/v1/events/:id", async (req, res) => {
    try {
      const data = await userSchema.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      res.status(204).send(err);
    }
  });

  //update Event
  router.put("/UPDATE/v1/events/:id", async (req, res) => {
    try {
      const data = await userSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  

module.exports = router;