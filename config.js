export const AUTH0_DOMAIN = 'torus-test.auth0.com';

export const VERIFIERS = [
  {
    id: 'google-lrc',
    typeOfLogin: 'google',
    name: 'Google',
    clientId:
      '221898609709-obfn3p63741l5333093430j3qeiinaa8.apps.googleusercontent.com',
  },
  {
    id: 'facebook-lrc',
    typeOfLogin: 'facebook',
    name: 'Facebook',
    clientId: '617201755556395',
  },
  {
    id: 'twitch-lrc',
    typeOfLogin: 'twitch',
    name: 'Twitch',
    clientId: 'f5and8beke76mzutmics0zu4gw10dj',
  },
  {
    id: 'discord-lrc',
    typeOfLogin: 'discord',
    name: 'Discord',
    clientId: '682533837464666198',
  },
  {
    id: 'torus-auth0-apple-lrc',
    typeOfLogin: 'apple',
    name: 'Apple',
    clientId: 'm1Q0gvDfOyZsJCZ3cucSQEe9XMvl9d9L',
    jwtParams: {
      domain: AUTH0_DOMAIN,
    },
  },
  {
    id: 'torus-auth0-github-lrc',
    typeOfLogin: 'github',
    name: 'Github',
    clientId: 'PC2a4tfNRvXbT48t89J5am0oFM21Nxff',
    jwtParams: {
      domain: AUTH0_DOMAIN,
    },
  },
  {
    id: 'torus-auth0-linkedin-lrc',
    typeOfLogin: 'linkedin',
    name: 'Linkedin',
    clientId: '59YxSgx79Vl3Wi7tQUBqQTRTxWroTuoc',
    jwtParams: {
      domain: AUTH0_DOMAIN,
    },
  },
  {
    id: 'torus-auth0-twitter-lrc',
    typeOfLogin: 'twitter',
    name: 'Twitter',
    clientId: 'A7H8kkcmyFRlusJQ9dZiqBLraG2yWIsO',
    jwtParams: {
      domain: AUTH0_DOMAIN,
    },
  },
  {
    id: 'torus-auth0-line-lrc',
    typeOfLogin: 'line',
    name: 'Line',
    clientId: 'WN8bOmXKNRH1Gs8k475glfBP5gDZr9H1',
    jwtParams: {
      domain: AUTH0_DOMAIN,
    },
  },
  {
    id: 'torus-auth0-email-password',
    typeOfLogin: 'jwt',
    name: 'Email Password',
    clientId: 'sqKRBVSdwa4WLkaq419U7Bamlh5vK1H7',
    jwtParams: {
      domain: AUTH0_DOMAIN,
      verifierIdField: 'name',
      isVerifierIdCaseSensitive: false,
    },
  },
  {
    id: 'torus-auth0-passwordless',
    typeOfLogin: 'jwt',
    name: 'Email Passwordless',
    clientId: 'P7PJuBCXIHP41lcyty0NEb7Lgf7Zme8Q',
    jwtParams: {
      domain: AUTH0_DOMAIN,
      verifierIdField: 'name',
      isVerifierIdCaseSensitive: false,
    },
  },
  {
    id: 'torus-auth0-sms-passwordless',
    typeOfLogin: 'jwt',
    name: 'SMS Passwordless',
    clientId: 'nSYBFalV2b1MSg5b2raWqHl63tfH3KQa',
    jwtParams: {
      domain: AUTH0_DOMAIN,
      verifierIdField: 'name',
    },
  },
];

export const AGGREGATE_VERIFIER = {
  id: 'chai-google-aggregate-test',
  googleVerifierId: 'google-chai',
  googleClientId:
    '884454361223-nnlp6vtt0me9jdsm2ptg4d1dh8i0tu74.apps.googleusercontent.com',
};

export const BROWSER_REDIRECT_URI =
  'https://scripts.toruswallet.io/redirect.html';

export const REDIRECT_URI =
  'torusapp://org.torusresearch.torusdirectandroid/redirect';
