import { Person } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

/**
 * 人员卡片
 * @persons 人员
 * @title 卡片标题
 * @avatar 头像大小
 * @returns 
 */
const PersonsCard = ({ persons, title, avatar }: { persons: Person[], title?: string, avatar?: 'small' | 'normal' | 'large' }) => {
  const avatarSize =
    avatar === 'small'
      ? 40
      : avatar === 'large'
        ? 100
        : 60

  return (
    <div className={'space-y-4'}>
      {
        title &&
        <h2 className={'text-xl font-medium w-full'}>{title}</h2>
      }
      <div className={'flex flex-wrap gap-2 w-fit'}>
        {persons.map(person =>
          <div key={person.name}>
            <Link href={person.url} target={'_blank'}>
              <Image
                src={person.avatarUrl}
                width={avatarSize}
                height={avatarSize}
                title={person.name}
                alt={person.name}
                className={'rounded-full drop-shadow-sm '}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default PersonsCard