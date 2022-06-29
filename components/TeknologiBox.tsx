import {  Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { FC } from "react";
import { IconType } from "react-icons";

interface Props {
  icon:  IconType;
  title: string;
  dec: string;
}

const TeknologiBox: FC<Props> = ({ icon, title, dec }) => {
  return (
    <Flex mt="2rem">
      <Icon as={icon} marginEnd={3} fontSize="2rem"/>
      <Flex flexDir="column">
        <Heading variant="subtitle">{title}</Heading>
        <Text variant="section-descriptiom">{dec}</Text>
      </Flex>
    </Flex>
  );
};

export default TeknologiBox;
