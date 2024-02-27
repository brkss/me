import React from 'react';
import Image from 'next/image';
import { Center, Box, Image as Img } from '@chakra-ui/react';
interface Props {
    img: string;
    open: boolean;
    onClose: () => void;
}

export const ImageModal : React.FC<Props> = ({img, open, onClose}) => {


    return (
        <Center onClick={onClose} w={'100%'} pos={'fixed'} top={0} left={0} background={'#00000087'} h={'100vh'} display={open ? "flex" : "none"}>
            <Box>
                <Img m={'auto'} style={{width: '70%'}}src={img} alt="" />
            </Box>
        </Center>
    )
}