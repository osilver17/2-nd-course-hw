document.getElementById('GO').addEventListener('click', function () {
    const GA = document.getElementById('GA');
    const MG = document.getElementById('MG');

    if (window.innerWidth < 1440) {
        // Плавно скроллим ко второму элементу
        MG.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    else {
        // Плавно скроллим к первому элементу
        GA.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});