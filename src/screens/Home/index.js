import React, {useEffect, useState} from 'react';
import {Container, ContentCard, FieldCard, TextCard, GoHome} from './styled';
import {Card, Avatar, Button} from 'react-native-elements';
import api from '../../services/api';
import {Alert, Linking, ActivityIndicator, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

export default ({navigation}) => {
  const [state, setState] = useState(null);
  useEffect(() => {
    (async function() {
      try {
        const res = await api.get(`/${navigation.getParam('value')}`);
        setState(prevState => res.data);
      } catch (e) {
        Alert.alert('Ops', 'User not found', [
          {text: 'OK', onPress: () => navigation.navigate('Search')},
        ]);
      }
    })();

    return () => {};
  }, []);

  if (state === null)
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#2089dc" />
      </View>
    );

  const items = [
    {label: 'Followes: ', value: state.followers},
    {label: 'Following: ', value: state.following},
    {label: 'Number of repositorys: ', value: state.public_repos},
    {
      label: 'Created at: ',
      value: moment(state.created_at).format('DD/MM/YYYY'),
    },
    {
      label: 'Updated at: ',
      value: moment(state.updated_at).format('DD/MM/YYYY'),
    },
  ];
  return (
    <>
      <Container>
        <Card containerStyle={{width: '90%'}} title={state.name}>
          <ContentCard>
            <Avatar rounded source={{uri: state.avatar_url}} size="large" />

            {items.map((item, index) => (
              <FieldCard key={index}>
                <TextCard>
                  {item.label} {item.value}
                </TextCard>
              </FieldCard>
            ))}

            <FieldCard>
              <TextCard>Repositório: </TextCard>
              <Button
                title="view repository"
                onPress={() => Linking.openURL(`${state.html_url}?tab=repositories`)}
              />
            </FieldCard>
          </ContentCard>
        </Card>
      </Container>

      <GoHome onPress={() => navigation.navigate('Search')}>
        <Icon name="home" size={35} color="#fff" />
      </GoHome>
    </>
  );
};
