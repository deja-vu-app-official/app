import { useCallback, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Layout from '@components/shared/Layout'
import Loading from '@components/shared/Loading'
import ListCardPosts from '../components/cards/ListCardPosts'
import Section from '@components/shared/Section'
import { useNavigation } from '@react-navigation/native'
import { POST_TYPE_SCREEN } from '@utils/Theme'

export default () => {
  const [data, setData] = useState(null)
  const navigation = useNavigation()

  useEffect(() => {
    if (!data) {
      setData(getData())
    }
  }, [data])

  const handleOnPress = useCallback((post) => {
    navigation.navigate(POST_TYPE_SCREEN[post.type], { ...post })
  }, [])

  if (!data) return <Loading />

  return (
    <Layout>
      <Section title={'Favoris'}>
        <ListCardPosts posts={data} onPress={handleOnPress} />
      </Section>
    </Layout>
  )
}

function getData() {
  return [
    {
      type: 'Lieux',
      price: 0.98,
      rating: 5,
      title: 'Lucy',
      description: 'Scène course poursuite',
      image: 'https://picsum.photos/700',
      id: 2,
      coordinate: { latitude: 45.899247, longitude: 6.129384 },
    },
    {
      type: 'Circuit',
      price: 0.98,
      rating: 3,
      title: 'Harry Potter',
      description: 'Scène course poursuite',
      image: 'https://picsum.photos/700',
      id: 3,
      coordinate: { latitude: 46.89925, longitude: 6.129394 },
    },
    {
      type: 'Lieux',
      price: 0.98,
      rating: 5,
      title: 'Lucy',
      description: 'Scène course poursuite',
      image: 'https://picsum.photos/700',
      id: 2,
      coordinate: { latitude: 45.899247, longitude: 6.129384 },
    },
    {
      type: 'Circuit',
      price: 0.98,
      rating: 3,
      title: 'Harry Potter',
      description: 'Scène course poursuite',
      image: 'https://picsum.photos/700',
      id: 3,
      coordinate: { latitude: 46.89925, longitude: 6.129394 },
    },
    {
      type: 'Lieux',
      price: 0.98,
      rating: 5,
      title: 'Lucy',
      description: 'Scène course poursuite',
      image: 'https://picsum.photos/700',
      id: 2,
      coordinate: { latitude: 45.899247, longitude: 6.129384 },
    },
    {
      type: 'Circuit',
      price: 0.98,
      rating: 3,
      title: 'Harry Potter',
      description: 'Scène course poursuite',
      image: 'https://picsum.photos/700',
      id: 3,
      coordinate: { latitude: 46.89925, longitude: 6.129394 },
    },
    {
      type: 'Lieux',
      price: 0.98,
      rating: 5,
      title: 'Lucy',
      description: 'Scène course poursuite',
      image: 'https://picsum.photos/700',
      id: 2,
      coordinate: { latitude: 45.899247, longitude: 6.129384 },
    },
    {
      type: 'Circuit',
      price: 0.98,
      rating: 3,
      title: 'Harry Potter',
      description: 'Scène course poursuite',
      image: 'https://picsum.photos/700',
      id: 3,
      coordinate: { latitude: 46.89925, longitude: 6.129394 },
    },
  ]
}
