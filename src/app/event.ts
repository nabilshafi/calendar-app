export interface EventInput {
  start: number;
  end: number;
}

export interface EventOutput {
  name: string;
  location: string;
  duration: bigint;
  start: bigint;
  end: bigint;
}
