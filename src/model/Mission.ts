import LaunchSite from './LaunchSite';
import Rocket from './Rocket';

export default interface Mission {
  mission_name: string;
  mission_id: string;
  rocket: Rocket;
  launch_site: LaunchSite;
  launch_date_local: string;
  launch_date_unix: number;
}
