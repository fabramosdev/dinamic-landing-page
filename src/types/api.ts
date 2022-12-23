export type LogoProps = {
  alternativeText: string
  url: string
}

export type SectionHeroProps = {
  title: string
  subtitle: string
  button: {
    title: string
    url: string
  }
  media: {
    alternativeText: string
    url: string
  }
}

export type LandingPageProps = {
  logo: LogoProps
  header: SectionHeroProps
}
