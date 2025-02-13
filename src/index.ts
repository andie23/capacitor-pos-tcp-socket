import { registerPlugin } from '@capacitor/core';

import type { PosTcpSocketPlugin } from './definitions';

const PosTcpSocket = registerPlugin<PosTcpSocketPlugin>('PosTcpSocket', {
  web: () => import('./web').then((m) => new m.PosTcpSocketWeb()),
});

export * from './definitions';
export { PosTcpSocket };
