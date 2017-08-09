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

    //Create TR element with id as this.elementId
    var container = document.getElementById('masterTable');
    var createTableRow = document.createElement('tr');
    createTableRow.id = this.elementId;
    container.appendChild( createTableRow );
    var tosserContainer = document.getElementById('cookieTossers'); //cookietosser
    var createTosserRow = document.createElement('tr'); //cookietosser
    createTosserRow.id = this.elementId + 'tosser'; //cookietosser
    tosserContainer.appendChild( createTosserRow ); //cookietosser

    //Create row of TD elements containing location name, cookie data, and total
    var container = document.getElementById(this.elementId);
    var tosserContainer = document.getElementById(this.elementId + 'tosser'); //cookietosser
    var createTableElement = document.createElement( 'td' );
    var createTosserElement = document.createElement( 'td' ); //cookietosser
    createTableElement.innerHTML = '<b>' + this.name + '</b>';
    createTosserElement.innerHTML = '<b>' + this.name + '</b>'; //cookietosser
    container.appendChild( createTableElement );
    tosserContainer.appendChild( createTosserElement ); //cookietosser
    for (var i = 0; i < this.staticCookies.length; i++) {
        var createTableElement = document.createElement( 'td' );
        var createTosserElement = document.createElement( 'td' ); //cookietosser
        createTableElement.innerHTML = this.staticCookies[i];
        createTosserElement.innerHTML = this.cookieTossers(this.staticCookies[i]); //cookietosser
        container.appendChild( createTableElement );
        tosserContainer.appendChild( createTosserElement ); //cookietosser
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
var tosserHeader = document.getElementById('cookieTossers'); //cookietosser
var createTableHead = document.createElement( 'th' ); //create empty TH element
var createTosserHead = document.createElement( 'th' ); //cookietosser
tableHeader.appendChild( createTableHead );
tosserHeader.appendChild( createTosserHead ); //cookietosser
for (var i = 0; i < openHours.length; i++) {
    var createTableHead = document.createElement( 'th' );
    createTableHead.innerHTML = openHours[i];
    tableHeader.appendChild( createTableHead );
    if ( i < openHours.length - 1 ){
        var createTosserHead = document.createElement( 'th' ); //cookietosser
        createTosserHead.innerHTML = openHours[i]; //cookietosser
        tosserHeader.appendChild( createTosserHead ); //cookietosser
    }
}

var pdxAirport = new CookieStore('PDX Airport', 23, 65, 6.3, 'pdxairport');
var pioneerSquare = new CookieStore('Pioneer Square', 3, 24, 1.2, 'pioneersquare');
var powells = new CookieStore('Powells', 11, 38, 3.7, 'powells');
var stjohns = new CookieStore('St Johns', 20, 38, 2.3, 'stjohns');
var waterfront = new CookieStore('Waterfront', 2, 16, 4.6, 'waterfront');