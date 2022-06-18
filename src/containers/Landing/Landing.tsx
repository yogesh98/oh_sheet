import { Button, Flex, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import { useNavigate  } from "react-router-dom";

export interface ILandingProps {
}

export default function Landing (props: ILandingProps) {
    const navigate = useNavigate ();

    return (
        <Flex direction="column" h="100%" w="100%">
            <Flex m={4} alignItems={"center"} justifyContent={"end"}>
                <Button mr={4} size="lg" onClick={() => {navigate('/signup')}}> Sign Up </Button>
                <Button size="lg" onClick={() => {navigate('/login')}}> Log in </Button>
            </Flex>
            <Flex flexGrow={1} direction="column" alignItems={"center"} justifyContent={"center"}>
                <Flex alignItems={"center"} justifyContent="center">
                    <Heading size={useBreakpointValue({ base: '2xl', md: '4xl' })}>
                        oh sheet.
                    </Heading>
                    <Text>Open Beta</Text>
                </Flex>
            </Flex>
        </Flex>
    );
}