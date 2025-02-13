import { WebPlugin } from '@capacitor/core';

import type { PosTcpSocketPlugin } from './definitions';

export class PosTcpSocketWeb extends WebPlugin implements PosTcpSocketPlugin {
  async sendToSocket(options: any): Promise<void> {
    (() => options)(); // Just to make linter shutup
    throw new Error('Printer communication Protocol not supported on web');
  }
}
