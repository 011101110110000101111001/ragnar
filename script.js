document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('panning-container');
    const img = container.querySelector('img');

    container.addEventListener('mousemove', function(e) {
        const rect = container.getBoundingClientRect();

        // Calculate the percentage of the mouse position within the container
        const xPercent = (e.clientX - rect.left) / rect.width;
        const yPercent = (e.clientY - rect.top) / rect.height;

        // Adjust the image position based on the mouse position percentage
        // Set boundaries if needed, to stop the image from panning out of view
        const xMove = (img.width - rect.width) * xPercent;
        const yMove = (img.height - rect.height) * yPercent;

        // Update the image position
        img.style.left = -xMove + 'px';
        img.style.top = -yMove + 'px';
    });
});
