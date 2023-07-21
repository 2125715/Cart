import { product } from "../product.model";

export class cartService{

    
    cartItems: product[] = [new product("Samsung S10", "Flagship Phone" ,"imgpath", 550 )];

    getCartItems(){
        return this.cartItems;
    }

    addItemToCart(newProduct :product){
        this.cartItems.push(newProduct);
    }

    
}