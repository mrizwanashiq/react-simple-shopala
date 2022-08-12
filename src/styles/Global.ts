import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`

    html, body {
        min-height: 100vh;
    }

    body {
        font-family: Poppins, sans-serif;
    }

    #root {
        height: 100%;
    }
`
export default Global
