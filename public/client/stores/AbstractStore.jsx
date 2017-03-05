import React, {Component} from 'react';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;

// Внутренний объект для хранения shoes
let _data = { "users" : [{ name : "azaza", password: "aseasd123"}]}; 
class AbstractStore extends EventEmitter{
   constructor() {
        super();
    }

  // Вернуть все shoes
  getData() {
    console.log(`data --- ${_data["users"][0]}`)
    return _data["users"][0];
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }

};


export default AbstractStore;