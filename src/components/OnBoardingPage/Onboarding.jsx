import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  FadeOut,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  Zoom,
  ZoomIn,
  ZoomOut,
} from "react-scroll-motion";

const Onboarding = (props) => {
  console.log(props);
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <span style={{ fontSize: "30px" }}>Welcome {props.user_name} 😀</span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={ZoomInScrollOut}>
          <span style={{ fontSize: "40px" }}>I'm Deep Parmar ✨</span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={FadeUp}>
          <span style={{ fontSize: "40px" }}>
            Welcome to XWITS DEVELOPERS PVT. LTD. ⛅️
          </span>
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span style={{ fontSize: "40px" }}>
            <Animator animation={MoveIn(-1000, 0)}>
              Hello {props.user_name} 👋🏻
            </Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Ravi Jadav -
            <Animator animation={MoveOut(1000, 0)}>
              Good to have you on Board ✋🏻
            </Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "40px" }}>
            Lets Begin the Journey to Development
          </span>
          <br />
          <span style={{ fontSize: "30px" }}>
            Welcome to the community of enthusiastic developers where love to
            documentation and code keeps us and client happy ❤️
          </span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Onboarding;
