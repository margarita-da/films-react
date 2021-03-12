import React from "react"
import PropTypes from "prop-types"
import Star from "./Star"
let result
function Stars({ count }) {
  if (typeof count === "number" && count > 1 && count < 5) {
    result = new Array(count).fill(true).map((e, i) => i + 1)
  } else return false
  return (
    result && (
      <ul className="card-body-stars u-clearfix">
        {result.map((_, index) => (
          <li key={index}>
            <Star />
          </li>
        ))}
      </ul>
    )
  )
}
Stars.defaultProps = {
  count: 0,
}

Stars.propTypes = {
  count: PropTypes.number,
}

export default Stars
