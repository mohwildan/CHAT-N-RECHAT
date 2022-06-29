import { Box, Button, Container, Flex, Heading, Link } from "@chakra-ui/react";

const Item: string[] = ["Beranda", "Fitur-fitur", "Teknologi", "FAQ"];

const Navbar = () => {
  return (
    <Box w="100%" position="fixed" zIndex={99} bg="#EEF2FF">
      <Container maxW="80rem">
        <Flex justifyContent="space-between" align="center" h="50px">
          <Heading fontSize="1rem">CHAT N’ RECHAT</Heading>
          <Box display={{base: "none", md: "block"}}>
            {Item.map((item) => {
              return <Link mr={9}>{item}</Link>;
            })}
          </Box>
          <Button display={{base: "none", md: "inline-flex"}} variant="solid" size="sm">Download</Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
