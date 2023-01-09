import { Box, Text, Link } from '@chakra-ui/react';
import NextLink from 'next/link'
import React from 'react';

export const Header: React.FC = () => {
	return (
		<Box pos={'fixed'} top={0} left={0} p='20px' w={'100%'}>
			<Link as={NextLink} href={'/'}  _hover={{color: 'blue'}} cursor={'pointer'}>Test123.cc</Link>
		</Box>
	)
}
