import React from 'react';

/* inspired by https://usehooks.com/useLocalStorage */
const useLocalStorage = <T,>(key: string, initialValue: T) => {
  const [stateValue, setStateValue] = React.useState<T>(() => {
    try {
      const stored = window?.localStorage?.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setStoredValue = (newValue: T | ((val: T) => T)) => {
    try {
      const valueToStore = newValue instanceof Function
        ? newValue(stateValue)
        : newValue
      ;
      setStateValue(newValue);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };

  return [stateValue, setStoredValue] as const;
};

export default useLocalStorage;
