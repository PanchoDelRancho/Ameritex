"use client";
import {
  Box,
  Icon,
  Flex,
  Spacer,
  Image,
  HStack,
  useBreakpointValue,
  Accordion,
  AccordionItem,
  AccordionIcon,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const isSmall = useBreakpointValue({ base: true, sm: true, md: false });

  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
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
    <Box
      display={!isSmall && showNav ? "fixed" : "none"}
      top="0"
      left="0"
      right="0"
    >
      <Flex
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        bg="ame.200"
        w="100vw"
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
        pb={isSmall ? "12px" : "0px"}
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
                <AccordionPanel className="menuItem">
                  <a href="">ABOUT US</a>
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
              <a href="">ABOUT US</a>
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
  );
}
