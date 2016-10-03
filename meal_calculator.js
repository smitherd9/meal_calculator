'use strict'
const $ = require('jquery');
const util = require('util');

class Diner {
    constructor(name){
	this.name = name;
	this.dishes = [];
	this.total = 0;
	this.tax = 0;
	this.tip = 0;
	
    }
    
    addDish(dish) {
        this.dishes.push(dish);
        this.total += dish.price;
        this.tax += dish.price * 0.05;
        this.tip += dish.price * 0.15;
    }
    
    total() {
        var sum = 0;
        for (let i = 0; i < this.dishes.length; i++){
                
        sum += this.dishes[i].price;
            }
        // return sum;
        console.log(sum);
        this.tip(sum);
        this.tax(sum);
        
        
    }
    
    display() {
        console.log(this.name);
        for (let i = 0; i < this.dishes.length; i++) {
            console.log(this.dishes[i].dish + ' ' + this.dishes[i].price);
        }
        console.log('Total: ' + this.total + ' Tax: ' + this.tax + ' Tip: ' + this.tip);
        
    }
    

}




class Menu {
    constructor(dish, price) {
        this.dish = dish;
        this.price = price;
    }
}



class Bill {
    constructor() {
        this.totalTip = 0;
        this.totalBill = 0;
        this.tax = 0;
        this.customer = [];
        
    }
    
    addCustomer(diner){
        this.customer.push(diner);
        console.log(this.customer);
    }
    
    grandTotal(sum, tipTotal, taxTotal) {
        for (let i = 0; i < this.customer.length; i++) {
            this.totalBill += this.customer[i].total;
            this.totalTip += this.customer[i].tip;
            this.tax += this.customer[i].tax
        
        }
    }
    
    display() {
        for (let i = 0; i < this.customer.length; i++) {
            this.customer[i].display();
        }
        console.log('Party Total: ' + this.totalBill + ' Party Tip Total: ' + this.totalTip + ' Party Tax Total: ' + this.tax);
        
    }
    
}


// var customer = new Bill(diner.dishes)

// var diner = [new Diner('John'),
//             new Diner('James'),
//             new Diner('Alex'),
//             new Diner('Seymour')
// ];

var diner1 = new Diner('John');
var diner2 = new Diner('James');
var diner3 = new Diner('Alex');
var diner4 = new Diner('Seymour');

var dishes = [new Menu('Nasi Goreng', 12), 
            new Menu('Mie Goreng', 15),
            new Menu('Babi Guling', 20),
            new Menu('Cap Cay', 15),
            new Menu('Nasi Campur', 17),
            new Menu('Mie Kuah', 16),
            new Menu('Ayam Goreng Lalapan', 20)];
            
var bill = new Bill();
bill.addCustomer(diner1);
bill.addCustomer(diner2);
bill.addCustomer(diner3);
bill.addCustomer(diner4);



var customer = [new Bill('John'), 
                new Bill('James'), 
                new Bill('Alex'),
                new Bill('Seymour')];

// diner1.addDish(Math.floor(Math.random() * dishes.length));
diner1.addDish(dishes[1]);
diner1.addDish(dishes[2]);
diner2.addDish(dishes[1]);
bill.grandTotal();
bill.display();
