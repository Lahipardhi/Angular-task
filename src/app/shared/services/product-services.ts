import { BehaviorSubject, Observable, Subject, map } from "rxjs";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class ProductDataServices{
    items:any[]=[]
  quantity: any;
  
       constructor(private http:HttpClient){}
       private apiUrl='https://task-1-c4efa-default-rtdb.firebaseio.com/recipe.json';

    
      //private apiKey='AIzaSyDgs7r22aAQov6f1MJye-BSVPbLQBW4uNY'
      authentication=new BehaviorSubject(null);
     postproduct(product:any){
        this.http.post(this.apiUrl,product).subscribe({
           next:(param:any)=>{
             console.log(param);
             
            
           },
      
       })
      
      }
      getproduct(){
      return this.http.get<any[]>(this.apiUrl).pipe(
          map((res:any)=>{
            const productArr=[];
            for(let productId in res){
              productArr.push({...res[productId],id:productId});
            }
            console.log(productArr);
            return productArr
          })
        )
      }
    //     authenticationData= new BehaviorSubject(null)
  
}