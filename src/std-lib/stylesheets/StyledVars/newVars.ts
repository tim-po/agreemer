export const theme = {
  color: {
    brand: {
      primary: '#ffcf63',
      secondary: '#000000',
    },
    text: {
      primary: '#ffffff',
      secondary: '#79797A',
      tertiary: '#B7B7B8',
      button: '#8533FF',
      white: '#FFFFFF',
    },
    background: {},
    elements: {},
    states: {
      primary: {
        default: '#8533FF',
        hover: '#C49DFF',
        active: '#712FD3',
        disabled: '#D8BEFF',
      },
    },
  },
}

export type ThemeFragment = {
  bgColorPrimary: string
  bgColorSecondary: string
}

export const primaryThemeFragment: ThemeFragment = {
  bgColorPrimary: '#FFFFFF',
  bgColorSecondary: '#EBEBFD',
}

export const secondaryThemeFragment: ThemeFragment = {
  bgColorPrimary: '#EBEBFD',
  bgColorSecondary: '#FFFFFF',
}

// export type ThemeType = typeof theme

export const flatObject = (obj: object) => {
  function flat(o: object, prev: string): [string, string][] {
    return Object.entries(o).flatMap(([key, val]) => {
      if (typeof val === 'object') return flat(val, prev + `${!prev ? '' : '-'}` + key)
      return [[prev + '-' + key, val]]
    })
  }

  return Object.fromEntries(flat(obj, ''))
}
