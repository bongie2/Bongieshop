import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bongieshop';
newPic:string="";
price:number;
quantity:number;
newquantity:number;
empty=true;
totalAmount: any =0;
totalQ:any=0
description:string="";
  products = [{productPicture:"beanClothing.jpg",productPrice:150,productDescription:"Bean Clothing for woman",ProductQuantity:1},
{productPicture:"Checkshirt.jpg",productPrice:270,productDescription:"Check shirt for man & woman",ProductQuantity:1},
{productPicture:"Denimjacket.jpg" ,productPrice:450,productDescription:"Denim jacket for man & woman",ProductQuantity:1},
{productPicture:"floralDress.jpg" ,productPrice:499,productDescription:"Floral Dress for woman",ProductQuantity:1},
{productPicture:"winterCycle.jpg" ,productPrice:489,productDescription:"Winter Cycle for woman & man",ProductQuantity:1},
{productPicture:"yellowPaperbagSkirt.jpg" ,productPrice:399,productDescription:"Yellow Skirt for Woman",ProductQuantity:1}];
NewProd = []

New(product){
  this.NewProd.push(product);
  this.totalAmounts(product.productPrice);
  this.addquantity(product.ProductQuantity)
}
Delete(new_items){
  let index=this.NewProd.indexOf(new_items)
  this.NewProd.splice(index,1)
this.AmountSub(new_items.productPrice)
this.minusQuantity(new_items.ProductQuantity)
}
totalAmounts(price){
  this.totalAmount+= price
}
AmountSub(price){
  this.totalAmount-= price
}
addquantity(quantity){
this.totalQ +=quantity
}
minusQuantity(quantity){
  this.totalQ -=quantity
}  
}