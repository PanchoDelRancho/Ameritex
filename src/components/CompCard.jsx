import { Box, Image } from "@chakra-ui/react";

export default function CompCard({ src }) {
  return (
    <Box bg="ame.200">
      <Image src={src} alt="company" p="30px 5px" />
    </Box>
  );
}
