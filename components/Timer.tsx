import { TimerDisplayProps } from "../Interface";
import { Mode } from "../Interface";
import { Typography } from "@mui/material";

export default function Timer({ minutes, seconds, mode }: TimerDisplayProps) {
  return (
    <Typography
      variant={"h1"}
      sx={{ color: mode === Mode.WORK ? "#ff4f4f" : "#65ff6f" }}
      gutterBottom
    >
      {minutes}:{seconds}
    </Typography>
  );
}
