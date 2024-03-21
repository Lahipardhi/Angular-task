import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDataServices } from '../shared/services/product-services';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',

})
export class ProductComponent implements OnInit {

  myRecipeForm : FormGroup | any;
  isNewRecipe:any;
  editRecipeId:any;
 
  authoriasedUser:any;
  isNewIngredient: any;
  editIngredient: number | undefined;
productIntegredientArray: any;
  constructor(private fb : FormBuilder, private  productDataservice:ProductDataServices,private activeRoute:ActivatedRoute,private router:Router){}
 

   ngOnInit() {
 
     this.myRecipeForm=this.fb.group({
       
      ingImg : [null,[Validators.required,this.validateImageSize(100)]],
      ingName: this.fb.control(null,Validators.required),
     
      ingPrice: this.fb.control('',[Validators.required]),
       
      })
      
        
    }
  validateImageSize(maxSize:number){
    return(control:FormControl)=>{
      const file=control.value;
      if(file){
        const fileSize=file.size/1024;
        return fileSize > maxSize?{imageSize:true}:null
      }
      return null;
    }
  }

  Dialog(){
   //this.isNewRecipe=true;
    console.log(this.myRecipeForm.value)
    console.log(this.myRecipeForm)
    this.productDataservice.postproduct(this.myRecipeForm.value)
  
    this.myRecipeForm.reset();
    
  }



  }
