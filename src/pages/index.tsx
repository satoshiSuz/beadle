import { HeaderLayout } from "@/templates/HeaderLayout";
import { Container, Flex } from "@chakra-ui/layout";
import { Game } from "./game";

const IndexPage = () => (
  <Container maxW="container.lg">
    <HeaderLayout>
      <Game />
    </HeaderLayout>
  </Container>
);

export default IndexPage;
