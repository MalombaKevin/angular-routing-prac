import { Component, EventEmitter, Output } from '@angular/core';
import { Products } from '../interface/interface';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {   

  @Output() jitu:EventEmitter<string> = new EventEmitter<string>()
  

  products:Products[]=[]
  constructor(private serviceJohn:ProductServiceService){

    this.products = this.serviceJohn.products
    console.log(this.products);  

  }
  
  getData(){ 

    this.jitu
    console.log('in data clicked');
    
  }

  Data(){
    console.log('clicked');
  }

}
