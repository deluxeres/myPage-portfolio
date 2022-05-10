import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Legion-Doors">
    <Container>
      <Title>
        Legion-Doors <Badge>2021</Badge><Badge colorScheme="pink">Web</Badge>
      </Title>
      <P>
        Была выполнена вёрстка для коммерческого проекта Legion-doors.ru.
        Проект подразумевает под собой сайт по продаже дверей и стройматериалов. 
      </P>
      <P>
         Работа была выполнена на фрилансе.
      </P>
      <UnorderedList my={4}>
        <ListItem>Продажа дверей</ListItem>
        <ListItem>Продажа решеток на окна</ListItem>
        <ListItem>Продажа различных стройматериалов</ListItem>
      </UnorderedList>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>WEB</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HtML, JavaScript, CSS</span>
        </ListItem>
        <ListItem>
          <Meta>Link</Meta>
          <Link href="https://deluxeres.github.io/legion-doors/">
            Legion-doors.ru <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/deluxeres/legion-doors">
              github.com/deluxeres/legion-doors <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/menkiki_eyecatch.png" alt="menkiki" />
      <WorkImage src="/images/works/legiondoors.png" alt="menkiki" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
