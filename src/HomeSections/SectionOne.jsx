"use client";
import { Box, VStack, Text } from "@chakra-ui/react";

export default function SectionOne() {
  return (
    <Box
      backgroundImage="url(https://ameritex.wpengine.com/wp-content/uploads/2018/08/main-banner-1.jpg)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Box
        pt={{ base: "20px", sm: "20px", md: "45px" }}
        pb={{ base: "35px", sm: "35px", md: "130px" }}
        px={{
          base: "0",
          sm: "0",
          md: "0",
          lg: "0",
          xl: "10vw",
          "2xl": "18vw",
        }}
        backdropFilter="auto"
        backdropBrightness="60%"
      >
        <Box align="center" justify="center">
          <VStack>
            <Box fontSize="28px" pt="20px" m="0px">
              {" "}
              Custom Metal Fabrications
            </Box>
            <Box
              fontSize="42px"
              pb="20px"
              mt="0px !important"
              fontWeight="bold"
            >
              in a FRACTION OF THE TIME
            </Box>
            <Box fontSize="18px" px={{ base: "2vw", sm: "2vw", md: "12vw" }}>
              Our experienced personnel and advanced technology ensure you get
              your orders in record time.
            </Box>
            <Box
              as="a"
              w="200px"
              h="45px"
              bg="ame.300"
              fontSize="20px"
              p="10px"
              mt="22px !important"
              transition="background-color 0.3s ease-out"
              _hover={{ bg: "#353535", color: "ame.200" }}
            >
              Get a Quote
            </Box>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
