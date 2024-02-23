import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';

// global variables
var canvas, scene, camera, renderer, cube;

// set up the scene
function createWorld() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45,1.5,0.1,1000);
    camera.position.z = 5;
    renderer.setClearColor(0x000066);
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshLambertMaterial({color:0xffff00});
    cube = new THREE.Mesh(geometry,material);
    scene.add(cube);
    cube.scale.set(2,2,2);
    var light = new THREE.DirectionalLight(0xffffff,1);
    scene.add(light);
    light.position.z = 5;
}

// update scene & render
function animate() {
  // update scene
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.02;

  // render 
  renderer.render(scene, camera);

  // schedule next frame
  requestAnimationFrame(animate);
}

// init is called when the page is done loading
function init() {
    // test that Three.js is working and connect it to our canvas
    canvas = document.getElementById("glcanvas");
    try {
        renderer = new THREE.WebGLRenderer( { canvas: canvas, antialias: true} );
    }
    catch (e) {
        document.getElementById("canvas-holder").innerHTML = "<h3><b>WebGL is not available.</b><h3>";
        return;
    }

    // set up scene & begin animation
    createWorld();
    animate();
}

document.addEventListener('DOMContentLoaded', init);