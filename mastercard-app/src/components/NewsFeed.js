
import styles from '../styles/NewsFeed.module.css';

const NewsFeed = ({ news }) => {
  return (
    <div className={styles.newsFeed}>
      {news.map((item, index) => (
        <div key={index} className={styles.newsItem}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <span>{item.date}</span>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
