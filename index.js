'use strict'

const black = '#475569'
const gray = '#94A3B8'
const lightGray = '#CBD5E1'
const nearWhite = '#F1F5F9'
const white = '#f8fafc'
const red = '#EF4444'
const yellow = '#F59E0B'
const green = '#10B981'
const cyan = '#06B6D4'
const blue = '#1D4ED8'
const magenta = '#7C3AED'

const colors = {
  black,
  red,
  green,
  yellow,
  blue,
  magenta,
  cyan,
  white: nearWhite,
  lightBlack: gray,
  lightRed: red,
  lightGreen: green,
  lightYellow: yellow,
  lightBlue: blue,
  lightMagenta: magenta,
  lightCyan: cyan,
  lightWhite: lightGray
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
  const dividerBg = lightGray

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
