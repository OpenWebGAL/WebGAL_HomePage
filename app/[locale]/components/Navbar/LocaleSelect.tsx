import Link from 'next/link'
import { RiTranslate2, RiGithubFill, RiArrowDropDownFill, RiMenuFill } from 'react-icons/ri'
import { i18n } from '../../../../i18n'
import styles from './LocaleSelect.module.scss'

const LocaleSelect = ({ locale, paths }: { locale: string, paths: string[] }) => {
  return (
    <div className={styles.localeSelect}>
      <Link href='#' className={styles.localeButton}>
        <RiTranslate2 style={{ width: '24px', height: '24px' }} /><RiArrowDropDownFill />
      </Link>
      <div className={styles.localeMenu}>
        {i18n.locales.map(lang =>
          <Link
            key={lang.code}
            href={`/${lang.code}/${(paths.slice(1).join('/'))}`}
            className={locale === lang.code ? styles.active : 'text-black'}
          >
            {lang.lang}
          </Link>
        )}
      </div>
    </div>
  )
}

export default LocaleSelect