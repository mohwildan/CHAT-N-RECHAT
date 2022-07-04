import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <Box as="main" pt="10rem" id="hero">
      <motion.main
        initial={{ opacity: 0, x: 0, y: 20 }}
        animate={{ opacity: 1, x: -0, y: 0 }}
        exit={{ opacity: 0, x: 0, y: 20 }}
        transition={{duration: 0.5}}
      >
        <Head>
          <title>CHAT N’ RECHAT</title>
        </Head>
        <Container maxW="80rem" px="1.5rem">
          {children}
        </Container>
      </motion.main>
    </Box>
  );
};

export default Layout;
