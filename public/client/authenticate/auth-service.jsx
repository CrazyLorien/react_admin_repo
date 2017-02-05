let dataStorage = { isAuth : false}

export default class AuthService{
   constructor(router) {
       this.router = router;     
   }
   
   login(name, email, path){
       $.post('/login', { username : name, password: email }).then( (data) => {
           if(data.detail){
                dataStorage.isAuth = true;
                debugger;
                this.router.push({
                    pathname:path
                });
           }
               
       })       
   }

   static isAuth(){
       return dataStorage.isAuth;
   }

}