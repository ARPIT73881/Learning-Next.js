import Link from "next/link";

const Services = () => {
  return (
    <>
      <h1>All Services </h1>
      <Link href="/services/web-development">Web Development</Link>
      <br />
      <Link href="/services/mobile-development">Mobile Development</Link>
      <br />
      <Link href="/services/seo">SEO Services</Link>
      <br />
      <br />
      <br />

      <Link href="/">Back to Home</Link>
      <br />
    </>
  );
};

export default Services;
