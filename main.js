
function drawBody() {

}

function drawNeck() {
    
}

const Concrete = require("./concrete.min");

var concreteContainer = document.getElementById('concreteContainer');

var viewport = new Contrecte.Viewport({
    width: 400,
    height: 200,
    container: concreteContainer
});

var bodyBlue = new Concrete.Layer();
var bodyWhite = new Concrete.Layer();

var neckMaple = new Concrete.Layer();
var neckRosewood = new Concrete.Layer();

viewport.add(body).add(neck);

// var scene = viewport.scene;
viewport.render();