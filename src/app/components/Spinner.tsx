// Spinner.tsx
import React from 'react';
import { Spinner as ChakraSpinner, Box } from '@chakra-ui/react';

const Spinner: React.FC = () => {
    return (
        <Box
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="9999"
        >
            <ChakraSpinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
            />
        </Box>
    );
};

export default Spinner;
