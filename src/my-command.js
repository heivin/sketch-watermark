var sketch = require('sketch')
var Rectangle = require('sketch/dom').Rectangle
var Page = require('sketch/dom').Page
var Shape = require('sketch/dom').Shape
var ShapePath = require('sketch/dom').ShapePath

var document = sketch.getSelectedDocument()
var pages = document.pages

if (pages === 0) {
  console.log('No pages.')
} else {
  console.log('pages:');
  pages.forEach(function (page, i) {
    console.log((i + 1) + '. ' + page.name + ' id:' + page.id)
    var selectedLayers = page.layers
    if (selectedLayers === 0) {
      console.log('No layers.')
    } else{
      selectedLayers.forEach(function (layer, i) {
        console.log((i + 1) + '. ' + layer.name)
console.log(layer.parent.width)


let mySquare = new ShapePath({
    parent: layer,
    frame: { x: 0, y: 0, width: layer.frame.width, height: layer.frame.height},
    style: {
      fills: ['#35E6C66'],
      opacity: 0.2
    }
})

      })
    }

  })
}
