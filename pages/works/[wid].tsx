import React from 'react'
import { Box, Text, Grid, GridItem, Link, Image as Img } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { projects, IProject } from '../../src/utils/data/projects'
import { HiOutlineArrowLongLeft } from 'react-icons/hi2';
import  NextLink  from 'next/link'

interface IImage {
	src: string;
	ratio: number;
}

export default function(){

	const router = useRouter()
	const { wid } = router.query 
	const [project, setProject] = React.useState<IProject | null>(null)
	const [images, setImages] = React.useState<IImage[]>([]);

	const calculateRatio = async (url: string) : Promise<number> => {
		return new Promise((resolve, reject) =>{
			const image = new Image();

			image.onload = () => {
				const ratio = image.width / image.height
				resolve(ratio);
			}

			image.onerror = (e) => {
				console.log("err : ", e)
				reject(0);
			}
			image.src = url;
		});
	}

	React.useEffect(() => {
		(async () => {
			if(wid){
				const tmp = projects.find(x => x.id === wid) ;
				if(tmp){
					setProject(tmp);
					tmp.images.map(async (img) => {
						
						const ratio = await calculateRatio(`/assets/${img}`); 
						console.log("src : ", img, ratio)
						setImages((curr) => [...curr, { src: img as string, ratio: ratio }])
						console.log("images : ", images)
					})
					console.log("images: ", images);
				}
			}
		})()
		
	}, [wid])

	if (!project)
		return null;

	return (
		<Box p={'20px'} display={'flex'} alignItems={'center'} paddingTop={20} minH={'100vh'} /*bg={'#fdf2ef'}*/>
			<Grid templateColumns={'repeat(12, 1fr)'}>
				<GridItem colSpan={{md: 6, base: 12}}>
					<Link 
						display={'block'}
						href={'/works'}
						as={NextLink}
						_hover={{color: 'blue'}}
						mb={'20px'}
						fontSize={'20px'}
						pos={'fixed'}
						bg={'white'}
					>
						<HiOutlineArrowLongLeft style={{display: 'inline-block'}} /> { project.name } <Text display={'inline-block'} fontSize={'14px'}>({ project.date })</Text>
					</Link>
					<Box mt={'40px'} p={'10px'} dangerouslySetInnerHTML={{__html: project.text}}  />
				</GridItem>
				<GridItem mt={{md: 0, base: 20}} colSpan={{md: 6, base: 12}}>
					<Grid templateColumns={'repeat(12, 1fr)'} gap={1}>
						{
							project.videos ? 
							project.videos.map((vid, key) => (
								<GridItem key={key} colSpan={12}>
									<video style={{height: '500px', margin: 'auto'}} controls src={`/assets/${vid}`}  key={key} />
								</GridItem>
							)) : null
						}

						{
							images.map((img, key) => {
								if(img.ratio > 1){
									return(<GridItem key={key} colSpan={12}>
										<Img rounded={0} src={`/assets/${img.src}`}   />
									</GridItem>)
								}else {
									return(<GridItem key={key} colSpan={{md: 4, base: 6}}>
										<Img rounded={0} src={`/assets/${img.src}`} />
									</GridItem>)
								}
								
							})
						}
					</Grid>
				</GridItem>
			</Grid>
		</Box>
	)
}
