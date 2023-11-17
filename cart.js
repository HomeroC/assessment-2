///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE


const summedPrice = cart.reduce((a, c) => a + c.price, 0)

console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = ((cartTotal, couponValue, tax) => 
    (cartTotal + (cartTotal * tax)) - couponValue
)

console.log(calcFinalPrice(200, 10, .08))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    The customer would have 3 different properites:
    
    -age (number)
        are they a child? infant? elderly? different age groups need certain amenities. Babies need high chairs. Elerly people get a discount, etc.
    
    -specialOccasion (true or false)
        is the custumer dining casually or there for a party of some sort? If so they would usually need to be seated in a speacail area for parties/celebrations.

        if its true, then seat them in a party area
        if false, seat then in a normal area

    -name (string)
        it would be wise for a resturant to know who they are serving. mostly to have a good long lasting connection with them

    -firstTime (null)
        the resturant is not sure if this is the customer's first time at their resturant until they serve them. that is why it is null



*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = [
    {
        name: "Homero",
        age: 27,
        specialOccasion: false,
        firstTime: null,
    },

    {
        name: "John",
        age: 65,
        specialOccasion: false,
        firsTime: null,
    },

    {
        name: "Kelly",
        age: 21,
        specialOccasion: true,
        firstTime: null,
    }
]

console.log(customer)