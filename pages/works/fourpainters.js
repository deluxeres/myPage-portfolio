import {
  Box,
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Trix RolePlay">
    <Container>
      <Title>
        Trix RolePlay <Badge>2020</Badge><Badge colorScheme="pink">Web</Badge>
      </Title>
      <P>
          Сайт разработан для проекта Mirror ROlePlay. Платформа Grand Theft Auto. Личный кабинет и функционал доната.
          Возможность управлять пользователями в игре, через Админ-права в личном кабинете сайта.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, JavaScript, Bootstrap 5, MYSQL</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://google.com">
            Когда то я напишу об этом статью
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Скриншоты</Center>
      </Heading>

      <Box>
        <iframe
          src="https://www.youtube.com/embed/DZGT2xoiZVc"
          width="100%"
          height="400"
          frameBorder="0"
          allowFullScreen
        />
      </Box>

      <WorkImage
        src="/images/works/the-four-painters_eyecatch.jpg"
        alt="walknote"
      />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
