const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')

const menu = Menu.buildFromTemplate([
    {
        label: 'Exit',
        role: 'close',
    },
    {
        label: 'Fullscreen',
        role: 'togglefullscreen',
    },
    {
        label: 'DevTools',
        click (item, focusedWindow) {
            if (focusedWindow) {
                focusedWindow.webContents.openDevTools()
            }
        },
    },
])

let win

app.on('ready', () => {
    win = new BrowserWindow()
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/electron-app.html'),
        protocol: 'file:',
        slashes: true,
    }))
    win.on('closed', () => {
        win = null
    })
})
app.on('browser-window-created', (ev, browserWindow) => {
    browserWindow.setMenu(menu)
})
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})
