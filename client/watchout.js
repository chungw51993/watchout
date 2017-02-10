// start slingin' some d3 here.
var gameOptions = {
  height: 450,
  width: 700,
  nEnemies: 30,
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

var gameBoard = d3.select('.board')
                  .append('svg:svg')
                  .attr('width', gameOptions.width)
                  .attr('height', gameOptions.height);




var makeEnemies = function (nEnemies) {
  for (var i = 0; i < nEnemies; i++) {
    var enemies = d3.select('svg')
                    .append('svg:circle')
                    .attr('id', i)
                    .attr('class', 'enemy')
                    .attr('cx', Math.random() * gameOptions.width)
                    .attr('cy', Math.random() * gameOptions.height)
                    .attr('r', 10);
  }
};

var moveEnemies = function (id) {
  
};

makeEnemies(gameOptions.nEnemies);