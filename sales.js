var pdxAirport = {
  minCustomers : 23,
  maxCustomers : 65,
  avgCookiesPerCust : 6.3,
  randomCust : function() {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
  },

  avgCookiesPerHour : function() {
    return this.randomCust() * this.avgCookiesPerCust;
  },

  staticCookies : [],

  cookieDataArray : function() {
    for (i = 0;i < 15;i++){
      this.staticCookies.push(Math.floor(this.avgCookiesPerHour()));
    }
  },

  addToDom : function() {
    var openHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
    this.cookieDataArray();
    for (var i = 0; i < 15; i++) {
      var container = document.getElementById('list');
      var createList = document.createElement('li');
      createList.innerHTML = (openHours[i] + ': ' + this.staticCookies[i] + ' of cookie');
      container.appendChild( createList );
    }
    var cookieSum = 0;
    for (var i = 0; i < this.staticCookies.length; i++){
      cookieSum = cookieSum + this.staticCookies[i];
    }

    createList.innerHTML = ('Total Cookies: ' + cookieSum);
    container.appendChild( createList );

  }

//   savedCookieArray: function(){ ---This doesn't work and I don't know why. How do i use .this in an object property???
//       return this.cookieDataArray();
//   }

}; // end of object

pdxAirport.addToDom();

// var pioneerSquare = {
//   minCustomers : 3,
//   maxCustomers : 24,
//   avgCookiesPerCust : 1.2,
//   randomCust : function() {
//     return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
//   },
//   avgCookiesPerHour : function() {
//     return this.randomCust() * this.avgCookiesPerCust;
//   }
// };

// var Powells = {
//   minCustomers : 11,
//   maxCustomers : 38,
//   avgCookiesPerCust : 3.7,
//   randomCust : function() {
//     return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
//   },
//   avgCookiesPerHour : function() {
//     return this.randomCust() * this.avgCookiesPerCust;
//   }
// };

// var stJohns = {
//   minCustomers : 20,
//   maxCustomers : 38,
//   avgCookiesPerCust : 2.3,
//   randomCust : function() {
//     return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
//   },
//   avgCookiesPerHour : function() {
//     return this.randomCust() * this.avgCookiesPerCust;
//   }
// };

// var waterfront = {
//   minCustomers : 2,
//   maxCustomers : 16,
//   avgCookiesPerCust : 4.6,
//   randomCust : function() {
//     return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
//   },
//   avgCookiesPerHour : function() {
//     return this.randomCust() * this.avgCookiesPerCust;
//   }
// };

// First, create a separate JS object literal (no constructor functions... yet) for each shop location that does the following:

// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array... perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this:

// 1st and Pike

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// 8pm: 29 cookies
// Total: 657 cookies
// Display the lists on sales.html. We will be adding features to this application and working with its layout throughout the week.