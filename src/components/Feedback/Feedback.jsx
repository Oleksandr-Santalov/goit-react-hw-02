import css from "./Feedback.module.css";
const Feedback = ({ states, total, goodFeed }) => {
  return (
    <>
      <ul className={css.list}>
        <li className={css.items}>
          <p>Good:{states["good"]}</p>
        </li>
        <li className={css.items}>
          <p>Neutral:{states["neutral"]}</p>
        </li>
        <li className={css.items}>
          <p>Bad:{states["bad"]}</p>
        </li>
        <li className={css.items}>
          <p>Total:{total}</p>
        </li>
        <li className={css.items}>
          <p>Positive:{goodFeed}</p>
        </li>
      </ul>
    </>
  );
};

export default Feedback;
