import React from "react";
import PropTypes from "prop-types";

export default class Tab extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  iconDefault: PropTypes.string.isRequired,
  iconActive: PropTypes.string
};
