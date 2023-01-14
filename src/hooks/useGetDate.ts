import { useMemo } from "react";

export const useGetDate = (date: string): string => {
  const articleDate = useMemo(() => {
    const d = new Date(date);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "long" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "numeric" }).format(d);
    const lastChar = da.slice(-1);

    let suffix;
    if (lastChar === "1") {
      suffix = "st";
    } else if (lastChar === "2") {
      suffix = "nd";
    } else if (lastChar === "3") {
      suffix = "rd";
    } else {
      suffix = "th";
    }

    return `${mo} ${da}${suffix}, ${ye}`;
  }, [date]);

  return articleDate;
};
