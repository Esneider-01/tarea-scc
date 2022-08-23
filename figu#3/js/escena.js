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
const geometry = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
const material = new THREE.MeshBasicMaterial( {color: 'green', wireframe:true } );
const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );
camera.position.z = 4;


// funcion

function animate() {
	requestAnimationFrame( animate );
 /*    cone.rotation.x += 0.01; */
	capsule.rotation.y += 0.02;
	renderer.render( scene, camera );
}
animate();