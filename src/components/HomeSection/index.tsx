import { TriangleDownIcon } from "@chakra-ui/icons";
import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import { Navbar } from "../Navbar";

export function HomeSection() {
  return (
    <Box bgImage="assets/landing.gif" w="100%" h="100vh" py="1.5rem">
      <Flex flexDir="column" margin="0 auto" maxW="80%" h="100%">
        <Navbar />

        <Flex
          flexDir="column"
          justify="center"
          align="center"
          h="100%"
          w="100%"
        >
          <Text fontSize="3rem" fontWeight="700" bgColor="black">
            I am a
          </Text>
          <Box display="inline-block">
            <Box
              overflow="hidden"
              borderRight=".15em solid orange"
              fontSize="3rem"
              fontWeight="700"
              whiteSpace="nowrap"
              w="0"
              bgColor="black"
              animation="typing 2.5s steps(20, end) forwards, blink .8s infinite"
            >
              Web Developer & Designer
            </Box>

            <Box
              overflow="hidden"
              fontSize="1.2rem"
              bgColor="black"
              w="0"
              whiteSpace="nowrap"
              animation="typing 1.5s steps(20, end) forwards"
            >
              I love to design and code stuff to make world a better place.
            </Box>
          </Box>
          <Avatar
            src="assets/myavatar.jpg"
            name="Rodrigo Eduardo"
            boxSize="18rem"
            mt="2rem"
          />
        </Flex>

        <TriangleDownIcon
          w={8}
          h={8}
          color="white"
          margin="0 auto"
          animation="slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite both;"
        />
      </Flex>
    </Box>
  );
}
