import React from "react";
import gamil from "../components/assets/gmail.webp";
import Image from "next/image";
import { FlexBox, FlexColumn, StyledText } from "./styled/style";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Link from "next/link";
import styled from "styled-components";
import eamil from "../components/assets/email.png";
import linkedin2 from "../components/assets/linkedin2.png";

const Footer = styled(FlexBox)`
  margin: 4rem;
`;
const ContactBox = styled(FlexBox)`
  justify-content: center;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  margin: 4rem auto;
  padding: 1.5rem;
`;

export const ContactComponent: React.FC = () => {
  return (
    <FlexColumn>
      <FlexColumn alignItems={"center"} height={"fit-content"}>
        <StyledText tag="p2">Get in Touch</StyledText>
        <StyledText tag="h1">Contact Me</StyledText>
      </FlexColumn>
      <ContactBox alignItems={"center"} flexWrap={"wrap"}>
        <FlexBox justifyContent={"space-between"} width={1} flexWrap={"wrap"}>
          <FlexBox alignItems={"center"} mr={2}>
            <Image
              src={eamil}
              alt=""
              width={40}
              height={40}
              style={{ borderRadius: "5px" }}
            />
            <StyledText tag="p2">
              <Link
                href="mailto:haiyalkarpruthvi@gmail.com"
                style={{ color: "rgb(85, 85, 85)", textDecoration: "none" }}
              >
                haiyalkarpruthvi@gmail.com
              </Link>
            </StyledText>
          </FlexBox>
          <FlexBox alignItems={"center"} style={{ paddingLeft: "4px" }}>
            <Image src={linkedin2} alt="" width={30} height={30} />
            <StyledText tag="p2" style={{ marginLeft: "4px" }}>
              <Link
                href={
                  "https://www.linkedin.com/in/pruthviraj-haiyalkar-4a4846142"
                }
                target="_blank"
                style={{ color: "rgb(85, 85, 85)", textDecoration: "none" }}
              >
                Linked In
              </Link>
            </StyledText>
          </FlexBox>
        </FlexBox>
      </ContactBox>
      <Footer>
        Copyright © 2024 Pruthviraj Haiyalkar. All Rights Reserved.
      </Footer>
    </FlexColumn>
  );
};
