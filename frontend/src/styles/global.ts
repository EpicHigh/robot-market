import { css } from '@emotion/react'

const globalCss = css`
  @import url(https://fonts.googleapis.com/css?family=Lato:400,700,900);

  body {
    margin: 0;
    font-family: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;

    --cornflower-blue: #6394f8;
    --java: #4affdd;
    --biscay: #1a3863;
    // Robot Card
    --tree-poppy: #fb8b24;
    --dodger-blue: #4facff;
    --pistachio: #97cc04;
    --fresh-rose: #ef476f;
    --gorse: #fff94f;
    --burlywood: #deb887;
    --cadet-gray: #91a3b0;
    --battle-ship-gray: #848482;
    --frangipani: #ffdcb8;
    --dim-gray: #696969;
    --denim-blue: #2243b6;
    --dove-gray: #707070;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

export default globalCss
