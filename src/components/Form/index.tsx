import { CirclePlayIcon } from 'lucide-react'
import styles from './styles.module.css'

export function Form() {
  return (
    <div className={styles.form}>
      <div className={styles.timer}>00:00</div>
      <div className={styles.task}>
        <span>task</span>
        <input type="text" placeholder="Digite algo" />
        <span>Próximo ciclo é de FUNCTION</span>
      </div>
      <div className={styles.actions}>
        <button><CirclePlayIcon /></button>
      </div>
    </div>
  )
}