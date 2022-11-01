export function setKeyboardDelay(ms: number): void;
export function keyTap(key: string, modifier?: string | string[]): void;
export function keyToggle(
  key: string,
  down: string,
  modifier?: string | string[]
): void;
export function typeString(string: string): void;
export function typeStringDelayed(string: string, cpm: number): void;
