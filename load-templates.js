function loadHTML(elementId, filePath) {
    return fetch(filePath, { cache: 'no-cache' })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

document.addEventListener('DOMContentLoaded', () => {
    Promise.all([
        loadHTML('header', 'header.html'),
        loadHTML('navbar', 'navbar.html'),
        loadHTML('footer', 'footer.html')
    ]).then(() => {
        // Restore deep links after the templates have shifted the page layout.
        const section = document.getElementById(window.location.hash.slice(1));
        if (section) {
            section.scrollIntoView();
        } else if (!window.location.hash) {
            window.scrollTo(0, 0);
        }
    }).catch(error => console.error(error));
});
