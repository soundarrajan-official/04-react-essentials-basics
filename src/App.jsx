import reactImage from "./assets/react-core-concepts.png"
import componentsImage from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js";

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

// using object destructuring for props
function CoreConcepts({title, description, image}) {
    return (
        <li>
            <img src={image} alt={title}/>
            <h3>{title}</h3>
            <p>{description}</p>
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
