'use client'

import PersonsCard from '@/components/PersonsCard/PersonsCard'
import { contributiors } from '@/data/contributiors'
import { useTranslations } from 'next-intl'

const Contributor = () => {
  const t = useTranslations('contributors')
  return (
    <PersonsCard persons={contributiors} title={t('contributors')} />
  )
}

export default Contributor