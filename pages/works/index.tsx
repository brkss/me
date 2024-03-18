import React from 'react';
import NextLink from 'next/link'
import { Heading, Box, Link, Grid, GridItem, Text, Center } from '@chakra-ui/react';
import { projects } from '../../src/utils/data/projects'

export default function(){

	const [bg, setBg] = React.useState("");
	const [currBg, setCurrBg] = React.useState("");

	const handleHover = (img: string) => {
		setBg(img);
	}

	const handleMouseLeave = () => {
		setCurrBg(bg);
		const interval = setInterval(() => {
			if(currBg === bg)
				setBg("");
			clearInterval(interval);
		}, 1000);
	}

	return (
		<Box p={'20px'} display={'flex'} alignItems={'center'} paddingTop={20} h={'100vh'} /*bg={'#fdf2ef'}*/>
			<Grid w={'100%'} templateColumns={'repeat(12, 1fr)'}>
				<GridItem colSpan={{base: 12, md: 6}}>
					<Heading mb={'5px'} fontSize={'20px'}>Top-shelf Projects</Heading>
					<Text mb={'20px'} fontSize={'14px'} opacity={'.8'}>These projects represent my individual engineering and coding endeavors over the course of recent years.</Text>
					{
						projects.map((proj, key) => (
							<Box key={key}>
								<Link
									display={'inline-block'}
									as={NextLink}
									href={`/works/${proj.id}`}
									mb={'15px'}
									_hover={{background: 'blue', color: 'white'}}
									onMouseEnter={() => handleHover(proj.images[0])}
									onMouseLeave={() => handleMouseLeave()}
								>
									{proj.name}	
								</Link>
								<br />
							</Box>
						))
					}
					<Text mt={'20px'} fontSize={'14px'} opacity={.8}>
						for additional projects, please refer to <a href={'https://github.com/brkss'} style={{color:'blue'}} target='_blank'>my github page</a>
					</Text>
				</GridItem>
				<GridItem display={{md: 'block', base: 'none'}} colSpan={{base: 12, md: 6}}>
					{
						bg === "" ? (
							<Center  height={'400px'} w={'100%'} >
								<Text mt={'20px'} fontSize={'14px'} opacity={.8}>
									[Hover on a project to see a snippet]
								</Text>
							</Center>
						): (
							<Box  height={'400px'} w={'100%'} bgRepeat={'no-repeat'} bgSize={'contain'} bgImage={`/assets/${bg}`} />
						)
					}
				</GridItem>
			</Grid>
		</Box>
	)
}
