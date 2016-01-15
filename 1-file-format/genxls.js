var fs = require('fs');
var officegen = require('officegen');

// Create file
var xlsx = officegen('xlsx');
xlsx.name = 'New Tab';

// Create a new sheet
var sheet = xlsx.makeNewSheet();
sheet.data[10] = []
sheet.data[10][3] = 'Hello';
sheet.setCell('G8', 'Otter');

// Save file
var output = fs.createWriteStream('autogen.xlsx');
xlsx.generate(output);