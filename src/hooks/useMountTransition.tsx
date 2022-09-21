import { useEffect, useState } from "react";

export default function useMountTransition(isMounted: Boolean, unmountDelay: number): Boolean {
    const [hasTransitionedIn, setHasTransitionedIn] = useState<Boolean>(false);
  
    useEffect(() => {
      let timeoutId: number;
  
      if (isMounted && !hasTransitionedIn) {
        setHasTransitionedIn(true);
      } else if (!isMounted && hasTransitionedIn) {
        timeoutId = setTimeout(() => setHasTransitionedIn(false), unmountDelay);
      }
  
      return () => {
        clearTimeout(timeoutId);
      }
    }, [unmountDelay, isMounted, hasTransitionedIn]);
  
    return hasTransitionedIn;
  }