function spawnImage(event) {
  const container = document.getElementById('container');
  const img = document.createElement('img');
  img.src = 'RYAN.png'; 
  img.className = 'bouncing-image';
  img.style.left = `${event.clientX}px`;
  img.style.top = `${event.clientY}px`;

  container.appendChild(img);

  let dx = Math.random() * 10 - 5; // Random horizontal speed
  let dy = Math.random() * 10 - 5; // Random vertical speed
  let angle = 0;
  let rotationSpeed = Math.random() * 5 + 1; // Random rotation speed between 1 and 6

  function animate() {
    const rect = img.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    let bounce = false;

    if (rect.left <= containerRect.left || rect.right >= containerRect.right) {
      dx = -dx;
      bounce = true;
    }
    if (rect.top <= containerRect.top || rect.bottom >= containerRect.bottom) {
      dy = -dy;
      bounce = true;
    }

    if (bounce) {
      rotationSpeed = Math.random() * 5 + 1; // Update rotation speed on each bounce
    }

    angle += rotationSpeed;

    img.style.left = `${parseFloat(img.style.left) + dx}px`;
    img.style.top = `${parseFloat(img.style.top) + dy}px`;
    img.style.transform = `rotate(${angle}deg)`;

    requestAnimationFrame(animate);
  }

  animate();
}

const container = document.getElementById('container');

container.addEventListener('click', (event) => {
  event.preventDefault();
  spawnImage(event);
});

container.addEventListener('touchstart', (event) => {
  event.preventDefault();
  spawnImage(event.touches[0]);
});


