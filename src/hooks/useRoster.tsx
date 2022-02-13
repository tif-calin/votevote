import React from 'react';

const useRoster = (arr: string[] = [], initiallySelected = '') => {
  const [roster, setRoster] = React.useState<string[]>(arr.sort());
  const [selected, setSelected] = React.useState<string>(initiallySelected);

  const add = React.useCallback((item = selected) => {
    setRoster(current => current.includes(item)
      ? current
      : [...current, item ].sort()
    );
  }, [selected]);

  const clear = React.useCallback(() => setRoster([]), []);

  const remove = React.useCallback((item: string) => {
    setRoster(roster => roster.filter(i => i !== item));
  }, []);

  return {
    roster, add, clear, remove,
    selected, setSelected
  };
};

const useWeightedRoster = (initialRoster = {}, initialSelected = '') => {
  const [roster, setRoster] = React.useState<{ [key: string]: number }>(initialRoster);
  const [selected, setSelected] = React.useState<string>(initialSelected);
  const [selectedN, setSelectedN] = React.useState<number>(1);

  const add = React.useCallback((item = selected, n = selectedN) => {
    setRoster(current => ({ ...current, [item]: ~~current[item] + n }));
  }, [selected, selectedN]);

  const setN = React.useCallback((item: string, n: number) => {
    setRoster(current => ({ ...current, [item]: n }));
  }, []);

  const clear = React.useCallback(() => setRoster({}), []);

  return {
    roster, add, setN, clear,
    selected, setSelected,
    selectedN, setSelectedN,
  };
};

export default useRoster;
export { useWeightedRoster };
