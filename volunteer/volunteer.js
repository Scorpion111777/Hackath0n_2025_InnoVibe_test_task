const postsData = [
  {
    user: 'spoddl',
    time: '12h',
    status: 'active',
    text: 'I just found a kitten. Maybe someone can...',
    img: '/src/images/cat1.jpg'
  },
  {
    user: 'spoddl',
    time: '15h',
    status: 'active',
    text: 'I just found a kitten.',
    img: null
  },
  {
    user: 'spoddl',
    time: '19h',
    status: 'solved',
    text: 'I just found a dog! just found a dog! just found a dog! just found a dog! just found a dog!',
    img: null
  }
];

const postsContainer = document.querySelector('.posts');

postsData.forEach(post => {
            const div = document.createElement('div');
            div.className = 'post';
            div.innerHTML = `
                <div class="post-header">
                    ${post.editable ? '<span class="post-actions"><a href="#">edit</a> <a href="#" class="delete">delete</a></span>' : ''}
                    ${post.user} <span class="time">· ${post.time}</span> <span class="status ${post.status}">${post.status}</span>
                    <span class="expand">▾</span>
                </div>
                <div class="post-text">${post.text.replace(/\n/g, '<br>')}</div>
                ${post.img ? `<img src="${post.img}" alt="post image">` : ''}
            `;
            postsContainer.appendChild(div);
});

document.querySelector('.add-btn').addEventListener('click', () => {
  window.location.href = '/AddAnnounce/AddAnnounce.html';
});
document.querySelector('.search-btn').addEventListener('click', () => {
  window.location.href = '/SearchAnimal/SearchAnimal.html';
});

