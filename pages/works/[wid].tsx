import { Box, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function(){

	const router = useRouter()
	const { wid } = router.query 

	return (
		<Box p={'20px'} display={'flex'} alignItems={'center'} paddingTop={20} h={'100vh'} bg={'#fdf2ef'}>

			<Text> { wid } </Text>

		</Box>
	)
}
