let dataStorage = { isAuth : false, error: ''}

export default class AuthService{
   constructor(router) {
       this.router = router;     
   }
   
   login(name, email, path){
       var self = this;
       return $.post('/login', { username : name, password: email }); 
   }

   static isAuth(){
       return dataStorage.isAuth;
   }

   static setIsAuth(data){
        dataStorage.isAuth = data;     
   }


   errors(){
       return dataStorage.error;
   }

}