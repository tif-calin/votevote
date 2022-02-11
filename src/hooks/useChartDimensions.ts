import React from 'react';
// import { ResizeObserver } from '@juggle/resize-observer';

const useChartDimensions = (settings: { [key: string]: any } = {}): [React.Ref<any>, { [dms: string]: number }] => {
  const containerRef = React.useRef<any>(null);

  const [width, setWidth] = React.useState<number>(0);
  const [height, setHeight] = React.useState<number>(0);
  
  React.useEffect(() => {
    // if width && height set manually, don't observe
    if (settings.width && settings.height) return () => {};

    // otherwise create an observer to get width/height 
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries?.length) {
        const [ entry ] = entries;

        if (width !== entry.contentRect.width) setWidth(Number(entry.contentRect.width));
        if (height !== entry.contentRect.height) setHeight(Number(entry.contentRect.height));
      }
    });

    const element = containerRef.current;
    if (element) {
      resizeObserver.observe(element);
      return () => resizeObserver.unobserve(element);
    }
  }, [settings.width, settings.height, height, width]);

  return [ containerRef, { width, height } ];
};

export default useChartDimensions;
