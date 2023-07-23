import createMiddleware from 'next-intl/middleware'
import { i18n } from './i18n'

export default createMiddleware({
  locales: i18n.locales.map(locale => locale.code),
  defaultLocale: i18n.defaultLocale
})

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)']
}