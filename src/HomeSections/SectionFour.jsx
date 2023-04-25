import { Box, AspectRatio, Center, Text, Stack, Image } from "@chakra-ui/react";

export default function SectionFour() {
  return (
    <Box align="center" bg="ame.200">
      <Box p="45px 15px" bg="ame.200" color="ame.100" maxW="1170px">
        <Box
          direction={{
            base: "vertical",
            sm: "vertical",
            md: "vertical",
            lg: "horizontal",
          }}
        >
          <Box w={{ base: "350px", sm: "350px", md: "100%" }}>
            <AspectRatio maxW="555" ratio={7 / 4}>
              <Center>
                <iframe
                  loading="lazy"
                  title="AmeriTex Machine and Fabrication"
                  src="https://www.youtube.com/embed/GjfpN3nGmzk?feature=oembed"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen=""
                  width="100%"
                  height="100%"
                ></iframe>
              </Center>
            </AspectRatio>
          </Box>
          <Box>
            {" "}
            <Box fontSize="32px">
              <Text display="inline"> Experts </Text>
              <Text display="inline" fontWeight="bold">
                {" "}
                YOU CAN TRUST{" "}
              </Text>
            </Box>
            <Box fontSize="18px">Consistent, Accurate, Fast Services</Box>
            <Box color="#757881" fontSize="16px" m="6px 15px">
              We will always jump through hoops to get you the parts you need.
              Our experience, technology, and dedication will not let you down.
            </Box>
            <Box p="15px">
              <Stack direction="horizontal">
                <Image
                  boxSize="55px"
                  objectFit="cover"
                  src="https://ameritex.wpengine.com/wp-content/uploads/2018/08/clients.png"
                  mt="10px"
                  mr="20px"
                />

                <Box textAlign="left">
                  <Box fontSize="26px" fontWeight="bold">
                    SERVING 1000+ HAPPY CLIENTS
                  </Box>
                  <Box fontSize="16px" color="#7d8088">
                    It is our goal to make it easy for ANYONE to buy metal
                    products. We take pride in maintaining our large customer
                    base.{" "}
                  </Box>
                </Box>
              </Stack>
            </Box>
            <Box p="15px">
              <Stack direction="horizontal">
                <Image
                  boxSize="55px"
                  objectFit="cover"
                  src="https://ameritex.wpengine.com/wp-content/uploads/2018/08/Certificate-icon.png"
                  mt="10px"
                  mr="20px"
                />

                <Box textAlign="left">
                  <Box fontSize="26px" fontWeight="bold">
                    FABRICATOR CERTIFICATE OF RECOGNITION{" "}
                  </Box>
                  <Box fontSize="16px" color="#7d8088">
                    We are an accredited structural fabricator with the
                    experience to make your projects run smoothly.{" "}
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
