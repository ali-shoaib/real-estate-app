import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsHouseFill } from "react-icons/bs";
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' backgroundColor='red.600'>
    <Box fontSize='3xl' color='white' marginLeft="4" fontWeight='bold'>
      <Flex alignItems='center'>
        <BsHouseFill />
        <Box marginLeft='2.5'><Link href='/'>Real Estate App</Link></Box>
      </Flex>
    </Box>
    <Spacer />
    <Box marginTop='1'>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} color='white' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
          <Menu>
            <MenuButton as={IconButton} colorScheme='blue' marginTop='1' marginLeft='3' padding='0 5 0 5' marginRight='2'>
              About Developer
            </MenuButton>
            <MenuList marginTop='1'>
              <Box paddingLeft='3'>Developed by</Box>
              <Box paddingLeft='3' fontWeight="bold" fontSize='20'>Ali Shoaib</Box>
            </MenuList>
        </Menu>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;