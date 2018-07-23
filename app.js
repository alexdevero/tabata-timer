const {app, BrowserWindow, dialog, Menu, session} = require('electron') // http://electron.atom.io/docs/api

let window = null

// Temporary fix broken high-dpi scale factor on Windows (125% scaling)
// info: https://github.com/electron/electron/issues/9691
if (process.platform === 'win32') {
  app.commandLine.appendSwitch('high-dpi-support', 'true')
  app.commandLine.appendSwitch('force-device-scale-factor', '1')
}

// session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
//   details.requestHeaders['User-Agent'] = 'SuperDuperAgent'
//
//   callback({ cancel: false, requestHeaders: details.requestHeaders })
// })

// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
  window = new BrowserWindow({
    // Set the initial width to 550px
    width: 550,
    // Set the initial height to 500px
    height: 580,
    // Don't show the window until it ready, this prevents any white flickering
    show: false,
    title: 'Tabata timer',
    toolbar: true,
    webPreferences: {
      // Disable node integration in remote page
      nodeIntegration: false
    }
  })

  // URL is argument to npm start
  const url = 'http://www.intervaltimer.com/create/tabata-timer' // process.argv[2]

  // Inject CSS
  window.webContents.on('did-finish-load', function() {
    window.webContents.insertCSS('.section-heavyset.feature { display: none !important;}')

    window.webContents.insertCSS('.section-padded-bottom.footer { display: none !important;}')

    window.webContents.insertCSS('.section-padded-bottom.timer-info .col-md-4 { display: none !important;}')

    window.webContents.insertCSS('.section-default + .section-default > div { border-bottom: 0 !important;}')
  })

  // Query all cookies associated with a specific url.
  session.defaultSession.cookies.get({}, (error, cookies) => {
    // console.log(error, cookies)
  })


  // Function for clearing cache
  const win = BrowserWindow.getAllWindows()[0]
  const ses = win.webContents.session
  const clearAppCache = () => {
    ses.clearCache(() => {
      dialog.showMessageBox({type: 'info', buttons: ['OK'], message: 'Cache cleared.'})
    })
  }

  // Template for menu
  const menuTemplate = [
    {
      label: 'Edit',
      submenu: [
        {role: 'undo'},
        {role: 'redo'},
        {role: 'cut'},
        {role: 'copy'},
        {role: 'paste'},
        {role: 'delete'}
      ]
    },
    {
      label: 'View',
      submenu: [
        {role: 'reload'},
        {role: 'forcereload'},
        {role: 'resetzoom'},
        {role: 'zoomin'},
        {role: 'zoomout'}
      ]
    },
    {
      role: 'window',
      submenu: [
        {role: 'minimize'},
        {role: 'close'}
      ]
    },
    {
      label: 'Maintenance',
      submenu: [
        {
          label: 'Clear history',
          click: () => {window.webContents.clearHistory(dialog.showMessageBox({type: 'info', buttons: ['OK'], message: 'History cleaned.'}))}
        },
        {
          label: 'Clear cache',
          click: () => {clearAppCache()}
        },
        {
          label: 'Clear storage data',
          click: () => {window.webContents.session.clearStorageData(dialog.showMessageBox({ type: 'info', buttons: ['OK'], message: 'Storage data cleaned.'}))}
        },
        {
          label: 'Check cache size',
          click: () => {window.webContents.session.getCacheSize((size) => dialog.showMessageBox({type: 'info', buttons: ['OK'], message: `Cache size is: ${size} bytes.`}))}
        },
        {
          label: 'Open dev tools',
          click: () => {window.webContents.openDevTools()}
        }
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: () => {require('electron').shell.openExternal('https://github.com/alexdevero/tabata-timer')}
        },
        {
          label: 'Author',
          click: () => {require('electron').shell.openExternal('https://alexdevero.com')}
        }
      ]
    }
  ]

  // Build menu from menuTemplate
  const menu = Menu.buildFromTemplate(menuTemplate)

  window.loadURL(url, {
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B137 Safari/601.1'
  })

  // Set menu to menuTemplate
  Menu.setApplicationMenu(menu)

  // Show window when page is ready
  window.once('ready-to-show', () => {
    // window.maximize()
    window.show()

    // Open the DevTools.
    if (process.env.NODE_ENV !== undefined && process.env.NODE_ENV.trim() === 'dev') {
      window.webContents.openDevTools()
    }
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q

  if (process.platform !== 'darwin') {
    app.quit()
  }
})
