import { PropaneSharp, Style } from "@mui/icons-material";
import {
  alpha,
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

import { FlexBox, FlexColumn, List, StyledText } from "./styled/style";
import { motion } from "framer-motion";

interface IProps {
  ref?: any;
}
export const WorkComponent: React.FC<IProps> = ({ ref }: IProps) => {
  return (
    <>
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 1, sm: 3 },
        }}
      >
        <Box
          width={1}
          display={"flex"}
          // sx={{
          //   width: { sm: "100%", md: "60%", lg: "100%" },
          //   textAlign: { sm: "left", md: "center" },
          // }}
          justifyContent={"center"}
        >
          <StyledText tag="h1"> Work Experience</StyledText>
        </Box>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ stiffness: 400 }}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                  boxShadow: `0 0 12px 8px ${alpha("#9CCCFC", 0.2)}  `,
                  pr: 1,
                  outlineColor: alpha("#BFCCD9", 0.5),

                  background: " ##F0F7FF",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    pr: 2,
                  }}
                ></Box>
                <CardContent>
                  <FlexBox width={1} justifyContent={"space-between"}>
                    <FlexColumn>
                      <Box>
                        <StyledText tag="subtitle" color="black">
                          {" "}
                          AppKnit
                        </StyledText>
                      </Box>
                    </FlexColumn>

                    <FlexColumn>
                      <StyledText tag="p2" color="text.secondary">
                        Oct 2020 to Present
                      </StyledText>
                    </FlexColumn>
                  </FlexBox>
                  <FlexBox width={1} justifyContent={"space-between"}>
                    <Box>
                      <StyledText tag="h3" color="#55555">
                        Frontend Developer
                      </StyledText>
                    </Box>
                    <Box>
                      <StyledText tag="p2" color="text.secondary">
                        Bengaluru, Karnataka
                      </StyledText>
                    </Box>
                  </FlexBox>

                  <Box mt={2}>
                    <List>
                      AppKnit is a no-code enterprise app development platform
                      to build for businesses.
                    </List>
                    <List>
                      Collaborated with cross-functional teams to design,
                      develop and maintain responsive web applications.
                    </List>
                    <List>
                      Designed and styled user interface using Styled Components
                      ensuring consistency and maintainability.
                    </List>
                    <List>
                      Developed and Maintained complex web applications using
                      React and Next js, ensuring optimal performance and user
                      experience.
                    </List>
                    <List>
                      Developed and Maintained complex web applications using
                      React and Next js, ensuring optimal performance and user
                      experience.
                    </List>
                    <List>
                      Integrated Graph QL for efficient data retrieval and
                      manipulation, enhancing application performance.
                    </List>
                    <List>
                      Collaborated with senior developers to learn best
                      practices in web development.
                    </List>
                  </Box>

                  <Box
                    width={1}
                    display={"flex"}
                    sx={{
                      width: { sm: "100%", md: "60%", lg: "100%" },
                      textAlign: { sm: "left", md: "center" },
                      py: 2,
                    }}
                  >
                    {/* <Typography variant="h5" color="text.primary">
                      Tech&nbsp;
                    </Typography>
                    <Typography
                      component="span"
                      variant="h5"
                      sx={{
                        color: (theme) =>
                          theme.palette.mode === "light"
                            ? "primary.main"
                            : "primary.light",
                      }}
                    >
                      Stack
                    </Typography> */}
                  </Box>
                  {/* <Box
                    sx={{
                      color: (theme) =>
                        theme.palette.mode === "light" ? gray[600] : gray[400],
                    }}
                  >
                    <List>React JS</List>
                    <List>Next JS</List>
                    <List>Material UI</List>
                    <List>Nest JS</List>
                    <List>Neo4J</List>
                    <List>Graphql</List>
                  </Box> */}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </>
  );
};
