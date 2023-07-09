import styles from './Button.module.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  terre?: boolean;
  children: React.ReactNode;
}

/**
 * 
 * @param terre 传入 terre 按钮将会变为 terre 配色 
 * @returns 
 */
const Button = ({ terre, children, ...attributes }: Props) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${terre ? styles['btn-terre'] : styles['btn-webgal']}`}
      {...attributes}
    >
      {children}
    </button>
  )
}

export default Button