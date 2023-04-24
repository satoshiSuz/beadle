import {
  Box,
  Container,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Progress,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  BsPlayCircle,
  BsStopwatch,
  BsSquare,
  BsXSquareFill,
  BsSearch,
} from "react-icons/bs";

export const Game = () => {
  const results = [1, 2, 3, 4, 5];
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      flex="1"
    >
      <VStack m="auto" w="100%" maxW="500px" display="flex" flex="1" h="100%">
        {results.map((val) => (
          <Box p="8px" w="100%" border="1px" key={val}>
            <Flex align="center">
              <Icon as={BsSquare} mr="0.5rem" />
              The Beatles - Sexy Sadie
            </Flex>
          </Box>
        ))}
      </VStack>
      <Box
        display="flex"
        h="200px"
        w="100%"
        position="sticky"
        alignItems="center"
        flexDirection="column"
      >
        <Flex align="center">
          <Icon as={BsStopwatch} fontSize="1.2rem" my="4px" mr="4px" />
          0:00
        </Flex>

        <Progress hasStripe value={30} w="100%" my="4px" />
        <Flex justify="space-between" w="100%" align="center">
          <Box>0:00</Box>
          <Icon as={BsPlayCircle} fontSize="3rem">
            icon
          </Icon>
          <Box>0:16</Box>
        </Flex>
        <InputGroup>
          <InputLeftElement children={<Icon as={BsSearch} />} />

          <Input
            variant="outline"
            placeholder="Know it? Search for the song title"
          />
        </InputGroup>
      </Box>
    </Container>
  );
};
