import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productId:any
  product:any

  constructor(private activatedRoute:ActivatedRoute, private service:ProductServiceService){

    this.productId = this.activatedRoute.snapshot.params[('id')];
    
  this.product = this.service.products.find(x=>x.id ==this.productId)
    

  }

  data(event:Event)
  {
    console.log(event);
    
  }


}
