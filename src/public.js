import { Dimensions, Platform } from 'react-native'

const WINDOW_WIDTH = Dimensions.get('window').width
const WINDOW_HEIGHT = Dimensions.get('window').height
const themeColor = '#rgba(252, 224, 105, 1)'

// iPhone X
const X_WIDTH = 375
const X_HEIGHT = 812

const isIPX = false
if (
  Platform.OS === 'ios' &&
  X_WIDTH === WINDOW_WIDTH &&
  X_HEIGHT === WINDOW_HEIGHT
) {
  isIPX = true
}

const isAndroid = Platform.OS === 'android'

const loadType = { CircleFlip: 'CircleFlip', Bounce: 'Bounce', CubeGrid: '9CubeGrid' }

export { WINDOW_WIDTH, WINDOW_HEIGHT, themeColor, isIPX, loadType, isAndroid }
