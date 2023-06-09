"use client";
import { Box } from "@chakra-ui/react";
import SectionOne from "../HomeSections/SectionOne";
import SectionTwo from "../HomeSections/SectionTwo";
import SectionThree from "../HomeSections/SectionThree";
import SectionFour from "../HomeSections/SectionFour";
import LastSection from "../HomeSections/LastSection";

export default function Home() {
  return (
    <Box>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <LastSection />
    </Box>
  );
}
