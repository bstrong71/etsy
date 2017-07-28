// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
    let totalOfPrices = 0;
    for (var i = 0; i < data.length; i++) {
        totalOfPrices += data[i].price;
    }
    let avgPrice = (totalOfPrices / data.length).toFixed(2);
    console.log("The average price is $" + avgPrice);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
    let array1418 = [];
    for (var i = 0; i < data.length; i++) {
      if((data[i].price >= 14) && (data[i].price <= 18)){
        array1418.push(data[i].title);
      }
    }

    for (var i = 0; i < array1418.length; i++) {
      console.log(array1418[i]);
    }
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
    let britishItem = "";
    let britishPrice;
    for (var i = 0; i < data.length; i++) {
      if(data[i].currency_code === "GBP"){
        britishItem = data[i].title;
        britishPrice = data[i].price;
      }
    }

    console.log(britishItem + " costs " + britishPrice + " pounds.");
}


// 4: Display a list of all items who are made of wood.
function question4 () {
    let woodItems = [];
    for (var i = 0; i < data.length; i++) {
      for (var m = 0; m < data[i].materials.length; m++) {
        if(data[i].materials[m] === "wood"){
          woodItems.push(data[i].title);
        }
      }
    }


    // to print out answer without brackets
    for (var i = 0; i < woodItems.length; i++) {
    console.log(woodItems[i] + " is made of wood.");
    }
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
    let multiMatList = [];

    for (var i = 0; i < data.length; i++) {
        if(data[i].materials.length >= 8) {
            multiMatList.push(data[i]);
        }
    }
    for (var t = 0; t < multiMatList.length; t++) {
        console.log(multiMatList[t].title + " has " + multiMatList[t].materials.length + " materials:");
        for (var n = 0; n < multiMatList[t].materials.length; n++) {
            console.log("- " + multiMatList[t].materials[n]);
        }
    }

}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
    let madeBySeller = 0;
    for (var i = 0; i < data.length; i++) {
        if(data[i].who_made === "i_did") {
            madeBySeller += 1;
        }
    }

    console.log(madeBySeller + " items were made by their sellers.");
}
