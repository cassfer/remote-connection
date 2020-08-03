const { app, BrowserWindow, ipcMain} = require('electron');

var mainWindow = null;

app.on('ready', ()=>{

    let mainWindow = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences:{
            nodeIntegration: true, //To allow node import in ipcRender
            //devTools: false //To prevent devTools
        },
        frame: false,
    })

    mainWindow.loadURL(`file://${__dirname}/app/home/home.html`)


    ipcMain.on('window-minimize', ()=>{
        mainWindow.minimize();
    })
    
    ipcMain.on('window-maximize', ()=>{
        console.log(mainWindow.isMaximized())
        if(!mainWindow.isMaximized()){
            mainWindow.maximize()
        } else {
            console.log("entrou no unmaximize")
            mainWindow.unmaximize()
        }
    })
    
    ipcMain.on('window-close', ()=>{
        mainWindow.close()
    })


})