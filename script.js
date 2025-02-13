function toggleMode() {
    document.documentElement.classList.toggle('light')
    const img = document.querySelector('#profile img')

    if (document.documentElement.classList.contains('light')) {
        img.setAttribute('src', './assets/itallo.png')
    } else {
        img.setAttribute('src', './assets/itallonight.png')
    }
}


    //if(html.classList.contains('light')) {
    //    html.classList.remove('light')
    //} else {
    //    html.classList.add('light')
    //}



