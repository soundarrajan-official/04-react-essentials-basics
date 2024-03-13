import reactImage from "./assets/react-core-concepts.png"
import componentsImage from "./assets/components.png"
import jsxImage from "./assets/jsx-ui.png"
import propsImage from "./assets/config.png"
import stateImage from "./assets/state-mgmt.png"

const reactDescriptions = ["Fundamentals", "Crucial", "Core"]

function generateRandomNumber(maximum) {
    return Math.floor(Math.random() * (maximum + 1))
}

function Header() {
    const index = generateRandomNumber(2)
    const description = reactDescriptions[index]

    return (
        <header>
            <img src={reactImage + ""} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are going to build
            </p>
        </header>
    )
}

function CoreConcepts(props) {
    return (
        <li>
            <img src={props.image} alt={props.title}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts
                            title="Components"
                            description="The Core UI building Block"
                            image={componentsImage}
                        />
                        <CoreConcepts
                            title="JSX"
                            description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered"
                            image={jsxImage}
                        />
                        <CoreConcepts
                            title="Props"
                            description="Make components configurable (and therefore reusable) by passing input data to them"
                            image={propsImage}
                        />
                        <CoreConcepts
                            title="State"
                            description="React-managed data which, when changed, caused the component to re-render and the UI to update"
                            image={stateImage}
                        />
                    </ul>
                </section>
            </main>
        </div>
    )
}

export default App
