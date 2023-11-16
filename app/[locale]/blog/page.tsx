import Container from '@/components/Container/Container'
import BlogTitle from './BlogTitle'
import PostsGrid from './PostsGrid'
import { siteConfig } from '@/site.config'
import { createTranslator } from 'next-intl'
import { getPostList } from './posts'

const Blog = async ({ params: { locale } }: { params: { locale: string } }) => {
  const postList = await getPostList()
  return (
    <Container>
      <BlogTitle />
      <PostsGrid locale={locale} postList={postList} />
    </Container>
  )
}

export default Blog

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = (await import(`/locales/${locale}.json`)).default

  const t = createTranslator({ locale, messages })

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: `${t('metadata.blog.title')} | WebGAL`,
    description: t('metadata.blog.description'),
    openGraph: {
      title: `${t('metadata.blog.title')} | WebGAL`,
      description: t('metadata.blog.description'),
      url: `/${locale}/blog`,
      images: [
        {
          url: '/images/opengraph-image.png',
          width: 512,
          height: 512,
        },
      ],
    },
  }
}