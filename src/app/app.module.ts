
import{NgModule} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { ActivatedRoute } from "@angular/router";
import { AppRoutingModule } from "./recipe-routing.module";
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductItemComponent } from './product/product-list/product-item/product-item.component'

import {MatCardModule} from '@angular/material/card';
import { ProductDataServices } from "./shared/services/product-services";
import { HttpClientModule } from "@angular/common/http";
import { ProductTableComponent } from './product/product-table/product-table.component';






@NgModule({
    declarations :[
        AppComponent,
        HeaderComponent,
        ProductComponent,
        ProductListComponent,
        ProductItemComponent,
        ProductTableComponent,
      
     
      

    ],

    imports :[
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule,
     HttpClientModule   
      


        
    ],
    providers:[
 ProductDataServices,

    
  ],
    bootstrap :[AppComponent],
})
export class AppModule{}
