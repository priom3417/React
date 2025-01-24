import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { Fragment, useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {

    const [selectedTab, setSelectedTab] = useState(null);

    function onSelect(selectedTab_X) {
        setSelectedTab(selectedTab_X);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs tabs={
              <>
                <TabButton isActiveTab={selectedTab === 'components'} onClick={() => onSelect('components')}>Components</TabButton>
                <TabButton isActiveTab={selectedTab === 'jsx'} onClick={() => onSelect('jsx')}>JSX</TabButton>
                <TabButton isActiveTab={selectedTab === 'props'} onClick={() => onSelect('props')}>Props</TabButton>
                <TabButton isActiveTab={selectedTab === 'state'} onClick={() => onSelect('state')}>State</TabButton>
              </>
            }>
              { !selectedTab && <p>Click on a tab to view the example</p> }

              {selectedTab && (
                <Fragment>
                  <h3>{EXAMPLES[selectedTab].title}</h3>
                  <p>{EXAMPLES[selectedTab].description}</p>
                  <pre>
                    <code>{EXAMPLES[selectedTab].code}</code>
                  </pre>
                </Fragment>
              )}
              
            </Tabs>
        </Section>
    );
}