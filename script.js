var lines = []
var penColor;
var bgColor;
var penWidth;
var clearBtn;
var saveBtn;

function setup() {
  createCanvas(windowWidth, windowHeight - 150);

  var options = createDiv().style('display: flex; justify-content: space-between;')

  var optionsDiv = createDiv().parent(options).style('display: flex;')
	
  var optionsTitles = createDiv().parent(optionsDiv)
  createP('Pen Color').parent(optionsTitles)
  createP('Background Color').parent(optionsTitles)
  createP('Pen Width').parent(optionsTitles)
	
  var optionsValues = createDiv().parent(optionsDiv).style('margin: 10px 40px; width: 50px;')
  penColor = createColorPicker('#ffffff').parent(optionsValues)
  bgColor = createColorPicker('#1e1e1e').parent(optionsValues).style('margin-top: 10px;')
  // penWidth = createSelect(false).parent(optionsValues).style('margin-top: 10px;')
  penWidth = createInput('2', 'number').parent(optionsValues).style('margin-top: 10px;')
	penWidth.elt.min = '0'
	penWidth.elt.max = '1000'
	
	
	// penWidth.option('1')
	// penWidth.option('2')
	// penWidth.option('3')
	// penWidth.option('4')
	// penWidth.option('8')
	// penWidth.selected('2')

	var optionsBtns = createDiv().parent(options).style('display: flex;')
	
	clearBtn = createButton('Clear').parent(optionsBtns).style('width: 100px;')
	saveBtn = createButton('Save').parent(optionsBtns).style('width: 100px; margin-left: 8px;')
}

function draw() {
  background(bgColor.value());

	clearBtn.mousePressed(function() {
		lines = []
	})

	saveBtn.mousePressed(function() {
	 	saveCanvas('drawing');
	})
	
	if (mouseIsPressed) {
		var line = new MyLine(penColor.value(), penWidth.value())
		lines.push(line)
	}

	for (var line of lines) {
		line.show()
	}
}

function keyTyped() {
  if (key === 's') {
	saveCanvas('drawing');
  }
}
