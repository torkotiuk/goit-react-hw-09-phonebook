import styles from './Stat.module.scss';

const Stat = ({ total }) => {
  return <div className={styles.Stat}>({total})</div>;
};

export default Stat;
