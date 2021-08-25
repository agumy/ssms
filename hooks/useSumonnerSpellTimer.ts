import { useRef, useState } from "react";

export const useSummonerSpellTimer = (timer: number) => {
  const [time, setTime] = useState(timer);
  const id = useRef<NodeJS.Timer | null>(null);

  const start = () => {
    id.current = setInterval(() => {
      setTime((time) => {
        if (time < 0) {
          return timer;
        }
        return time - 1;
      });
    }, 1000);
  };

  const reset = () => {
    if (id.current) {
      clearInterval(id.current);
    }
    setTime(timer);
  };

  return { time, start, reset };
};
