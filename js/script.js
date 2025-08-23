
    const topBtns = document.querySelectorAll('.topBtn');

    window.addEventListener('scroll', () => {
        if(window.scrollY !== 0) {
            topBtns.forEach(item => {
                item.classList.add('activated');
            })
        } else {
            topBtns.forEach(item => {
                item.classList.remove('activated');
            })}
    })

    topBtns.forEach(item => {
            item.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        })
