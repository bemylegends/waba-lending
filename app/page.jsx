import ApplyFaq from '@/components/ApplyFaq';
import Benefits from '@/components/Benefits';
import Founder from '@/components/Founder';
import Hero from '@/components/Hero';
import HomeEvents from '@/components/HomeEvents';
import HomeKnowledge from '@/components/HomeKnowledge';
import HowSteps from '@/components/HowSteps';
import Inside from '@/components/Inside';
import Proof from '@/components/Proof';
import Stance from '@/components/Stance';
import Tracks from '@/components/Tracks';

export const metadata = { title: "Legends \u2014 Private investor network" };

export default function Page() {
  return (
    <>
      <Hero /><Founder /><HowSteps /><Benefits /><Tracks /><Stance /><Proof /><HomeEvents />
      <HomeKnowledge /><ApplyFaq /><Inside />
    </>
  );
}
