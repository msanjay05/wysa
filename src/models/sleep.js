const mongoose = require("mongoose");

const sleepSchema = mongoose.Schema({
  sleepStruggle: {
    type: String,
    required: true,
    unique: true,
  },
  wakeupTime: {
    type: String,
    required: true,
  },
  sleepTime:{
    type:String,
    required:true
  },
  sleepingHours:{
    type:Number,
    required:true
  }
});

const Sleep = mongoose.model("Sleep", sleepSchema);
module.exports = Sleep;
