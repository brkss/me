import NextLink from 'next/link'
import { Box, Link, Grid, GridItem } from '@chakra-ui/react';
import { projects } from '../../src/utils/data/projects'

export default function(){
	return (
		<Box p={'20px'} display={'flex'} alignItems={'center'} paddingTop={20} h={'100vh'} bg={'#fdf2ef'}>
			<Grid w={'100%'} templateColumns={'repeat(12, 1fr)'}>
				<GridItem colSpan={{base: 12, md: 6}}>
					{
						projects.map((proj, key) => (
							<Box key={key}>
								<Link
									display={'inline-block'}
									as={NextLink}
									href={`/works/${proj.id}`}
									mb={'15px'}
									_hover={{background: 'blue', color: 'white'}}
								>
									{proj.name}	
								</Link>
								<br />
							</Box>
						))
					}
				</GridItem>
				<GridItem display={{md: 'block', base: 'none'}} colSpan={{base: 12, md: 6}}>
					<Box height={'400px'} w={'100%'} bg={'#434343'} />
				</GridItem>
			</Grid>
		</Box>
	)
}
