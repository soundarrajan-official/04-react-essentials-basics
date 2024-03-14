export default function TabButton({children, onSelect}) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    )
}

export function TabButtonWithProps(props) {
    return (
        <li>
            <button onClick={props.onSelect}>{props.children}</button>
        </li>
    )
}

export function TabButtonWithLabel({label, onSelect}) {
    return (
        <li>
            <button onClick={onSelect}>{label}</button>
        </li>
    )
}

