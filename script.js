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
    const overlayImage = document.querySelector('.overlay img');

    // Перевірка, чи правильно визначено зображення
    console.log('Overlay Image:', overlayImage);

    // Обробка натискання на зображення
    overlayImage.addEventListener('click', function() {
        const popupImage = document.createElement('img');
        popupImage.src = 'src/you.jpg';  // Вкажіть шлях до нового зображення
        popupImage.style.position = 'absolute';
        popupImage.style.top = '50%';
        popupImage.style.left = '50%';
        popupImage.style.transform = 'translate(-50%, -50%)';
        popupImage.style.zIndex = '100'; // Збільшено z-index для кращої видимості
        document.body.appendChild(popupImage);

        console.log('Попап-зображення має бути зараз видиме');

        // Видалення попап-зображення через 5 секунд
        setTimeout(function() {
            document.body.removeChild(popupImage);
            console.log('Попап-зображення видалено');
        }, 5000);
    });
});

function unmuteAudio() {
    var audio = document.getElementById("background-music");
    audio.muted = false;
    audio.play();
}
