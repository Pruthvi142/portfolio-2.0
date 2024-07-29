// import * as React from "react";
// import { alpha, Grid } from "@mui/material";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Container from "@mui/material/Container";
// import Stack from "@mui/material/Stack";
// import { FlexBox, StyledText } from "./styled/style";
// import { GitHub } from "@mui/icons-material";
// import { LinkedIn } from "@mui/icons-material";
// import Link from "next/link";
// import { AnimatedTextCharacter } from "./AnimatedText";

// export const HomePage: React.FC = () => {
//   const onButtonClick = () => {
//     const pdfUrl = "pruthvirajCV.pdf";
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "pruthvirajCV.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <Box>
//       <Container
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           alignContent: "center",
//           pt: { xs: 14, sm: 20 },
//           pb: { xs: 8, sm: 12, lg: 25 },
//           width: { xs: "100%", sm: "100%" },
//         }}
//       >
//         <Grid container>
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={6}
//             lg={6}
//             display={"flex"}
//             justifyContent={"center"}
//           >
//             <img
//               width={600}
//               height={400}
//               src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
//               alt={""}
//             />
//           </Grid>
//           <Grid
//             item
//             xs={12}
//             sm={6}
//             md={6}
//             lg={6}
//             display={"flex"}
//             justifyContent={"center"}
//             alignItems={"center"}
//           >
//             <Stack
//               useFlexGap
//               sx={{
//                 pt: { xs: 14, sm: 20 },
//                 pb: { xs: 8, sm: 12, lg: 20 },
//               }}
//             >
//               <AnimatedTextCharacter text={"Hello I' m"} tag={"p1"} />
//               <AnimatedTextCharacter
//                 text={"Pruthviraj Haiyalkar"}
//                 color="black"
//                 tag={"h1"}
//               />
//               <AnimatedTextCharacter text={"Software Developer"} tag={"h2"} />

//               <FlexBox
//                 justifyContent={"center"}
//                 gap={2}
//                 alignItems={"center"}
//                 mt={1}
//               >
//                 <Button
//                   variant="outlined"
//                   style={{
//                     borderRadius: "20px",
//                   }}
//                   onClick={onButtonClick}
//                 >
//                   Download CV
//                 </Button>

//                 <Link href={"https://github.com/Pruthvi142"} target="_blank">
//                   <GitHub />
//                 </Link>
//                 <Link
//                   href={
//                     "https://www.linkedin.com/in/pruthviraj-haiyalkar-4a4846142"
//                   }
//                   target="_blank"
//                 >
//                   <LinkedIn
//                     color="primary"
//                     sx={{ width: "30px", height: "30px" }}
//                   />
//                 </Link>
//               </FlexBox>
//             </Stack>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

import * as React from "react";
import { alpha, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { FlexBox, StyledText } from "./styled/style";
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import Link from "next/link";

export const HomePage = () => {
  const onButtonClick = () => {
    const pdfUrl = "pruthvirajCV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "pruthvirajCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12, lg: 25 },
          width: { xs: "100%", sm: "100%" },
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <FlexBox alignItems={"center"} mt={4}>
              <img
                width={600}
                height={400}
                src="https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
              />
            </FlexBox>
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Stack
              useFlexGap
              sx={{
                width: { xs: "100%", sm: "100%" },
                pt: { xs: 14, sm: 20 },
                pb: { xs: 8, sm: 12, lg: 20 },
              }}
            >
              <StyledText tag="p1">Hello I' m</StyledText>
              <StyledText tag="h1">Pruthviraj Haiyalkar</StyledText>

              <StyledText tag="h2">Software&nbsp; Developer</StyledText>

              <FlexBox
                justifyContent={"center"}
                gap={2}
                alignItems={"center"}
                mt={1}
              >
                <Button
                  variant="outlined"
                  style={{
                    borderRadius: "20px",
                  }}
                  onClick={onButtonClick}
                >
                  <StyledText
                    tag={"p1"}
                    // style={{ color: "black", fontWeight: "600" }}
                  >
                    Download CV
                  </StyledText>
                </Button>

                <Link href={"https://github.com/Pruthvi142"} target="_blank">
                  <GitHub />
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/in/pruthviraj-haiyalkar-4a4846142"
                  }
                  target="_blank"
                >
                  <LinkedIn
                    color="primary"
                    sx={{ width: "30px", height: "30px" }}
                  />
                </Link>
              </FlexBox>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
