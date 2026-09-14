import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function CosmicBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene & Camera Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050714, 0.0012);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 45);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0x223355, 1.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffeedd, 2.5);
    sunLight.position.set(40, 30, 20);
    scene.add(sunLight);

    const blueRimLight = new THREE.PointLight(0x00d8ff, 3, 100);
    blueRimLight.position.set(-30, -20, 10);
    scene.add(blueRimLight);

    const purpleGlow = new THREE.PointLight(0xa855f7, 2, 80);
    purpleGlow.position.set(20, -25, -15);
    scene.add(purpleGlow);

    // --- 1. Starfield (2,500 Multi-Colored Twinkling Stars) ---
    const starCount = 2800;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    const colorPalette = [
      new THREE.Color(0xffffff),
      new THREE.Color(0x38bdf8), // Sky cyan
      new THREE.Color(0x818cf8), // Indigo
      new THREE.Color(0xc084fc), // Purple
      new THREE.Color(0xfde047), // Pale yellow
    ];

    for (let i = 0; i < starCount; i++) {
      // Sphere distribution around camera
      const radius = 60 + Math.random() * 120;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = radius * Math.cos(phi);

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      starColors[i * 3] = color.r;
      starColors[i * 3 + 1] = color.g;
      starColors[i * 3 + 2] = color.b;

      starSizes[i] = Math.random() * 2.2 + 0.8;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    // Custom star texture
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(180,220,255,0.8)');
    grad.addColorStop(0.7, 'rgba(100,150,255,0.2)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 32, 32);

    const starTexture = new THREE.CanvasTexture(canvas);

    const starMaterial = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      map: starTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);

    // --- 2. 3D Procedural Roaming Satellite ---
    const satelliteGroup = new THREE.Group();

    // Satellite Core Bus (Metallic Golden Foil Body)
    const busGeo = new THREE.BoxGeometry(2.4, 2.0, 2.0);
    const busMat = new THREE.MeshStandardMaterial({
      color: 0xddaa33,
      metalness: 0.9,
      roughness: 0.25,
      bumpScale: 0.05
    });
    const satelliteBus = new THREE.Mesh(busGeo, busMat);
    satelliteGroup.add(satelliteBus);

    // Instrument Shield & Panels
    const shieldGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.4, 16);
    const shieldMat = new THREE.MeshStandardMaterial({
      color: 0x222938,
      metalness: 0.8,
      roughness: 0.3
    });
    const shield = new THREE.Mesh(shieldGeo, shieldMat);
    shield.position.y = 1.1;
    satelliteGroup.add(shield);

    // Parabolic High-Gain Dish Antenna
    const dishGeo = new THREE.SphereGeometry(1.4, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.4);
    const dishMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.4,
      roughness: 0.2,
      side: THREE.DoubleSide
    });
    const dish = new THREE.Mesh(dishGeo, dishMat);
    dish.rotation.x = Math.PI * 0.7;
    dish.position.set(0, 1.8, 0.8);

    // Antenna feed horn
    const hornGeo = new THREE.CylinderGeometry(0.04, 0.08, 1.2, 8);
    const hornMat = new THREE.MeshStandardMaterial({ color: 0xc084fc, metalness: 0.8 });
    const horn = new THREE.Mesh(hornGeo, hornMat);
    horn.position.set(0, 2.3, 1.1);
    dish.add(horn);
    satelliteGroup.add(dish);

    // Solar Wings (Left and Right)
    const createSolarPanel = (isRight = true) => {
      const panelGroup = new THREE.Group();
      
      // Truss boom connect
      const boomGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.2, 8);
      const boomMat = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8 });
      const boom = new THREE.Mesh(boomGeo, boomMat);
      boom.rotation.z = Math.PI / 2;
      boom.position.x = isRight ? 1.4 : -1.4;
      panelGroup.add(boom);

      // 3 Solar Arrays
      for (let i = 0; i < 3; i++) {
        const wingGeo = new THREE.BoxGeometry(1.5, 2.8, 0.08);
        const wingMat = new THREE.MeshStandardMaterial({
          color: 0x0f3b68, // Solar Cell Deep Blue
          metalness: 0.6,
          roughness: 0.2,
          emissive: 0x061c38,
          emissiveIntensity: 0.3
        });
        const wing = new THREE.Mesh(wingGeo, wingMat);
        const offsetX = (isRight ? 2.5 : -2.5) + (isRight ? 1 : -1) * (i * 1.6);
        wing.position.x = offsetX;

        // Grid border on solar cell
        const borderGeo = new THREE.BoxGeometry(1.52, 2.82, 0.06);
        const borderMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, wireframe: true });
        const border = new THREE.Mesh(borderGeo, borderMat);
        wing.add(border);

        panelGroup.add(wing);
      }

      // Blinking Navigation Beacon LED on Wingtips
      const beaconGeo = new THREE.SphereGeometry(0.12, 8, 8);
      const beaconMat = new THREE.MeshBasicMaterial({
        color: isRight ? 0x22c55e : 0xef4444 // Green right, Red left
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.set(isRight ? 6.8 : -6.8, 1.4, 0);
      panelGroup.add(beacon);

      return panelGroup;
    };

    const rightPanel = createSolarPanel(true);
    const leftPanel = createSolarPanel(false);
    satelliteGroup.add(rightPanel);
    satelliteGroup.add(leftPanel);

    // Thruster Nozzle & Ion Blue Glow
    const thrusterGeo = new THREE.CylinderGeometry(0.3, 0.5, 0.6, 12);
    const thrusterMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.9 });
    const thruster = new THREE.Mesh(thrusterGeo, thrusterMat);
    thruster.position.y = -1.2;
    satelliteGroup.add(thruster);

    const thrusterGlowGeo = new THREE.ConeGeometry(0.4, 1.2, 12);
    const thrusterGlowMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const thrusterGlow = new THREE.Mesh(thrusterGlowGeo, thrusterGlowMat);
    thrusterGlow.position.y = -1.8;
    thrusterGlow.rotation.x = Math.PI;
    satelliteGroup.add(thrusterGlow);

    // Small onboard PointLight for satellite local illuminate
    const satBeaconLight = new THREE.PointLight(0x38bdf8, 1.5, 12);
    satBeaconLight.position.set(0, 1.2, 1.2);
    satelliteGroup.add(satBeaconLight);

    // Initial scale and add to scene
    satelliteGroup.scale.set(0.9, 0.9, 0.9);
    scene.add(satelliteGroup);

    // --- 3. Cosmic Nebula Dust Clouds ---
    const nebulaCount = 18;
    const nebulaGroup = new THREE.Group();
    const cloudGeo = new THREE.SphereGeometry(6, 8, 8);

    for (let i = 0; i < nebulaCount; i++) {
      const cloudMat = new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? 0x1e1b4b : 0x083344,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const cloud = new THREE.Mesh(cloudGeo, cloudMat);
      cloud.position.set(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 60,
        -15 - Math.random() * 30
      );
      cloud.scale.set(
        Math.random() * 2 + 1,
        Math.random() * 1.5 + 1,
        Math.random() * 2 + 1
      );
      nebulaGroup.add(cloud);
    }
    scene.add(nebulaGroup);

    // --- 4. Dynamic Shooting Meteors ---
    const meteorCount = 3;
    const meteors = [];

    for (let i = 0; i < meteorCount; i++) {
      const meteorGeo = new THREE.CylinderGeometry(0.02, 0.15, 6, 8);
      const meteorMat = new THREE.MeshBasicMaterial({
        color: 0x93c5fd,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });
      const meteor = new THREE.Mesh(meteorGeo, meteorMat);
      meteor.rotation.z = Math.PI / 4;
      meteor.visible = false;
      scene.add(meteor);

      meteors.push({
        mesh: meteor,
        active: false,
        speed: 1.5 + Math.random() * 1.2,
        resetTimer: Math.random() * 300
      });
    }

    // --- Mouse Parallax Interaction ---
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // --- Animation Loop ---
    let clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse camera parallax
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      camera.position.x = currentMouseX * 5;
      camera.position.y = -currentMouseY * 4;
      camera.lookAt(0, 0, 0);

      // Starfield subtle cosmic rotation
      starPoints.rotation.y = elapsedTime * 0.02;
      starPoints.rotation.x = elapsedTime * 0.008;

      // Pulse beacon light
      satBeaconLight.intensity = 1.0 + Math.sin(elapsedTime * 6) * 0.8;
      thrusterGlow.scale.y = 0.8 + Math.sin(elapsedTime * 15) * 0.3;

      // Roaming Orbit for Satellite across the upper-right cosmic sky
      // Elliptical Lissajous Orbit trajectory
      const orbitRadiusX = 26;
      const orbitRadiusY = 12;
      const orbitRadiusZ = 16;
      const orbitSpeed = elapsedTime * 0.18;

      // Satellite position roaming through 3D space
      satelliteGroup.position.x = Math.sin(orbitSpeed) * orbitRadiusX + 8;
      satelliteGroup.position.y = Math.cos(orbitSpeed * 1.3) * orbitRadiusY + 8;
      satelliteGroup.position.z = Math.sin(orbitSpeed * 0.7) * orbitRadiusZ - 5;

      // Satellite autonomous orientation & rolling
      satelliteGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.4 + 0.3;
      satelliteGroup.rotation.y = elapsedTime * 0.25;
      satelliteGroup.rotation.z = Math.cos(elapsedTime * 0.2) * 0.3;

      // Shooting stars / meteors update
      meteors.forEach((m, idx) => {
        if (!m.active) {
          m.resetTimer -= 1;
          if (m.resetTimer <= 0) {
            m.active = true;
            m.mesh.visible = true;
            m.mesh.position.set(
              -40 + Math.random() * 80,
              25 + Math.random() * 20,
              -10 + Math.random() * 10
            );
            m.mesh.material.opacity = 0.8;
          }
        } else {
          m.mesh.position.x += m.speed;
          m.mesh.position.y -= m.speed * 0.8;
          m.mesh.material.opacity -= 0.015;

          if (m.mesh.material.opacity <= 0 || m.mesh.position.y < -30) {
            m.active = false;
            m.mesh.visible = false;
            m.resetTimer = 200 + Math.random() * 400;
          }
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      busGeo.dispose();
      busMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
