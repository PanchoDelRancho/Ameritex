import {
  Icon,
  Box,
  Card,
  Stack,
  Text,
  CardBody,
  CardFooter,
  Center,
  AspectRatio,
  Circle,
} from "@chakra-ui/react";
import { IoMailOpenOutline, IoCallOutline } from "react-icons/io5";
import { FiMapPin, FiLinkedin, FiFacebook, FiYoutube } from "react-icons/fi";
export default function footer() {
  return (
    <Box>
      <Box
        backgroundImage="url(https://ameritex.wpengine.com/wp-content/uploads/2018/08/Get-Your-Free-Quote-bg.jpg)"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
      >
        <Box
          py="45px"
          px={{
            base: "0",
            sm: "0",
            md: "0",
            lg: "0",
            xl: "10vw",
            "2xl": "18vw",
          }}
        >
          <Card
            direction={{ base: "column", sm: "column", md: "row" }}
            mx=" 15px"
            bg="rgba(207,46,46,.95)"
            rounded="0"
          >
            <Stack bg="#b00e14" order={{ base: 2, sm: 2, md: 1 }}>
              <CardBody color="ame.200">
                <Box p="20px 30px 0 30px">
                  <Stack direction="column">
                    <Stack
                      direction={{ base: "column", sm: "column", md: "row" }}
                      align="center"
                      py="6px"
                    >
                      <IoCallOutline size="40px" align="center" />
                      <Stack
                        direction="column"
                        align={{
                          md: "flex-start",
                          sm: "center",
                          base: "center",
                        }}
                      >
                        <Text fontSize="20px" m="0 !important" p="0">
                          PHONE
                        </Text>
                        <Text m="0 !important" p="0">
                          (936) 228-5070{" "}
                        </Text>
                      </Stack>
                    </Stack>
                    <Stack
                      direction={{ base: "column", sm: "column", md: "row" }}
                      align="center"
                      py="6px"
                    >
                      <IoMailOpenOutline size="40px" align="center" />
                      <Stack
                        direction="column"
                        align={{
                          md: "flex-start",
                          sm: "center",
                          base: "center",
                        }}
                      >
                        <Text fontSize="20px" m="0 !important" p="0">
                          EMAIL
                        </Text>
                        <Text m="0 !important" p="0">
                          sales@ameritexllc.com
                        </Text>
                      </Stack>
                    </Stack>
                    <Stack
                      direction={{ base: "column", sm: "column", md: "row" }}
                      align="center"
                      py="6px"
                    >
                      <FiMapPin size="45px" align="center" />
                      <Stack
                        direction="column"
                        align={{
                          md: "flex-start",
                          sm: "center",
                          base: "center",
                        }}
                      >
                        <Text fontSize="20px" m="0 !important" p="0">
                          Main Location
                        </Text>
                        <Text m="0 !important" p="0">
                          700 Conroe Park North Conroe, TX 77303
                        </Text>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </CardBody>
              <CardFooter
                pl={{ md: "50px" }}
                pt="0"
                justify={{ base: "center", sm: "center", md: "flex-start" }}
              >
                <Circle size="30px" bg="white" color="#b00e14">
                  <FiFacebook size="20px" />
                </Circle>
                <Box w="15px"></Box>
                <Circle size="30px" bg="white" color="#b00e14">
                  <FiLinkedin size="20px" />
                </Circle>
                <Box w="15px"></Box>
                <Circle size="30px" bg="white" color="#b00e14">
                  <FiYoutube size="20px" />
                </Circle>
              </CardFooter>
            </Stack>
            <Box
              w={{ sm: "100%", md: "70%" }}
              order={{ base: 1, sm: 1, md: 2 }}
            >
              <Box px="2rem" py="3rem">
                <AspectRatio maxW="100%" ratio={16 / 9} h="100%" w="100%">
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
                    ></iframe>{" "}
                  </Center>
                </AspectRatio>
              </Box>
            </Box>
          </Card>
        </Box>
      </Box>
      <Box bg="ame.100" color="ame.200" p="15px">
        <Stack
          direction={{ base: "column", sm: "column", md: "row" }}
          justify={{ md: "space-between" }}
          align="center"
        >
          <Box p="20px">
            <Stack direction="row">
              <Box px="10px">Contact Us</Box>
              <Box px="10px">Get a Quote</Box>
            </Stack>
          </Box>
          <Box>© 2022 AmeriTex Machine and Fabrication, LLC</Box>
        </Stack>
      </Box>
    </Box>
  );
}
