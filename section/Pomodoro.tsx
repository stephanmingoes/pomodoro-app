import React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import ActionButtons from "../components/ActionButtons";
import { flexDisplayCol } from "../inlineStyles";
import { Mode } from "../Interface";
import Settings from "../components/Settings";

import Timer from "../components/Timer";
import { Typography, Card, CardContent, CardActions } from "@mui/material";
const Pomodoro = () => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState<Mode>(Mode.WORK);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  function tick(): void {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }
  const switchMode = useCallback(() => {
    const nextMode = modeRef.current === Mode.WORK ? Mode.BREAK : Mode.WORK;
    const nextSeconds =
      nextMode === Mode.WORK ? workMinutes * 60 : breakMinutes * 60;

    setMode(nextMode);
    modeRef.current = nextMode;
    setSecondsLeft(nextSeconds);
    secondsLeftRef.current = nextSeconds;
  }, [breakMinutes, workMinutes]);

  useEffect(() => {
    secondsLeftRef.current = workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);
    const interval = setInterval(() => {
      if (isPausedRef.current) return;
      if (secondsLeftRef.current === 0) switchMode();
      tick();
    }, 1000);

    return () => clearInterval(interval);
  }, [workMinutes, switchMode]);

  return (
    <>
      <Typography gutterBottom variant="h4">
        Pomodoro App
      </Typography>
      <Card
        className="card-container-custom"
        sx={{
          ...flexDisplayCol,
          color: "#fff",
          backgroundColor: "#36393c",
        }}
      >
        <CardContent sx={flexDisplayCol}>
          <Settings
            workMinutes={workMinutes}
            setWorkMinutes={setWorkMinutes}
            breakMinutes={breakMinutes}
            setBreakMinutes={setBreakMinutes}
          />
          <Timer
            mode={mode}
            minutes={minutes.toString()}
            seconds={seconds < 10 ? seconds + "0" : seconds.toString()}
          />
        </CardContent>
        <CardActions sx={{ marginBottom: "1rem" }}>
          <ActionButtons
            switchMode={switchMode}
            isPausedRef={isPausedRef}
            setIsPaused={setIsPaused}
            isPaused={isPaused}
          />
        </CardActions>
      </Card>
    </>
  );
};

export default Pomodoro;
