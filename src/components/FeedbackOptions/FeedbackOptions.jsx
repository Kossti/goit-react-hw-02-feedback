import React from 'react'
import PropTypes from 'prop-types'

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (
      <>
          {options.map(label => {
              return <button key={label} name={label} onClick={onLeaveFeedback}>{label}</button>
          })}
      </>
  )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func,
}
