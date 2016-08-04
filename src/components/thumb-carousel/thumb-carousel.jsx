import React from "react";
import DOMPurify from "dompurify";

export default React.createClass({
  propTypes: {
    contents: React.PropTypes.arrayOf(React.PropTypes.shape({
      image: React.PropTypes.string.isRequired,
      caption: React.PropTypes.string.isRequired,
      attribution: React.PropTypes.string.isRequired
    })).isRequired
  },
  getInitialState() {
    return {
      activeTrigger: 0
    };
  },
  onTriggerClick: function (event) {
    let elTrigger = event.currentTarget,
        elSiblings = elTrigger.parentElement.children;

    // Infer active trigger index from the index of the clicked item
    let index = Array.prototype.indexOf.call(elSiblings, elTrigger);

    this.setState({
      activeTrigger: index
    });
  },
  render: function() {
    let triggers = this.props.contents.map((item, index) => {
      let classNames = `hero${this.state.activeTrigger === index ? ` active` : ``}`;

      // Using anchors instead of buttons because Firefox adds "padding" to button elements even with padding:0
      return (
        <button key={index} className={classNames} onClick={this.onTriggerClick}>
          <img className="photo" src={item.image}></img>
        </button>
      );
    });

    let quotes = this.props.contents.map((item, index) => {
      return (
        <div key={index} className={this.state.activeTrigger === index ? `active` : ``}>
          <div className="wrapper">
            <div className="quote quote-left"></div>
            <p className="caption" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(item.caption)}}></p>
            <div className="quote quote-right"></div>
          </div>

          <p className="attribution">– {item.attribution}</p>
        </div>
      );
    });

    return (
      <div className="mui-thumb-carousel">
        <div className="heroes">
          {triggers}
        </div>
        <div className="quotes">
          {quotes}
        </div>
      </div>
    );
  }
});
