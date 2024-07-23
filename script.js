function updateSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    document.getElementById('width').textContent = width;
    document.getElementById('height').textContent = height;
}
updateSize();
window.addEventListener('resize', updateSize);
