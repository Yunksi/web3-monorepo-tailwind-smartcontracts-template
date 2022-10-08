// src/hooks/use-is-mounted.ts
import { useEffect, useState } from "react";
function useIsMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
export {
  useIsMounted
};
