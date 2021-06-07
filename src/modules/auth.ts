import User from "./user";



export default class Auth {


    users: Array<User> = []

    constructor() {

        this.users = []
    }


    login(email:string,pwd:string) {

        const user = this.users.find((e)=>{
            const isMatch = e.email === email && e.pwd ===pwd;
            return isMatch
        });

        if(!user) throw new Error("invalid email or password")

        user.lastLogin = new Date().toDateString();

        return user.name + " welcome back !";
    }


    register(name: string, email: string, pwd: string) {

        const user = new User(name, email, pwd);

        this.users.push(user);

        return user.toJson
    }

    listOfUser() {

        // const listOfUser = [];

        // for (let user of this.users){
        //     listOfUser.push(user.toJson)
        // }

        // return listOfUsers

        return this.users.map((user) => user.toJson);
    }

    getUserByEmail(email: string) {

        const user = this.users.find((user) => user.email.toLowerCase() === email.toLowerCase());

        if (!user) throw "No matching user found";

        return user.toJson;
    }

    setisverified(email: string , isverified:any) {

        const user = this.users.find((user) => user.email.toLowerCase() === email.toLowerCase());

        if (!user) throw "No matching user found";

        if(isverified !== "true" && isverified !== "false") throw "isverified is neither true nor false"
       
        user.isVerified = Boolean(isverified)

        //console.log(user.toJson2 , typeof user.isVerified , typeof Boolean(isverified))

        return user.toJson2;
    }

}





