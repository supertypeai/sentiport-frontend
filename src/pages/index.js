import Mainframe from "@/blocks/MainFrame";
import Body from "@/blocks/Body";
import DemoForm from "@/components/DemoForm";
import Video from "@/components/Video";
import Steps from "@/components/Steps";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <Mainframe>
      <Body>
        <DemoForm />
        <Video />
        <Steps />
        <Pricing />
        <Testimonial />
      </Body>
    </Mainframe>
  );
}
