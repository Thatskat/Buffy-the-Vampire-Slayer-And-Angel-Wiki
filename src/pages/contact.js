import Link from "next/link";
import Head from "next/head";

import {
  AiFillPhone,
  AiOutlineMail,
} from "react-icons/ai";
const ContactPage = () => {
  return (
    <div className="grid privacyPolicy">
      <Head>
        <title>Contact Us | Buffy the Vampire Slayer + Angel Wiki</title>
      </Head>
      <div className="infoSection">
        <h1>
          Contact <br></br>Us<br></br> <span>+ </span>
        </h1>
        <p className="subText">
          Thank you for visiting the Buffy the Vampire Slayer and Angel Wiki! We
          value your feedback, suggestions, and inquiries. If you have any
          questions or need assistance, please don't hesitate to contact us.
          Here's how you can get in touch:
        </p>
        <p className="contactLinks">
          {" "}
          <Link href="tel: 1300 655 506">
            <AiFillPhone /> 1300 655 506
          </Link>
          <Link href="mailto: inquiries@buffyangelwiki.com.au">
            <AiOutlineMail /> inquiries@buffyangelwiki.com.au
          </Link>
          <Link href="mailto: techsupport@buffyangelwiki.com.au">
            <AiOutlineMail /> techsupport@buffyangelwiki.com.au
          </Link>
        </p>
        <p>
          We value your engagement and are dedicated to providing a
          comprehensive and enjoyable experience on the Buffy the Vampire Slayer
          and Angel Wiki. Your input is crucial in helping us maintain the
          quality and accuracy of our content. We look forward to hearing from
          you and appreciate your support in celebrating these iconic series!
        </p>
      </div>
      <div className="policySection">
        <h3>General Inquiries</h3>
        <p>
          For general inquiries about the wiki, its content, or any other
          related matter, you can reach us by sending an email to{" "}
          <Link href="mailto: inquiries@buffyangelwiki.com.au">
            inquiries@buffyangelwiki.com.au
          </Link>
          . We strive to respond to all inquiries in a timely manner.
        </p>
        <h3>Technical Support</h3>
        <p>
          If you encounter any technical issues while using the Buffy the
          Vampire Slayer and Angel Wiki, please email our technical support team
          at{" "}
          <Link href="mailto: techsupport@buffyangelwiki.com.au">
            techsupport@buffyangelwiki.com.au
          </Link>
          . Please provide detailed information about the problem you're
          experiencing, including any error messages or screenshots, so we can
          assist you more effectively.
        </p>
        <h3>Content Suggestions and Contributions</h3>
        <p>
          We encourage users to contribute to the growth and accuracy of our
          wiki. If you have suggestions for new content, corrections, or
          additions to existing articles, please reach out to us at{" "}
          <Link href="mailto: inquiries@buffyangelwiki.com.au">
            inquiries@buffyangelwiki.com.au
          </Link>
          . We appreciate your input and will review your suggestions
          accordingly.
        </p>
        <h3>Copyright Concerns</h3>
        <p>
          We take intellectual property rights seriously and strive to ensure
          that all content on the Buffy the Vampire Slayer and Angel Wiki
          complies with applicable copyright laws. If you believe that your
          copyright has been infringed upon, please notify us immediately by
          emailing{" "}
          <Link href="mailto: inquiries@buffyangelwiki.com.au">
            inquiries@buffyangelwiki.com.au
          </Link>
          . Provide detailed information about the copyrighted work and the
          specific page or content in question, and we will promptly address
          your concerns.
        </p>
        <h3>Partnerships and Collaborations</h3>
        <p>
          If you are interested in partnering with the Buffy the Vampire Slayer
          and Angel Wiki or have collaboration opportunities, please email us at{" "}
          <Link href="mailto: inquiries@buffyangelwiki.com.au">
            inquiries@buffyangelwiki.com.au
          </Link>
          . We are open to exploring mutually beneficial partnerships,
          sponsorships, and promotional opportunities.
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
