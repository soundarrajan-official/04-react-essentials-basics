import componentsImage from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js";
import Header from "./Components/Header/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";

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
            </main>
        </div>
    )
}

export default App
