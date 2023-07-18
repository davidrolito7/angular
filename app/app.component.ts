import { Component, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createInjectableType } from '@angular/compiler';
 import {Product} from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola commo estas ';
 
  changeTitle(){
    this.title= "Muy bien" 
  }

 
}

