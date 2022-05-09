import { Flex, Link, Stack, Text } from '@chakra-ui/react';

export function Navbar() {
  return (
    <Flex as="nav" w="100%" justify="space-between">
      <Text fontWeight="700" fontSize="2.5rem">
        Rodrigo Eduardo
      </Text>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '1rem', md: '3rem' }}
        align="center"
      >
        <Link href="#about-me">About me</Link>
        <Link href="#portfolio">Portfolio</Link>
        <Link href="#contact">Contact</Link>
      </Stack>
    </Flex>
  );
}
