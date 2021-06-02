const init = () => {
    const btn = document.querySelector('#send');
    const input = document.querySelector('input[type="file"]');
    input.addEventListener('change', (e) => {
        e.target.disabled = true;
        btn.disabled = false;
    })
    btn.addEventListener('click', async (e) => {
        btn.disabled = true;
        const data = new FormData();
        data.append('file', input.files[0]);
        try {
            const responce = await fetch('http://localhost:6687/upload', { method: 'POST', body: data });
            responce.json().then((data) => {
                input.disabled = false;
                console.log(data);
            })
        } catch (e) {
            console.log(e);
            console.log('fail');
        }
    })
}

init();



