import { StartsCards } from '../StartsCard/StartsCard';
import styles from './styles.module.scss';
export const Header: React.FC = () => {
    return(
       <header id={styles.header}>
        <div className={styles.container}>
            <div>
                <h1>
                    MyTodo
                </h1>
                <span>Bem Vindo, Ermeson!</span>
            </div>
            <div>
                <StartsCards title="Total de Tarefas" value={1} />
                <StartsCards title="Tarefas Pedentes" value={2} />
                <StartsCards title="Tarefas Concluidas" value={3} />
            </div>
        </div>
       </header>
    );
}
