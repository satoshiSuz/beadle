import { Header } from "@/organisms/layout/Header";
import { Box, Flex } from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const HeaderLayout: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex direction="column" id="content" flex="1">
        {children}
      </Flex>
    </Flex>
  );
};
