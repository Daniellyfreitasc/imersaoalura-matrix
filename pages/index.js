import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from '../pages/config.json';



  function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
      <>
        <Tag>{props.children}</Tag>
        <style jsx>{`
              ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
              }
              `}</style>
      </>
    );
  }


// Componente React
// function HomePage() {
//     // JSX
//     return (
//           <div>
//             <GlobalStyle />
//             <Titulo tag="h2">Boas vindas de volta!</Titulo>
//             <h2>Discord - Alura Matrix</h2>
//         </div>
//     )
// }
  
// export default HomePage

export default function PaginaInicial() {
    // const username = 'Daniellyfreitasc';
    const [username, setUsername] = React.useState('Daniellyfreitasc');
    const roteamento = useRouter();
  
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary['000'],
            backgroundImage: 'url(https://www.10wallpaper.com/wallpaper/1366x768/2001/Street_night_After_rain_2019_Cities_HD_Photo_1366x768.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '25px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.background.fundoBlack,
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              // Sempre que houver a submissão
              onSubmit = {function (infosdoEvento) {
                  infosdoEvento.preventDefault();
                  console.log('Página submetida por alguém');
                  roteamento.push(`/chat?username=${username}`);
                  // window.location.href = '/chat'; - é como o react usaria a transição de página
                  // a próxima será feita com next.js para um melhor refresh
                  
                }
              }
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Sinta-se à vontade!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals['300'] }}>
                {appConfig.name}
              </Text>

              
  
              { <TextField
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals['100'],
                    mainColor: appConfig.theme.colors.neutrals['100'],
                    mainColorHighlight: appConfig.theme.colors.primary['500'],
                    backgroundColor: appConfig.theme.colors.neutrals['600'],
                  },
                }}
                value={username}
                onChange={
                  function (event) {
                    console.log('usuario digitou', event.target.value);
                    // Valor estará em:
                    const valor = event.target.value;

                    // Troca o valor da variavel
                    setUsername(valor);
                  }
                }
              /> }
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary['050'],
                  mainColorLight: appConfig.theme.colors.primary['000'],
                  mainColorStrong: appConfig.theme.colors.primary['000'],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: appConfig.theme.colors.background.fundoBlack,
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals["050"],
                borderRadius: '15px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }