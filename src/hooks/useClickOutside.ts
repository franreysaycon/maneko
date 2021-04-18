import React, { useEffect } from "react"

type useClickOutsideFn<T> = (
  ref: React.RefObject<T>,
  onClick: () => void
) => void

const useClickOutside: useClickOutsideFn<HTMLElement> = (ref, onClick) => {
  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClick()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  })
}

export default useClickOutside
