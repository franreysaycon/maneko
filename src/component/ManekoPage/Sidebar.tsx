import React, { useRef } from "react"
import { Box } from "@chakra-ui/react"
import { motion } from "framer-motion"
import useClickOutside from "../../hooks/useClickOutside"
import { useRouter } from "next/router"
import Link from "next/link"

const Container = motion(Box)
const SidebarContainer = motion(Box)

interface SidebarProps {
  onClose: () => void
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const sidebarRef = useRef()
  const router = useRouter()
  useClickOutside(sidebarRef, onClose)

  return (
    <Container
      h="100vh"
      w="100vw"
      position="fixed"
      zIndex="10"
      top={0}
      bgColor="rgba(20,20,20,0.8)"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <SidebarContainer
        h="100%"
        pt="10"
        w="50%"
        position="fixed"
        animate={{ x: "0" }}
        initial={{ x: "-50%" }}
        exit={{ x: "-50%" }}
        transition={{
          ease: "easeIn",
          duration: 0.3,
        }}
        ref={sidebarRef}
        zIndex="docked"
        bgColor="red.500"
      >
        <Link href="/">
          <Box
            p="10px 10px 10px 20px"
            w="100%"
            fontSize="xl"
            color="white"
            bgColor={router.pathname === "/" ? "red.300" : "red.500"}
            onClick={onClose}
          >
            Home
          </Box>
        </Link>
      </SidebarContainer>
    </Container>
  )
}

export default Sidebar
