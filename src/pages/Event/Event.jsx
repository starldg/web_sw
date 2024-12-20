import EventList from '../../components/Event/EventList/EventList';
import Title from '../../components/Title/Title';
import styles from './Event.module.css';

const Event = () => {
  return(
    <div className={styles.pageWrapper}>
      <Title>Events</Title>
      <section>
        <h2 className={styles.titleText}>이달의 이벤트</h2>
        <p className={styles.text}>
          매달 진행되는 새로운 이벤트들을 확인해보세요<br />
        </p>
        <hr className={styles.hr}/>
      </section>
      <EventList />
    </div>
  );
};

export default Event;