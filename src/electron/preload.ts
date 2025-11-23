// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import { contextBridge } from 'electron';

import { electronIpc } from '@/electron/ipc/mainProcess/electronIpc';

const rendererListeners: { apiKey: string; api: any }[] = [
  // Renderer Process to Main Process

  { apiKey: 'electron', api: electronIpc },
];

for (let i = 0; i < rendererListeners.length; i++) {
  const { apiKey, api } = rendererListeners[i];

  contextBridge.exposeInMainWorld(apiKey, api);
}
