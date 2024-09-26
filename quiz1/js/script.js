const scriptJQuery = document.createElement('script');
scriptJQuery.src = 'https://code.jquery.com/jquery-3.5.1.slim.min.js';
scriptJQuery.onload = function() {
    const scriptBootstrap = document.createElement('script');
    scriptBootstrap.src = 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js';
    document.body.appendChild(scriptBootstrap);
    document.querySelectorAll('.read-more').forEach(button => {
        button.addEventListener('click', () => {
            const additionalText = button.previousElementSibling;
            if (additionalText.style.display === 'none' || additionalText.style.display === '') {
                additionalText.style.display = 'block';
                button.textContent = 'Read Less';
            } else {
                additionalText.style.display = 'none';
                button.textContent = 'Read More';
            }
        });
    });
};
document.body.appendChild(scriptJQuery);
