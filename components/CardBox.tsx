import {  Flex, Heading, Text } from "@chakra-ui/react"
import Image, { StaticImageData } from "next/image"
import { FC} from "react"

interface Props {
    src: StaticImageData;
    title: string;
    dec: string
}

const CardBox: FC<Props> = ({src, title, dec}) => {
  return (
     <Flex flexDir="column" alignItems="center" textAlign="center">
         <Image src={src} style={{marginBottom: "1rem"}} />
         <Heading as="h3" fontSize="18px" lineHeight="26px" marginBottom="1rem" color="dark.50">{title}</Heading>
         <Text color="rgba(12, 27, 77, 0.6)" fontSize="1rem">{dec}</Text>
     </Flex>
  )
}

export default CardBox