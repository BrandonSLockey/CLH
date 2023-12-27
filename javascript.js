const card = document.getElementById('card');
const interactionArea = document.getElementById('interaction-area');
const translateYAmount = -200; // Amount in pixels
const pre = document.querySelector("pre");


document.addEventListener("mousemove", (e) => {
    rotateElement(e, pre);
});

function rotateElement(event, element) {
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;
    //console.log(x,y)

    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    const offsetX = ((x - middleX) / middleX) * 60;
    const offsetY = ((y - middleY) / middleY) * 60;

    element.style.setProperty("--rotateX", -1*offsetY + "deg");
    element.style.setProperty("--rotateY", offsetX + "deg");
}
// Set initial transform using JavaScript
//card.style.transform = `translateY(${translateYAmount}px)`;

//interactionArea.addEventListener('mousemove', (e) => {
//    const rect = card.getBoundingClientRect();
//    const xVal = (e.clientX - rect.left) / rect.width;
//    const yVal = (e.clientY - rect.top) / rect.height;
//
//    const xOffset = -(xVal - 0.5);
//    const yOffset = (yVal - 0.5);
//
//    const dxNorm = Math.min(Math.max(xOffset, -0.5), 0.5);
//    const dyNorm = Math.min(Math.max(yOffset, -0.5), 0.5);

    // Apply both translateY and rotation in a single transform property
//    card.style.transform = `translateY(${translateYAmount}px) rotateY(${dxNorm * 20}deg) rotateX(${dyNorm * 20}deg)`;
//});

//interactionArea.addEventListener('mouseleave', () => {
    // Reset to translateY only when the mouse leaves the interaction area
//    card.style.transform = `translateY(${translateYAmount}px)`;
//});
