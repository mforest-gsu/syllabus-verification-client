import type { UseStorage } from "./types";
import { useState } from "react";

export default function useStorage<T>(
  key: string,
  initialValue: (() => T) | T,
  storage: Storage = window.localStorage
): UseStorage<T> {
  const [stateValue, setStateValue] = useState<T>(() => {
    const storeValue = getStorageValue<T>(storage, key);
    const initValue =
      initialValue instanceof Function ? initialValue() : initialValue;
    if (!storeValue) {
      setStorageValue(storage, key, initValue);
    }
    return getStorageValue<T>(storage, key) ?? initValue;
  });

  return [
    stateValue,
    (value: T | ((prev: T) => T)) => {
      setStateValue((prev) => {
        setStorageValue(
          storage,
          key,
          value instanceof Function ? value(prev) : value
        );
        return getStorageValue<T>(storage, key) ?? prev;
      });
    },
    () => storage.removeItem(key),
  ];
}

function getStorageValue<T>(storage: Storage, key: string): T | null {
  try {
    const item = storage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    return null;
  }
}

function setStorageValue<T>(storage: Storage, key: string, value: T | null) {
  if (value === null) {
    storage.removeItem(key);
  } else {
    storage.setItem(key, JSON.stringify(value));
  }
}
