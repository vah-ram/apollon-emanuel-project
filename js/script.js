
    const topBtn = document.querySelector('.toTopBtn');
    const registerInput = document.querySelector('.bottomRegisterPart .registerInput');
    const centerInput = document.querySelector('.centerPartInput');

    window.addEventListener('scroll', () => {
        if(window.scrollY !== 0) {
            topBtn.classList.add('activated');
        } else {
            topBtn.classList.remove('activated');
        }
    })

    topBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    registerInput.addEventListener('input', function() {
        this.value = this.value.substr(0, 20)
    });


    centerInput.addEventListener('input', function() {
        this.value = this.value.substr(0, 20)
    });