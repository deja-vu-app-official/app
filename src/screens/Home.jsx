import { View, Text } from 'react-native'
import CardHighlight from '@components/cards/CardHighlight'
import Section from '@components/shared/Section'
import { useEffect, useState, useCallback } from 'react'
import CardPost from '@components/cards/CardPost'
import CardType from '@components/cards/CardType'
import CardTop from '@components/cards/CardTop'
import ScrollHorizontal from '@components/shared/ScrollHorizontal'
import CardGenre from '@components/cards/CardGenre'
import CardUniver from '@components/cards/CardUniver'
import Layout from '@components/shared/Layout'
import Loading from '@components/shared/Loading'
import { POST_TYPE_SCREEN } from '@utils/Theme'
import { usePage } from '../../hooks/usePage'

export default () => {
  const { data, loading, error, navigation } = usePage({ page: 'home' })

  const handlePostPress = useCallback((post) => {
    navigation.navigate(POST_TYPE_SCREEN[post.type], { ...post })
  }, [])

  if (loading) return <Loading />

  return (
    <Layout>
      <CardHighlight
        title={'Enter Your Headline'}
        text={
          'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur '
        }
        price={15}
        id={5}
      />
      {data.types && data.types?.length && (
        <Section title={'Types'}>
          <View className="flex flex-row w-full justify-between px-4">
            {data.types.map((type, key) => (
              <CardType key={key} {...type} />
            ))}
          </View>
        </Section>
      )}
      {data.favoris && data.favoris?.length && (
        <Section title={'Favoris'}>
          <ScrollHorizontal width={150}>
            {data.favoris.map((post, index) => (
              <CardPost
                key={index}
                {...post}
                onPress={() => handlePostPress(post)}
              />
            ))}
          </ScrollHorizontal>
        </Section>
      )}
      {data.nouveautes && data.nouveautes?.length && (
        <Section title={'Nouveaut??s'}>
          <ScrollHorizontal width={150}>
            {data.nouveautes.map((post, index) => (
              <CardPost
                key={index}
                {...post}
                onPress={() => handlePostPress(post)}
              />
            ))}
          </ScrollHorizontal>
        </Section>
      )}
      {data.topCircuit && data.topCircuit?.length && (
        <Section title={'Top 4 des circuits ?? Paris'}>
          <View className="flex flex-row flex-wrap gap-y-4 px-2">
            {data.topCircuit.map((post, index) => (
              <View key={index} className="w-[50%]">
                <CardTop
                  index={index}
                  {...post}
                  onPress={() => handlePostPress(post)}
                />
              </View>
            ))}
          </View>
        </Section>
      )}

      {data.genres && data.genres?.length && (
        <Section title={'Genres'}>
          <ScrollHorizontal width={150}>
            {data.genres.map((post, index) => (
              <View key={index} className="w-[150] px-2">
                <CardGenre {...post} onPress={() => handlePostPress(post)} />
              </View>
            ))}
          </ScrollHorizontal>
        </Section>
      )}

      {data.univers && data.univers?.length && (
        <Section title={'Univers'}>
          <ScrollHorizontal width={150}>
            {data.univers.map((post, index) => (
              <View key={index} className="w-[150] px-2">
                <CardUniver {...post} onPress={() => handlePostPress(post)} />
              </View>
            ))}
          </ScrollHorizontal>
        </Section>
      )}

      {data.topLieux && data.topLieux?.length && (
        <Section title={'Top 4 des lieux ?? Paris'}>
          <View className="flex flex-row flex-wrap gap-y-4 px-2">
            {data.topLieux.map((post, index) => (
              <View key={index} className="w-[50%]">
                <CardTop
                  index={index}
                  {...post}
                  onPress={() => handlePostPress(post)}
                />
              </View>
            ))}
          </View>
        </Section>
      )}
    </Layout>
  )
}

function getData() {
  return {
    types: [
      {
        title: 'Livres',
        icon: 'book',
      },
      {
        title: 'Films',
        icon: 'camera',
      },
      {
        title: 'S??ries',
        icon: 'clapperboard',
      },
    ],
    favoris: [
      {
        type: 'Circuit',
        price: 15,
        rating: 4,
        title: 'Inception Tour',
        image: 'https://picsum.photos/700',
        id: 1,
      },
      {
        type: 'Lieux',
        price: 0.98,
        rating: 5,
        title: 'Lucy',
        description: 'Sc??ne course poursuite',
        image: 'https://picsum.photos/700',
        id: 2,
      },
      {
        type: 'Circuit',
        price: 10,
        rating: 3,
        title: 'Neuilly',
        description: '',
        image: 'https://picsum.photos/700',
        id: 3,
      },
    ],
    nouveautes: [
      {
        type: 'Lieux',
        price: 15,
        rating: 3,
        title: 'Am??lie Poulin',
        description: 'Sc??ne lieu travail',
        image: 'https://picsum.photos/700',
        id: 1,
      },
      {
        type: 'Circuit',
        price: 0.98,
        rating: 5,
        title: 'Da Vinci Code',
        description: 'Paris',
        image: 'https://picsum.photos/700',
        id: 2,
      },
      {
        type: 'Circuit',
        price: 10,
        rating: 3,
        title: 'La Grande Vadrouille',
        description: '',
        image: 'https://picsum.photos/700',
        id: 3,
      },
    ],
    topCircuit: [
      {
        type: 'Lieux',
        price: 15,
        rating: 3,
        title: 'Am??lie Poulin',
        description: 'Sc??ne lieu travail',
        image: 'https://picsum.photos/700',
        id: 1,
      },
      {
        type: 'Circuit',
        price: 0.98,
        rating: 5,
        title: 'Da Vinci Code',
        description: 'Paris',
        image: 'https://picsum.photos/700',
        id: 2,
      },
      {
        type: 'Circuit',
        price: 10,
        rating: 3,
        title: 'La Grande Vadrouille',
        description: '',
        image: 'https://picsum.photos/700',
        id: 3,
      },
      {
        type: 'Circuit',
        price: 10,
        rating: 3,
        title: 'La Grande Vadrouille',
        description: '',
        image: 'https://picsum.photos/700',
        id: 3,
      },
    ],
    genres: [
      { title: 'fantastique', id: 1 },
      { title: 'romance', id: 2 },
      { title: 'action', id: 3 },
      { title: 'comedie', id: 3 },
    ],
    univers: [
      { title: 'da vinci code', id: 1, image: 'https://picsum.photos/700' },
      { title: 'inception', id: 2, image: 'https://picsum.photos/700' },
      { title: 'Harry Potter', id: 3, image: 'https://picsum.photos/700' },
      { title: 'Lord of the rings', id: 4, image: 'https://picsum.photos/700' },
    ],
    topLieux: [
      {
        type: 'Lieux',
        price: 15,
        rating: 3,
        title: 'Am??lie Poulin',
        description: 'Sc??ne lieu travail',
        image: 'https://picsum.photos/700',
        id: 1,
      },
      {
        type: 'Circuit',
        price: 0.98,
        rating: 5,
        title: 'Da Vinci Code',
        description: 'Paris',
        image: 'https://picsum.photos/700',
        id: 2,
      },
      {
        type: 'Circuit',
        price: 10,
        rating: 3,
        title: 'La Grande Vadrouille',
        description: '',
        image: 'https://picsum.photos/700',
        id: 3,
      },
      {
        type: 'Circuit',
        price: 10,
        rating: 3,
        title: 'La Grande Vadrouille',
        description: '',
        image: 'https://picsum.photos/700',
        id: 3,
      },
    ],
  }
}
