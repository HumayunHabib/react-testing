import { useEffect, useState } from "react";

const useHover = (node) => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    if (node) {
      node.addEventListener("mouseover", () => {
        setOn(true);
      });
      node.addEventListener("mouseout", () => {
        setOn(false);
      });
    }
  }, [node]);

  return on;
};
export default useHover;
