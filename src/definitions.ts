export interface SocketParams {
  host: string;
  port: number;
  base64BinaryData: string;
}

export interface PosTcpSocketPlugin {
  sendToSocket(options: SocketParams): Promise<void>;
}
