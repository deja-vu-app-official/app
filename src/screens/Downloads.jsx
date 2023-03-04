import { useCallback, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Layout from '@components/shared/Layout'
import ListCardPosts from '../components/cards/ListCardPosts'
import Section from '@components/shared/Section'
export default () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!data) {
      setData(getData())
    }
  }, [data])

  const handleOnPress = useCallback((post) => {
    console.log(post.id)
  }, [])

  if (!data)
    return (
      <Layout>
        <Text>Loading...</Text>
      </Layout>
    )

  return (
    <Layout>
      <Section title={'Downloads'}>
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
