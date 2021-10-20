import { FC } from 'react'
import styled from 'styled-components'
import {
  space,
  layout,
  color,
  border,
  position,
  flexbox,
  grid,
  SpaceProps,
  LayoutProps,
  BorderProps,
  PositionProps,
  FlexboxProps,
  ColorProps,
  GridProps
} from 'styled-system'

export interface RowProps
  extends SpaceProps,
    LayoutProps,
    BorderProps,
    PositionProps,
    FlexboxProps,
    Omit<ColorProps, 'color'>,
    GridProps,
    React.HTMLAttributes<HTMLDivElement> {}

const RowComponent: FC<RowProps> = styled.div<RowProps>(
  { display: 'flex' },
  space,
  layout,
  color,
  border,
  position,
  flexbox,
  grid
)

export default RowComponent
