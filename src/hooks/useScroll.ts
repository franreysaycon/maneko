import { useEffect, useState } from 'react'

const useScroll = (): [boolean, (data: boolean) => void] => {
  const [startedScroll, setStartedScroll] = useState<boolean>(false)

  useEffect(() => {
    if (startedScroll) {
      const timer = setTimeout(() => setStartedScroll(false), 600)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [startedScroll])

  return [startedScroll, setStartedScroll]
}

export default useScroll
