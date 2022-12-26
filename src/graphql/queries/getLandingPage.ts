const GET_LP = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    header {
      title
      subtitle
      button {
        title
        url
      }
      media {
        alternativeText
        url
      }
    }
  }

  fragment sectionAboutProject on LandingPage {
    sectionAboutProject {
      image {
        alternativeText
        url
      }
      title
      description
    }
  }

  fragment sectionTech on LandingPage {
    sectionTech {
      title
      tech {
        title
        icon {
          url
        }
      }
    }
  }

  fragment sectionConcepts on LandingPage {
    sectionConcepts {
      title
      concept {
        concept
      }
    }
  }

  fragment sectionModules on LandingPage {
    sectionModules {
      title
      module {
        title
        subtitle
        description
      }
    }
  }

  fragment sectionAgenda on LandingPage {
    sectionAgenda {
      title
      description
    }
  }

  fragment sectionPrice on LandingPage {
    sectionPrice {
      originalPriceText
      procionalPriceText
      courseResources {
        concept
      }
      button {
        title
        url
      }
    }
  }

  query GET_LP {
    landingPage {
      ...logo
      ...header
      ...sectionAboutProject
      ...sectionTech
      ...sectionConcepts
      ...sectionModules
      ...sectionAgenda
      ...sectionPrice
    }
  }
`

export default GET_LP
