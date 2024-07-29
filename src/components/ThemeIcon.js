import React from 'react'
import {IconButton,useColorMode} from '@chakra-ui/react'
import {FaSun,FaMoon} from 'react-icons/fa'
const ThemeIcon = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <IconButton icon={colorMode == 'light' ?<FaSun/>:<FaMoon/>} onClick={toggleColorMode} isRound="true" size='lg' alignSelf='flex-end'></IconButton>
  )
}

export default ThemeIcon