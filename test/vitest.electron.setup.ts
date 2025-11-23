import { beforeAll, beforeEach } from 'vitest';

import {
  mockElectron,
  mockIpcMainHandle,
  mockIpcRendererInvoke,
} from 'electron-mock/vitest';

beforeAll(() => {
  mockElectron();
  mockIpcMainHandle();
});

beforeEach(() => {
  mockIpcRendererInvoke();
});
