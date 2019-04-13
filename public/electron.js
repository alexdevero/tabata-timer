const { app, BrowserWindow, shell, ipcMain, Menu, TouchBar } = require('electron')

const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow

createWindow = () => {
	mainWindow = new BrowserWindow({
		backgroundColor: '#F7F7F7',
		minWidth: 880,
		show: false,
		titleBarStyle: 'hidden',
		webPreferences: {
			nodeIntegration: false
		},
		height: 860,
		width: 1280
	})

	mainWindow.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`
	)

	if (isDev) {
    console.log('isdev')
		const {
			default: installExtension,
			REACT_DEVELOPER_TOOLS
		} = require('electron-devtools-installer')

		installExtension(REACT_DEVELOPER_TOOLS)
			.then(name => {
				console.log(`Added Extension: ${name}`)
			})
			.catch(err => {
				console.log('An error occurred: ', err)
			})
	}

	mainWindow.once('ready-to-show', () => {
		mainWindow.show()

		ipcMain.on('open-external-window', (event, arg) => {
			shell.openExternal(arg)
		})
	})
}

generateMenu = () => {
	const template = [
		{
			label: 'File',
			submenu: [{ role: 'about' }, { role: 'quit' }]
		},
		{
			label: 'Edit',
			submenu: [
				{ role: 'undo' },
				{ role: 'redo' },
				{ type: 'separator' },
				{ role: 'cut' },
				{ role: 'copy' },
				{ role: 'paste' },
				{ role: 'pasteandmatchstyle' },
				{ role: 'delete' },
				{ role: 'selectall' }
			]
		},
		{
			label: 'View',
			submenu: [
				{ role: 'reload' },
				{ role: 'forcereload' },
				{ role: 'toggledevtools' },
				{ type: 'separator' },
				{ role: 'resetzoom' },
				{ role: 'zoomin' },
				{ role: 'zoomout' },
				{ type: 'separator' },
				{ role: 'togglefullscreen' }
			]
		},
		{
			role: 'window',
			submenu: [{ role: 'minimize' }, { role: 'close' }]
		}
	]

	Menu.setApplicationMenu(Menu.buildFromTemplate(template))
}

app.on('ready', () => {
	createWindow()
	generateMenu()
})

app.on('window-all-closed', () => {
	app.quit()
})

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow()
	}
})

ipcMain.on('load-page', (event, arg) => {
	mainWindow.loadURL(arg)
})
