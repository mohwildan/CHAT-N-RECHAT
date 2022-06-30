import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

interface Porps {
  title: string;
  desc: string;
}

const Arcoditions: FC<Porps> = ({ title, desc }) => {
  return (
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box p="1.5rem" flex={1} textAlign="left">
            <Heading as="h3" variant="subtitle">
              {title}
            </Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4} px="2rem">
          <Text variant="section-description">{desc}</Text>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Arcoditions;
