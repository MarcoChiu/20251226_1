import styles from './Loading.module.css';

export const Loading = ({ children }) => {
    return (
        <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>{children}</p>
        </div>
    );
};
