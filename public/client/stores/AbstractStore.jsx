import React, {Component} from 'react';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;

// Внутренний объект для хранения shoes
let _data = [];
class AbstractStore extends EventEmitter{
   constructor() {
        super();
    }

  getData(storeName) {
    return _data[storeName];
  }

  setData(storeName, data){
    if(!_data[storeName])
      _data[storeName] = [];

    data.forEach( (item) => _data[storeName].push(item));
  }


  getDataByID(){

  }

  deleteDataByID(){
    
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