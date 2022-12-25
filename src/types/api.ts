export type TechIcon = {
  title: string
  icon: {
    url: string
  }
}

export type LogoProps = {
  alternativeText: string
  url: string
}

export type HeaderProps = {
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

export type SectionAboutProjectProps = {
  image: {
    alternativeText: string
    url: string
  }
  title: string
  description: string
}

export type SectionTechProps = {
  title: string
  tech: TechIcon[]
}

export type SectionConceptsProps = {
  title: string
  concept: Array<{
    concept: string
  }>
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
}
