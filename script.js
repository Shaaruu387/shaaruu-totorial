document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const works = [
        {
            "title": "Project 1",
            "image": "assets/placeholder.png"
        },
        {
            "title": "Project 2",
            "image": "assets/placeholder.png"
        },
        {
            "title": "Project 3",
            "image": "assets/placeholder.png"
        }
    ];

    works.forEach(work => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.innerHTML = `
            <img src="${work.image}" alt="${work.title}">
            <h3>${work.title}</h3>
        `;
        gallery.appendChild(galleryItem);
    });
});
