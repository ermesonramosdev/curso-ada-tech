import styles from './styles.module.scss';
interface StartsCardsProps {
    title?: string;
    value: number;
}
export const StartsCards:React.FC<StartsCardsProps> = ({ title, value }) => {
    return(
        <article className={styles.stats_card}>
            <h2>{title}</h2>
            <span>{value}</span>
        </article>
    );
}