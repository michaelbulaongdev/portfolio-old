import { Slide, useScrollTrigger } from "@mui/material";

export default function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    </>
  );
}
