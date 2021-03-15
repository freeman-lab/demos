import { useCallback } from 'react'
import { useColorMode, Button, Box, Link } from 'theme-ui'
import { default as NextLink } from 'next/link'

const Index = () => {
  const [colorMode, setColorMode] = useColorMode()

  const toggle = useCallback(() => {
    setColorMode(colorMode === 'light' ? 'dark' : 'light')
  }, [colorMode])

  return <Box sx={{px: [4], py: [4]}}>
    <Box>
    <Link sx={{fontSize: [1]}} href='/'>home</Link>
    </Box>
    <Box sx={{fontSize: [5]}}>demo test</Box>
    <Box>
    <NextLink href='/blog/demos/entry' passHref><Link>Entry</Link></NextLink>
    </Box>
    <Button onClick={toggle}>Toggle theme</Button>
  </Box>
}

export default Index