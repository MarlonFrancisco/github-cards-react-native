import React, { useRef } from 'react';
import {Card, Input, Button} from 'react-native-elements';
import {Container, Title} from './styled';

export default ({navigation}) => {
  const inputRef = useRef();
  return (
    <Container>
      <Title>Github Cards</Title>
      <Card containerStyle={{width: '80%'}}>
        <Input label="Search user Github" ref={inputRef}/>

        <Button
          title="Search"
          containerStyle={{marginTop: 10}}
          onPress={() => navigation.navigate("Home", {
            value: inputRef.current.input._lastNativeText
          })}
        />
      </Card>
    </Container>
  );
};
