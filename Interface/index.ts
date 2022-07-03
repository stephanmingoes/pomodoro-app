import { MutableRefObject } from "react";
export enum Mode {
  BREAK,
  WORK,
}
export interface TimerProps {
  workMinutes: number;
  breakMinutes: number;
}

export interface TimerDisplayProps {
  minutes: string;
  seconds: string;
  mode: Mode;
}

export interface ActionButtonProps {
  isPausedRef: MutableRefObject<boolean>;
  isPaused: boolean;
  setIsPaused: Function;
  switchMode: Function;
}
export interface SettingProps extends TimerProps {
  setWorkMinutes: Function;
  setBreakMinutes: Function;
}

export interface SliderProps {
  name: String;
  state: number;
  setState: Function;
  min: number;
  max: number;
  marks: { value: number; label: string }[];
  color?: string;
}
