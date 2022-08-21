import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();



const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGL1Renderer();
document.body.appendChild( renderer.domElement );


renderer.setSize( window.innerWidth, window.innerHeight );

camera.position.setZ(5);

renderer.render( scene, camera);

loader.load( 'jar2.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );

const geometry =  new THREE.CylinderGeometry( 5, 5, 10, 36 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );
const controls = new OrbitControls( camera, renderer.domElement );

camera.position.z = 5;
controls.update();

//shows on canvas
//loops like p5
function animate() {
	requestAnimationFrame( animate );
  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;
  controls.update();

	renderer.render( scene, camera );
}
animate();