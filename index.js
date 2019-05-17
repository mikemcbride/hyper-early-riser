'use strict'

const black = '#424c57'
const lightBlack = '#6e7f91'
const gray = '#8b99a7'
const lightGray = '#c5ccd3'
const nearWhite = '#eef0f2'
const white = '#f7fafc'
const red = '#e20a00'
const yellow = '#ffa90a'
const green = '#13b130'
const cyan = '#36b9ac'
const blue = '#0261dc'
const magenta = '#8626dc'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white: lightGray,
  lightBlack: gray,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: gray
}

// testing
module.exports.decorateConfig = config => {
  const backgroundColor = white
  const foregroundColor = black
  const cursorColor = config.cursorColor || blue
  const borderColor = lightGray
  const selectionColor = 'hsla(210, 14%, 80%, 0.3)'
  const tabNavBg = nearWhite
  const tabText = gray
  const tabTextActive = black
  const dividerBg = nearWhite
  
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    selectionColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
      .terminal a {
        color: ${cyan};
      }
    `,
    css: `
      ${config.css || ''}
      .tabs_nav {
        background-color: ${tabNavBg};
        border-bottom: 1px solid ${borderColor};
      }
      /* hide the tab border shim, we are providing our own */
      .tabs_borderShim {
        border-bottom-width: 0px;
      }
      /* Hide title when only one tab */
      .tabs_title {
  			display: none !important;
  		}
      .tab_textInner {
        color: ${tabText};
        font-weight: 500;
      }
      .tab_tab.tab_active {
        background-color: ${backgroundColor};
      }
      .tab_tab.tab_active .tab_textInner {
        color: ${tabTextActive};
      }
      .splitpane_divider {
        background-color: ${dividerBg} !important;
      }
    `
  })
}
