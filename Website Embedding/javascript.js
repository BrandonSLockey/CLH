const card = document.getElementById('card');
const interactionArea = document.getElementById('interaction-area'); // New interaction area


card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width;
    const yVal = (e.clientY - rect.top) / rect.height;

    const xOffset = -(xVal - 0.5);
    const yOffset = (yVal - 0.5);

    const dxNorm = Math.min(Math.max(xOffset, -0.5), 0.5);
    const dyNorm = Math.min(Math.max(yOffset, -0.5), 0.5);

    card.style.transform = `rotateY(${dxNorm * 20}deg) rotateX(${dyNorm * 20}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'none';
});



interactionArea.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const xVal = (e.clientX - rect.left) / rect.width;
    const yVal = (e.clientY - rect.top) / rect.height;

    const xOffset = -(xVal - 0.5);
    const yOffset = (yVal - 0.5);

    const dxNorm = Math.min(Math.max(xOffset, -0.5), 0.5);
    const dyNorm = Math.min(Math.max(yOffset, -0.5), 0.5);

    card.style.transform = `rotateY(${dxNorm * 20}deg) rotateX(${dyNorm * 20}deg)`;
});

interactionArea.addEventListener('mouseleave', () => {
    card.style.transform = 'none';
});
