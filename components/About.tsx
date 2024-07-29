import { Container, Grid, alpha } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Image from "next/image";
import React from "react";

import { FlexBox, FlexColumn, StyledText } from "./styled/style";
import about from "../components/assets/about.png";
import experience from "../components/assets/experience.png";
import education from "../components/assets/education.png";
import styled from "styled-components";

interface IProps {
  title: string;
  skills: Array<any>;
}

const DetailContainer = styled.div`
  padding: 1.5rem;
  flex: 1;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 1px solid;
  border-color: rgb(163, 163, 163);
  text-align: center;
`;

export const About: React.FC = () => {
  return (
    <Grid
      container
      spacing={4}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      sx={{
        pl: { xs: 4 },
      }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        lg={4}
        md={6}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        textAlign={"center"}
      >
        <StyledText tag="p2">Get To Know More</StyledText>
        <StyledText tag="h1">About Me </StyledText>
      </Grid>
      <Grid
        container
        spacing={4}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          md={6}
          display={"flex"}
          justifyContent={"center"}
          sx={{
            pr: { xs: 4 },
            pl: { xs: 4 },
            width: { xs: "50%" },
          }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            sx={{
              pr: { xs: 4 },
              pl: { xs: 8 },
            }}
          >
            <Image
              src={about}
              alt=""
              width={350}
              height={400}
              style={{ borderRadius: "5px" }}
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={8}
          md={6}
          style={{ gap: 4 }}
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <FlexBox p={3}>
            <DetailContainer
              style={{
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}  `,
                outlineColor: alpha("#BFCCD9", 0.5),
                background: " ##F0F7FF",
              }}
            >
              <Image
                src={experience}
                alt=""
                width={40}
                height={40}
                style={{ borderRadius: "5px" }}
              />
              <StyledText tag="subtitle">Experience</StyledText>
              <StyledText tag="p2">3+ years</StyledText>
              <StyledText tag="p2">Frontend Developer</StyledText>
            </DetailContainer>
            <DetailContainer
              style={{
                marginRight: "10px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                boxShadow: `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}  `,
                outlineColor: alpha("#BFCCD9", 0.5),
                background: " ##F0F7FF",
              }}
            >
              <Image
                src={education}
                alt=""
                width={40}
                height={40}
                style={{ borderRadius: "5px" }}
              />
              <StyledText tag="subtitle">Education</StyledText>
              <StyledText tag="p2">
                Diploma in computer science(2012-2015)
              </StyledText>
              <StyledText tag="p2">
                BE in Computer science (2015-2019)
              </StyledText>
            </DetailContainer>
          </FlexBox>
          <Box m={4}>
            <StyledText tag="p2">
              Software Developer with proven experience at Appknit Technologies
              Private Limited in helping company create and maintain a better
              code base for reusability. Passionate about learning and
              development with a desire to apply skills on a larger development
              team. Eager to expand my skill set while actively contributing to
              the organization&apos;s growth and advancement
            </StyledText>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
