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

    loadUsers(){
       this.getData();
    }
}

// Зарегистрировать обработчик в Диспетчере
AppDispatcher.register(function(payload) {
  var action = payload.action;
  var text;
  // Обработать Действие в зависимости от его типа
  switch(action.actionType) {
    case constants.GET_USERS:
      // Вызвать внутренний метод на основании полученного Действия
      //loadUsers(action.data); // for now we get data cinstantly we have to use this one when start get data from server
      break;

    default:
      return true;
  }
  
  // Если Действие было обработано, создать событие "change"
  UsersStore.emitChange();

  return true;

});


export default UsersStore;