import { COURSES } from "./mocks";
const courses = document.getElementById('courses-grid');

const card = COURSES.map((course) => {
    const div = document.createElement('div');
    div.classList.add('courses-grid__card');
    div.setAttribute('data-filter', course.badge);
    // <div class="courses-grid__card">
    div.innerHTML = `
            <img src=${course.image} alt="speaker image" class="card-image">
            <div class="card-content">
                <span class="card-badge card-badge_${course.badge}">${course.badge}</span>
                <p class="card-name">${course.name}</p>
                <div class="card-info">
                    <p class="card-info__price">$${course.price}</p>
                    <span class="card-info__divider"></span>
                    <p class="card-info__speaker">${course.speaker}</p>
                </div>
            </div>
            `
    return div
    // </div>
})

card.forEach((el) => {
    courses.appendChild(el)
})  