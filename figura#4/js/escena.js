//esenaario
const scene = new THREE.Scene();
//scene.background= new THREE.Color(0xE8B6FC);
var loader = new THREE.TextureLoader();

loader.load('../imegen/naaa.jpg',function(texture){
	scene.background =texture
});

var fogColor = new THREE.Color(0x011E51);
scene.background = fogColor; 
scene.fog = new THREE.Fog(fogColor, 0.50, 5);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const length = 12, width = 8;

const shape = new THREE.Shape();
shape.moveTo( 0,1 );
shape.lineTo( 0, width );
shape.lineTo( length, width );
shape.lineTo( length, 0 );
shape.lineTo( 0, 0 );

const extrudeSettings = {
	steps: 2,
	depth: 16,
	bevelEnabled: true,
	bevelThickness: 1,
	bevelSize: 1,
	bevelOffset: 0,
	bevelSegments: 1
};

const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
const material = new THREE.MeshBasicMaterial( { color: 'red' } );
const mesh = new THREE.Mesh( geometry, material ) ;
scene.add( mesh );
camera.position.z = 40;


// funcion

function animate() {
	requestAnimationFrame( animate );
    mesh.rotation.x += 0.01; 
	mesh.rotation.y += 0.02;
	renderer.render( scene, camera );
}
animate();