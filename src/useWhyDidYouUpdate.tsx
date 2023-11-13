import { useRef, useEffect } from "react";

export function useWhyDidYouUpdate<T extends Record<string, unknown>>(
  name: string,
  props: T
) {
  const previousProps = useRef<T | undefined>();

  useEffect(() => {
    if (previousProps.current) {
      const allKeys: Array<keyof T> = Object.keys({
        ...previousProps.current,
        ...props
      }) as Array<keyof T>;

      const changesObj: Partial<
        { [K in keyof T]: { from: T[K]; to: T[K] } }
      > = {};

      allKeys.forEach((key) => {
        if (
          previousProps.current &&
          previousProps.current[key] !== props[key]
        ) {
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key]
          };
        }
      });

      if (Object.keys(changesObj).length) {
        console.log("[why-did-you-update] - component:", name);
        console.table(changesObj);
      }
    }

    previousProps.current = props;
  });
}
