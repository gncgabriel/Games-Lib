export class util {

    getDataLogin(){
        var data = JSON.parse(localStorage.getItem('gameLib'));
        if(data === null){
            data = {}
        }
        return data;
    }

    getUserToken(){
        var data = this.getDataLogin();
        return data.token;
    }

    getUserId(){
        var data = this.getDataLogin();
        return data.data.id;
    }

    getUsername(){
        var data = this.getDataLogin();
        return data.data.username;
    }

    getDataEmail(){
        var data =  this.getDataLogin();
        return data.data.email;
    }

    isLogged(){
        var isLoggedGameLib = localStorage.getItem("isLoggedGameLib");
        if(isLoggedGameLib === null){
            isLoggedGameLib = false;
        }
        return isLoggedGameLib === 'true' ? true : false;
    }

    isAdm(){
        var data = this.getDataLogin();
        return data.type === 'Adm' ? true : false;
    }

    logoff(){
        localStorage.setItem('isLoggedGameLib', false)
        localStorage.setItem('gameLib', false)
        window.open('/', '_self')
    }

    openHomePage(){

        if(!this.isLogged()){
            window.open('/login', '_self');
            return false;
        }

        if(this.isAdm()){
            window.open('/admin', '_self');
        }else{
            window.open('/home', '_self')
        }
    }

}