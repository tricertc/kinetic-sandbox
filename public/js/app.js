!function (Kinetic) {

  var blocksize = 50
    , columns = 8
    , rows = 8
    , stage;

  /**
   * Draws grid lines
   *
   * @param {Kinetic.Stage} stage
   * @param {number} blocksize
   * @param {number} rows
   * @param {number} columns
   */
  function drawGrid(stage, blocksize, rows, columns) {
    var grid = new Kinetic.Layer()
      , color = 'ccccff'
      , line
      , x
      , y
      , i;

    // draw vertical grid lines
    for (i = 1; i < columns; i += 1) {
      x = i * blocksize;
      y = stage.height();

      line = new Kinetic.Line({
        points: [x, 0, x, y],
        stroke: color,
        strokeWidth: 1
      });

      grid.add(line);
    }

    for (i = 1; i < rows; i += 1) {
      x = stage.width();
      y = i * blocksize;

      line = new Kinetic.Line({
        points: [0, y, x, y],
        stroke: color,
        strokeWidth: 1
      });

      grid.add(line);
    }

    stage.add(grid);
  }

  /**
   * Draw block
   * @param {Kinetic.Stage} stage
   * @param {number} blocksize
   */
  function drawBlock(stage, blocksize) {
    var layer = new Kinetic.Layer()
      , block;

    block = new Kinetic.Rect({
      x: 0,
      y: 0,
      height: blocksize,
      width: blocksize,
      fill: 'red',
      draggable: true,
      opacity: 0.4
    });

    layer.add(block);
    stage.add(layer);
  }

  stage = new Kinetic.Stage({
    container: 'stage',
    height: blocksize * rows,
    width: blocksize * columns
  });

  drawGrid(stage, blocksize, rows, columns);
  drawBlock(stage, blocksize);

}(Kinetic);