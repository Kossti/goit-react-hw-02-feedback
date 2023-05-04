import React from 'react'
import PropTypes from 'prop-types'
import css from './FeedbackOptions.module.css'

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (
      <>
          {options.map(label => {
              return (<button
                  className={css.button}
                  type="button"
                  key={label}
                  name={label}
                  onClick={onLeaveFeedback}>{label}</button>);
          })}
      </>
  )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func,
}
