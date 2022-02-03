const colors = {
  inputBackground: '#EEECEC',
  primaryColor: '#4786F3',
  primaryLighterColor: '#4B8DFF',
  disabledBackgroundColor: '#D5D7DA',
  disabledTextColor: '#8E8E8E',
  inactiveColor: '#EEEEEE',
  secondaryColor: '#ffffff',
  primaryOpaque: '#5891F4',
  darkerOpaque: '#BAD4FF',
  secondaryOpaque: '#E8F5FF',
  darkGray: '#E4E4E4'
}

const properties = {
  primaryBackground: {
    backgroundColor: colors.primaryColor
  },
  secondaryBackground: {
    backgroundColor: colors.secondaryColor
  },
  primaryOpaqueBackground: {
    backgroundColor: colors.primaryOpaque
  },
  secondaryOpaqueBackground: {
    backgroundColor: colors.secondaryOpaque
  },
  colorPrimary: {
    color: colors.primaryColor
  },
  colorSecondary: {
    color: colors.secondaryColor
  }
}

export default Object.assign({}, properties, colors)