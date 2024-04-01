"use client";
import {
  AppProgressBar as ProgressBar,
  ProgressBarProps,
} from "next-nprogress-bar";

const Progressbar = ({ ...props }: ProgressBarProps) => {
  return <ProgressBar {...props} />;
};
export default Progressbar;
