'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PostListItem } from '@/types'
import styles from './PostCard.module.css'

const PostCard = ({ locale, post }: { locale: string, post: PostListItem }) => {
  return (
    <div key={post.slug} className={styles.card}>
      <Link href={`/${locale}/blog/${post.slug}`}>
        <div className={styles.imageContainer}>
          <Image src={`/images/${post.slug}/summary.png`} alt={post.data.title} width={0} height={0} className={styles.image} />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{post.data.title}</p>
        </div>
        <div className={styles.subinfo}>
          <div className={styles.tags} >
            {
              post.data.tags &&
              post.data.tags.map((tag) => (
                <span className={styles.tag} key={tag}>#{tag}</span>
              ))
            }
          </div>
          <div className={styles.extra}>
            <p>{post.data.author}</p>
            <p>{post.data.date}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard