import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { CORE_CONCEPTS } from "./data.js";
import { EXAMPLES } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {

  const [selectedTab, setSelectedTab] = useState(null);

  function onSelect(selectedTab_X) {
    setSelectedTab(selectedTab_X);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (<CoreConcept key={concept.title} {...concept} />))}
            {/* <CoreConcept 
              title={CORE_CONCEPTS[0].title} 
              description={CORE_CONCEPTS[0].description} 
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}q
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isActiveTab={selectedTab === 'components'} onSelect={() => onSelect('components')}>Components</TabButton>
            <TabButton isActiveTab={selectedTab === 'jsx'} onSelect={() => onSelect('jsx')}>JSX</TabButton>
            <TabButton isActiveTab={selectedTab === 'props'} onSelect={() => onSelect('props')}>Props</TabButton>
            <TabButton isActiveTab={selectedTab === 'state'} onSelect={() => onSelect('state')}>State</TabButton>
          </menu>

          { !selectedTab && <p>Click on a tab to view the example</p> }

          {selectedTab && (
            <div id="example">
              <h3>{EXAMPLES[selectedTab].title}</h3>
              <p>{EXAMPLES[selectedTab].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTab].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
