import { Box, Grid } from "@chakra-ui/react";
import { compData } from "../app/assets/compData";
import CompCard from "../components/CompCard";

export default function LastSection() {
  return (
    <Box align="center" bg="#edecef">
      <Box
        py="45px"
        bg="#edecef"
        color="ame.100"
        maxW="1170px"
        px={{ base: "0px", sm: "15px", md: "25px" }}
        textAlign="left"
      >
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(5, 1fr)",
          }}
          gap={1}
        >
          {compData.map((src, index) => {
            return <CompCard src={src} key={`comp${index}`} />;
          })}
        </Grid>
      </Box>
    </Box>
  );
}
