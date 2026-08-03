// @ts-nocheck
import Banner_action from './Banner/banner-action';
import Ourdepartments from './Departments/ourdepartments';
import Benefitssquare from './Benefits/benefitssquare';
import Volunteertestimonials from './Testimonials/volunteertestimonials';
import Volunteersquare from './BecomeVolunteer/volunteersquare';

export function Volunteer() {
  return (
    <main className="volunteer-page">
      <Banner_action />
      <Ourdepartments />
      <Benefitssquare />
      <Volunteertestimonials />
      <Volunteersquare />
    </main>
  );
}
