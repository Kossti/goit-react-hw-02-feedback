import React from 'react'
import PropTypes from 'prop-types'
import css from './Section.module.css'

export default function Section({title, children}) {
  return (
    <section className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
          {children}
    </section>
  )
}

Section.protoTypes = {
    title: PropTypes.string.isRequired,
};