import React from 'react'
import Link from 'gatsby-link'

const RoomsLandingPage = (roomsQuery) => (
  <div>
    <h1>rooms landing page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>

        <ul>
      {roomsQuery.data.allDataJson.edges[0].node.Rooms[0].Name}
    </ul>
  </div>
)

export default RoomsLandingPage

export const roomsQuery = graphql`
query roomsQuery {
  allDataJson {   
      edges {
        node {          
          Rooms {
            Name
            Overview
            RateNumGuests
            MaxGuests
            BeddingConfiguration
            CancellationPolicy
            ExtraAdultRate
            ExtraChildRate
            ThumbnailImageUri
          }
        }
      }
    }
  }
`;