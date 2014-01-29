!function (Kinetic) {

  var stage = new Kinetic.Stage({
    container: 'stage',
    width: 578,
    height: 200
  });

  var layer = new Kinetic.Layer();

  var rect = new Kinetic.Rect({
    x: 239,
    y: 76,
    width: 100,
    height: 50,
    fill: 'green',
    stroke: 'black',
    strokeWidth: 4,
    draggable: true
  });

  layer.add(rect);

  stage.add(layer);

}(Kinetic);