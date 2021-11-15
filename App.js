import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import TorusDirect from '@toruslabs/torus-direct-react-native-sdk';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  AGGREGATE_VERIFIER,
  BROWSER_REDIRECT_URI,
  REDIRECT_URI,
  VERIFIERS,
} from './config';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}
      >
        {title}
      </Text>
      {children}
    </View>
  );
};

const Description = ({children}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Text
      style={[
        styles.sectionDescription,
        {color: isDarkMode ? Colors.light : Colors.dark},
      ]}
    >
      {children}
    </Text>
  );
};

const App: () => Node = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [result, setResult] = useState('');

  useEffect(() => {
    TorusDirect.init({
      network: 'testnet',
      browserRedirectUri: BROWSER_REDIRECT_URI,
      redirectUri: REDIRECT_URI,
    })
      .then(() => setIsLoading(false))
      .catch(error => setResult(error.toString()));
  }, [setIsLoading]);

  const [verifier, setVerifier] = useState(VERIFIERS[0]);

  const login = async () => {
    if (!verifier || isLoading) {
      return;
    }

    setResult('');
    setIsLoading(true);
    try {
      const credentials = await TorusDirect.triggerLogin({
        typeOfLogin: verifier.typeOfLogin,
        verifier: verifier.id,
        clientId: verifier.clientId,
        jwtParams: verifier.jwtParams,
      });
      setResult(
        `Address:\n${credentials.publicAddress}\n\nPrivate key:\n${credentials.privateKey}`,
      );
    } catch (e) {
      setResult(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const aggregateLogin = async () => {
    if (isLoading) {
      return;
    }

    setResult('');
    setIsLoading(true);
    try {
      const credentials = await TorusDirect.triggerAggregateLogin({
        aggregateVerifierType: 'single_id_verifier',
        verifierIdentifier: AGGREGATE_VERIFIER.id,
        subVerifierDetailsArray: [
          {
            typeOfLogin: 'google',
            verifier: AGGREGATE_VERIFIER.googleVerifierId,
            clientId: AGGREGATE_VERIFIER.googleClientId,
          },
        ],
      });
      setResult(
        `Address:\n${credentials.publicAddress}\n\nPrivate key:\n${credentials.privateKey}`,
      );
    } catch (e) {
      setResult(e.toString());
    } finally {
      setIsLoading(false);
    }
  };

  const googleLogin = async () => {
    setResult('TBD');
  };

  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
      >
        <Text style={styles.title}>Torus CustomAuth Samples</Text>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}
        >
          <Section title="Single-Verifier Login">
            <Picker selectedValue={verifier} onValueChange={setVerifier}>
              {VERIFIERS.map(verifier => (
                <Picker.Item
                  key={verifier.id}
                  value={verifier}
                  label={verifier.name}
                />
              ))}
            </Picker>
            <Button title="Login" disabled={isLoading} onPress={login} />
          </Section>
          <Section title="Multi-Verifier Login">
            <Description>
              This example demonstrates aggregate login using only Google. You
              can use all available login types. See docs.tor.us for details.
            </Description>
            <Button
              title="Aggregate Login"
              disabled={isLoading}
              onPress={aggregateLogin}
            />
          </Section>
          <Section title="Native Login">
            <Description>
              This example demonstrates native Google login using getTorusKey.
              You can implement any sort of login similarly using either
              getTorusKey or getAggregateTorusKey. See docs.tor.us for details.
            </Description>
            <Button
              title="Google Login"
              disabled={isLoading}
              onPress={googleLogin}
            />
          </Section>
          <Section title="Result">
            <Description>
              {result ? result : isLoading ? 'Loading...' : 'No result.'}
            </Description>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textTransform: 'uppercase',
    paddingTop: 12,
    paddingHorizontal: 24,
    backgroundColor: 'white',
  },
  picker: {
    color: 'red',
  },
  sectionContainer: {
    marginTop: 25,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 23,
    fontWeight: '600',
  },
  sectionDescription: {
    marginVertical: 8,
    fontSize: 15,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
