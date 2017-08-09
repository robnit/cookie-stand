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

//Method to make new table element with optional id
CookieStore.prototype.makeTableElement = function (elementName, elementType, newElementId) {
    var container = document.getElementById(elementName);
    var createNewElement = document.createElement(elementType);
    createNewElement.id = newElementId;
    container.appendChild( createNewElement );
};

//Method to make new TD element with inner HTML content **DOESNT WORK YET**
CookieStore.prototype.makeHTMLelement = function (container,elementType, innerHTML, tosser) {
    if (tosser) {
        var createTosserElement = document.createElement( elementType );
        createTosserElement.innerHTML = innerHTML;
        container.appendChild( createTosserElement );
    }
    else {
        var createNewElement = document.createElement(elementType);
        createNewElement.innerHTML = innerHTML;
        container.appendChild( createNewElement );
    }
};

CookieStore.prototype.addToDom = function () {
    this.cookieDataArray();
    //Create TR element with id as this.elementId
    this.makeTableElement('masterTable','tr',this.elementId);
    //cookietosser code - create same code as above in cookieTosser table
    this.makeTableElement('cookieTossers','tr',this.elementId + 'tosser','');

    //Create row of TD elements containing location name, cookie data, and total
    var container = document.getElementById(this.elementId);
    this.makeHTMLelement(container, 'td','<b>' + this.name + '</b>');

    //cookietosser code - apply the same code to the "elementID+tosser" element
    var tosserContainer = document.getElementById(this.elementId + 'tosser');
    this.makeHTMLelement(tosserContainer,'td','<b>' + this.name + '</b>', true);

    for (var i = 0; i < this.staticCookies.length; i++) { //populate table row with td elements containing each element from staticCookies array
        this.makeHTMLelement(container,'td',this.staticCookies[i]);
        //cookietosser code- does the same as above, but numbers are run through the cookieTossers method
        this.makeHTMLelement(tosserContainer,'td',this.staticCookies[i],true);
    }
    var cookieSum = 0; //calculate total
    for (var i = 0; i < this.staticCookies.length; i++){
        cookieSum = cookieSum + this.staticCookies[i];
    }
    this.makeHTMLelement(container,'td','<b>' + cookieSum + '</b>');
};

//create table headers populated with openHours elements
var openHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm', 'Total'];
var tableHeader = document.getElementById('masterTable');
var createTableHead = document.createElement( 'th' ); //create empty TH element
tableHeader.appendChild( createTableHead );

// makeTableElement('masterTable','th');
// (elementName, elementType, newElementId) 
// var container = document.getElementById(elementName);
// var createNewElement = document.createElement(elementType);
// createNewElement.id = newElementId;
// container.appendChild( createNewElement );

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