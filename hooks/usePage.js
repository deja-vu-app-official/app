import { useEffect, useState } from 'react'
import { getPageData } from '../services/pages'
import { useNavigation } from '@react-navigation/native'

export function usePage({ page, params = {} }) {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const navigation = useNavigation()

  const getData = async () => {
    try {
      setError(null)
      const newData = await getPageData({ page, params })
      setData(newData)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data, loading, error, navigation }
}
