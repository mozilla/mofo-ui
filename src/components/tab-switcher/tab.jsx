import React from "react";

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    slug: React.PropTypes.string.isRequired,
    iconDefault: React.PropTypes.string.isRequired,
    iconActive: React.PropTypes.string
  },
  render: function() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});
