import { Slider, Typography } from "@mui/material";
import { SliderProps } from "../Interface";
import React from "react";

const SliderSetting = ({
  name,
  state,
  setState,
  min,
  max,
  marks,
  color,
}: SliderProps) => {
  const setSliderState = (event: Event, newValue: number | number[]) => {
    setState(newValue as number);
  };
  return (
    <>
      <Typography gutterBottom variant="overline">
        {name}
      </Typography>
      <Slider
        sx={{ margin: "0 0 2rem 0", color: color ? color : null }}
        value={state}
        onChange={setSliderState}
        // step={10}
        marks={marks}
        min={min}
        max={max}
      />
    </>
  );
};

export default SliderSetting;
