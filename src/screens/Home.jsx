import { View, Text, ScrollView } from 'react-native'
import CardHighlight from '@components/cards/CardHighlight'
import Section from '@components/shared/Section'
import { useEffect, useState } from 'react'
import CardPost from '@components/cards/CardPost'
import CardType from '@components/cards/CardType'
import CardTop from '@components/cards/CardTop'
import ScrollHorizontal from '@components/shared/ScrollHorizontal'
import CardGenre from '@components/cards/CardGenre'
import CardUniver from '@components/cards/CardUniver'
import getGenres from '@controllers/GenreController'
import { getHighlight, getNews } from '@controllers/HighlightController'
import { getPlace, getPlaces, getTopPlaces } from '@controllers/PlacesController'
import { getTrack, getTracks, getTopTracks } from '@controllers/TracksController'
import { getUniverse, getUniverses } from '@controllers/UniversesController'
import { getUser, getFavorites } from '@controllers/UserController'

export default () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!data) {
      setData(getData())
    }
  }, [data])

  if (!data)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    )

  const handlePostPress = (post) => alert(JSON.stringify(post))

  return (
    <ScrollView className="bg-background">
      <View className="flex-1 mb-4">
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
          <Section title={'Nouveautés'}>
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
          <Section title={'Top 4 des circuits à Paris'}>
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
          <Section title={'Top 4 des lieux à Paris'}>
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
      </View>
    </ScrollView>
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
        title: 'Séries',
        icon: 'clapperboard',
      },
    ],
    favoris: getFavorites(1), //todo send the real user id
    nouveautes: getNews(),
    topCircuit: [
      {
        price: 15,
        rating: 3,
        title: 'Amélie Poulin',
        description: 'Scène lieu travail',
        image: 'https://picsum.photos/700',
        id: 1,
      },
      {
        price: 0.98,
        rating: 5,
        title: 'Da Vinci Code',
        description: 'Paris',
        image: 'https://picsum.photos/700',
        id: 2,
      },
      {
        type: 'Ciruit',
        price: 10,
        rating: 3,
        title: 'La Grande Vadrouille',
        description: '',
        image: 'https://picsum.photos/700',
        id: 3,
      },
      {
        price: 10,
        rating: 3,
        title: 'La Grande Vadrouille',
        description: '',
        image: 'https://picsum.photos/700',
        id: 3,
      },
    ],
    genres: getGenres(),
    univers: getUniverses(4),
    topLieux: [
      {
        price: 15,
        rating: 3,
        title: 'Amélie Poulin',
        description: 'Scène lieu travail',
        image: 'https://picsum.photos/700',
        id: 1,
      },
      {
        price: 0.98,
        rating: 5,
        title: 'Da Vinci Code',
        description: 'Paris',
        image: 'https://picsum.photos/700',
        id: 2,
      },
      {
        price: 10,
        rating: 3,
        title: 'La Grande Vadrouille',
        description: '',
        image: 'https://picsum.photos/700',
        id: 3,
      },
      {
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
