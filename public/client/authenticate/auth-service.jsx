var dataStorage = JSON.parse(localStorage.getItem('storage')) || { isAuth : false, error: '', authUser: {}};

export default class AuthService{
   constructor(router) {
       this.router = router;
       localStorage.setItem('storage', JSON.stringify(dataStorage)); 
   }
   
   login(name, password, path){
       var self = this;
       return $.post('/login', { username : name, password: password }); 
   }

   static isAuth(){
       dataStorage =  JSON.parse(localStorage.getItem('storage'));
       if(!dataStorage) return null;
       return dataStorage.isAuth;
   }

   static setIsAuth(data){
        dataStorage =  JSON.parse(localStorage.getItem('storage'));
        dataStorage.isAuth = data;
        localStorage.setItem('storage', JSON.stringify(dataStorage));
   }

   static setCurrentUrl(url){
        localStorage.setItem('url', url);
   }

    static geCurrentUrl(url){
        return localStorage.getItem('url');
   }


   errors(){
       return dataStorage.error;
   }

   static setDetails(name, password){
       dataStorage.authUser.name = name;
       dataStorage.authUser.password = password;
       localStorage.setItem('storage', JSON.stringify(dataStorage));
   }

   static getAuthUser(){
       let sr = localStorage.getItem('storage');
       dataStorage = JSON.parse(sr);
       if(!dataStorage)
        return null;
       return dataStorage.authUser;
   }
}