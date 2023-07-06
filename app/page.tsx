import { redirect } from 'next/navigation'
import { i18n } from '../i18n'

export default async function RootPage() {
  redirect(`/${i18n.defaultLocale}`)
}