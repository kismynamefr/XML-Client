import {
    Avatar, Box, Button, chakra, Flex, FormControl, Heading,
    Input, InputGroup, InputLeftElement, InputRightElement, Spinner, Stack
} from "@chakra-ui/react";
import { memo, useEffect, useState } from "react";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Toast from "../../hooks/ToastProvider";
import loginAction from '../../redux/action/actionLogin';
import infinity from '../../assets/infinity.png';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const SignIn = () => {
    const dispatch = useDispatch();
    const errorLogin = useSelector((state) => state.login?.error);
    const requesting = useSelector((state) => state.login?.requesting);
    const [showPassword, setShowPassword] = useState(false);
    const [formValue, setFormValue] = useState({
        username: "",
        password: "",
    });
    const hasLogin = useSelector((state) => state.login?.hasLogin);
    const navigate = useNavigate();

    const handleShowClick = () => setShowPassword(!showPassword);

    const handleForm = (e) => {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginAction({ formValue }));
    };

    useEffect(() => {
        if (!hasLogin && errorLogin) Toast("error", "Wrong username or password");
    }, [errorLogin]);

    useEffect(() => {
        if(hasLogin) navigate("/");
    }, [hasLogin]);


    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <img src={infinity} alt="infinity" style={{width: "200px"}}/>
                <Heading color="teal.400">Welcome To Infinity Software</Heading>
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="text" placeholder="User name" name="username" onChange={handleForm} />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        color="gray.300"
                                        children={<CFaLock color="gray.300" />}
                                    />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        placeholder="Password"
                                        onChange={handleForm}
                                    />
                                    <InputRightElement width="4.5rem">
                                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                                onClick={handleLogin}
                            >
                                {
                                    requesting ? <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='teal' size='lg' />
                                        : "Login"
                                }
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
        </Flex>
    );
};

export default memo(SignIn);
