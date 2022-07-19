import {gql, useQuery} from '@apollo/client';
import Launches from '../model/Launches';

const launchQuery = gql`
  query Launches {
    launches {
      mission_name
      mission_id
      rocket {
        rocket_name
        rocket {
          company
          name
          mass {
            kg
          }
        }
      }
      launch_site {
        site_name
      }
      launch_date_local
      launch_date_unix
    }
  }
`;

export const useLaunchesQuery = () =>
  useQuery<Launches>(launchQuery);
