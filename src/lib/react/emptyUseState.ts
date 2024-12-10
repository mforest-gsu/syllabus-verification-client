import type { UseState } from "./types";

export default function emptyUseState<T>(empty: T): UseState<T> {
  return [empty, (): void => void 0];
}
