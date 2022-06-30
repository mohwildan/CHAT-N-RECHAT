import {
  Box,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
import Image1 from "../../public/store/Group 26.png";
import AppStore from "../../public/store/image 12.png";
import Playstore from "../../public/store/Group 28.png";

const Store = () => {
  return (
    <Box bg="#4A72FF" w="full" rounded="20px" mt="8rem">
      <Flex>
        <Flex
          flexDir="column"
          mt={{ base: "2rem", md: "5rem" }}
          flex={1.5}
          p={{ base: "1rem", md: "2rem", lg: "3rem" }}
        >
          <Heading as="h4" variant="badge" color="#fff" mb={4}>
            DOWNLOAD APLIKASINYA
          </Heading>
          <Heading as="h2" variant="section-title" mb={4} color="#fff">
            Download Aplikasi Chat n’ Rechat Di Play Store, App Store, atau
            Symbian Store
          </Heading>
          <Text variant="section-description" color="#fff">
            <UnorderedList>
              <ListItem mb={1}>Android Version: Mojave+</ListItem>
              <ListItem mb={1}>iOS Version: Lolipop+</ListItem>
              <ListItem mb={1}>Symbian: 20.04+</ListItem>
            </UnorderedList>
          </Text>
          <Flex gap={4} mt={4}>
            <Image src={AppStore} />
            <Image src={Playstore} />
          </Flex>
        </Flex>
        <Box display={{ base: "none", md: "block" }} flex={1}>
          <Image src={Image1} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Store;
