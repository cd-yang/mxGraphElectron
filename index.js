const {app, BrowserWindow, Notification, ipcMain} = require('electron')

let win
app.on('ready', ()=>{
        win = new BrowserWindow({
        // width: 400,
        // height: 500,
        // webPreferences: {
        //     nodeIntegration: true
        // }
    })
    win.loadFile('./index.html')
})
