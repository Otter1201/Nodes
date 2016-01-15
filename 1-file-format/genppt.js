var fs = require('fs');
var officegen = require('officegen');

// Create a new PPT file
var pptx = officegen('pptx');
pptx.setDocTitle('Using node.js to gen pptx');

var slide = pptx.makeNewSlide();

// Set background and foreground
slide.back = '000000';
slide.color = 'ffffff';

// Add a header
slide.addText('Hi Otter', {
	x: 'c',
	y: 'c',
	cx: 600,
	cy: 200,
	color: 'fff00',
	bold: true,
	underline: true,
	font_face: 'Time new roman',
	font_size: 60
});

// Save as a new file
var output = fs.createWriteStream('gen.pptx');
pptx.generate(output);