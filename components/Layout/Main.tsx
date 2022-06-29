import { Box, Container } from "@chakra-ui/react"
import Head from "next/head"
import { FC, ReactNode } from "react"


interface Props {
    children: ReactNode
}

const Layout: FC<Props> = ({children}) => {
  return (
  <Box as="main" pt="10rem">
      <Head>
          <title>CHAT N’ RECHAT</title>
      </Head>
      <Container maxW="80rem" px="1.5rem">
          {children}
      </Container>
  </Box> 
  )
}

export default Layout