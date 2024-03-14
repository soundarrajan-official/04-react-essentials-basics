import componentsImage from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js";
import Header from "./Components/Header/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";
import TabButton from "./Components/TabButton/TabButton.jsx";
import { TabButtonWithLabel, TabButtonWithProps } from "./Components/TabButton/TabButton.jsx";

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        {/*props syntax 1*/}
                        <CoreConcepts
                            title="Components"
                            description="The Core UI building Block"
                            image={componentsImage}
                        />
                        {/*props syntax 2*/}
                        <CoreConcepts
                            title={CORE_CONCEPTS[1].title}
                            description={CORE_CONCEPTS[1].description}
                            image={CORE_CONCEPTS[1].image}
                        />
                        {/*props syntax 3*/}
                        <CoreConcepts {...CORE_CONCEPTS[2]}/>
                        <CoreConcepts {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton>Components</TabButton>
                        <TabButton>JSX</TabButton>
                        <TabButtonWithProps>Props</TabButtonWithProps>
                        <TabButtonWithLabel label="State" />
                    </menu>
                </section>
            </main>
        </div>
    )
}

export default App
