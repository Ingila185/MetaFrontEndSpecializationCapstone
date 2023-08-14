'use client'

import { ReactNode } from 'react'

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'




export default function LargeWithLogoLeft() {
  return (
    <Box maxWidth="100%"      bg={useColorModeValue('#8C9894', '#495E57')}
      color={useColorModeValue('black', 'black')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>

            </Box>
            <Text fontSize={'sm'}>© 2023 Little Lemon. All rights reserved</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <Box as="a" href={'#'}>
              Home
            </Box>
            <Box as="a" href={'#'}>
              About
            </Box>
            <Box as="a" href={'#'}>
              Menu
            </Box>
            <Box as="a" href={'#'}>
              Reservations
            </Box>
            <Box as="a" href={'#'}>
              Order Online
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <Box as="a" href={'#'}>
              About Us
            </Box>
            <Box as="a" href={'#'}>
              Contact Us
            </Box>
            <Box as="a" href={'#'} bg={'yellow.100'}>
              littlelemon@meta.com
            </Box>
            <Box as="a" href={'#'}>
              Contact
            </Box>
            <Box as="a" href={'#'}>
              Partners
            </Box>
          </Stack>
          
          <Stack align={'flex-start'}>
            <Box as="a" href={'#'}>
              Facebook
            </Box>
            <Box as="a" href={'#'}>
              Twitter
            </Box>
            <Box as="a" href={'#'}>
              Dribbble
            </Box>
            <Box as="a" href={'#'}>
              Instagram
            </Box>
            <Box as="a" href={'#'}>
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
