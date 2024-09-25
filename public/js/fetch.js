function loadComponent(componentId, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(componentId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const navbarUrl = "./_partials/navbar.html";
    const footerUrl = "./_partials/footer.html";

    const navbarComponentIdList = [
        'navbar_index', 'navbar_about', 'navbar_services', 'navbar_packages',
        'navbar_contact', 'navbar_outlets', 'navbar_memberships', 'navbar_team',
        'navbar_download_app', 'navbar_book_now', 'navbar_package_description'
    ];

    const footerComponentIdList = [
        'footer_index', 'footer_about', 'footer_services', 'footer_packages',
        'footer_contact', 'footer_outlets', 'footer_memberships', 'footer_team',
        'footer_download_app', 'footer_book_now', 'footer_package_description', 'footer_faq'
    ];

    navbarComponentIdList.forEach(componentId => {
        loadComponent(componentId, navbarUrl);
    });

    footerComponentIdList.forEach(componentId => {
        loadComponent(componentId, footerUrl);
    });
});
