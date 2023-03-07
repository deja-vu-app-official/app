import { useCallback } from 'react'
import { Text, View, Image } from 'react-native'
import Layout from '@components/shared/Layout'
import Loading from '@components/shared/Loading'
import { POST_TYPE_SCREEN } from '@utils/Theme'
import { usePage } from '../../hooks/usePage'
import GoBackButton from '@components/shared/GoBackButton'
import PostHeader from '@components/posts/PostHeader'
import PostDescription from '@components/posts/PostDescription'
import PostMap from '@components/posts/PostMap'
import PostAanecdotes from '@components/posts/PostAanecdotes'
import PostFunfacts from '@components/posts/PostFunfacts'
import PostSentences from '../components/posts/PostSentences'
import PostPlaces from '../components/posts/PostPlaces'

export default ({ route }) => {
  const { data, loading, error, navigation } = usePage({
    page: 'circuit',
    params: {
      id: route.params.id,
    },
  })

  const handlePostPress = useCallback((post) => {
    navigation.navigate(POST_TYPE_SCREEN[post.type], { ...post })
  }, [])

  if (loading) return <Loading />

  const {
    image,
    title,
    description,
    type,
    circuitDescription,
    places,
    address,
  } = data

  return (
    <View className="relative bg-background flex-1">
      {navigation.canGoBack() && (
        <View className="absolute top-14 z-10 mx-5">
          <GoBackButton
            onPress={() => navigation.goBack()}
            title={navigation.getState().routes.at(-2).name}
          />
        </View>
      )}
      <Layout>
        <View className="mx-4">
          <PostHeader
            image={image}
            title={title}
            description={description}
            type={type}
          />

          <PostDescription
            title={'Description du circuit'}
            {...circuitDescription}
          />

          <PostMap
            title={'Parcours'}
            address={address}
            locations={places.map((place) => place.location)}
          />

          <PostPlaces places={places} onPress={handlePostPress} />
        </View>
      </Layout>
    </View>
  )
}
