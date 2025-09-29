# API Jokes

API Jokes é um aplicativo feito com React Native e Expo que mostra piadas aleatórias.

## Funcionalidades
- Tela inicial (Splash Screen) que aparece por alguns segundos
- Mostra piadas da internet
- Botão para buscar uma nova piada
- Visual simples e organizado

## Como usar
1. Baixe ou clone o projeto
2. Abra o terminal e rode `npm install`
3. Depois rode `expo start`
4. Abra no celular com o app Expo Go ou no emulador

## Estrutura básica
- SplashScreen.tsx → tela inicial
- HomeScreen.tsx → tela principal com piadas
- JokeCard.tsx → componente que mostra a piada
- api.ts → onde o app pega as piadas da internet

## API usada
O app pega piadas da [Official Joke API](https://official-joke-api.appspot.com/random_joke)
