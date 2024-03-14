export default function TabButton({children}) {
    return (
        <li>
            <button>{children}</button>
        </li>
    )
}

export function TabButtonWithProps(props) {
    return (
        <li>
            <button>{props.children}</button>
        </li>
    )
}

export function TabButtonWithLabel({label}) {
    return (
        <li>
            <button>{label}</button>
        </li>
    )
}

