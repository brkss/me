import React from 'react'
import { Box, Text, Grid, GridItem, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { projects, IProject } from '../../src/utils/data/projects'
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
import  NextLink  from 'next/link'

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
					<Link 
						display={'block'}
						href={'/works'}
						as={NextLink}
						_hover={{color: 'blue'}}
						mb={'20px'}
						fontSize={'20px'}
					>
						<HiOutlineArrowLongLeft style={{display: 'inline-block'}} /> { project.name } 
					</Link>
					<Box dangerouslySetInnerHTML={{__html: project.text}}  />
				</GridItem>
			</Grid>
		</Box>
	)
}
