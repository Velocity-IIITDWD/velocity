import 'https://threejs.org/build/three.js'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.getElementById('canvas').appendChild(renderer.domElement)

// Create a sphere wireframe
const radius = 1.5
const detail = 1
const geometry = new THREE.IcosahedronGeometry(radius, detail)

const material = new THREE.MeshBasicMaterial({
  wireframe: true,
  color: 0xffffff,
})
const sphere = new THREE.Mesh(geometry, material)
sphere.scale.set(0.8, 0.8, 0.8) // Adjust the scale to push edges inward
scene.add(sphere)

// Position the camera
camera.position.z = 10

// Render the scene
function animate() {
  requestAnimationFrame(animate)
  sphere.rotation.x += 0.006
  sphere.rotation.y += 0.006
  renderer.render(scene, camera)
}

function remove() {
  document.body.removeChild(document.getElementById('canvas').firstChild)
}

export { animate, remove }
