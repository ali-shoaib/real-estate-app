import { Box } from '@chakra-ui/layout';

const Footer = () => (
  <Box textAlign='center' p='5' color='white' backgroundColor='red.600'>
    © {new Date().getFullYear()} Real Estate App, Inc.
  </Box>
);

export default Footer;