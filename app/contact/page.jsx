import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Reach out to us for any inquiries or partnership opportunities. We look forward to hearing from you!"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
