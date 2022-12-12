import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

export const Statistics = ({ title, stats}) => {
    return <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>

            {stats.map(({id, label, percentage}) => (
              <li className={styles.item} key={id} style={{
                backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`
              }}>
                    <span className={styles.label}>{label}</span>
                    <span className={styles.percentage}>{percentage}%</span>
    </li>    
            ))}
  </ul>
</section>
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage:PropTypes.number.isRequired
  }))
};


