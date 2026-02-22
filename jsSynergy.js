document.addEventListener('DOMContentLoaded', function() {
    // Массив с URL изображений (использую бесплатные изображения из Unsplash)
    const images = [
        'https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1682695794941-989d7c5bf580?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1682686580186-b55d2a91053c?w=800&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1682695795557-17447f921f79?w=800&auto=format&fit=crop'
    ];

    // Альтернативный массив с локальными изображениями (раскомментируйте для использования)
    // const images = [
    //     'images/image1.jpg',
    //     'images/image2.jpg',
    //     'images/image3.jpg',
    //     'images/image4.jpg',
    //     'images/image5.jpg'
    // ];

    let currentIndex = 0; // Текущий индекс изображения

    // Получаем элементы DOM
    const currentImage = document.getElementById('current-image');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const imageCounter = document.getElementById('imageCounter');

    // Функция для обновления отображаемого изображения
    function updateImage() {
        // Устанавливаем новый src для изображения
        currentImage.src = images[currentIndex];
        
        // Обновляем alt текст для доступности
        currentImage.alt = `Изображение ${currentIndex + 1}`;
        
        // Обновляем счетчик
        imageCounter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
        
        // Добавляем небольшую анимацию при смене изображения
        currentImage.style.animation = 'fadeIn 0.5s ease';
        setTimeout(() => {
            currentImage.style.animation = '';
        }, 500);
    }

    // Добавляем CSS анимацию для плавного появления изображения
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0.5; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
        }
    `;
    document.head.appendChild(style);

    // Функция для перехода к следующему изображению
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length; // Зацикливание
        updateImage();
    }

    // Функция для перехода к предыдущему изображению
    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length; // Зацикливание
        updateImage();
    }

    // Добавляем обработчики событий для кнопок
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);

    // Добавляем поддержку клавиатуры
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            prevImage();
        } else if (event.key === 'ArrowRight') {
            event.preventDefault();
            nextImage();
        }
    });

    // Инициализация первого изображения
    updateImage();

    // Предзагрузка изображений для плавной работы
    function preloadImages() {
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
    preloadImages();
});