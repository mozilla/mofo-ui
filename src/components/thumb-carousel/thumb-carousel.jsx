import React from "react";
import PropTypes from "prop-types";

export default class ThumbCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.onTriggerClick = this.onTriggerClick.bind(this);
    this.state = {
      activeTrigger: 0
    };
  }
  onTriggerClick(event) {
    let elTrigger = event.currentTarget,
        elSiblings = elTrigger.parentElement.children;

    // Infer active trigger index from the index of the clicked item
    let index = Array.prototype.indexOf.call(elSiblings, elTrigger);

    this.setState({
      activeTrigger: index
    });
  }
  render() {
    let triggers = this.props.contents.map((item, index) => {
      let classNames = `mui-hero${this.state.activeTrigger === index ? ` mui-active` : ``}`;

      // Using anchors instead of buttons because Firefox adds "padding" to button elements even with padding:0
      return (
        <button key={index} className={classNames} onClick={this.onTriggerClick}>
          <img className="mui-photo" src={item.image} onDragStart={e => e.preventDefault()}></img>
        </button>
      );
    });

    let quotes = this.props.contents.map((item, index) => {
      return (
        <div key={index} className={this.state.activeTrigger === index ? `mui-active` : ``}>
          <div className="mui-wrapper">
            <div className="mui-quote mui-quote-left"></div>
            <p className="mui-caption">{item.caption}</p>
            <div className="mui-quote mui-quote-right"></div>
          </div>

          <p className="mui-attribution">– {item.attribution}</p>
        </div>
      );
    });

    return (
      <div className="mui-thumb-carousel">
        <div className="mui-heroes">
          {triggers}
        </div>
        <div className="mui-quotes">
          {quotes}
        </div>
      </div>
    );
  }
}

ThumbCarousel.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    attribution: PropTypes.string.isRequired
  })).isRequired
};
