import { useState } from "react";
import styles from "./styles.module.scss";
export const Tasks:React.FC = () => {
    const [ tasksTitle, setTaskstitle ] = useState<string>('');

    return(
        <section className={styles.container}>
            <form 
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <div>
                    <label htmlFor="task-title">Adicionar Tarefas</label>
                    <input 
                        value={tasksTitle}
                        onChange={(e) => setTaskstitle(e.target.value)} 
                        type="text" name="" id="task-title" placeholder="Título da tarefa"
                    />
                </div>
                <button type="submit">Adicionar Tarefas</button>
            </form>
        </section>
    );
}