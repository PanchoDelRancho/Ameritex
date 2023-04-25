import { Box, Stack, Image } from "@chakra-ui/react";

export default function SectionTwo() {
  return (
    <Box align="center" bg="ame.200">
      <Box
        pt="60px"
        pb="70px"
        bg="ame.200"
        color="ame.100"
        maxW="1170px"
        px={{ base: "0px", sm: "0px", md: "15px" }}
        textAlign="left"
      >
        <Box p="15px">
          <Box fontSize="32px" fontWeight="bold">
            NO PROJECT TOO BIG OR TOO SMALL
          </Box>
          <Box fontSize="16px" color="#7d8088">
            Every job is important at Ameritex, give us a shot and we will prove
            it! Our company is built around exceptional service, wheter you need
            a small bracket or assistance with a large project, we are here to
            help!
          </Box>
        </Box>
        <Box p="15px">
          <Stack direction="horizontal">
            <Image
              boxSize="55px"
              objectFit="cover"
              src="https://ameritex.wpengine.com/wp-content/uploads/2018/08/World-Class-Technology.png"
              mt="10px"
              mr="20px"
            />

            <Box>
              <Box fontSize="26px" fontWeight="bold">
                WORLD-CLASS TECHNOLOGY{" "}
              </Box>
              <Box fontSize="16px" color="#7d8088">
                We are continually investing in the latest and greatest
                technology. These investments continuously improve our
                capabilities to better serve our customers.{" "}
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box p="15px">
          <Stack direction="horizontal">
            <Image
              boxSize="55px"
              objectFit="cover"
              src="https://ameritex.wpengine.com/wp-content/uploads/2018/08/Fast-Turn-Around.png"
              mt="10px"
              mr="20px"
            />

            <Box>
              <Box fontSize="26px" fontWeight="bold">
                FAST TURN-AROUND{" "}
              </Box>
              <Box fontSize="16px" color="#7d8088">
                In a bind for your product? We are here to help! Let us know
                when you need it and we will make it happen.{" "}
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box p="15px">
          <Stack direction="horizontal">
            <Image
              boxSize="55px"
              objectFit="cover"
              src="https://ameritex.wpengine.com/wp-content/uploads/2018/08/Simple-Process.png"
              mt="10px"
              mr="20px"
            />

            <Box>
              <Box fontSize="26px" fontWeight="bold">
                SIMPLE PROCESS{" "}
              </Box>{" "}
              <Box fontSize="16px" color="#7d8088">
                We strive to make sourcing your products and parts as easy as
                possible. Submit a quote online, email sales@ameritexllc.com, or
                give us a call! We will have you a custom quote within 24hrs!{" "}
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
