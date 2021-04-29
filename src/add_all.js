var sketch = require('sketch')
var Rectangle = require('sketch/dom').Rectangle
var Page = require('sketch/dom').Page
var Shape = require('sketch/dom').Shape
var ShapePath = require('sketch/dom').ShapePath
var Text = require('sketch/dom').Text
var Group = require('sketch/dom').Group
var Settings = require('sketch/settings')
var UI = require('sketch/ui')


var document = sketch.getSelectedDocument()
var pages = document.pages
var watermarkTextSetting = Settings.settingForKey('watermark_text')

if (pages === 0) {
  console.log('No pages.')
} else {
  UI.getInputFromUser(
  "请输入水印文本",
  {
    initialValue: '默认水印文本',
  },
  (err, value) => {
    if (err) {
      // most likely the user canceled the input
      return
    }

    console.log('pages:');
    pages.forEach(function (page, i) {
      console.log((i + 1) + '. ' + page.name + ' id:' + page.id)
      var selectedLayers = page.layers
      if (selectedLayers === 0) {
        console.log('No layers.')
      } else{
        selectedLayers.forEach(function (layer, i) {
          var watermarkgroup = new Group({
            name: 'watermarks'
          })

          // let mySquare = new ShapePath({
          //     parent: watermarkgroup,
          //     frame: { x: 0, y: 0, width: layer.frame.width, height: layer.frame.height},
          //     style: {
          //       fills: ['#ffffff'],
          //       opacity: 0.2
          //     }
          // })

          for (var i = 0; i < 5; i++) {
            var theX = i * layer.frame.width / 5
            var theY = i * layer.frame.height / 5
            var text = new Text({
              parent: watermarkgroup,
              frame: { x: theX, y: theY, width: layer.frame.width, height: layer.frame.height},
              text: value,
              alignment: Text.Alignment.center,
              transform: {
                rotation: -30
              },
              style: {
                fontSize: 24,
                fontFamily:'Microsoft Sans Serif',
                fills: ['#E02020'],
                opacity: 0.1
              }
            })
          }

          watermarkgroup.parent = layer


        })
      }

    })

  }
)

}
