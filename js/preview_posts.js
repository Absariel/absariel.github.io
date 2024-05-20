/* 
<div class="card">
    <h2>TITLE HEADING</h2>
    <h5>Title description, Dec 7, 2017</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
</div>
<div class="card">
    <h2>TITLE HEADING</h2>
    <h5>Title description, Sep 2, 2017</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
</div> */

// document.addEventListener('DOMContentLoaded', () => {
//     fetch('posts.json')
//         .then(response => response.json())
//         .then(posts => {
//             const postsContainer = document.getElementById('postsContainer');
//             posts.forEach(post => {
//                 const card = document.createElement('div');
//                 card.classList.add('card');

//                 const title = document.createElement('h2');
//                 title.textContent = post.title;
//                 card.appendChild(title);

//                 const description = document.createElement('h5');
//                 description.textContent = post.description;
//                 card.appendChild(description);

//                 const image = document.createElement('div');
//                 image.classList.add('fakeimg');
//                 image.style.height = post.imageHeight;
//                 image.textContent = 'Image';
//                 card.appendChild(image);

//                 const content = document.createElement('p');
//                 content.textContent = post.content;
//                 card.appendChild(content);

//                 postsContainer.appendChild(card);
//             });
//         })
//         .catch(error => console.error('Error fetching posts:', error));
// });

document.addEventListener('DOMContentLoaded', () => {
    fetch('/resources/posts/posts.json')
        .then(response => response.json())
        .then(posts => {
            const leftcolumn = document.getElementById('leftcolumn');
            posts.forEach(post => {
                const postPath = `/resources/posts/${post}`;
                fetch(postPath)
                    .then(response => response.text())
                    .then(text => {
                        const lines = text.split('\n');
                        const titleText = lines[0].replace('# ', '');
                        const contentText = lines.slice(1, 3).join('\n') + '\n...';
                        const postName = post.replace('.md', '');
                        const postLink = `/posts/${postName}`;

                        const card = document.createElement('div');
                        card.classList.add('card');

                        const title = document.createElement('h2');
                        title.textContent = titleText;
                        card.appendChild(title);

                        const description = document.createElement('h5');
                        description.textContent = postName;
                        card.appendChild(description);

                        const content = document.createElement('p');
                        content.textContent = contentText;
                        card.appendChild(content);

                        const link = document.createElement('a');
                        link.href = postLink;
                        link.textContent = 'Read more';
                        card.appendChild(link);

                        leftcolumn.appendChild(card);
                    })
                    .catch(error => console.error('Error fetching post:', error));
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});

