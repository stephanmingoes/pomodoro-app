import { SettingProps } from "../Interface";
import { Typography } from "@mui/material";
import SliderSetting from "./Slider";

const marks = [
  {
    value: 15,
    label: "15 min",
  },
  {
    value: 25,
    label: "25 min",
  },
  {
    value: 35,
    label: "35 min",
  },
  {
    value: 45,
    label: "45 min",
  },
];
const marks1 = [
  {
    value: 5,
    label: "5 min",
  },
  {
    value: 10,
    label: "10 min",
  },
  {
    value: 15,
    label: "15 min",
  },
];

export default function Settings({
  workMinutes,
  breakMinutes,
  setWorkMinutes,
  setBreakMinutes,
}: SettingProps) {
  return (
    <>
      <SliderSetting
        state={workMinutes}
        setState={setWorkMinutes}
        name="Work"
        min={15}
        max={45}
        marks={marks}
        color="#ff4f4f"
      />
      <SliderSetting
        state={breakMinutes}
        setState={setBreakMinutes}
        color="#65ff6f"
        name="Break"
        min={5}
        max={15}
        marks={marks1}
      />
      <Typography gutterBottom variant={"subtitle1"}>
        Study for {workMinutes} minutes rest for {breakMinutes} minutes
      </Typography>
    </>
  );
}
