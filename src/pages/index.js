import Mainframe from "@/blocks/MainFrame";
import Body from "@/blocks/Body";
import Pricing from "@/components/Pricing";
import DemoForm from "@/components/DemoForm";
import Video from "@/components/Video";

export default function Home() {
  return (
    <Mainframe>
      <Body>
        <DemoForm />
        <Video />
        <Pricing />
      </Body>
      {/* <CreditsStats />
      <div className="col-span-12 items-center">
        <div className="lg:w-1/2 lg:h-full lg:float-left lg:pl-4">
          <div className="mockup-phone border-blue-400">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                <form>
                  <div className="form-control w-full max-w-sm mb-1">
                    <label className="label">
                      <span className="label-text">PlayStore URL</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered input-info w-full"
                      required
                    />
                    <label className="label">
                      <span className="label-text">Target email</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered input-info w-full"
                      required
                    />
                    <button className="btn btn-neutral m-8" type="submit">
                      Process
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </Mainframe>
  );
}
