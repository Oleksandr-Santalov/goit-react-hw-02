import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";
import { useEffect, useState } from "react";

// import css from "./App.module.css";

const state = { good: 0, neutral: 0, bad: 0 };

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const clicks = window.localStorage.getItem("clicks");
    if (clicks === null) {
      return state;
    } else {
      return JSON.parse(clicks);
    }
  });

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const reset = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("clicks", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const goodFeedbacks = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options total={totalFeedback} onUpdate={updateFeedback} res={reset} />

      {totalFeedback ? (
        <Feedback
          states={feedback}
          total={totalFeedback}
          goodFeed={goodFeedbacks}
        />
      ) : (
        <Notification />
      )}
    </>
  );
};

export default App;
