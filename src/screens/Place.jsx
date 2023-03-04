import { useCallback } from 'react'
import { Text, View } from 'react-native'
import Layout from '@components/shared/Layout'
import Loading from '@components/shared/Loading'
import { POST_TYPE_SCREEN } from '@utils/Theme'
import { usePage } from '../../hooks/usePage'
import GoBackButton from '@components/shared/GoBackButton'

export default ({ route }) => {
  const { data, loading, error, navigation } = usePage({
    page: 'place',
    params: {
      id: route.params.id,
    },
  })

  const handlePostPress = useCallback((post) => {
    navigation.navigate(POST_TYPE_SCREEN[post.type], { ...post })
  }, [])

  if (loading) return <Loading />

  return (
    <Layout className="bg-background">
      {navigation.canGoBack() && (
        <GoBackButton
          onPress={() => navigation.goBack()}
          title={navigation.getState().routes.at(-2).name}
        />
      )}

      <Text className="text-white">{JSON.stringify(data)}</Text>
    </Layout>
  )
}
