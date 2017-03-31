import AppDispatcher from "..\\dispatcher\\AppDispatcher"
import { ACTION_NAMES } from ".\\const_names"

let UserActions = {
    loadUsers : function(text) {
        fetch('http://localhost:3000/users') // todo add variable from server or in config file
            .then(function(response) {
                 AppDispatcher.dispatch({
                    type: ACTION_NAMES.LOAD_ALL_USERS,
                    data : response
                })
            })
       
    }
}


export default UserActions 