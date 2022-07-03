import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from "@mui/icons-material/Pause";
// import "../sounds/ding.m4a";
import { ActionButtonProps } from "../Interface";

const ActionButtons = ({
  switchMode,
  isPausedRef,
  setIsPaused,
  isPaused,
}: ActionButtonProps) => {
  return (
    <>
      {isPaused ? (
        <Button
          sx={{
            color: "#fff",
            border: "transparent",
            backgroundColor: "#1A1D21",
          }}
          variant="contained"
          onClick={() => {
            setIsPaused(false);
            isPausedRef.current = false;
          }}
        >
          {" "}
          <PlayArrowIcon />{" "}
        </Button>
      ) : (
        <Button
          sx={{
            color: "#fff",
            border: "transparent",
            backgroundColor: "#1A1D21",
          }}
          variant="contained"
          onClick={() => {
            setIsPaused(true);
            isPausedRef.current = true;
          }}
        >
          <PauseIcon />{" "}
        </Button>
      )}

      <Button
        sx={{
          color: "#fff",
          border: "transparent",
          backgroundColor: "#1A1D21",
        }}
        variant="contained"
        onClick={() => {
          setIsPaused(true);
          isPausedRef.current = true;
          switchMode();
        }}
      >
        <SkipNextIcon />
      </Button>
    </>
  );
};

export default ActionButtons;
