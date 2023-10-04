import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme, globalStyles } from "./stylesConfig";
import { Global } from "@emotion/core";
import { Box, Heading } from "@react-yuki/ui";
import Slider from "./Slider";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyles} />
      <Box p={4}>
        <Box>
          <Heading
            as="h1"
            color="orange.4"
            fontSize={13}
            m={0}
            my={4}
            fontWeight={1}
            textAlign="center"
          >
            Free Mode / No Fixed Positions - Example
          </Heading>
        </Box>
        <Box>
          <Slider
            params={{
              slidesPerView: 3,
              spaceBetween: 30,
              freeMode: true,
              pagination: {
                el: ".swiper-pagination",
                clickable: true
              }
            }}
          />
        </Box>
      </Box>
    </>
  </ThemeProvider>
);

export default App;
