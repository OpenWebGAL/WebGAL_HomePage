'use client'

import styles from './PostsGrid.module.css'
import PostCard from './PostCard'
import { PostListItem } from '@/types'

const PostsGrid = ({ locale, postList }: { locale: string, postList: PostListItem[] }) => {
  return (
    <div>
      <div>

      </div>
      <div className={styles['posts-grid']}>
        {
          postList.length !== 0 &&
          postList.map((post) => <PostCard locale={locale} post={post} key={post.slug} />)
        }
      </div>
    </div>

  )
}

export default PostsGrid