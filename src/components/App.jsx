import { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';
import css from './Section/Section.module.css';

const initialState = { good: 0, neutral: 0, bad: 0 };
export function App() {
  const [state, setState] = useState(initialState);

  const { good, neutral, bad } = state;

  const leaveFeedback = option => {
    setState(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const countTotalFeedback = () =>
    Object.values(state).reduce((acc, value) => acc + value, 0);

  const countPositiveFeedbackPercentage = () => {
    const value = countTotalFeedback();
    return good > 0 ? Math.round((good / value) * 100) : 0;
  };

  const stateName = Object.keys(state);

  return (
    <div className={css.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={stateName} onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
