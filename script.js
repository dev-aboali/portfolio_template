let themeDots = document.querySelectorAll('.theme-dot');
let dotsNum = themeDots.length;

if(!localStorage.getItem('theme')) {
    setTheme('light')
} else {
    let theme = localStorage.getItem('theme');
    setTheme(theme)
}
for(let i=0; i < dotsNum; i++) {
    themeDots[i].addEventListener('click', function(e){
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode){
   
    localStorage.setItem('theme', mode)

    if(mode == 'light') {
        document.getElementById('theme-style').href="default.css"
    }
    if(mode == 'blue') {
        document.getElementById('theme-style').href="blue.css"
    }
    if(mode == 'purple') {
        document.getElementById('theme-style').href="purple.css"
    }
    if(mode == 'green') {
        document.getElementById('theme-style').href="green.css"
    }
}