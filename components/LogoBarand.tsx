import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import image1 from "../public/Logo/image 4.png";
import image2 from "../public/Logo/image 5.png";
import image3 from "../public/Logo/image 6.png";
import image4 from "../public/Logo/image 7.png";
import image5 from "../public/Logo/image 8.png";

const LogoBarand = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      mt="6rem"
      p="2rem"
      bg="rgba(74, 114, 255, 0.05)"
      w="full"
      h="130px"
      gap="2rem"
      display={{base: "none", sm: "flex"}}
      
    >
      <Image style={{ width: "100%", height: "auto" }} src={image1} />
      <Image style={{ width: "100%", height: "auto" }} src={image2} />
      <Image style={{ width: "100%", height: "auto" }} src={image3} />
      <Image style={{ width: "100%", height: "auto" }} src={image4} />
      <Image style={{ width: "100%", height: "auto" }} src={image5} />
    </Flex>
  );
};

export default LogoBarand;
