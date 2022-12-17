const postContainer = document.getElementById('posts-container');
const lodging = document.querySelector('.loader');
const filter = document.getElementById('filter')

let limit = 4;
let page = 1;

/*
 * Fetch post from API.
*/
async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data = await res.json()

    return data;
}

/*
 * Show posts in DOM.
*/
async function showPosts() {
    const posts = await getPosts()
    posts.forEach((post) => {
        const postEl = document.createElement('div')
        postEl.classList.add('post')
        postEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}/p>
        </div>
    `
        postContainer.appendChild(postEl)
    })
}

/*
 * Show posts in DOM.
*/
function showLoading() {
    lodging.classList.add('show');

    setTimeout(() => {
        lodging.classList.remove('show');
        setTimeout(() => {
            page++;
            showPosts()
        })
    }, 1000)
}

/*
 * Filter posts by input
*/
function filterPosts(event) {
    const term = event.target.value.toUpperCase();
    const posts = document.querySelectorAll('.post')

    posts.forEach(post => {
        const title = post.querySelector('.post-title').innerText.toUpperCase();
        const body = post.querySelector('.post-body').innerText.toUpperCase();
        if (title.indexOf(term) > -1 || body.indexOf(term) > -1) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    })
}

/*
 * Show initial posts
*/
showPosts()

/*
 * Events :
*/
window.addEventListener('scroll', () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading()
    }
})

filter.addEventListener('input', filterPosts)