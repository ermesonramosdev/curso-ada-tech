import { FormEvent, useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface Task {
    title: string;
    done: boolean;
    id: number;
}

export const Tasks:React.FC = () => {
    const [ tasksTitle, setTaskstitle ] = useState<string>('');
    const [ tasks, setTasks ] = useState([] as Task[]);

    useEffect(() => {
        const taskOnLocalStorage = localStorage.getItem("tasks");

        if(taskOnLocalStorage) {
            setTasks(JSON.parse(taskOnLocalStorage));
        }
    }, []);

    function handleSubmitAddTaks(event: FormEvent) {
        event.preventDefault();

        if(tasksTitle.length <= 3) {
            alert('Não é possivel adicionar uma terefa menor que três ')
            return
        }

        const newTasks = [
            ...tasks,
            { id: new Date().getTime(), title: tasksTitle, done: false }
        ];
        setTasks(newTasks);

        localStorage.setItem('tasks', JSON.stringify(newTasks));
        setTaskstitle('');
    }

    return(
        <section className={styles.container}>
            <form 
                onSubmit={handleSubmitAddTaks}
            >
                <div>
                    <label htmlFor="task-title">Adicionar Tarefas</label>
                    <input 
                        value={tasksTitle}
                        onChange={(event) => setTaskstitle(event.target.value)} 
                        type="text" name="" id="task-title" placeholder="Título da tarefa"
                    />
                </div>
                <button type="submit">Adicionar Tarefas</button>
            </form>

            <ul>
                {tasks.map((tasks) => {
                    return (
                        <li key={tasks.id}>
                            <input type="checkbox" id={`task-${tasks.id}`}/>
                            <label htmlFor={`task-${tasks.id}`}>{tasks.title}</label>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}