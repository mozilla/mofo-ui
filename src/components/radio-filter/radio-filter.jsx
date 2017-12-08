import React from "react";
import PropTypes from "prop-types";

export default class RadioFilter extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      activeFilter: this.props.initialChoice || this.props.options[0].value
    };
  }
  onChange() {
    var choice = this.refs.radioFilter.elements.filterBy.value;

    this.setState({
      activeFilter: choice
    });

    this.props.onChange(choice);
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.value !== this.state.activeFilter){
      this.setState({
        activeFilter: nextProps.value
      });
    }
  }
  render() {
    let options = this.props.options.map(option => {
      return (
        <label key={option.value} className="mui-radio-inline">

          <input
            type="radio"
            name="filterBy"
            id={`filter-radio-${option.value}`}
            value={option.value}
            onChange={this.onChange}
            checked={this.state.activeFilter === option.value} />

          <span>{option.label}</span>

        </label>
      );
    });

    return (
      <form ref="radioFilter" className="mui-radio-filter">
        {options}
      </form>
    );
  }
}

RadioFilter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired).isRequired,
  value: PropTypes.string,
  initialChoice: PropTypes.string,
  onChange: PropTypes.func
};
