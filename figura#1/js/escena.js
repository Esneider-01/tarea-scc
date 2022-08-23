//esenaario
const scene = new THREE.Scene();
scene.background= new THREE.Color(0xE8B6FC);

var fogColor = new THREE.Color(0x011E51);
scene.background = fogColor; 
scene.fog = new THREE.Fog(fogColor, 0.25, 5);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria
const geometry = new THREE.ConeGeometry( 3, 3, 5 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh( geometry, material );
scene.add( cone );
camera.position.z = 5;


// funcion

function animate() {
	requestAnimationFrame( animate );
 /*    cone.rotation.x += 0.01; */
	cone.rotation.y += 0.02;
	renderer.render( scene, camera );
}
animate();