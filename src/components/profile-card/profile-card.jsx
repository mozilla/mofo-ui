import React from "react";

export default React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    links: React.PropTypes.array,
    image: React.PropTypes.string
  },
  getDefaultProps() {
    return {
      name: ``,
      title: ``,
      image: `/assets/img/placeholder.jpg`,
      links: []
    };
  },
  render() {
    return (
      <div className="profile-card row flex-items-xs-center flex-items-sm-left flex-items-xl-center" id={this.props.name.replace(/\W/g, `-`)}>
        <div className="col-xs-6 col-sm-3">
          <div className="text-xs-center">
            <img className="profile-card--image rounded-circle" src={this.props.image}/>
          </div>
        </div>
        <div className="col-sm-9">
          <h3 className="m-b-0 profile-card--name">{this.props.name}</h3>
          <p className="profile-card--title">{this.props.title}</p>
          <p className="m-b-1 profile-card--links">{this.props.links.map((link, index)=>{ return <span key={index} className="profile-card--link">{link}</span>; })}</p>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
});
