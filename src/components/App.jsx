import React, { Component } from 'react'
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification'
import css from './App.module.css'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0
    }
    return Math.round(this.state.good / total * 100); 
  }

  onLeaveFeedback = (event) => {
    this.setState(prevState => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      }
    })
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback()
    const positivePercentage = this.countPositiveFeedbackPercentage()
    return (
      <div className={css.container}>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={options} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section title={"Statistics"}>
          {total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} /> : <Notification message='No feedback given'/>} 
        </Section>
      </div>
    )
  }
}
