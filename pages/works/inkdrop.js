import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Mirror RolePlay">
    <Container>
      <Title>
        Mirror RolePlay <Badge>2019-</Badge><Badge colorScheme="pink">Web</Badge>
      </Title>
      <P>
        Сайт разработан для проекта Mirror RolePlay. Платформа Grand Theft Auto
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mirror-rp.ru">
             https://mirror-rp.ru <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WebSite</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Html, JavaScript, Css, WebPack</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app">
            Когда-то я напишу об этом свой пост <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
