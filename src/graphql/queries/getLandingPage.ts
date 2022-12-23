const GET_LP = /* GraphQL */ `
  fragment logo on LandingPage {
    logo {
      alternativeText
      url
    }
  }

  query GET_LP {
    landingPage {
      ...logo
    }
  }
`

export default GET_LP
