import { ipcRenderer } from 'electron';

const ELECTRON_PREFIX = 'ELECTRON_';

export const GET_APP_VERSION = ELECTRON_PREFIX + 'GET_APP_VERSION';

export const electronIpc: ElectronIpc = {
  getAppVersion: () => ipcRenderer.invoke(GET_APP_VERSION),
};
