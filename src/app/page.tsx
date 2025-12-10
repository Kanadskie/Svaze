import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import PrivateClients from '@/components/sections/PrivateClients';
import Business from '@/components/sections/Business';
import Contacts from '@/components/sections/Contacts';
import Certificates from '@/components/sections/Certificates';
import Videos from '@/components/sections/Videos';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Videos />
      <PrivateClients />
      <Business />
      <Certificates />
      <Contacts />
    </>
  );
}