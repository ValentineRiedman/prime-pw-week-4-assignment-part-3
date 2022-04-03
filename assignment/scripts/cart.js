console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket =[];
const maxItems=5;
console.log('Basket is ', basket);
function  addItem( item ){
    basket.push( item )
       return true;  
       
    
}//end of addItem 
        
console.log('Adding apple (expect true)', addItem('apple'));
console.log('Adding lime (expect true)', addItem('lime'));
console.log('Adding mango (expect true)', addItem('mango'));
console.log('Adding orange (expect true)',addItem('orange'));
console.log('Adding lemon (expect true)',addItem('lemon'));
console.log('Adding banana (expect true)',addItem('banana'));
console.log('Items in the basket are', basket);


function  listItems( item ){
    for( let i = 0; i < basket.length; i++){
        console.log(basket[i],'in the basket');
    } 
          
}//end of listItems
listItems();

function empty(){
    while (basket.length > 0){
        basket.pop();
    }
}//end of empty    
//empty()    

console.log('Empty the basket',basket);



function isFull(){
        if(basket.length < maxItems){
            return false;
        }
        if(basket.length >= maxItems){
           return true;
        }
    }//end of isFull
console.log('The basket is full?', isFull());

