function CookieStore (name, minCustomers, maxCustomers, avgCookiesPerCust, elementId) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCust = avgCookiesPerCust;
    this.elementId = elementId;
    this.staticCookies = [];
    this.addToDom();
};

CookieStore.prototype.randomCust = function () {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
};

CookieStore.prototype.avgCookiesPerHour = function () {
    return this.randomCust() * this.avgCookiesPerCust;
};

CookieStore.prototype.cookieDataArray = function () {
    for (var i = 0; i < 15; i++){
        this.staticCookies.push(Math.floor(this.avgCookiesPerHour()));
    }
};

//Stretch goal: cookie tosser prototype
CookieStore.prototype.cookieTossers = function (input) {
    if (input <= 2){
        return 2;
    }
    else if (input % 20 == 0){
        return input / 20;
    }
    else {
        return Math.floor(input / 20) + 1;
    }
};

CookieStore.prototype.addToDom = function () {
    this.cookieDataArray();

    //Functon to make new HTML element with id
    var makeElement = function (elementName, elementType, newElementId) {
        var container = document.getElementById(elementName);
        var createNewElement = document.createElement(elementType);
        createNewElement.id = newElementId;
        container.appendChild( createNewElement );
    };

    //Function to make new HTML element with inner HTML content **DOESNT WORK YET**
    var makeHTMLelement = function (elementType, innerHTML) {
        var createNewElement = document.createElement(elementType);
        createNewElement.innerHTML = innerHTML;
        container.appendChild( createNewElement );
    };

    //Create TR element with id as this.elementId
    makeElement('masterTable','tr',this.elementId,'');
    //cookietosser code - create same code as above in cookieTosser table
    makeElement('cookieTossers','tr',this.elementId + 'tosser','');

    //Create row of TD elements containing location name, cookie data, and total
    var container = document.getElementById(this.elementId);
    makeHTMLelement('td','<b>' + this.name + '</b>');
    // var createTableElement = document.createElement( 'td' );
    // createTableElement.innerHTML = '<b>' + this.name + '</b>';
    // container.appendChild( createTableElement );

    //cookietosser code - apply the same code to the "elementID+tosser" element
    var tosserContainer = document.getElementById(this.elementId + 'tosser');

    // makeHTMLelement('td','<b>' + this.name + '</b>');
    var createTosserElement = document.createElement( 'td' );
    createTosserElement.innerHTML = '<b>' + this.name + '</b>';
    tosserContainer.appendChild( createTosserElement );

    for (var i = 0; i < this.staticCookies.length; i++) { //populate table row with td elements containing each element from staticCookies array
       
        var createTableElement = document.createElement( 'td' );
        createTableElement.innerHTML = this.staticCookies[i];
        container.appendChild( createTableElement );
        //cookietosser code- does the same as above, but numbers are run through the cookieTossers method

        var createTosserElement = document.createElement( 'td' );
        createTosserElement.innerHTML = this.cookieTossers(this.staticCookies[i]);
        tosserContainer.appendChild( createTosserElement );
    }
    var cookieSum = 0; //calculate total
    for (var i = 0; i < this.staticCookies.length; i++){
        cookieSum = cookieSum + this.staticCookies[i];
    }
    var createTableElement = document.createElement( 'td' );
    createTableElement.innerHTML = ('<b>' + cookieSum + '</b>');
    container.appendChild( createTableElement );

};

//create table headers populated with openHours elements
var openHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm', 'Total'];
var tableHeader = document.getElementById('masterTable');
var createTableHead = document.createElement( 'th' ); //create empty TH element
tableHeader.appendChild( createTableHead );
//cookietosser code - create cookietosser headers
var tosserHeader = document.getElementById('cookieTossers');
var createTosserHead = document.createElement( 'th' );
tosserHeader.appendChild( createTosserHead );

for (var i = 0; i < openHours.length; i++) {
    var createTableHead = document.createElement( 'th' );
    createTableHead.innerHTML = openHours[i];
    tableHeader.appendChild( createTableHead );

    if ( i < openHours.length - 1 ){ //cookietosser code - nested if conditional to prevent cookietosser table from loading "Total" column
        var createTosserHead = document.createElement( 'th' );
        createTosserHead.innerHTML = openHours[i];
        tosserHeader.appendChild( createTosserHead );
    }
}

var pdxAirport = new CookieStore('PDX Airport', 23, 65, 6.3, 'pdxairport');
var pioneerSquare = new CookieStore('Pioneer Square', 3, 24, 1.2, 'pioneersquare');
var powells = new CookieStore('Powells', 11, 38, 3.7, 'powells');
var stjohns = new CookieStore('St Johns', 20, 38, 2.3, 'stjohns');
var waterfront = new CookieStore('Waterfront', 2, 16, 4.6, 'waterfront');