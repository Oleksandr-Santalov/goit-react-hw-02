import css from "./Options.module.css";

const Options = ({ onUpdate, res, total }) => {
  let buttonResetRendering;
  if (total !== 0) buttonResetRendering = true;

  return (
    <>
      <ul className={css.list}>
        <li>
          <button
            className={css.item}
            type="button"
            onClick={() => onUpdate("good")}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className={css.item}
            type="button"
            onClick={() => onUpdate("neutral")}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className={css.item}
            type="button"
            onClick={() => onUpdate("bad")}
          >
            Bad
          </button>
        </li>
        {buttonResetRendering && (
          <li>
            <button className={css.item} type="button" onClick={res}>
              Reset
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default Options;
