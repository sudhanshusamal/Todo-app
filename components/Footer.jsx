import React from 'react'
import { Center, Text } from "@chakra-ui/react";
import Link from 'next/link';


function Footer() {
    return (
        <Center>
        <Text  position={"fixed"} bottom="1%" mt={-4}>
          Created By{" "}
          <Link
            href="https://www.linkedin.com/in/sudhanshusamal/"
            color="blue.500"
            style={{ textDecoration: "underline" }}
          >
            Sudhanshu Samal
          </Link>
        </Text>
      </Center>
    )
}

export default Footer
