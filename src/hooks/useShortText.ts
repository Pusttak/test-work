import { useMemo } from "react";

export const useShortText = (str: string): string => {
  const result = useMemo(() => {
    if (str.length > 100) {
      return str.slice(0, 100) + "...";
    }
    return str;
  }, [str]);

  return result;
};
