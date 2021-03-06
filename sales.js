function CookieStore (name, minCustomers, maxCustomers, avgCookiesPerCust) {
    this.name = name;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookiesPerCust = avgCookiesPerCust;
    this.staticCookies = [];
    this.cookieSum = 0;
    this.openHours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm', 'Total'];
    this.addToDom();

};

CookieStore.prototype.randomCust = function () {
    return (Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers);
};

CookieStore.prototype.avgCookiesPerHour = function () {
    return this.randomCust() * this.avgCookiesPerCust;
};

CookieStore.prototype.cookieDataArray = function () {
    for (var i = 0; i < this.openHours.length - 1; i++){
        this.staticCookies.push(Math.floor(this.avgCookiesPerHour()));
    }
};

//Cookie tosser requirement formula
CookieStore.prototype.cookieTossers = function (input) {
    if (input < 40){
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

//Method to make new TD element with inner HTML content
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
    var isRedundant = 0;
    //Check if store name is already on table
    for (var i = 0; i < document.getElementById('masterTable').children.length; i++) {
        console.log('Redundancy checker sees: ' + document.getElementById('masterTable').children[i].id);
        if (this.name == document.getElementById('masterTable').children[i].id) {
            console.log('REDUNDANT NAME FOUND');
            isRedundant = 1;
        }
    }

    if (isRedundant === 0) {

        this.cookieDataArray();
        //Create TR element with id as this.name
        this.makeTableElement('masterTable','tr',this.name);
        //cookietosser code - create same code as above in cookieTosser table
        this.makeTableElement('cookieTossers','tr',this.name + 'tosser','');

        //Create TD Element with location name
        var container = document.getElementById(this.name);
        this.makeHTMLelement(container, 'td','<b>' + this.name + '</b>');

        //cookietosser code - apply the same code to the "elementID+tosser" element
        var tosserContainer = document.getElementById(this.name + 'tosser');
        this.makeHTMLelement(tosserContainer,'td','<b>' + this.name + '</b>', true);

        for (var i = 0; i < this.staticCookies.length; i++) { //populate table row with td elements containing each element from staticCookies array
            this.makeHTMLelement(container,'td',this.staticCookies[i]);
            //cookietosser code- does the same as above, but numbers are run through the cookieTossers method
            this.makeHTMLelement(tosserContainer,'td',this.cookieTossers(this.staticCookies[i]),true);
        }
        //calculate total
        for (var i = 0; i < this.staticCookies.length; i++){
            this.cookieSum = this.cookieSum + this.staticCookies[i];
        }
        this.makeHTMLelement(container,'td','<b>' + this.cookieSum + '</b>');
    }
    else if (isRedundant === 1) {
        //Run number processing code
        this.cookieDataArray();
        //Remove redundant table row
        var removeRowContent = document.getElementById(this.name);
        removeRowContent.innerHTML = '';
        //Remove redundant cookietosser row
        var removeRowContent = document.getElementById(this.name + 'tosser');
        removeRowContent.innerHTML = '';

        //Create TR element with id as this.name
        this.makeTableElement('masterTable','tr',this.name);
        //cookietosser code - create same code as above in cookieTosser table
        this.makeTableElement('cookieTossers','tr',this.name + 'tosser','');

        //Create TD Element with location name
        var container = document.getElementById(this.name);
        this.makeHTMLelement(container, 'td','<b>' + this.name + '</b>');
        //cookietosser code - apply the same code to the "elementID+tosser" element
        var tosserContainer = document.getElementById(this.name + 'tosser');
        this.makeHTMLelement(tosserContainer,'td','<b>' + this.name + '</b>', true);

        for (var i = 0; i < this.staticCookies.length; i++) { //populate table row with td elements containing each element from staticCookies array
            this.makeHTMLelement(container,'td',this.staticCookies[i]);
            //cookietosser code- does the same as above, but numbers are run through the cookieTossers method
            this.makeHTMLelement(tosserContainer,'td',this.cookieTossers(this.staticCookies[i]),true);
        }
        //calculate total
        for (var i = 0; i < this.staticCookies.length; i++){
            this.cookieSum = this.cookieSum + this.staticCookies[i];
        }
        this.makeHTMLelement(container,'td','<b>' + this.cookieSum + '</b>');

    }
}; //end of addToDom method

//create table headers populated with openHours elements
CookieStore.prototype.tableHeaders = function(){

    //create new row for main table, inserting before all other child elements
    var headers = document.getElementById('masterTable');
    var headerTableRow = document.createElement( 'tr' );
    headerTableRow.id = 'headerRow';
    headers.insertBefore(headerTableRow, headers.childNodes[0]);

    //create empty TH element
    var tableHeader = document.getElementById('headerRow');
    var createTableHead = document.createElement( 'th' );
    tableHeader.appendChild( createTableHead );

    //cookietosser code - create cookietosser headers
    var tosserHeaders = document.getElementById('cookieTossers');
    var headerTableRow = document.createElement( 'tr' );
    headerTableRow.id = 'tosserRow';
    tosserHeaders.insertBefore(headerTableRow, tosserHeaders.childNodes[0]);
    //create empty TH element
    var tosserHeader = document.getElementById('tosserRow');
    var createTosserHead = document.createElement( 'th' );
    tosserHeader.appendChild( createTosserHead );

    for (var i = 0; i < this.openHours.length; i++) {
        var createTableHead = document.createElement( 'th' );
        createTableHead.innerHTML = this.openHours[i];
        tableHeader.appendChild( createTableHead );
        //cookietosser code - nested if conditional to prevent cookietosser table from loading "Total" column
        if ( i < this.openHours.length - 1 ){
            var createTosserHead = document.createElement( 'th' );
            createTosserHead.innerHTML = this.openHours[i];
            tosserHeader.appendChild( createTosserHead );
        }
    }
}; // End of tableHeaders method

//Calculate total cookies in all stores
CookieStore.prototype.totalCookies = function () {

    //create new table row to display column totals
    var container = document.getElementById('masterTable');
    var newTableRow = document.createElement( 'tr' );
    newTableRow.id = 'totals' ;
    container.appendChild( newTableRow );

    //create blank table header
    container = document.getElementById( 'totals' );
    var totalTableHeader = document.createElement( 'th' );
    totalTableHeader.innerHTML = '<b>Totals</b>';
    container.appendChild( totalTableHeader );

    for (var rowNumber = 0; rowNumber < cookieStoreArray[0].staticCookies.length; rowNumber++){
        var totalCookieTD = document.createElement( 'td' );
        var trackyMcVariable = 0;
        for (var colNumber = 0; colNumber < cookieStoreArray.length; colNumber++){
            trackyMcVariable += cookieStoreArray[colNumber].staticCookies[rowNumber];
        }
        totalCookieTD.innerHTML = '<b>' + trackyMcVariable + '</b>';
        container.appendChild( totalCookieTD );
    }
    //calculate cookie total per td
    var totalCounter = 0;
    for (var i = 0; i < cookieStoreArray.length; i++){ 
        totalCounter = totalCounter + cookieStoreArray[i].cookieSum;
    }
    // var container = document.getElementById('total');
    var totalHeader = document.createElement('td');
    totalHeader.innerHTML = '<b>' + totalCounter + '</b>';
    container.appendChild( totalHeader );
};

var cookieStoreArray = [
    new CookieStore('PDX Airport', 23, 65, 6.3),
    new CookieStore('Pioneer Square', 3, 24, 1.2),
    new CookieStore('Powell\'s', 11, 38, 3.7),
    new CookieStore('St Johns', 20, 38, 2.3),
    new CookieStore('Waterfront', 2, 16, 4.6)
];
cookieStoreArray[0].totalCookies();
cookieStoreArray[0].tableHeaders();

//Form & Event Sorcery
var form = document.getElementById( 'store-entry' ); 
form.addEventListener( 'submit', function(){
    event.preventDefault();

    var removeTotal = document.getElementById( 'totals' );
    removeTotal.outerHTML = '';
    cookieStoreArray.push(new CookieStore ( this.storeName.value, parseInt(this.minCustomers.value), parseInt(this.maxCustomers.value), this.avgCookies.value));
    cookieStoreArray[0].totalCookies();
    event.target.reset();
});