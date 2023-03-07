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

  const {
    image,
    title,
    description,
    type,
    sceneDescription,
    locations,
    address,
    annecdotes,
    funFacts,
    sentences,
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
            title={'Description de la scène'}
            {...sceneDescription}
          />

          <PostMap
            title={'Lieu de tournage'}
            address={address}
            locations={locations}
          />

          <PostAanecdotes title={'Anecdotes du film'} annecdotes={annecdotes} />
          <PostFunfacts title={'Le Saviez-Vous ?'} funfacts={funFacts} />
          <PostSentences
            title={'Phrases Cultes du Film'}
            sentences={sentences}
          />
        </View>
      </Layout>
    </View>
  )
}
