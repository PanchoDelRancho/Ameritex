"use client";
import {
  Box,
  Flex,
  Spacer,
  Image,
  HStack,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const isSmall = useBreakpointValue({ base: true, sm: true, md: false });
  const isLarge = useBreakpointValue({
    sm: true,
    base: true,
    md: true,
    lg: false,
  });
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 116) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {" "}
      <Box className="nav">
        <Flex
          bg="ame.100"
          w="100%"
          px={{
            base: ".44rem",
            sm: ".67rem",
            md: "1.5rem",
            lg: "5vw",
            xl: "15vw",
            "2xl": "24vw",
          }}
          color="#B7BEC6"
          h="35px"
          alignItems="center"
          fontWeight="bold"
        >
          <Box fontSize="14px">
            <a href="">(936)-228-5070</a>
          </Box>
          <Spacer />
          <Box>
            <a href="">icons</a>
          </Box>
        </Flex>
      </Box>
      <Box position={!isLarge && showNav ? "sticky" : "relative"} top="0">
        <Flex
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "row",
          }}
          display="inline-flex"
          bg="ame.200"
          w="100%"
          px={{
            base: ".44rem",
            sm: ".67rem",
            md: "1.5rem",
            lg: "5vw",
            xl: "15vw",
            "2xl": "24vw",
          }}
          color="ame.100"
          alignItems="center"
          fontWeight="900 !important"
          css={{ fontSize: "inherit" }}
          fontSize="13px !important"
          pb={!isSmall ? "12px" : "0px"}
        >
          <Box>
            <Image
              src="https://ameritexllc.com/wp-content/uploads/2021/08/Ameritex3.png"
              alt="ameritex"
              w="260px"
              py="12px"
            />
          </Box>
          <Spacer
            borderBottom={{
              base: "none",
              sm: "none",
              md: "1px solid rgba(0,0,0,.05)",
              lg: "none",
              xl: "none",
            }}
            w={{ base: "100%", md: "auto" }}
          />
          {isSmall ? (
            <Accordion allowMultiple>
              <AccordionItem>
                <AccordionButton
                  bg="#E6E6E6"
                  as={Box}
                  px="4"
                  py="2"
                  color="am.200"
                  transition="all 0.2s"
                  w="95vw"
                  justifyContent="center"
                  textAlign="center"
                  fontSize="13px"
                >
                  MENU
                </AccordionButton>
                <AccordionPanel p="0" bg="ame.200">
                  <AccordionPanel p="0" bg="ame.200">
                    <Accordion allowToggle>
                      <AccordionItem>
                        {({ isExpanded }) => (
                          <>
                            <AccordionButton
                              as={isExpanded ? "a" : Box}
                              justifyContent="left"
                              textAlign="left"
                              className="menuItem"
                              fontSize="13px"
                              href=""
                            >
                              ABOUT US
                            </AccordionButton>
                            <AccordionPanel p="0 0 0 .5rem">
                              <AccordionPanel className="menuItem">
                                <a href="">CARRERS</a>
                              </AccordionPanel>
                              <AccordionPanel className="menuItem">
                                <a href="">IT SUPPORT</a>
                              </AccordionPanel>
                              <AccordionPanel className="menuItem">
                                <a href="">DOWNLOADABLE RESOURCES</a>
                              </AccordionPanel>
                            </AccordionPanel>
                          </>
                        )}
                      </AccordionItem>
                    </Accordion>{" "}
                  </AccordionPanel>
                  <AccordionPanel className="menuItem">
                    <a href="">SERVICES</a>
                  </AccordionPanel>
                  <AccordionPanel className="menuItem">
                    <a href="">PRODUCTS</a>
                  </AccordionPanel>
                  <AccordionPanel className="menuItem">
                    <a href="">EQUIPMENT</a>
                  </AccordionPanel>
                  <AccordionPanel className="menuItem">
                    <a href="">BLOG</a>
                  </AccordionPanel>
                  <AccordionPanel className="menuItem">
                    <a href="">CONTACT US</a>
                  </AccordionPanel>
                  <AccordionPanel className="menuItem">
                    <a href="">GET A QUOTE</a>
                  </AccordionPanel>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ) : (
            <HStack spacing="0">
              <Box p="15px" pl="15px">
                <Popover placement="bottom-start" trigger="hover">
                  <PopoverTrigger>
                    <a href="">ABOUT US</a>
                  </PopoverTrigger>
                  <PopoverContent
                    bg="ame.200"
                    rounded="0"
                    borderTopColor="ame.300"
                    borderTopWidth="2px"
                    w="auto"
                    px="15px"
                  >
                    <Box as="a" href="" py="10px !important">
                      CARRERS
                    </Box>
                    <Box as="a" href="" py="10px !important">
                      IT SUPPORT
                    </Box>
                    <Box as="a" href="" py="10px !important">
                      DOWNLOADABLE RESOURCES
                    </Box>
                  </PopoverContent>
                </Popover>{" "}
              </Box>
              <Box p="15px">
                <a href="">SERVICES</a>
              </Box>
              <Box p="15px">
                <a href="">PRODUCTS</a>
              </Box>
              <Box p="15px">
                <a href="">EQUIPMENT</a>
              </Box>
              <Box p="15px">
                <a href="">BLOG</a>
              </Box>
              <Box p="15px">
                <a href="">CONTACT US</a>
              </Box>
              <Box p="15px">
                <a href="">GET A QUOTE</a>
              </Box>
            </HStack>
          )}
        </Flex>
      </Box>
    </>
  );
}
