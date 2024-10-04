let navIcon = document.getElementById("nav-toggle")
let navContainer = document.querySelector(".hidden-items")

document.querySelector(".hidden-items ul").style.display = "none"

navIcon.addEventListener("click", function () {
    navContainer.classList.toggle("hidden-nav")
    navContainer.classList.toggle("visible-nav")
    if (navContainer.classList.contains("hidden-nav")) {
        document.querySelector(".hidden-items ul").style.display = "none"
    } else {
        setTimeout(function () {
            document.querySelector(".hidden-items ul").style.display = "block"
        }, 700)
    }
})

const navButtons = document.querySelectorAll('.nav-item');
const contentItems = document.querySelectorAll('.content-item');

function resetActive() {
    navButtons.forEach(btn => btn.classList.remove('active'));
    contentItems.forEach(content => content.classList.remove('active'));
}

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        resetActive();
        button.classList.add('active');
        document.getElementById(button.id.replace('-btn', '-content')).classList.add('active');
    });
});

// Pagination functionality
document.querySelectorAll('.pagination').forEach(pagination => {
    pagination.addEventListener('click', event => {
        if (event.target.tagName === 'BUTTON') {
            const parentContent = event.target.closest('.content-item');
            const targetPage = event.target.dataset.target;

            parentContent.querySelectorAll('.page-item').forEach(page => {
                page.classList.remove('active');
            });
            parentContent.querySelector(`#${targetPage}`).classList.add('active');

            pagination.querySelectorAll('.page-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
        }
    });
});
