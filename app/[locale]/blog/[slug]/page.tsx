import React from 'react'
import { getPostList, getPost } from '../posts'
import Link from 'next/link'
import Container from '@/components/Container/Container'
import styles from './post.module.css'
import { createTranslator } from 'next-intl'
import { siteConfig } from '@/site.config'

const Post = async ({ params: { locale, slug } }: { params: { locale: string, slug: string } }) => {

  const post = await getPost(slug)
  const postList = await getPostList()
  const index = postList.findIndex((post) => post.slug === slug)

  const newPost = index > 0 ? postList[index - 1] : null
  const oldPost = index < postList.length - 1 ? postList[index + 1] : null

  return (
    <Container>
      <div className='p-4 max-w-screen-lg m-auto'>
        <article className={styles.article}>
          <div className='font-light pt-4 pb-1 lg:pt-16'>
            <Link href={`/${locale}/blog`}><span className='text-base pl-1'>←</span> BACK TO BLOG</Link>
          </div>
          <h1>{post.data.title}</h1>
          <div>
            {post.data.author}
          </div>
          <div className='text-sm'>
            {post.data.date}
          </div>
          <div className={styles.tags} >
            {
              post.data.tags &&
              post.data.tags.map((tag) => (
                <span className={styles.tag} key={tag}>#{tag}</span>
              ))
            }
          </div>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
        <div className='border-t-2 border-opacity-5 mt-8 py-8 text-lg grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div>
            {
              newPost &&
              <Link href={`/${locale}/blog/${newPost?.slug}`} className='flex flex-row items-end flex-nowrap max-w-full gap-2'>
                <div className='w-fit'>{' < '}</div>
                <div className='flex-auto overflow-hidden whitespace-nowrap text-ellipsis pr-8'>{newPost?.data.title}</div>
              </Link>
            }
          </div>
          <div >
            {oldPost &&
              <Link href={`/${locale}/blog/${oldPost?.slug}`} className='flex flex-row items-end flex-nowrap max-w-full gap-2'>
                <div className='flex-auto overflow-hidden whitespace-nowrap text-ellipsis text-right pl-8'>{oldPost?.data.title}</div>
                <div className='w-fit'>{' > '}</div>
              </Link>}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Post

export const generateStaticParams = async () => {
  const postList = await getPostList()
  return postList.map(item => { return { slug: item.slug } })
}

export async function generateMetadata({ params: { locale, slug } }: { params: { locale: string, slug: string } }) {
  const messages = (await import(`/locales/${locale}.json`)).default

  const t = createTranslator({ locale, messages })

  const post = await getPost(slug)

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: `${post.data.title} | ${t('metadata.blog.title')} | WebGAL`,
    description: post.data.title,
    openGraph: {
      title: `${post.data.title} | ${t('metadata.blog.title')} | WebGAL`,
      description: post.data.title,
      url: `/${locale}/blog/${slug}`,
      images: [
        {
          url: `/images/${slug}/summary.png`,
          width: 1920,
          height: 1080,
        },
      ],
    },
  }
}