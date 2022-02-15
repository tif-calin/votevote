import React from 'react';
import useLocalStorage from './useLocalStorage';

const useRoster = (arr: string[] = [], initiallySelected = '') => {
  const [roster, setRoster] = useLocalStorage<string[]>('votevote_candidateroster', arr.sort());
  const [selected, setSelected] = React.useState<string>(initiallySelected);

  const add = React.useCallback((item = selected) => {
    setRoster(current => current.includes(item)
      ? current
      : [...current, item ].sort()
    );
  }, [selected, setRoster]);

  const clear = React.useCallback(() => setRoster([]), [setRoster]);

  const remove = React.useCallback((item: string) => {
    setRoster(roster => roster.filter(i => i !== item));
  }, [setRoster]);

  const reset = React.useCallback((arr) => setRoster(arr), [setRoster]);

  return {
    roster, add, clear, remove, reset,
    selected, setSelected
  };
};

const useWeightedRoster = (initialRoster = {}, initialSelected = '') => {
  const [roster, setRoster] = useLocalStorage<{ [key: string]: number }>('votevote_weightedroster', initialRoster);
  const [selected, setSelected] = React.useState<string>(initialSelected);
  const [selectedN, setSelectedN] = React.useState<number>(1);

  const add = React.useCallback((item = selected, n = selectedN) => {
    setRoster(current => ({ ...current, [item]: ~~current[item] + n }));
  }, [selected, selectedN, setRoster]);

  const setN = React.useCallback((item: string, n: number) => {
    setRoster(current => ({ ...current, [item]: n }));
  }, [setRoster]);

  const clear = React.useCallback(() => setRoster({}), [setRoster]);

  const reset = React.useCallback((roster) => setRoster(roster), [setRoster]);

  return {
    roster, add, setN, clear, reset,
    selected, setSelected,
    selectedN, setSelectedN,
  };
};

export default useRoster;
export { useWeightedRoster };
