let dataStorage = { isAuth : false, error: ''}

export default class AuthService{
   constructor(router) {
       this.router = router;     
   }
   
   login(name, email, path){
       var self = this;
       $.post('/login', { username : name, password: email }).then( (data) => {
           if(data.detail){
                dataStorage.isAuth = true;
                debugger;
                this.router.push({
                    pathname:path
                });
           }else if(data.error){
               dataStorage.error = data.message;
           }
               
       })       
   }

   static isAuth(){
       return dataStorage.isAuth;
   }

   errors(){
       return dataStorage.error;
   }

}