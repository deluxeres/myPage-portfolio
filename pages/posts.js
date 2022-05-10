import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFishWorkflow from '../public/images/contents/youtube-fish-workflow.jpg'
import thumbMyDeskSetup from '../public/images/contents/youtube-my-desk-setup.jpg'
import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Популярные посты
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Запись №1"
            thumbnail={thumbFishWorkflow}
            href="https:/google.com"
            target="_blank"
          />
          <GridItem
            title="Запись №2"
            thumbnail={thumbMyDeskSetup}
            href="https:/google.com"
            target="_blank"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Запись №3"
            thumbnail={thumb500PaidUsers}
            href="https:/google.com"
            target="_blank"
          />
          <GridItem
            title="Запись №4"
            thumbnail={thumbFinancialGoal}
            href="https:/google.com"
            target="_blank"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Запись №5"
            thumbnail={thumbHowToPriceYourself}
            href="https:/google.com"
            target="_blank"
          />
          <GridItem
            title="Запись №6"
            thumbnail={thumb50xFaster}
            href="https:/google.com"
            target="_blank"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
