"use client"
import type {PropsWithChildren} from 'react'
import StyledComponentsRegistry from '../lib/registry'
import {GlobalStyles} from './global-styles'

function Providers(props: PropsWithChildren) {
  return (
    <StyledComponentsRegistry>
        <GlobalStyles />
        {props.children}
    </StyledComponentsRegistry>
  )
}

export default Providers