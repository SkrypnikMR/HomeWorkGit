const init = () => {
    const btn = document.querySelector('#send');
    const input = document.querySelector('input[type="file"]');
    const label = document.querySelector('.custom-file-upload');
    const ul = document.querySelector('.links__master');
    input.addEventListener('change', (e) => {
        label.setAttribute('disabled', 'disabled');
        btn.disabled = false;
    })
    btn.addEventListener('click', async (e) => {
        btn.disabled = true;

        const data = new FormData();
        data.append('file', input.files[0]);
        try {
            const responce = await fetch('http://localhost:6687/upload', { method: 'POST', body: data });
            responce.json().then((data) => {
                label.setAttribute('disabled', 'false');
                createLinks(data, ul);
            })
        } catch (e) { console.log(e); }
    })
}

init();


const createLinks = (data, parentPlace) => {
    for (key in data) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const a = document.createElement('a');
        span.textContent = `${key}:`;
        a.appendChild(span);
        a.title = key;
        a.textContent = data[key];
        a.href = data[key];
        li.appendChild(a);
        li.classList.add('new');
        parentPlace.prepend(li);
        const timer = setTimeout(() => {
            li.classList.remove('new');
            clearTimeout(timer);
        }, 3000);
    }

}

