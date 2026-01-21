import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import PrivateClients from '@/components/sections/PrivateClients';
import Business from '@/components/sections/Business';
import Contacts from '@/components/sections/Contacts';
import Certificates from '@/components/sections/Certificates';
import Videos from '@/components/sections/Videos';
import Request from '@/components/sections/Request';
import WorkProcess from '@/components/sections/WorkProcess';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Request />
      <WorkProcess />
      <Business />
      <PrivateClients />
      <Certificates />
      <Videos />
      <Contacts />
    </>
  );
}