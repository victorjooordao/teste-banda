const videoYtbLazy = document.getElementById('videoYtbLazy');

videoYtbLazy.addEventListener('click', snippetYtbLazyPlay);
function snippetYtbLazyPlay(evt) {
    evt.currentTarget.removeEventListener('click', snippetYtbLazyPlay)

    evt.currentTarget.innerHTML=`<iframe width="720" height="1280" src="https://www.youtube.com/embed/${evt.currentTarget.dataset.id}?autoplay=1" title="O GTA 6 Está Pronto...." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}