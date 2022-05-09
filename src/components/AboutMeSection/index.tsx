import {
  Box,
  Flex,
  Grid,
  GridItem,
  Icon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FiChrome, FiDatabase, FiEdit } from "react-icons/fi";

export function AboutMeSection() {
  return (
    <Flex
      id="about-me"
      flexDir="column"
      bgGradient="linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(26,54,93,1) 70%, rgba(26,54,93,1) 100%)"
      w="100%"
      minH="100vh"
      py="6rem"
      justify="center"
    >
      <Flex flexDir="column" align="center" maxW="80%" margin="0 auto">
        <Text textAlign="center" fontSize="2rem" fontWeight="700">
          Hi, my name is Rodrigo Eduardo.
        </Text>
        <Text textAlign="center" maxW="60%" mt="1.5rem">
          I&apos;m an enthusiast of technology and programming. I have been
          studying Web Development for 3 years and found my passion. Currently,
          I&apos;m an Information Technology student at the University of Rio
          Grande do Norte, Brazil. Before, I have studied IT at IFRN and
          participated in research projects.
        </Text>
      </Flex>

      <Grid
        templateColumns="repeat(3, 1fr)"
        bgColor="white"
        margin="0 auto"
        maxW="70%"
        mt="4rem"
        py="3rem"
        borderRadius="15px"
      >
        <GridItem>
          <Flex flexDir="column" align="center">
            <Icon as={FiChrome} w="12" h="12" color="blue.900" />
            <Text color="black" fontSize="1.5rem" fontWeight="700" mt="1rem">
              Front-end Dev
            </Text>

            <Text color="black" textAlign="center" maxW="60%" mt="1rem">
              That&apos;s my favorite part of Web Development
            </Text>

            <Text color="blue.900" fontWeight="700" mt="2rem">
              Technologies I like:
            </Text>

            <UnorderedList
              color="black"
              listStyleType="none"
              textAlign="center"
              margin="0"
              mt="1.5rem"
            >
              <ListItem>Javascript</ListItem>
              <ListItem>Typescript</ListItem>
              <ListItem>React.js</ListItem>
              <ListItem>Next.js</ListItem>
              <ListItem>HTML, CSS, Sass</ListItem>
              <ListItem>Chakra UI</ListItem>
              <ListItem>React Native</ListItem>
              <ListItem>Angular</ListItem>
            </UnorderedList>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" align="center">
            <Icon as={FiDatabase} w="12" h="12" color="blue.900" />
            <Text color="black" fontSize="1.5rem" fontWeight="700" mt="1rem">
              Back-end Dev
            </Text>

            <Text color="black" textAlign="center" maxW="60%" mt="1rem">
              That&apos;s my second favorite part of Web Development
            </Text>

            <Text color="blue.900" fontWeight="700" mt="2rem">
              Technologies I like:
            </Text>

            <UnorderedList
              color="black"
              listStyleType="none"
              textAlign="center"
              margin="0"
              mt="1.5rem"
            >
              <ListItem>Javascript</ListItem>
              <ListItem>Typescript</ListItem>
              <ListItem>Node.js</ListItem>
              <ListItem>Java</ListItem>
              <ListItem>Spring</ListItem>
            </UnorderedList>
          </Flex>
        </GridItem>

        <GridItem>
          <Flex flexDir="column" align="center">
            <Icon as={FiEdit} w="12" h="12" color="blue.900" />
            <Text color="black" fontSize="1.5rem" fontWeight="700" mt="1rem">
              Designer
            </Text>

            <Text color="black" textAlign="center" maxW="60%" mt="1rem">
              Not an expert, but an enthuasist
            </Text>

            <Text color="blue.900" fontWeight="700" mt="2rem">
              Technologies I like:
            </Text>

            <UnorderedList
              color="black"
              listStyleType="none"
              textAlign="center"
              margin="0"
              mt="1.5rem"
            >
              <ListItem>Figma</ListItem>
              <ListItem>Photoshop</ListItem>
            </UnorderedList>
          </Flex>
        </GridItem>
      </Grid>
    </Flex>
  );
}
