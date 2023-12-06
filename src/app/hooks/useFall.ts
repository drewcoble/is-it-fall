import { useEffect, useState } from "react";

export default function useFall(): { isFall?: boolean; isLoading?: boolean } {
  const [month, setMonth] = useState<number>(0);
  const [day, setDay] = useState<number>(1);

  useEffect(() => {
    const today = new Date();
    setMonth(today.getMonth());
    setDay(today.getDate());
  }, []);

  // month is an array that starts at 0
  // 8 = Sept | 11 = Dec.
  const FALL_START = { month: 8, day: 23 };
  const FALL_END = { month: 10, day: 20 };

  switch (month) {
    case 3:
      return { isFall: day == 1 }; //April Fool's Day
    case 8:
      return { isFall: day >= FALL_START.day };
    case 9:
    case 10:
      return { isFall: true };
    case 11:
      return { isFall: day <= FALL_END.day };
    default:
      return { isLoading: true };
  }
}
