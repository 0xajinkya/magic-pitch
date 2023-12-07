import Image from 'next/image'
import styles from './page.module.css'
import { Box } from "@mui/material"
import { HomePage } from '@/components'

export default function Home() {
  return (
    <Box>
      <HomePage />
    </Box>
  )
}
