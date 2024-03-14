export default function TabButton({children}) {
    function handleClick() {
        console.log("Components or JSX Button Clicked")
    }

    return (
        <li>
            <button onClick={handleClick}>{children}</button>
        </li>
    )
}

export function TabButtonWithProps(props) {
    function handleClick() {
        console.log("Props Button Clicked")
    }

    return (
        <li>
            <button onClick={handleClick}>{props.children}</button>
        </li>
    )
}

export function TabButtonWithLabel({label}) {
    function handleClick() {
        console.log("State Button Clicked")
    }

    return (
        <li>
            <button onClick={handleClick}>{label}</button>
        </li>
    )
}

