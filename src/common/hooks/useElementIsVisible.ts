import * as React from 'react';

type Props = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
  initialValue?: boolean;
};

const useElementIsVisible = ({
  root = null,
  rootMargin,
  threshold,
  initialValue = true,
}: Props = {}) => {
  const options = { root, rootMargin, threshold };
  const targetRef = React.useRef(null);
  const [isTargetVisible, setIsTargetVisible] = React.useState(initialValue);
  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setIsTargetVisible(entry.isIntersecting);
  };

  React.useEffect(() => {
    try {
      const observer = new IntersectionObserver(callback, options);
      if (targetRef.current) observer.observe(targetRef.current);
      return () => {
        if (targetRef.current) observer.unobserve(targetRef.current);
      };
    } catch (error) {
      console.error(error);
      return;
    }
  }, [targetRef, options]);

  return { targetRef, isTargetVisible };
};

export default useElementIsVisible;
