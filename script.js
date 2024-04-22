const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout (() => {
        text.textContent = "Dōzo, goran kudasai";
    }, 0);
    
    setTimeout (() => {
        text.textContent = "Dai un'occhiata!";
    },4000);
    
    setTimeout (() => {
        text.textContent = "Schauen Sie sich um";
    }, 8000);
    
}

textLoad();
setInterval(textLoad, 12000);