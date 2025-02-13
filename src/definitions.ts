export interface PosTcpSocketPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
