'use client'
import React from 'react'
import { useContext } from 'react'
import { useRouter } from 'next/router'
const SearchByProperty = () => {
    const router = useRouter()
    const { key, value } = router.query
  return (
    <div>SearchByProperty</div>
  )
}

export default SearchByProperty