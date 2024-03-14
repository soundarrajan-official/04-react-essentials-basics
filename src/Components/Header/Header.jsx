import reactImage from "../../assets/react-core-concepts.png";

const reactDescriptions = ["Fundamentals", "Crucial", "Core"]

function generateRandomNumber(maximum) {
    return Math.floor(Math.random() * (maximum + 1))
}

export default function Header() {
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