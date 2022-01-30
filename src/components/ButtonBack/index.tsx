import React from 'react'
import { Container } from './style'
import { MaterialIcons } from '@expo/vector-icons'
import { useTheme } from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native'

export function ButtonBack({ ...rest }: TouchableOpacityProps) {
  const { COLORS } = useTheme()
  return (
    <Container>
      <MaterialIcons
        name='chevron-left'
        size={18}
        color={COLORS.TITLE}
      ></MaterialIcons>
    </Container>
  )
}
