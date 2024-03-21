import { Route, RouterModule } from "@angular/router";

import { NgModule } from "@angular/core";
import { ProductComponent } from "./product/product.component";



export const routes: Route[] =[
    
    {path: 'dialog', component: ProductComponent},
   
  
                    ]
    
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}