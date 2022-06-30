import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <>
    {Object.keys(options).map(el => (
      <button
        onClick={onLeaveFeedback}
        key={el}
        value={el}
        className={s.filterBtn}
        type="button"
      >
        {el.toUpperCase()}
      </button>
    ))}
  </>
);

export default FeedbackOptions;
