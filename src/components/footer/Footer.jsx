import { Typography } from "antd";
import { FooterStyle } from "./footerStyle";

const { Text, Link } = Typography;

export const Footer = () => {
  return (
    <FooterStyle>
      <p>
        <Text strong>Got questions?</Text> Take a look at our <Link>FAQs</Link>,
        talk to us on Twitter <Link>@icloudready</Link> or send an email to{" "}
        <Link href="mailto:team@icloud-ready.com">team@icloud-ready.com</Link>
      </p>
    </FooterStyle>
  );
};
