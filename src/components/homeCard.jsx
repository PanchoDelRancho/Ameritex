import { Card, Image, Box, GridItem } from "@chakra-ui/react";

export default function HomeCard({ image, title, details }) {
  return (
    <GridItem>
      <Card
        bg="ame.200"
        color="ame.100"
        maxW={{ base: "350px", sm: "350px", md: "100vw" }}
        m="3px"
        h="99%"
        borderRadius="0"
      >
        <Image src={image} alt="this" />
        <Box p="15px 15px 16px 15px">
          <Box fontSize="26px" fontWeight="bold">
            {title}
          </Box>
          <Box fontSize="16px" color="#757881">
            {details}
          </Box>
        </Box>
      </Card>
    </GridItem>
  );
}
