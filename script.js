document.addEventListener('DOMContentLoaded', () => {

```
const elementos = document.querySelectorAll(
    '.plano, .cobertura-box, .contatos a'
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach(el => {

    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease';

    observer.observe(el);

});
```

});
