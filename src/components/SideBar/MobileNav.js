import {
    Avatar, AvatarBadge, Box, Flex,
    HStack, IconButton, Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList, Text, useColorModeValue, VStack
} from '@chakra-ui/react';
import {
    FiChevronDown, FiMenu
} from 'react-icons/fi';
import { useDispatch, useSelector } from "react-redux";
import logOutAction from '../../redux/action/actionLogout';
import ColorMode from './ColorMode';

const MobileNav = ({ onOpen, ...rest }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.login?.data);

    const handleLogOut = () => {
        user && dispatch(logOutAction());
    }

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold">
                ServerXML
            </Text>
            <HStack spacing={{ base: '0', md: '6' }}>
                <ColorMode />
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar bg='gray.400' size="sm">
                                    <AvatarBadge boxSize='1.25em' bg='green.500' />
                                </Avatar>
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="sm">{user?.username}</Text>
                                    <Text fontSize="xs" color="gray.600">
                                        Admin
                                    </Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                            <MenuItem>Profile</MenuItem>
                            <MenuItem>Settings</MenuItem>
                            <MenuItem>Billing</MenuItem>
                            <MenuDivider />
                            <MenuItem onClick={handleLogOut}>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

export default MobileNav;