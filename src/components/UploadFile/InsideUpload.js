import {
    Box, Button, Container, Heading, Input, Stack, Text
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

const InsideUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const hiddenFileInput = useRef(null);
    const reader = new FileReader();

    console.log("selectedFile: ", selectedFile);

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
        const fileUploaded = event.target.files[0];
        reader.readAsText(fileUploaded);
        reader.onload = (e) => {
            const readerData = e.target.result;
            console.log(JSON.stringify(readerData));
        }
        setSelectedFile(fileUploaded);
    };

    return (
        <Box position={'relative'}>
            <Container
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                display='flex'
                justifyContent='center'
            >
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Upload Your Bot
                            <Text
                                as={'span'}
                                bg="cyan.400"
                                bgClip="text">
                                !
                            </Text>
                        </Heading>
                        <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                            We’re looking for amazing engineers just like you! Become a part
                            of our rockstar engineering team and skyrocket your career!
                        </Text>
                    </Stack>
                    <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                            <Input
                                placeholder="Bot Name"
                                bg={'gray.100'}
                                border={0}
                                color={'gray.500'}
                                _placeholder={{
                                    color: 'gray.500',
                                }}
                            />
                            {
                                selectedFile &&
                                <Button fontFamily={'heading'} bg={'gray.100'} cursor="default" color={'gray.500'} _hover={{ bg: 'gray.100' }} justifyContent="start">
                                    File name: {selectedFile.name}
                                </Button>
                            }
                            <input type="file" id="actual-btn" accept="text/xml, application/xml" ref={hiddenFileInput} onChange={handleChange} hidden />
                            <Button fontFamily={'heading'} bg={'gray.200'} color={'gray.800'} onClick={handleClick}>
                                Upload Bot
                            </Button>
                        </Stack>
                        <Button
                            fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bg="cyan.400"
                            color={'white'}
                            _hover={{
                                bg: "cyan.400",
                                boxShadow: 'xl',
                            }}>
                            Submit
                        </Button>
                    </Box>
                    form
                </Stack>
            </Container>
        </Box>
    )
}

export default InsideUpload
