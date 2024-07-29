import { Box, Container, Grid, Typography, alpha } from "@mui/material";
import React from "react";
import { FlexBox, FlexColumn, StyledText } from "./styled/style";
import { styled } from "styled-components";
import Image from "next/image";
import checkmark from "../components/assets/checkmark.png";
import { motion } from "framer-motion";

const DetailContainer = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  border-radius: 2rem;
  border-color: rgb(163, 163, 163);
  text-align: center;
`;
const ListContainer = styled(FlexBox)`
  text-align: initial;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-around;
`;

const List = styled(FlexBox)`
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 10rem;
`;

const Text = styled(Typography)`
  font-size: larger;
  font-weight: 600;
  color: black;
`;

export const SkillsComponent: React.FC = () => {
  return (
    <Container
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        display: "flex",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <FlexColumn alignItems={"center"} height={"fit-content"}>
        <StyledText tag="p2">Explore My</StyledText>
        <StyledText tag="h1">Experience</StyledText>
      </FlexColumn>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ stiffness: 400 }}
          >
            <DetailContainer
              style={{
                boxShadow: `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}  `,
                outlineColor: alpha("#BFCCD9", 0.5),
                background: " ##F0F7FF",
              }}
            >
              <FlexColumn>
                <Box m={2}>
                  <StyledText tag="h2">Frontend Development</StyledText>
                </Box>

                <ListContainer>
                  <List>
                    <div>
                      <Image src={checkmark} width={30} height={30} alt="" />
                    </div>
                    <div style={{ margin: 0 }}>
                      <Text
                        variant="subtitle1"
                        color={"black"}
                        sx={{ fontSize: "1.17em" }}
                      >
                        HTML
                      </Text>
                      <>Advanced </>
                    </div>
                  </List>
                  <List>
                    <div>
                      <Image src={checkmark} width={30} height={30} alt="" />
                    </div>
                    <div style={{ margin: 0 }}>
                      <Text variant="subtitle1">CSS</Text>
                      <>Advanced </>
                    </div>
                  </List>
                  <List>
                    <div>
                      <Image src={checkmark} width={30} height={30} alt="" />
                    </div>
                    <div style={{ margin: 0 }}>
                      <Text variant="subtitle1">CSS</Text>
                      <>Advanced </>
                    </div>
                  </List>
                  <List>
                    <div>
                      <Image src={checkmark} width={30} height={30} alt="" />
                    </div>
                    <div style={{ margin: 0 }}>
                      <Text variant="subtitle1">JavaScript</Text>
                      <>Advanced </>
                    </div>
                  </List>
                  <List>
                    <div>
                      <Image src={checkmark} width={30} height={30} alt="" />
                    </div>
                    <div style={{ margin: 0 }}>
                      <Text variant="subtitle1">TypeScript</Text>
                      <>Advanced </>
                    </div>
                  </List>{" "}
                  <List>
                    <div>
                      <Image src={checkmark} width={30} height={30} alt="" />
                    </div>
                    <div style={{ margin: 0 }}>
                      <Text variant="subtitle1">React JS</Text>
                      <>Advanced </>
                    </div>
                  </List>{" "}
                  <List>
                    <div>
                      <Image src={checkmark} width={30} height={30} alt="" />
                    </div>
                    <div style={{ margin: 0 }}>
                      <Text variant="subtitle1">Next JS</Text>
                      <>Advanced </>
                    </div>
                  </List>{" "}
                  <List>
                    <div>
                      <Image src={checkmark} width={30} height={30} alt="" />
                    </div>
                    <div style={{ margin: 0 }}>
                      <Text variant="subtitle1">Material UI</Text>
                      <>Advanced </>
                    </div>
                  </List>{" "}
                </ListContainer>
              </FlexColumn>
            </DetailContainer>
          </motion.div>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ stiffness: 400 }}
          >
            <DetailContainer
              style={{
                minHeight: "380px",
                boxShadow: `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}  `,
                outlineColor: alpha("#BFCCD9", 0.5),
                background: " ##F0F7FF",
              }}
            >
              <FlexColumn>
                <Box m={2}>
                  <StyledText tag="h2">Backend Development</StyledText>
                </Box>

                <ListContainer>
                  <List>
                    <div>
                      <Image src={checkmark} width={30} height={30} alt="" />
                    </div>
                    <div style={{ margin: 0 }}>
                      <Text variant="subtitle1">Node JS</Text>
                      <>Intermediate </>
                    </div>
                  </List>
                  <List>
                    <div>
                      <Image src={checkmark} width={30} height={30} alt="" />
                    </div>
                    <div style={{ margin: 0 }}>
                      <Text variant="subtitle1">Express JS</Text>
                      <>Intermediate </>
                    </div>
                  </List>
                  <List>
                    <div>
                      <Image src={checkmark} width={30} height={30} alt="" />
                    </div>
                    <div style={{ margin: 0 }}>
                      <Text variant="subtitle1">Nest JS</Text>
                      <>Intermediate </>
                    </div>
                  </List>
                  <List>
                    <div>
                      <Image src={checkmark} width={30} height={30} alt="" />
                    </div>
                    <div style={{ margin: 0 }}>
                      <Text variant="subtitle1">Mongo DB</Text>
                      <>Intermediate </>
                    </div>
                  </List>
                </ListContainer>
              </FlexColumn>
            </DetailContainer>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};
