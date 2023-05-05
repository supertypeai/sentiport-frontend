const Steps = () => {
  return (
    <div className="my-12" id="steps">
      <div className="mb-12 text-center font-bold">
        <h1 className="text-2xl sm:text-4xl mb-6">
          How Does It <span className="text-gradient">Work?</span>
        </h1>
        <article className="prose text-sm sm:text-base font-normal text-gray-300">
          Not just any automated report. Supertype Summary is built with
          state-of-the-art NLP / language models and an automatic, proprietary
          insights discovery process. Our data scientists and engineers work
          with you to define the data feeds for your PDF report generation
          pipeline, and develop the automation alongside your feedback.
        </article>
      </div>
      <div className="grid">
        <section className="max-w-5xl mx-auto">
          <div>
            <div className="flex flex-row">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-48 py-5 border border-blue-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                  <div className="text-3xl font-black">Step 1</div>
                  <div className="text-slate-400 text-sm">Data Feeds</div>
                </div>
                <div className="h-full border-l-4 border-transparent">
                  <div className="border-l-4 mr-4 h-full border-blue-300 border-dashed"></div>
                </div>
              </div>
              <div className="flex-auto border rounded border-blue-300">
                <div className="flex items-center">
                  <div className="hidden md:block md:w-1/4 lg:w-1/6 p-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-slate-400">
                      <span className="font-black">Step 1</span> - Data Feeds
                    </div>
                    <div className="p-3 text-xl md:text-2xl text-bold text-gradient font-bold">
                      Web Scraping & Data Collection
                    </div>
                    <div className="px-3 pb-6 text-sm sm:text-base">
                      A common source of data for automated reports is web
                      scraping. We&apos;re specialists in building automated
                      scripts that periodically collect data from the web, no
                      matter how complex the task.
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block md:w-1/4 lg:w-1/6 p-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <div className="p-3 text-xl md:text-2xl text-bold text-gradient font-bold">
                      Third Party API
                    </div>
                    <div className="px-3 pb-6 text-sm sm:text-base">
                      To generate these programmatic reports, you may need to
                      connect to data sources using 3rd party APIs. Examples of
                      these are social media APIs, stock market data APIs, and
                      other readily available APIs.
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block md:w-1/4 lg:w-1/6 p-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <div className="p-3 text-xl md:text-2xl text-bold text-gradient font-bold">
                      In-House Database Connection
                    </div>
                    <div className="px-3 pb-6 text-sm sm:text-base">
                      By connecting to your database or saved SQL queries,
                      Supertype Summary can generate pages of insights that are
                      always up-to-date with your internal data, keep these
                      analytics and reports in-sync as new data flows in.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start flex-row">
              <div className="border-t-4 border-r-4 border-transparent">
                <div className="w-16 ml-24 h-16 border-l-4 border-blue-300 border-dashed border-b-4 rounded-bl-full"></div>
              </div>
              <div className="border-t-4 border-transparent flex-auto">
                <div className="h-16 border-b-4 border-blue-300 border-dashed"></div>
              </div>
              <div className="w-16 mt-16 mr-24 h-16 border-r-4 border-blue-300 border-dashed border-t-4 rounded-tr-full"></div>
            </div>
            <div className="flex flex-row-reverse">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-48 py-5 border border-blue-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
                  <div className="text-3xl font-black">Step 2</div>
                  <div className="text-slate-400 text-sm">PDF Components</div>
                </div>
                <div className="h-full border-r-4 border-transparent">
                  <div className="border-l-4 ml-4 h-full border-blue-300 border-dashed"></div>
                </div>
              </div>
              <div className="flex-auto border rounded border-blue-300">
                <div className="flex items-center">
                  <div className="hidden md:block md:w-1/4 lg:w-1/6 p-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-slate-400">
                      <span className="font-black">Step 2</span> - PDF
                      Components
                    </div>
                    <div className="p-3 text-xl md:text-2xl text-bold text-gradient font-bold">
                      Tabular, Charts, Or Narrative
                    </div>
                    <div className="px-3 pb-6 text-sm sm:text-base">
                      Each slide in the PDF could contain elements such as a
                      well-formatted table, purpose narrative text generated
                      from our Language Generation AI, or stunning visuals in
                      your chosen color palette.
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block md:w-1/4 lg:w-1/6 p-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <div className="p-3 text-xl md:text-2xl text-bold text-gradient font-bold">
                      Predictive Analytics & ML Pipeline
                    </div>
                    <div className="px-3 pb-6 text-sm sm:text-base">
                      Execute custom-trained or pre-trained machine learning
                      routines before embedding the results directly in the
                      programmatic PDF. This way, predictive analytics are
                      always interpreted in-context.
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block md:w-1/4 lg:w-1/6 p-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <div className="p-3 text-xl md:text-2xl text-bold text-gradient font-bold">
                      Natural Language AI
                    </div>
                    <div className="px-3 pb-6 text-sm sm:text-base">
                      You may wish to include sentiment analysis on user
                      reviews, e-commerce shoppers&apos; feedback, social media
                      comments or just about any textual input. These uses state
                      of the art AI models custom-trained on your data on our
                      cloud GPU server.
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block md:w-1/4 lg:w-1/6 p-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <div className="p-3 text-xl md:text-2xl text-bold text-gradient font-bold">
                      Automatic Insights Discovery
                    </div>
                    <div className="px-3 pb-6 text-sm sm:text-base">
                      Using a series of machine learning models, our data
                      scientists can incorporate insights discovery as a
                      downstream from the data feeds. These help unearth
                      interesting patterns, highlights correlations, and
                      separate signals from the noise.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start flex-row-reverse">
              <div className="border-t-4 border-l-4 border-transparent">
                <div className="w-16 mr-24 h-16 border-r-4 border-blue-300 border-dashed border-b-4 rounded-br-full"></div>
              </div>
              <div className="border-t-4 border-transparent flex-auto">
                <div className="h-16 border-b-4 border-blue-300 border-dashed"></div>
              </div>
              <div className="w-16 mt-16 ml-24 h-16 border-l-4 border-blue-300 border-dashed border-t-4 rounded-tl-full"></div>
            </div>
            <div className="flex flex-row">
              <div className="hidden md:flex flex-col items-center">
                <div className="w-48 py-5 border border-blue-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
                  <div className="text-3xl font-black">Step 3</div>
                  <div className="text-slate-400 text-sm">
                    Delivery & Automation
                  </div>
                </div>
              </div>
              <div className="flex-auto border rounded  border-blue-300">
                <div className="flex items-center">
                  <div className="hidden md:block md:w-1/4 lg:w-1/6 p-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <div className="md:hidden text-sm font-normal uppercase pt-3 pl-3 text-slate-400">
                      <span className="font-black">Step 3</span> - Delivery &
                      Automation
                    </div>
                    <div className="p-3 text-xl md:text-2xl text-bold text-gradient font-bold">
                      Scheduled Email Delivery
                    </div>
                    <div className="px-3 pb-6 text-sm sm:text-base">
                      Your programmatically created PDF could be run and
                      executed on a given schedule, complete with automatic mail
                      delivery so they arrive in yours -- or your clients&apos;
                      -- inbox without manual labor
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block md:w-1/4 lg:w-1/6 p-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <div className="p-3 text-xl md:text-2xl text-bold text-gradient font-bold">
                      Custom Logo & Branding Styles
                    </div>
                    <div className="px-3 pb-6 text-sm sm:text-base">
                      Technical documents and reports, even if they&apos;re
                      automatic, doesn&apos;t have to all look the same. Our
                      engineers are happy to work in close consultation with you
                      to implement a branding style that is truly yours.
                    </div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="hidden md:block md:w-1/4 lg:w-1/6 p-5">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-auto">
                    <div className="p-3 text-xl md:text-2xl text-bold text-gradient font-bold">
                      White-Label & Agency-Friendly
                    </div>
                    <div className="px-3 pb-6 text-sm sm:text-base">
                      Add custom pages onto the programmatic PDF for
                      call-to-action, sales offer, or enquiry channel. This
                      works great for agencies and consultancies that generate
                      hundreds of automatic reports for sales prospecting.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Steps;
