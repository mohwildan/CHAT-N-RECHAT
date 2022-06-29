import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CardBox from "../CardBox";
import Image1 from "../../public/services/Group 14.png";
import Image2 from "../../public/services/Group 16.png";
import Image3 from "../../public/services/Group 19.png";

const Fiture = () => {
  return (
    <Box mt="8rem">
      <Flex align="center" flexDir="column">
        <Heading variant="badge" textAlign="center" mb="1rem">
          NGGAK HARUS SIH SEBENERNYA
        </Heading>
        <Heading variant="section-title" mb="1rem" textAlign="center">
          Kenapa Harus Pakai Chat N’ Rechat?
        </Heading>
        <Text variant="section-description" textAlign="center">
          Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp
          <br /> aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp.
        </Text>
      </Flex>
      <Flex
        mt="8rem"
        w="100%"
        justifyContent="center"
        gap="2rem"
        alignItems="center"
        flexDir={{base: "column", md: "row"}}
      >
        <CardBox
          src={Image2}
          title="Groups to keep in touch"
          dec="Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos."
        />
        <CardBox
          src={Image1}
          title="Simple, Reliable Messaging"
          dec="Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees."
        />
        <CardBox
          src={Image3}
          title="Speak Freely"
          dec="With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations."
        />
      </Flex>
    </Box>
  );
};

export default Fiture;
