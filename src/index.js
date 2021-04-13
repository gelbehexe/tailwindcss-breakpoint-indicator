const plugin = require('tailwindcss/plugin')
const _ = require('lodash')
const colors = require('tailwindcss/colors')

// noinspection JSUnresolvedFunction
module.exports = plugin.withOptions(
    ({} = {}) => {
        return function ({ addComponents, theme, config }) {
            const localConf = config('breakpointIndicator', {})
            let enabled
            if (localConf.enabled === 'auto' || localConf.enabled === undefined) {
                enabled = (process.env.NODE_ENV !== 'production')
            } else {
                enabled = !!localConf.enabled
            }

            if (!enabled) {
                addComponents([
                    {
                        '.breakpoint-indicator': {
                            display: 'none !important'
                        },
                    },
                ],[])
                return

            }

            const screens = theme('screens', {})
            const colorNames = Object.keys(colors).filter(item => {
                if (['black','white'].includes(item)) {
                    return false
                }
                return typeof colors[item] === 'object';
            })

            let idx = 0;

            const mediaQueries = _.map(screens, width => {
                let color
                if (idx + 2 >= colorNames.length) {
                    color = '#000'
                } else {
                    const colorName = colorNames[idx++]

                    const colorObject = colors[colorName]

                    let colorSubtype = '700'
                    if (!colorObject.hasOwnProperty(colorSubtype)) {
                        colorSubtype = Object.keys(colorObject)[Object.keys(colorObject).length - 1]
                    }

                    color = colorObject[colorSubtype]
                }

                let screenKey = '(unknown)'
                for(let size in screens) {
                    // noinspection JSUnfilteredForInLoop
                    if (screens[size] === width) {
                        screenKey = size
                        break
                    }
                }

                return {
                    [`@media (min-width: ${width})`]: {
                        '.breakpoint-indicator': {
                            'background-color': color,
                        },
                        '.breakpoint-indicator:before': {
                            'content': `"${screenKey}"`,
                        },
                    },
                }
            })

            addComponents([
                {
                    '.breakpoint-indicator': {
                        'background-color': '#000',
                        'color': '#fff',
                        'z-index': '99999',
                    },
                    '.breakpoint-indicator:before': {
                        'content': '"(smallest)"',
                    },
                },
                ...mediaQueries
            ],[])

        }
    },
    () => ({
        breakpointIndicator: {
            enabled: 'auto',
        },
    })
)
