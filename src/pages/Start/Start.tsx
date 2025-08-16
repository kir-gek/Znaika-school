import { AboutUs } from "../../components/7-9/AboutUs";
import { AttestationForm } from "../../components/7-9/AttestationForm";
import { Banner } from "../../components/1-3/Banner";
import { FAQ } from "../../components/7-9/FAQ";
import { ForWhom } from "../../components/1-3/ForWhom";
import { Advantages } from "../../components/4-6/Advantages";
import { Navbar } from "../../components/1-3/Navbar";
import { PricingPlans } from "../../components/4-6/PricingPlans";
import { SuccessStories } from "../../components/4-6/SuccessStories";
import { AccreditationSection } from "../../components/10-12/AccreditationSection";
import { ContactSection } from "../../components/10-12/ContactsSection";
import { ScrollProgress } from "../../components/ScrollProgress";

export const Start = () => {
  return (
    <>
<ScrollProgress />

      <Navbar />
      <Banner />
      <ForWhom />

      <Advantages />
      <SuccessStories />
      <PricingPlans />

      <FAQ />
      <AboutUs />
      <AttestationForm />

      <AccreditationSection />
      <ContactSection />
    </>
  );
};
