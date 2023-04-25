import { Box, Text, Grid } from "@chakra-ui/react";
import HomeCard from "../components/homeCard";
import { data } from "../app/assets/cardData";

export default function SectionThree() {
  return (
    <Box align="center" bg="#edecef">
      <Box
        py="45px"
        pb="70px"
        bg="#edecef"
        color="ame.100"
        maxW="1170px"
        px="5px"
      >
        <Box fontSize="32px">
          <Text fontWeight="bold" display="inline">
            METAL FABRICATION{" "}
          </Text>
          <Text display="inline">Services</Text>
        </Box>
        <Box fontSize="16px" color="#757881" maxW="430px" pb="30px" pt="5px">
          Our wide range of metal fabrication capabilities, fabricating
          partners, and advanced technology ensures that your project is in good
          hands.
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(3, 1fr)",
          }}
          gap={1}
        >
          {data.map((card, index) => {
            return (
              <HomeCard
                image={card.image}
                title={card.title}
                details={card.details}
                key={`card${index}`}
              />
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
