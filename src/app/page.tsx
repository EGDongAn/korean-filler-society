import HeroSection from '@/components/home/HeroSection';
import ConferenceHighlight from '@/components/home/ConferenceHighlight';
import LatestNews from '@/components/home/LatestNews';
import FeaturedLectures from '@/components/home/FeaturedLectures';
import MemberBenefits from '@/components/home/MemberBenefits';
import PartnerShowcase from '@/components/home/PartnerShowcase';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ConferenceHighlight />
      <LatestNews />
      <FeaturedLectures />
      <MemberBenefits />
      <PartnerShowcase />
    </>
  );
}