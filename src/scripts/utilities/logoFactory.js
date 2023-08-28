import * as THREE from 'three';

function getSize(width, height) {
    return Math.min(width, height);
}

class Logo3D {
  constructor(spinSpeedMultiplier = 1) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

      const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'low-power' });
      renderer.setSize(512, 512);
      renderer.setClearColor(0x000000, 0);

      const radius = 1;
      const detail = 2;
      let velocityBase = [0, 0.0005, 0];
      let velocityMouse = [0, 0, 0];
      let mousePressed = false;

      const canvas = renderer.domElement;
      const globalX = new THREE.Vector3(1, 0, 0).normalize();
      const globalY = new THREE.Vector3(0, 1, 0).normalize();
      const globalZ = new THREE.Vector3(0, 0, 1).normalize();

      const meshGeometry = new THREE.IcosahedronGeometry(radius, detail);
      const lineGeometry = new THREE.IcosahedronGeometry(radius + 0.001, detail);

      const meshMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0 });
      const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true });

      const mesh = new THREE.Mesh(meshGeometry, meshMaterial);
      const line = new THREE.Line(lineGeometry, lineMaterial);

      mesh.renderOrder = -1;

      const group = new THREE.Group();
      group.add(mesh);
      group.add(line);
      group.rotateX(Math.PI / 4);
      group.rotateZ(Math.PI / 4);

      scene.add(group);

      camera.position.z = 2;

      canvas.addEventListener('mousedown', () => mousePressed = true);
      canvas.addEventListener('mouseup', () => mousePressed = false);
      canvas.addEventListener('mouseout', () => mousePressed = false);

      canvas.addEventListener('mousemove', (ev) => {
          if(mousePressed) {
              velocityMouse[1] = ev.movementX * 0.0005 * spinSpeedMultiplier;
              velocityMouse[0] = ev.movementY * 0.0005 * spinSpeedMultiplier;
          }
      });

      canvas.addEventListener('touchstart', () => mousePressed = true, { passive: true });
      canvas.addEventListener('touchend', () => mousePressed = false, { passive: true });

      let lastTouch = null;
      canvas.addEventListener('touchmove', (ev) => {
          console.log('hi');
          if(mousePressed) {
              const movementX = lastTouch ? ev.touches[0].pageX - lastTouch[0] : 0;
              const movementY = lastTouch ? ev.touches[0].pageY - lastTouch[1] : 0;

              velocityMouse[1] = movementX * 0.0005 * spinSpeedMultiplier;
              velocityMouse[0] = movementY * 0.0005 * spinSpeedMultiplier;
              
              lastTouch = [ev.touches[0].pageX, ev.touches[0].pageY];
          }
      }, { passive: true });

      let last = 0;
      let deltaTime = 0.016;
      function animate(time) {
          deltaTime = (time - last) ? (time - last) : deltaTime;
          last = time;

          velocityMouse[0] /= 1.1;
          velocityMouse[1] /= 1.1;
          velocityMouse[2] /= 1.1;

          group.rotateOnWorldAxis(globalX, (velocityBase[0] + velocityMouse[0]) * deltaTime);
          group.rotateOnWorldAxis(globalY, (velocityBase[1] + velocityMouse[1]) * deltaTime);
          group.rotateOnWorldAxis(globalZ, (velocityBase[2] + velocityMouse[2]) * deltaTime);

          requestAnimationFrame(animate);
          renderer.render(scene, camera);
      }

      animate();

      this.renderer = renderer;
  }

  attachLogoTo(/**@type {HTMLElement} */ parent) {
      let size = getSize(parent.clientWidth, parent.clientHeight);
      this.renderer.setSize(size, size);

      // I have no idea why this solution works
      // https://stackoverflow.com/questions/76187282/react-resizeobserver-loop-completed-with-undelivered-notifications
      const observerCallback = (entries) => {
        window.requestAnimationFrame(() => {
          if (!Array.isArray(entries) || !entries.length) return;
          // 
          let size = getSize(parent.clientWidth, parent.clientHeight);        
          this.renderer.setSize(size, size);
          //
        });
      };
      const resizeObserver = new ResizeObserver(observerCallback);
      resizeObserver.observe(parent);

      parent.appendChild(this.renderer.domElement);
      this.renderer.domElement.classList.add('aspect-square');
  }
}

export default Logo3D;
