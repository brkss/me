import React from 'react';
import { Box, Grid, GridItem, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Footer : React.FC = () => {


	return (
		<Box pos={'fixed'} bottom={0} w={'100%'} left={0} p={'20px'}>
			<Grid templateColumns={'repeat(12, 1fr)'}>
				<GridItem  mb={'5px'} bg={'white'} colSpan={{base: 12, md: 6}}>
					<Link 
						as={NextLink}
						href={'/works'}
						_hover={{background: 'blue', color: 'white'}}
						fontSize={{md: '20px', base: "15px"}}
						cursor={'pointer'}
						display={'inline-block'}
						mr={5}
					>
						Works
					</Link>
					<Link 
						as={NextLink}
						href={'/about'}
						_hover={{background: 'blue', color: 'white'}}
						fontSize={{md: '20px', base: "15px"}}
						cursor={'pointer'}
						display={'inline-block'}
						mr={5}
					>
						About	
					</Link>
					<Link 
						as={NextLink}
						href={'/notes'}
						_hover={{background: 'blue', color: 'white'}}
						fontSize={{md: '20px', base: "15px"}}
						cursor={'pointer'}
						display={'inline-block'}
						mr={5}
					>
						Notes	
					</Link>
				</GridItem>
				<GridItem  bg={'white'} textAlign={{md: 'right', base: "left"}} colSpan={{base: 12, md: 6}}>
					<Text _hover={{background: 'blue', color: 'white'}} fontSize={{md: '20px', base: "15px"}} cursor={'pointer'} display={'inline-block'} mr={5} >Github</Text>
					<Text _hover={{background: 'blue', color: 'white'}} fontSize={{md: '20px', base: "15px"}} cursor={'pointer'} display={'inline-block'} mr={5} >Email</Text>
				</GridItem>
			</Grid>
		</Box>
	)
}
