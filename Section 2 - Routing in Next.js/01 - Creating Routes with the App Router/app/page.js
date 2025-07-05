import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to my home page</h1>
      {/* the page is reloading because of the anchor tag */}
      <a href="/about">About</a>
      <br />
      <Link href="/services">Services</Link>
    </>
  );
}
