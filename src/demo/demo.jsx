import React from "react";
import { render } from "react-dom";

// Components

import { ThumbCarousel, TabSwitcher, Tab, RadioFilter, Collapse, Panel, ProfileCard } from "../exports.js";

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

const Switcher = React.createClass({
  getInitialState () {
    return {
      externalCSS: `mofo-bootstrap`
    };
  },
  onChange (e) {
    this.setState({
      externalCSS: e.target.value
    });
  },
  render () {
    let css = {
      vanilla: ``,
      "bootstrap-3": `./css/bootstrap.css`,
      "mofo-bootstrap": `./css/mofo-bootstrap.css`
    };
    
    return (
      <div className="switcher">
        <div className="wrapper">
          <label htmlFor="theme-selector">Additional CSS</label>
          <select id="theme-selector" ref="themeSelect" onChange={this.onChange} value={this.state.externalCSS}>
            <option value="vanilla">None</option>
            <option value="bootstrap-3">Bootstrap 3</option>
            <option value="mofo-bootstrap">Mofo Bootstrap</option>
          </select>
        </div>

        <link rel="stylesheet" href={css[this.state.externalCSS]}/>
        <link rel="stylesheet" href="./css/mofo-ui.css"/>
      </div>
    );
  }
});

let radioOptions = [
  {
    value: `featured`,
    label: `Featured Projects`
  },
  {
    value: `date_updated`,
    label: `Recently Updated`
  },
  {
    value: `date_created`,
    label: `Recently Added`
  },
  {
    value: `active`,
    label: `Most Active`
  },
  {
    value: `contributors`,
    label: `Most Contributors`
  }
];

let carouselData = [{
  image: `./img/headshot-1.jpg`,
  caption: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  attribution: `Cindy Sherman, Switzerland`
}, {
  image: `./img/headshot-2.jpg`,
  caption: `Very short quote.`,
  attribution: `Bob Loblaw, Kazakhstan`
}, {
  image: `./img/headshot-3.jpg`,
  caption: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  attribution: `Ken Bradford, Sealand`
}, {
  image: `./img/headshot-4.jpg`,
  caption: `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  attribution: `Vic Toomey, Reykjavik`
}];

let people = [
  {
    name: `Stephanie Wright`,
    title: `Lead`,
    image: `https://avatars0.githubusercontent.com/u/14626242?v=3&s=400`,
    links: [<a href="https://twitter.com/shefw">@shefw</a>],
    bio: `Stephanie joined the team after forming and leading the Research Data Services unit in the University of Washington Libraries. While there she was also Senior Data Science Fellow for the UW's eScience Institute. She brings expertise in data management, sharing and curation to the team. Steph is a self-proclaimed data geek and believer in open and easy access to data.`
  },
  {
    name: `Zannah Marsh`,
    title: `Learning Strategist`,
    image: `https://avatars3.githubusercontent.com/u/13855390?v=3&s=400`,
    links: [<a href="https://twitter.com/zannahlou">@zannahlou</a>],
    bio: `Zannah draws on her background in interaction design, project-based learning, visual art, and storytelling to create “sticky” learning experiences around technology and design. She's taught web design, programming, interaction design, and data visualization at NYU, the New School, and in the City University of New York system. She was Senior Content Developer at the interactive design firm Local Projects, and an exhibit developer for the Museum of Science in Boston. In her spare time Zannah draws mini-comics and rides her bike around Brooklyn.`
  },
  {
    name: `Aurelia Moser`,
    title: `Community Lead`,
    image: `https://avatars3.githubusercontent.com/u/1559703?v=3&s=400`,
    links: [<a href="https://twitter.com/auremoser">@auremoser</a>],
    bio: `Aurelia is a creative developer building community around code at the Science Lab. Previously of Ushahidi, Internews-Kenya, and CartoDB, she has a background that blends a cocktail of conservation chemistry and coding for civic tech/non-profit journalism. Recent projects have had mapping sensor data to support agricultural security and sustainable apis ecosystems in the Global South, though she also dabbles in DJing and privacy art. As her about yoga, semantic web theory, web-mapping, and organic chem.`
  }
];

function handleRadioChange(choice) {
  console.log(`radioChange: ${choice}`);
}

function handleTabSwitch(target) {
  console.log(`tabChange: ${target.index} - ${target.tabName} - ${target.slug}`);
}

render((
  <App>
    <Switcher></Switcher>

    <div className="wrapper">
      <h1>Mofo UI Components</h1>

      <h3>Accordion</h3>

      <div>
        <Collapse accordion={false}>
          <Panel header="Heading 1">Forage flexitarian salvia migas fashion axe, meggings locavore poutine. Lo-fi plaid PBR&B, umami pinterest swag authentic beard cold-pressed. Ennui selfies scenester, kickstarter raw denim ramps disrupt forage keffiyeh put a bird on it. Direct trade helvetica umami messenger bag echo park typewriter chicharrones, williamsburg iPhone polaroid offal retro marfa. Offal cronut disrupt banh mi, kitsch shabby chic deep v schlitz intelligentsia letterpress affogato kogi. Green juice tacos austin gochujang, chillwave food truck chambray 8-bit master cleanse forage paleo bespoke. Yr squid ethical irony kickstarter, man braid paleo salvia man bun cred ugh tote bag post-ironic.</Panel>
          <Panel header="Heading 2 with a longer title which wraps on mobile">Forage flexitarian salvia migas fashion axe, meggings locavore poutine. Lo-fi plaid PBR&B, umami pinterest swag authentic beard cold-pressed. Ennui selfies scenester, kickstarter raw denim ramps disrupt forage keffiyeh put a bird on it. Direct trade helvetica umami messenger bag echo park typewriter chicharrones, williamsburg iPhone polaroid offal retro marfa. Offal cronut disrupt banh mi, kitsch shabby chic deep v schlitz intelligentsia letterpress affogato kogi. Green juice tacos austin gochujang, chillwave food truck chambray 8-bit master cleanse forage paleo bespoke. Yr squid ethical irony kickstarter, man braid paleo salvia man bun cred ugh tote bag post-ironic.</Panel>
        </Collapse>
      </div>

      <h3>RadioFilter</h3>

      <RadioFilter options={radioOptions} initialChoice={`date_created`} onChange={handleRadioChange}></RadioFilter>

      <h3>TabSwitcher</h3>

      <h4>Hero Variant</h4>

      <TabSwitcher onChange={handleTabSwitch} initialTab={`schedule`}>
        <Tab slug="about" name="About" iconDefault="./img/icon-tab-schedule.svg" iconActive="./img/icon-tab-schedule-blue.svg">About content.</Tab>
        <Tab slug="schedule" name="Schedule" iconDefault="./img/icon-tab-schedule.svg" iconActive="./img/icon-tab-schedule-blue.svg">Schedule content.</Tab>
        <Tab slug="projects" name="Projects" iconDefault="./img/icon-tab-schedule.svg" iconActive="./img/icon-tab-schedule-blue.svg">Projects content.</Tab>
      </TabSwitcher>

      <h4>Inline Variant (.inline)</h4>

      <TabSwitcher className="inline" initialTab={`one`}>
        <Tab slug="one" name="One" iconDefault="./img/icon-tab-schedule-blue.svg">One content.</Tab>
        <Tab slug="two" name="Two" iconDefault="./img/icon-tab-schedule-blue.svg">Two content.</Tab>
        <Tab slug="three" name="Three" iconDefault="./img/icon-tab-schedule-blue.svg">Three content.</Tab>
        <Tab slug="four" name="Four" iconDefault="./img/icon-tab-schedule-blue.svg">Four content.</Tab>
      </TabSwitcher>

      <h3>ThumbCarousel</h3>

      <ThumbCarousel contents={carouselData}></ThumbCarousel>

      <h3>Profile Cards</h3>
      <div className="container-dynamic">
          {people.map((person, index) => {
            return <ProfileCard key={index} {...person}>{person.bio}</ProfileCard>;
          })}
      </div>
    </div>
  </App>
), document.querySelector(`#app`));
