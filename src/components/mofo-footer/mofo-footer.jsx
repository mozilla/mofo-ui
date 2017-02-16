import React from "react";

export default React.createClass({
  propTypes: {
    footerLinks: React.PropTypes.arrayOf(React.PropTypes.shape({
      iconType: React.PropTypes.oneOf([`info`, `email`, `github`, `chat`, `twitter`, `facebook`, `cc-license`, `code-of-conduct`, `cookies`, `legal`, `privacy`, `donate`,]).isRequired,
      link: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired
    }).isRequired).isRequired,
    orgs: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      link: React.PropTypes.string.isRequired,
      description: React.PropTypes.element.isRequired,
      className: React.PropTypes.string
    }).isRequired).isRequired
  },
  renderFooterLinks() {
    return this.props.footerLinks.map((footerLink) => {
      return (
        <li className="col-auto" key={footerLink.text}>
          <a className={`footer-link-${footerLink.iconType}`} href={footerLink.link}>{footerLink.text}</a>
        </li>
      );
    });
  },
  renderOrgs() {
    return this.props.orgs.map((org) => {
      // "org-info" is the default classname to be assigned to every organization's wrapper <div>
      // If there's any custom classname associated with this particular org, append it to the className string.
      let className = `org-info${ org.className ? ` ${org.className}` : `` }`;

      return (
        <div className={className} key={org.name}>
          <div className="logo-container"><a className="logo" href={org.link}></a></div>
          {org.description}
        </div>
      );
    });
  },
  render: function() {
    return (
      <footer className="mofo-footer">
        <div className="container">
          <ul className="list-unstyled footer-links row justify-content-center">
            { this.renderFooterLinks() }
          </ul>
          { this.renderOrgs() }
        </div>
      </footer>
    );
  }
});
