import type { Dispatch, ReactNode, SetStateAction } from "react";

export type { Dispatch, ReactNode, SetStateAction };

export type DispatchSetStateAction<T> = Dispatch<SetStateAction<T>>;

export type UseState<T> = [T, DispatchSetStateAction<T>];

export type UseStorage<T> = [...UseState<T>, () => void];

export type WithChildrenProps = {
  children?: ReactNode;
};
