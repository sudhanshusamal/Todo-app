import React from "react";
import { Box, Button, Link, Text, useColorMode, Flex } from "@chakra-ui/react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle, FaMoon, FaSun } from "react-icons/fa";
import { auth } from "../firebase";
import useAuth from "../hooks/useAuth";
const Auth = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    const { isLoggedIn, user } = useAuth();

    const handleAuth = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    };

    console.log(user)

    return (
        <>
            <Button position={"fixed"} top="5%" left="5%" onClick={() => toggleColorMode()}>
                {colorMode == "dark" ? <FaSun /> : <FaMoon />}
            </Button>{" "}
        <Box position={"fixed"} top="5%" right="5%">
            {isLoggedIn && (
                <>
                    <Flex alignItems="center">
                        <img
                            src={user.reloadUserInfo.photoUrl}
                            alt=""
                            style={{ borderRadius: '50%', width: '40px', height: '40px', marginTop: '10px', marginBottom: '-10px', marginRight: '10px', verticalAlign: 'middle' }}
                        />
                        {/* <Box marginLeft={2}> */}
                            <Text as="h2" fontWeight="bold" textAlign="center" mt={4}>
                                {user.reloadUserInfo.displayName}
                            </Text>
                    </Flex>
                            <Link
                                color="white"
                                bg="red.500"
                                p={1.5}
                                mt={5}
                                borderRadius="md"
                                _hover={{ textDecoration: 'underline', bgColor: 'red.600' }}
                                onClick={() => auth.signOut()}
                                display="inline-block"
                            >
                                Logout
                            </Link>
                        {/* </Box> */}

                </>
            )}
            {!isLoggedIn && (
                <Button leftIcon={<FaGoogle />} onClick={() => handleAuth()}>
                    Login with Google
                </Button>
            )}
        </Box>
        </>
    );
};

export default Auth;