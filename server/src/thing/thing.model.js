'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  description: String
});

module.exports = mongoose.model('Thing', ThingSchema);
