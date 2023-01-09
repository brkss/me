import React from 'react'
import { Box, Text, Grid, GridItem } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { projects, IProject } from '../../src/utils/data/projects'

export default function(){

	const router = useRouter()
	const { wid } = router.query 
	const [project, setProject] = React.useState<IProject | null>(null)

	React.useEffect(() => {
		const tmp = projects.find(x => x.id === wid) ;
		if(tmp)
			setProject(tmp)
	}, [])

	if (!project)
		return null;

	return (
		<Box p={'20px'} display={'flex'} alignItems={'center'} paddingTop={20} h={'100vh'} bg={'#fdf2ef'}>
			<Grid templateColumns={'repeat(12, 1fr)'}>
				<GridItem colSpan={{md: 6, base: 12}}>
					<Text> { project.name } </Text>
				</GridItem>
			</Grid>
		</Box>
	)
}
