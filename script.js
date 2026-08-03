document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => {
            l.classList.remove('text-slate-900', 'border-b-2', 'border-slate-900', 'font-semibold');
            l.classList.add('text-slate-600');
        });
        this.classList.add('text-slate-900', 'border-b-2', 'border-slate-900', 'font-semibold');
        this.classList.remove('text-slate-600');
    });
});