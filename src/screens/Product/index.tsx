import React from 'react'
import { Platform, TouchableOpacity, ScrollView } from 'react-native'
import {
  Container,
  Header,
  Title,
  DeleteLabel,
  Upload,
  PickImageButton,
  Label,
  InputGroup,
  InputGroupHeader,
  MaxCharacteres,
  Form,
} from './styles'
import { ButtonBack } from '@components/ButtonBack'
import { Photo } from '@components/Photo'
import { InputPrice } from '@components/InputPrice'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function Product() {
  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header>
          <ButtonBack />
          <Title>Cadastrar</Title>
          <TouchableOpacity>
            <DeleteLabel>Deletar</DeleteLabel>
          </TouchableOpacity>
        </Header>
        <Upload>
          <Photo uri='' />
          <PickImageButton title='Carregar' type='secondary' />
        </Upload>

        <Form>
          <InputGroup>
            <Label>Nome</Label>
            <Input />
          </InputGroup>
          <InputGroup>
            <InputGroupHeader>
              <Label>Descrição</Label>
              <MaxCharacteres>0 de 60</MaxCharacteres>
            </InputGroupHeader>
            <Input multiline maxLength={60} style={{ height: 80 }} />
          </InputGroup>
          <InputGroup>
            <Label> Tamanhos e preços</Label>
            <InputPrice size='P' />
            <InputPrice size='M' />
            <InputPrice size='G' />
          </InputGroup>
          <Button title='Cadastrar Pizza' />
        </Form>
      </ScrollView>
    </Container>
  )
}
