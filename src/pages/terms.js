import Head from "next/head";

const TermsOfUsePage = () => {
  return (
    <div className="grid privacyPolicy">
      <Head>
        <title>Terms of Use | Buffy the Vampire Slayer + Angel Wiki</title>
        <meta
          name="description"
          description={`Buffy the Vampire Slayer + Angel Wiki Terms of Use`}
        />
      </Head>
      <div className="infoSection">
        <h1>
          Terms of <br></br>Use<br></br> <span>+</span>
        </h1>
        <p className="subText">
          Welcome to the Buffy the Vampire Slayer and Angel Wiki! By accessing
          or using our website, you agree to comply with the following Terms of
          Use. These terms outline the rules and guidelines that govern your use
          of our wiki. Please read them carefully.
        </p>
        <p>
          By using the Buffy the Vampire Slayer and Angel Wiki, you agree to
          abide by these Terms of Use. If you do not agree with any of these
          terms, please refrain from using our website. If you have any
          questions or concerns about these terms, please contact us.
        </p>
      </div>
      <div className="policySection">
        <h3>Content and Intellectual Property</h3>
        <p>
          <span>a.</span> The content on the Buffy the Vampire Slayer and Angel Wiki,
          including text, images, videos, and other media, is provided for
          informational purposes only. It is protected by copyright and other
          intellectual property laws.
        </p>
        <p>
          <span>b.</span> You may not reproduce, distribute, modify, or transmit any content
          from our wiki without obtaining prior written permission from the
          respective rights holders.
        </p>
        <p>
          <span>c.</span> Contributions made to the wiki are subject to our editing and
          moderation policies. By submitting content to the wiki, you grant us a
          non-exclusive, royalty-free, perpetual, and worldwide license to use,
          modify, distribute, and display your contributions.
        </p>
        <h3>User Conduct</h3>
        <p>
          <span>a.</span> You agree to use the Buffy the Vampire Slayer and Angel Wiki in a
          manner consistent with applicable laws and regulations.
        </p>
        <p>
          <span>b.</span> You will not engage in any activity that may disrupt or interfere
          with the functioning of the wiki or its users&apos; experience, including
          but not limited to hacking, spamming, or distributing malware.
        </p>
        <p>
          <span>c.</span> You will respect the rights and privacy of other users. Do not post
          or share personal information about others without their explicit
          consent.
        </p>
        <h3>Accuracy and Reliability</h3>
        <p>
          <span>a.</span> While we strive to provide accurate and reliable information, the
          Buffy the Vampire Slayer and Angel Wiki does not guarantee the
          completeness, timeliness, or accuracy of its content.
        </p>
        <p>
          <span>b.</span> The wiki may contain user-generated content, and we cannot endorse
          or verify the accuracy of all contributions. Users are encouraged to
          exercise their own judgment and verify information independently.
        </p>
        <h3>External Links</h3>
        <p>
          <span>a.</span> The wiki may contain links to external websites or resources. We
          are not responsible for the content, availability, or privacy
          practices of these third-party sites. Use them at your own risk.
        </p>
        <h3>Disclaimer of Liability</h3>
        <p>
          <span>a.</span> The Buffy the Vampire Slayer and Angel Wiki and its administrators,
          contributors, and affiliates shall not be liable for any direct,
          indirect, incidental, consequential, or punitive damages arising from
          your use of the wiki or reliance on its content.
        </p>
        <p>
          <span>b.</span> We do not endorse any products, services, or opinions expressed on
          the wiki unless explicitly stated.
        </p>
        <h3>Modifications and Termination</h3>
        <p>
          <span>a.</span> We reserve the right to modify, suspend, or terminate the Buffy the
          Vampire Slayer and Angel Wiki or any part thereof, at any time and
          without notice.
        </p>
        <p>
          <span>b.</span> We may update these Terms of Use periodically, and it is your
          responsibility to review them regularly.
        </p>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
