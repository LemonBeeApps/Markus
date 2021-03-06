const url = require('url')
const { BrowserWindow } = require('electron')

let mainWindow = null

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    show: false
  })

  mainWindow.loadURL(
    process.env.NODE_ENV === 'development'
      ? url.format('http://localhost:3000')
      : url.format({
          pathname: __dirname + '/../build/index.html',
          protocol: 'file:'
        })
  )

  if (process.env.NODE_ENV === 'development') {
    const { default: installer, REACT_DEVELOPER_TOOLS, MOBX_DEVTOOLS } = require('electron-devtools-installer')

    Promise.all([REACT_DEVELOPER_TOOLS, MOBX_DEVTOOLS].map(installer))
      .then(() => {
        console.log('Installed devtools successfully.')
      })
      .catch(console.log)

    mainWindow.webContents.openDevTools()
  }

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
}

module.exports = createWindow
