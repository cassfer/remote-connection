const { ipcRenderer } = require('electron');

//Botoes de interface

let windowMinimize = document.querySelector(".fa-window-minimize");
let windowMaximize = document.querySelector(".fa-window-maximize");
let windowClose = document.querySelector(".fa-window-close");


windowMinimize.addEventListener('click', (e)=>{
    ipcRenderer.send('window-minimize');
})

windowMaximize.addEventListener('click', (e)=>{
    ipcRenderer.send('window-maximize');
})

windowClose.addEventListener('click', (e)=>{
    ipcRenderer.send('window-close');
})

//