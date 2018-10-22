function onKeyDown(event) {
  var maxPoint = new Point(view.size.width, view.size.height);
  var randomPoint = point.random();
  var point = maxPoint * randomPoint;
  new Path.Circle(maxPoint, 10).fillColor = 'cyan';
}