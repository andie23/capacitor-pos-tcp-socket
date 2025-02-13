import { WebPlugin } from '@capacitor/core';

import type { PosTcpSocketPlugin } from './definitions';

export class PosTcpSocketWeb extends WebPlugin implements PosTcpSocketPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
