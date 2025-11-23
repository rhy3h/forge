import { ipcMain, BrowserWindow, app } from 'electron';

import { GET_APP_VERSION } from '@/electron/ipc/mainProcess/electronIpc';

class ElectronIpcMain {
  constructor(mainWindow: BrowserWindow) {
    ipcMain.handle(GET_APP_VERSION, async (_event) => {
      const version = app.getVersion();

      return version;
    });
  }
}

export { ElectronIpcMain };
