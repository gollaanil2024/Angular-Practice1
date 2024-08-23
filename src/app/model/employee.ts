import { stringify } from "querystring"

export class employee{
    constructor(  
      public  id : number,
      public  name: String,
      public  email:String,
      public  address:String,
      public  phone:String,
      public  website:String,
      public  street :String
     ) {}
    getfullname(){
        return this.name +" "+ this.website
    }
}
