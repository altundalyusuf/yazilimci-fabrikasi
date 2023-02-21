const gridContainer = document.querySelector('.full-page');
const headingOfGallery = document.querySelector('.headingOfGallery');


function createGallery(i) {
    const galleryRow = document.createElement("div");
    galleryRow.className = "row text-center mb-2";
    galleryRow.innerHTML = `
                <div class="col-lg-4">
                    <img src="https://source.unsplash.com/random/300x300/?${i}" alt="görsel">
                </div>
                <div class="col-lg-4">
                    <img src="https://source.unsplash.com/random/300x300/?${i + 3}" alt="görsel">
                </div>
                <div class="col-lg-4">
                    <img src="https://source.unsplash.com/random/300x300/?${i + 2}" alt="görsel">
                </div>
    `

    // insertAfter olmuş oldu böyle yazınca
    gridContainer.insertBefore(galleryRow, headingOfGallery.nextSibling);
}

// 5 satır için rastgele görsel üret
for (let i = 0; i < 5; i++) {
    let x = Math.floor(Math.random() * 500);
    createGallery(x);
}
