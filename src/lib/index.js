import styled from 'styled-components'

export const Background = styled.div`
  background-color: #04BCFB
  height: 100vh
  display: flex
  flex: 1
  justify-content: center
  align-items: center
`

export const Title = styled.h1`
  font-family: Roboto
  color: ${({color}) => color || '#04BCFB'}
  text-align: center
`

export const Card = styled.div`
  border-radius: 10px
  width: 640px
  background-color: white
  box-shadow: 0 8px 8px -4px rgba(0,0,0, 0.4);
  padding: 30px
  display: flex
  flex-direction: column
  align-items: center
`

export const Input = styled.input`
  display: flex
  flex: 1
  border-top: none
  border-right: none
  border-left: none
  margin-bottom: 10px
  border-bottom: 1px solid #04BCFB
  ::placeholder {
    color: #04BCFB
  }
  &:focus {
    outline: none
  }
`

export const Form = styled.form`
  width: 200px;
  display: flex;
  flex-direction: column
`

export const List = styled.ul`
  list-style: none
  width: 200px
  padding: 0
`

export const Item = styled.li`
  margin-bottom: 10px
  color: #04BCFB
  display: flex
  justify-content: space-between
  border-bottom: 0.5px solid #04BCFB
  padding-bottom: 5px
`

export const Button = styled.button`
  color: white
  background-color: #04BCFB
  border-radius: 5px
  border: none
  outline: none
`
