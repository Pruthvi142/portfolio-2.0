"use client";
import { About } from "@/components/About";
import { ContactComponent } from "@/components/Contact";
import { HomePage } from "@/components/HomePage";
import { DrawerAppBar } from "@/components/Nav";
import { SkillsComponent } from "@/components/Skills";
import { FlexBox } from "@/components/styled/style";
import { WorkComponent } from "@/components/Works";

import Box from "@mui/material/Box/Box";

import React from "react";
import { useRef } from "react";

export default function Home() {
  const workRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  const handleNavItemClick = (item: string) => {
    let scrollObject = {};
    switch (item) {
      case "Home":
        scrollObject = {
          top: 0,
          behavior: "smooth",
        };
        break;
      case "About":
        scrollObject = {
          top: aboutRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;
      case "Work":
        scrollObject = {
          top: workRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "Skills":
        scrollObject = {
          top: skillsRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      case "Contact":
        scrollObject = {
          top: contactRef.current?.offsetTop! - 70,
          behavior: "smooth",
        };
        break;

      default:
        break;
    }

    window.scrollTo(scrollObject);
  };

  return (
    <>
      <Box sx={{ bgcolor: "background.default" }}>
        <DrawerAppBar onNavItemClick={handleNavItemClick} />
        <Box
          sx={(theme) => ({
            width: "100%",

            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          })}
        >
          <HomePage />
        </Box>

        <Box
          ref={aboutRef}
          sx={{
            alignItems: "center",

            display: "flex",
          }}
        >
          <About />
        </Box>

        <Box
          ref={workRef}
          sx={{
            alignItems: "center",
            height: "100vh",
            display: "flex",
          }}
        >
          <WorkComponent />
        </Box>

        <Box
          ref={skillsRef}
          sx={{
            gap: { xs: 6, sm: 6, lg: 0 },
          }}
          px={2}
        >
          <SkillsComponent />
        </Box>

        <FlexBox
          ref={contactRef}
          justifyContent={"center"}
          height={"100vh"}
          alignItems={"center"}
          alignContent={"center"}
          sx={{
            gap: { xs: 6, sm: 6, lg: 0 },
          }}
          px={2}
        >
          <ContactComponent />
        </FlexBox>
      </Box>
    </>
  );
}
