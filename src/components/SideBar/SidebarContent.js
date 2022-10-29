import {
    Box,
    CloseButton,
    Flex, Text, useColorModeValue
} from '@chakra-ui/react';
import React from 'react';
import { FiActivity, FiHome, FiTrash, FiUpload, FiSearch } from 'react-icons/fi';
import NavItem from './NavItem';

const LinkItems = [
    { name: 'Home', linkHref: '/Home', href: '/Home', icon: FiHome },
    { name: 'Active Bot', linkHref: 'Home', href: '/Home', icon: FiActivity },
    { name: 'Upload Bot', linkHref: '/UploadFile', href: '/UploadFile', icon: FiUpload },
    { name: 'Bot Has Uploaded', linkHref: '/BotHasUploaded', href: '/BotHasUploaded', icon: FiSearch },
];

const SidebarContent = ({ onClose, ...rest }) => {

    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    ServerXML
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} link={link.href} linkHref={link.linkHref}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

export default SidebarContent;