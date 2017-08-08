var pdxAirport = {
  name : 'PDX Airport',
  minCustomers : 23,
  maxCustomers : 65,
  avgCookiesPerCust : 6.3,
  randomCust : function() {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
  },

  avgCookiesPerHour : function() {
    return this.randomCust() * this.avgCookiesPerCust;
  },

  staticCookies : [],//required empty array

  cookieDataArray : function() { //pushes a static sample of random numbers to staticCookies variable
    for (i = 0;i < 15;i++){
      this.staticCookies.push(Math.floor(this.avgCookiesPerHour()));
    }
  },

  addToDom : function() {
    var openHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
    this.cookieDataArray();
    var container = document.getElementById('list');
    var createHeader = document.createElement('lh');
    createHeader.innerHTML = ('<b>' + this.name + '</b>');
    container.appendChild( createHeader);

    for (var i = 0; i < 15; i++) {
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

var pioneerSquare = {
  name : 'Pioneer Square',
  minCustomers : 3,
  maxCustomers : 24,
  avgCookiesPerCust : 1.2,
  randomCust : function() {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
  },
  avgCookiesPerHour : function() {
    return this.randomCust() * this.avgCookiesPerCust;
  },
  staticCookies : [],//required empty array

  cookieDataArray : function() { //pushes a static sample of random numbers to staticCookies variable
    for (i = 0;i < 15;i++){
      this.staticCookies.push(Math.floor(this.avgCookiesPerHour()));
    }
  },
  addToDom : function() {
    var openHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
    this.cookieDataArray();
    var container = document.getElementById('list');
    var createHeader = document.createElement('lh');
    createHeader.innerHTML = ('<b>' + this.name + '</b>');
    container.appendChild( createHeader);

    for (var i = 0; i < 15; i++) {
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
};

pioneerSquare.addToDom();

var powells = {
  name : 'Powells',
  minCustomers : 11,
  maxCustomers : 38,
  avgCookiesPerCust : 3.7,
  randomCust : function() {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
  },
  avgCookiesPerHour : function() {
    return this.randomCust() * this.avgCookiesPerCust;
  },
  staticCookies : [],//required empty array

  cookieDataArray : function() { //pushes a static sample of random numbers to staticCookies variable
    for (i = 0;i < 15;i++){
      this.staticCookies.push(Math.floor(this.avgCookiesPerHour()));
    }
  },

  addToDom : function() {
    var openHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
    this.cookieDataArray();
    var container = document.getElementById('list');
    var createHeader = document.createElement('lh');
    createHeader.innerHTML = ('<b>' + this.name + '</b>');
    container.appendChild( createHeader);
    
    for (var i = 0; i < 15; i++) {
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
};

powells.addToDom();

var stJohns = {
  name : 'St. Johns',
  minCustomers : 20,
  maxCustomers : 38,
  avgCookiesPerCust : 2.3,
  randomCust : function() {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
  },
  avgCookiesPerHour : function() {
    return this.randomCust() * this.avgCookiesPerCust;
  },
  staticCookies : [],//required empty array

  cookieDataArray : function() { //pushes a static sample of random numbers to staticCookies variable
    for (i = 0;i < 15;i++){
      this.staticCookies.push(Math.floor(this.avgCookiesPerHour()));
    }
  },

  addToDom : function() {
    var openHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
    this.cookieDataArray();
    var container = document.getElementById('list');
    var createHeader = document.createElement('lh');
    createHeader.innerHTML = ('<b>' + this.name + '</b>');
    container.appendChild( createHeader);
    
    for (var i = 0; i < 15; i++) {
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
};

stJohns.addToDom();

var waterfront = {
  name : 'Waterfront',
  minCustomers : 2,
  maxCustomers : 16,
  avgCookiesPerCust : 4.6,
  randomCust : function() {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
  },
  avgCookiesPerHour : function() {
    return this.randomCust() * this.avgCookiesPerCust;
  },
  staticCookies : [],//required empty array

  cookieDataArray : function() { //pushes a static sample of random numbers to staticCookies variable
    for (i = 0;i < 15;i++){
      this.staticCookies.push(Math.floor(this.avgCookiesPerHour()));
    }
  },

  addToDom : function() {
    var openHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];
    this.cookieDataArray(); //invoke method to populate staticCookies array with 15 random numbers
    var container = document.getElementById('list');
    var createHeader = document.createElement('lh');
    createHeader.innerHTML = ('<b>' + this.name + '</b>'); //create list header element
    container.appendChild( createHeader);
    
    for (var i = 0; i < 15; i++) { //create li element for each array element of staticCookies
      var createList = document.createElement('li');
      createList.innerHTML = (openHours[i] + ': ' + this.staticCookies[i] + ' of cookie');
      container.appendChild( createList );
    }

    var cookieSum = 0; //simple for-loop for calculating total cookies
    for (var i = 0; i < this.staticCookies.length; i++){
      cookieSum = cookieSum + this.staticCookies[i];
    }

    createList.innerHTML = ('Total Cookies: ' + cookieSum);
    container.appendChild( createList );

  }
};

waterfront.addToDom()