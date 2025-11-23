import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';

import { electronVitestMock, resetIpcHandleMock } from 'electron-mock/vitest';

import { electronIpc } from '@/electron/ipc/mainProcess/electronIpc';

import { ElectronIpcMain } from '@/electron/ipcMain/electronIpcMain';

const mockWindow = electronVitestMock.BrowserWindow;
const mockApp = electronVitestMock.app;

beforeAll(() => {
  new ElectronIpcMain(mockWindow as unknown as Electron.BrowserWindow);
});

afterAll(() => {
  resetIpcHandleMock();
});

describe('ElectronIpcMain', () => {
  it('GET_APP_VERSION', async () => {
    mockApp.getVersion.mockReturnValue('1.0.0');

    const result = await electronIpc.getAppVersion();

    expect(result).toBe('1.0.0');
  });
});
