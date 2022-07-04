import { Box, Button, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import LogoBarand from "../LogoBarand";
import { motion } from "framer-motion";
import SectionAnimate from "../SectionAnimate";

const HeroSections = () => {
  return (
    <Flex flexDir="column">
      <Flex flexDir={{ base: "column", md: "row" }}>
        <Box flex={1}>
          <SectionAnimate>
            <Heading as="h4" variant="badge" color="#4A72FF">
              CHAT N’ RECHAT
            </Heading>
          </SectionAnimate>
          <SectionAnimate delay={0.4}>
            <Heading
              as="h1"
              color="dark.50"
              fontWeight={400}
              lineHeight="44px"
              fontSize={{ base: "1.8rem", md: "2.3rem" }}
              mt="1.7rem"
            >
              Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi
              tidak lupa jasa pahlawan!
            </Heading>
          </SectionAnimate>
          <SectionAnimate delay={0.5}>
            <Text variant="section-description" my="1rem">
              Sebenernya banyak banget aplikasi chatting yang lebih bagus dari
              ini, maka dari itu lebih baik pake yang lain aja deh ya daripada
              pake aplikasi yang ini.
            </Text>
          </SectionAnimate>
          <SectionAnimate delay={0.6}>
            <Flex flexDir={{ base: "column", sm: "row", md: "row" }}>
              <Button
                variant="solid"
                size="lg"
                rightIcon={<BsArrowRightCircle />}
                marginEnd={{ base: 0, sm: 4 }}
                mb={{ base: 4, sm: 0 }}
              >
                Register
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Flex>
          </SectionAnimate>
          <SectionAnimate delay={0.7}>
            <Flex mt="3rem" flexWrap="wrap">
              <Flex mr="2.5rem" mb={{ base: 4 }}>
                <Icon marginEnd={3} as={FiDownload} fontSize="1.5rem" />
                <Flex flexDir="column">
                  <Text fontSize="12px">TOTAL DON’TLOUD</Text>
                  <Heading mt={2} color="dark.50" fontSize="24px">
                    1,501,234
                  </Heading>
                </Flex>
              </Flex>
              <Flex>
                <Icon marginEnd={3} as={AiOutlineUser} fontSize="1.5rem" />
                <Flex flexDir="column">
                  <Text fontSize="12px">TOTAL USERS</Text>
                  <Heading mt={2} color="dark.50" fontSize="24px">
                    1,318,829
                  </Heading>
                </Flex>
              </Flex>
            </Flex>
          </SectionAnimate>
        </Box>
        <Box flex={1} mt={{ base: "3rem", md: 0 }}>
          <motion.img
            initial={{ y: -20 }}
            animate={{ y: 20 }}
            transition={{ yoyo: Infinity, duration: 1.3 }}
            src="/main/Group 9.png"
          />
        </Box>
      </Flex>
      <SectionAnimate delay={0.8}>
        <LogoBarand />
      </SectionAnimate>
    </Flex>
  );
};

export default HeroSections;
