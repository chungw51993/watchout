// start slingin' some d3 here.
var gameOptions = {
  height: 450,
  width: 700,
  nEnemies: 10,
  padding: 20
};

var gameScore = {
  score: 0,
  hiscore: 0
};

var axes = {
  x: d3.scale
       .linear()
       .domain([0, 100])
       .range([0, gameOptions.width]),

  y: d3.scale
       .linear()
       .domain([0, 100])
       .range([0, gameOptions.height])
};

var gameBoard = d3.select('.board').append('svg:svg')
                  .attr('width', gameOptions.width)
                  .attr('height', gameOptions.height);

//gameBoard.append('pattern:pattern').attr('id', 'image').append('image:image').attr('xlink:href', 'asteroid.png');

var makeEnemies = function (nEnemies) {
  var enemyArray = [];
  for (var i = 0; i < nEnemies; i++) {
    var enemies = gameBoard.append('circle:circle')
                    .attr('id', 'enemy' + i)
                    .attr('class', 'enemy')
                    .attr('xlink:href', 'asteroid.png')
                    .attr('cx', Math.random() * gameOptions.width)
                    .attr('cy', Math.random() * gameOptions.height)
                    .attr('r', 10);
    enemyArray.push(enemies);
  }
  return enemyArray;
};

var moveEnemies = function (enemyData) {
  for (var i = 0; i < enemyData.length; i++) {
    gameBoard.select('#enemy' + i)
      .transition()
      .duration(1500)
      .attr('cx', Math.random() * gameOptions.width)
      .attr('cy', Math.random() * gameOptions.height);
    gameScore.score++;
  }
};
var allEnemies = makeEnemies(gameOptions.nEnemies);
setInterval(function () { moveEnemies(allEnemies); }, 2000);

var collision = function(allEnemyPositions, mousePosition) {
  // if allEnemyPositions x & y intersect with mousePosition x & y
    // reset current score to 0
  // if current score > high score
    // high score = current score
};