import React from "react";
import { render } from "react-dom";

// Components

import { TabSwitcher, RadioFilter, Collapse, Panel } from "./exports.js";

const App = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
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

function handleRadioChange(choice) {
  console.log(`radioChange: ${choice}`);
}

function handleTabSwitch(target) {
  console.log(`tabChange: ${target.index} - ${target.tabName}`);
}

render((
  <App>
    <h1>Mofo UI</h1>

    <h3>Accordion</h3>

    <div>
      <Collapse accordion={false}>
        <Panel header="Heading 1">Forage flexitarian salvia migas fashion axe, meggings locavore poutine. Lo-fi plaid PBR&B, umami pinterest swag authentic beard cold-pressed. Ennui selfies scenester, kickstarter raw denim ramps disrupt forage keffiyeh put a bird on it. Direct trade helvetica umami messenger bag echo park typewriter chicharrones, williamsburg iPhone polaroid offal retro marfa. Offal cronut disrupt banh mi, kitsch shabby chic deep v schlitz intelligentsia letterpress affogato kogi. Green juice tacos austin gochujang, chillwave food truck chambray 8-bit master cleanse forage paleo bespoke. Yr squid ethical irony kickstarter, man braid paleo salvia man bun cred ugh tote bag post-ironic.</Panel>
        <Panel header="Heading 2">Forage flexitarian salvia migas fashion axe, meggings locavore poutine. Lo-fi plaid PBR&B, umami pinterest swag authentic beard cold-pressed. Ennui selfies scenester, kickstarter raw denim ramps disrupt forage keffiyeh put a bird on it. Direct trade helvetica umami messenger bag echo park typewriter chicharrones, williamsburg iPhone polaroid offal retro marfa. Offal cronut disrupt banh mi, kitsch shabby chic deep v schlitz intelligentsia letterpress affogato kogi. Green juice tacos austin gochujang, chillwave food truck chambray 8-bit master cleanse forage paleo bespoke. Yr squid ethical irony kickstarter, man braid paleo salvia man bun cred ugh tote bag post-ironic.</Panel>
      </Collapse>
    </div>

    <h3>RadioFilter</h3>

    <RadioFilter options={radioOptions} initialChoice={`date_created`} onChange={handleRadioChange}></RadioFilter>

    <h3>TabSwitcher</h3>

    <h4>Hero Variant</h4>

    <TabSwitcher onChange={handleTabSwitch} baseURL={`/style-guide/hero-tabs/`} initialTab={`schedule`}>
      <div slug="about" name="About" iconDefault="/img/icon-tab-schedule.svg" iconActive="/img/icon-tab-schedule-blue.svg">About content.</div>
      <div slug="schedule" name="Schedule" iconDefault="/img/icon-tab-schedule.svg" iconActive="/img/icon-tab-schedule-blue.svg">Schedule content.</div>
      <div slug="projects" name="Projects" iconDefault="/img/icon-tab-schedule.svg" iconActive="/img/icon-tab-schedule-blue.svg">Projects content.</div>
    </TabSwitcher>

    <h4>Inline Variant (.inline)</h4>

    <TabSwitcher className="inline" baseURL={`/style-guide/variant-tabs/`} initialTab={`one`}>
      <div slug="one" name="One" iconDefault="/img/icon-tab-schedule-blue.svg">One content.</div>
      <div slug="two" name="Two" iconDefault="/img/icon-tab-schedule-blue.svg">Two content.</div>
      <div slug="three" name="Three" iconDefault="/img/icon-tab-schedule-blue.svg">Three content.</div>
      <div slug="four" name="Four" iconDefault="/img/icon-tab-schedule-blue.svg">Four content.</div>
    </TabSwitcher>

  </App>
), document.querySelector(`#app`));
