const GET_LP = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  fragment header on LandingPage {
    sectionHero {
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

  query GET_LP {
    landingPage {
      ...logo
      ...header
    }
  }
`

export default GET_LP
