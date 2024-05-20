document.addEventListener("DOMContentLoaded", function() {
    const markdownContentSrc = document.getElementById('markdown-content').getAttribute('src');

    fetch(markdownContentSrc)
        .then(response => response.text())
        .then(markdown => {
            document.getElementById('content').innerHTML = marked.parse(markdown);
        })
        .catch(error => console.error('Error fetching markdown content:', error));
});
