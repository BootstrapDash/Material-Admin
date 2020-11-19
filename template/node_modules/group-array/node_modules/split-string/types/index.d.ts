// TypeScript Version: 3.0

export interface ASTNode {
  type: 'root' | 'bracket';
  nodes: ASTNode[];
  stash: string[];
}

export interface State {
  input: string;
  separator: string;
  stack: ASTNode[];
  bos(): boolean;
  eos(): boolean;
  prev(): string;
  next(): string;
}

export interface Options {
  brackets?: { [key: string]: string } | boolean;
  quotes?: string[] | boolean;
  separator?: string;
  strict?: boolean;
  keep?(value: string, state: State): boolean;
}

type SplitFunc = (state: State) => boolean;

declare function split(input: string, options?: Options | SplitFunc): string[];
declare function split(input: string, options: Options, fn: SplitFunc): string[];

export default split;
