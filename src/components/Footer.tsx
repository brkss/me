import React from 'react';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'

export const Footer : React.FC = () => {


	return (
		<Box pos={'fixed'} bottom={0} w={'100%'} left={0} p={'20px'}>
			<Grid templateColumns={'repeat(12, 1fr)'}>
				<GridItem colSpan={6}>
					<Text _hover={{color: 'blue'}} fontSize={'20px'} cursor={'pointer'} display={'inline-block'} mr={5}>Works</Text>
					<Text _hover={{color: 'blue'}} fontSize={'20px'} cursor={'pointer'} display={'inline-block'} mr={5} >About</Text>
					<Text _hover={{color: 'blue'}} fontSize={'20px'} cursor={'pointer'} display={'inline-block'} mr={5} >Notes</Text>
				</GridItem>
				<GridItem textAlign={'right'} colSpan={6}>
					<Text _hover={{color: 'blue'}} fontSize={'20px'} cursor={'pointer'} display={'inline-block'} mr={5} >Github</Text>
					<Text _hover={{color: 'blue'}} fontSize={'20px'} cursor={'pointer'} display={'inline-block'} mr={5} >Email</Text>
				</GridItem>
			</Grid>
		</Box>
	)
}
