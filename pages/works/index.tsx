import NextLink from 'next/link'
import { Box, Link, Grid, GridItem } from '@chakra-ui/react';


export default function(){
	return (
		<Box p={'20px'} display={'flex'} alignItems={'center'} paddingTop={20} h={'100vh'} bg={'#fdf2ef'}>
			<Grid w={'100%'} templateColumns={'repeat(12, 1fr)'}>
				<GridItem colSpan={{base: 12, md: 6}}>
					<Link
						display={'inline-block'}
						as={NextLink}
						href={'/works/vanillefraise'}
						mb={'15px'}
						_hover={{background: 'blue', color: 'white'}}
					>
						Vanille Fraise
					</Link>
					<br />	
					<Link
						display={'inline-block'}
						as={NextLink}
						href={'/works/vanillefraise'}
						mb={'15px'}
						_hover={{background: 'blue', color: 'white'}}
					>
						Unwind	
					</Link>
					<br />	
					<Link
						display={'inline-block'}
						as={NextLink}
						href={'/works/vanillefraise'}
						mb={'15px'}
						_hover={{background: 'blue', color: 'white'}}
					>
						Registro	
					</Link>
					<br />	
					<Link
						display={'inline-block'}
						as={NextLink}
						href={'/works/vanillefraise'}
						mb={'15px'}
						_hover={{background: 'blue', color: 'white'}}
					>
						Opium	
					</Link>
				</GridItem>
				<GridItem display={{md: 'block', base: 'none'}} colSpan={{base: 12, md: 6}}>
					<Box height={'400px'} w={'100%'} bg={'#434343'} />
				</GridItem>
			</Grid>
		</Box>
	)
}
