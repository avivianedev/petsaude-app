// Design tokens do PetSaúde (fonte: "PetSaúde Design Tokens v1.0").

// 1. Cores -------------------------------------------------------------------

export const colors = {
  // Primárias e secundárias
  primary: '#2FA98C', // CTAs, FAB, toggles ativos, status "em dia"
  primaryDark: '#22826B', // estado pressed
  primarySurface: '#E3F2EC', // fundos suaves, avatar, badge "EM DIA"
  primaryTintStart: '#DCEFE7', // gradiente do cabeçalho do Perfil do Pet
  primaryTintEnd: '#C8E6DA', // fim do gradiente e borda de botão secundário
  secondary: '#E8A13D', // pendências, datas próximas
  secondarySurface: '#FBF0DD', // badges de alerta
  accentInfo: '#5B8DBE', // assinatura do veterinário
  accentInfoSurface: '#E7EFF7',

  // Neutras (quentes)
  bg: '#F7F5F2', // fundo padrão das telas
  bgAlt: '#E9EFEA', // fundo "mesa" da Carteira
  surface: '#FFFFFF', // cards, inputs, tab bar
  surfacePaper: '#FDFCFA', // páginas internas do álbum
  surfaceMuted: '#EAE7E0', // trilho de abas e borda de input em repouso
  chipOff: '#F1EEE8', // chips não selecionados
  divider: '#F1F4F1', // divisores de listas
  dividerTableHeader: '#F3F7F4', // cabeçalho de tabela
  border: '#C4CFC9', // bordas tracejadas, toggles desligados

  // Texto
  text: '#26332E', // texto principal e títulos
  textSecondary: '#7A8681', // descrições e metadados
  textDisabled: '#A7B3AD', // placeholders, rótulos overline
  textOnPrimary: '#FFFFFF', // texto sobre verde ou âmbar sólidos
  textOnPrimarySoft: '#D8F0E8', // texto secundário sobre verde
  textOnSecondarySurface: '#8A6A2E', // texto sobre o âmbar claro

  // Status
  success: '#2FA98C',
  successSurface: '#E3F2EC',
  warning: '#E8A13D',
  warningSurface: '#FBF0DD',
  danger: '#D9634F', // proposta de extensão: ainda não aparece nos mockups
  dangerSurface: '#FBE5E0',
} as const;

// 2. Tipografia --------------------------------------------------------------
// Família única: Nunito. No React Native, cada peso é uma família própria

export const fontFamily = {
  semiBold: 'Nunito_600SemiBold', // 600
  bold: 'Nunito_700Bold', // 700
  extraBold: 'Nunito_800ExtraBold', // 800
  black: 'Nunito_900Black', // 900
} as const;

// lineHeight em pixels = tamanho x proporção do documento, arredondado.
export const typography = {
  displayLg: { fontFamily: fontFamily.black, fontSize: 30, lineHeight: 33 },
  displayMd: { fontFamily: fontFamily.black, fontSize: 27, lineHeight: 31 },
  headingLg: { fontFamily: fontFamily.black, fontSize: 24, lineHeight: 29 },
  headingMd: { fontFamily: fontFamily.extraBold, fontSize: 16, lineHeight: 21 },
  headingSm: { fontFamily: fontFamily.extraBold, fontSize: 15, lineHeight: 20 },
  bodyMd: { fontFamily: fontFamily.bold, fontSize: 14, lineHeight: 20 },
  bodySm: { fontFamily: fontFamily.semiBold, fontSize: 12, lineHeight: 17 },
  caption: { fontFamily: fontFamily.bold, fontSize: 11, lineHeight: 15 },
  badge: {
    fontFamily: fontFamily.extraBold,
    fontSize: 10,
    lineHeight: 12,
    textTransform: 'uppercase',
  },
  overline: {
    fontFamily: fontFamily.extraBold,
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
} as const;

// 3. Espaçamentos, tamanhos e raios -------------------------------------------

export const spacing = {
  xxs: 4, // gap entre ícone e texto
  xs: 8, // gap entre chips e badges
  sm: 12, // gap entre cards de lista
  md: 16, // padding interno de cards
  lg: 22, // margem lateral padrão das telas
  xl: 24, // respiro entre seções
  xxl: 32, // blocos maiores
} as const;

export const sizes = {
  minTouchTarget: 44, // alvo de toque mínimo (largura e altura)
  inputBorderWidth: 1.5, // borda do input (no foco usa colors.primary)
} as const;

export const radius = {
  sm: 8, // badges de status (chips usam 9)
  md: 14, // inputs, segmented controls
  lg: 16, // botões CTA, cards de lista (o documento admite até 18)
  xl: 20, // cards de pet, grupos de ajustes
  xxl: 24, // tab bar flutuante, base do header imersivo (até 30)
  full: 999, // avatares, pills, toggles
} as const;

// 4. Sombras ----------------------------------------------------------------

export const shadows = {
  card: {
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,
  },
  raised: {
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 7,
    elevation: 3,
  },
  cta: {
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },
  doc: {
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: 14 },
    shadowOpacity: 0.18,
    shadowRadius: 17,
    elevation: 12,
  },
} as const;
