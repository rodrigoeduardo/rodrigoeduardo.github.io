import { Box, Image, Link, Text } from '@chakra-ui/react';

interface RepoCardProps {
  repoSlug: string;
  repoName: string;
  imageUrl: string;
}

export function RepoCard({ imageUrl, repoName, repoSlug }: RepoCardProps) {
  return (
    <Link
      href={`https://github.com/rodrigoeduardo/${repoSlug}`}
      target="_blank"
    >
      <Box display="inline-block" overflow="hidden" borderRadius="20px">
        <Image
          src={imageUrl}
          alt={repoName}
          display="block"
          transition="all 0.2s"
          _hover={{
            cursor: 'pointer',
            transform: 'scale(1.2)',
          }}
        />
      </Box>
      <Text>{repoName}</Text>
    </Link>
  );
}
