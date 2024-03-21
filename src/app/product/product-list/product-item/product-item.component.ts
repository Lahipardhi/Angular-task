import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
;
import { ProductDataServices } from '../../../shared/services/product-services';
;

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  constructor(private productDataserv:ProductDataServices){}
  
  
  authorisedUser: any;
  item:any={}
  user:any[]=[]
  data:any[]=[]
  product:any[]=[]
  showTable:boolean=false;
  
  
  



  ngOnInit():void{
    this.getAllproductData();
  }
  getAllproductData(){
this.productDataserv.getproduct().subscribe({
  next:(param:any)=>{
    console.log(param)
    this.data=param
  }
})
  }
  

  delete(element: any){
   this.product.forEach((value,index)=>{
    if(value == element)
    this.product.splice(index,1)
   })
  }


 quantity:number=1;
 increaseQuantity(item:{quantity:any;}){
  if(item.quantity != 6){
  item.quantity++;
  } 
 }
 decreaseQuantity(item:{quantity:any;}){
  if(item.quantity = 1){
    item.quantity=1;
  }
 }
 AddtoBag(data:any){
  //this.productDataServ.addNewIngredient(this.ingredient)
   this.product.push(data)
   console.log(data)
   //this.showTable=!this.showTable;
 //this.productDataserv.postproduct(this.data)

}
// calculateTotal():number{
// return this.data.reduce((total,user)=> total +user.ingPrice+user.quantity, 0)
// }


}
