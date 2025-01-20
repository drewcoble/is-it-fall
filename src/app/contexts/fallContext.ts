import { createContext } from "react";

export type IFallContext = {
  //   fallEnd: number;
  isFall?: boolean;
  //   isLoading?: boolean;
  //   nextFallStart: number;
  //   season?: string;
  //   refreshFall?: () => void;
  //   setFallEnd?: React.Dispatch<React.SetStateAction<number>>;
  setIsFall?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  //   setIsLoading?: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  //   setNextFallStart?: React.Dispatch<React.SetStateAction<number>>;
};

export const FallContext = createContext<IFallContext>({
  //   fallEnd: 0,
  //   nextFallStart: 0,
});
