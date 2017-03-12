import React, {Component} from 'react';
import AbstractStore from ".//AbstractStore"

import AppDispatcher from '..//dispatcher//AppDispatcher';
import constants from '..//constants//constants';
import { EventEmitter } from 'events';


// Добавить возможности Event Emitter из Node
class UsersStore extends AbstractStore{
    constructor(){
        super();
    }

    loadUsersInStore(data){
       this.setData(data);
    }

    getDataFromStore(){
       return this.getData("users");
    }
}

// Зарегистрировать обработчик в Диспетчере
AppDispatcher.register(function(payload) {
  var action = payload.type;
  var users = payload.data;
  // Обработать Действие в зависимости от его типа
  switch(action) {
    case constanst.LOAD_ALL_USERS:
      this.setData(users);
      break;

    default:
     // Если Действие было обработано, создать событие "change"
    UsersStore.emitChange();

  }
   
  return true;

});


export default UsersStore;