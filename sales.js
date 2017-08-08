var CookieStore = function (name, minCustomers, maxCustomers, avgCookiesPerCust, elementId){
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

CookieStore.prototype.addToDom = function () {
    this.cookieDataArray();
  
    //Create TR element with id as this.elementId
    var container = document.getElementById('masterTable');
    var createTableRow = document.createElement('tr');
    createTableRow.id = this.elementId;
    container.appendChild( createTableRow );

    //Create row of TD elements containing location name, cookie data, and total
    var container = document.getElementById(this.elementId);
    var createTableElement = document.createElement( 'td' );
    createTableElement.innerHTML = '<b>' + this.name + '</b>';
    container.appendChild( createTableElement );
    for (var i = 0; i < this.staticCookies.length; i++) {
        var createTableElement = document.createElement( 'td' );
        createTableElement.innerHTML = this.staticCookies[i];
        container.appendChild( createTableElement );
    }
    var cookieSum = 0;
    for (var i = 0; i < this.staticCookies.length; i++){
        cookieSum = cookieSum + this.staticCookies[i];
    }
    var createTableElement = document.createElement( 'td' );
    createTableElement.innerHTML = ('<b>' + cookieSum + '</b>');
    container.appendChild( createTableElement );

};

//create table headers populated with openHours elements
var openHours = ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm', 'Total'];
var tableHeader = document.getElementById('masterTable');
var createTableHead = document.createElement( 'th' );
tableHeader.appendChild( createTableHead );
for (var i = 0; i < openHours.length; i++) {
    var createTableHead = document.createElement( 'th' );
    createTableHead.innerHTML = openHours[i];
    tableHeader.appendChild( createTableHead );
}

var pdxAirport = new CookieStore('PDX Airport', 23, 65, 6.3, 'pdxairport');
var pioneerSquare = new CookieStore('Pioneer Square', 3, 24, 1.2, 'pioneersquare');
var powells = new CookieStore('Powells', 11, 38, 3.7, 'powells');
var stjohns = new CookieStore('St Johns', 20, 38, 2.3, 'stjohns');
var waterfront = new CookieStore('Waterfront', 2, 16, 4.6, 'waterfront');
