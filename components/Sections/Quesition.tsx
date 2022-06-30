import { Flex, Heading, Text } from "@chakra-ui/react";

const Quesition = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      mt="8rem"
      textAlign="center"
    >
      <Heading as="h4" variant="badge" mb={3}>
        BANYAK YANG NANYA
      </Heading>
      <Heading variant="section-title" as="h2" mb={3}>
        Pertanyaan Yang Sering Ditanyain
      </Heading>
      <Text variant="section-description">
        Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi ya{" "}
        <br />
        ditaruh sini aja siapa tau lo mau baca ‘kan.
      </Text>
    </Flex>
  );
};

export default Quesition;
