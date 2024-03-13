import componentsImage from "./assets/components.png"
import jsxImage from "./assets/jsx-ui.png"
import propsImage from "./assets/config.png"
import stateImage from "./assets/state-mgmt.png"

export const CORE_CONCEPTS = [
    {
        image: componentsImage,
        title: "Components",
        description: "The Core UI building Block"
    },
    {
        image: jsxImage,
        title: "JSX",
        description: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered"
    },
    {
        image: propsImage,
        title: "Props",
        description: "Make components configurable (and therefore reusable) by passing input data to them"
    },
    {
        image: stateImage,
        title: "State",
        description: "React-managed data which, when changed, caused the component to re-render and the UI to update"
    }
]