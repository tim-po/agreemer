import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components'
import { ReactNode } from 'react'

export type Processor<T> = (props: T) => FlattenInterpolation<ThemeProps<DefaultTheme>>

export type HigherOrderProcessor<T> = (
  props: T,
) => FlattenInterpolation<ThemeProps<DefaultTheme>>

export type Wrapper<T> = (props: T & { children: ReactNode | ReactNode[] }) => Element
