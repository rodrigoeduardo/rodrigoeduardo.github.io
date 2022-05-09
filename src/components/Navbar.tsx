import { Flex, HStack, Link, Text } from "@chakra-ui/react";

export function Navbar() {
  return (
    <Flex as="nav" w="100%" justify="space-between">
      <Text fontWeight="700" fontSize="2.5rem">
        Rodrigo Eduardo
      </Text>
      <HStack spacing="3rem">
        <Link href="#about-me">About me</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#contact">Contact</Link>
      </HStack>
    </Flex>
  );
}
