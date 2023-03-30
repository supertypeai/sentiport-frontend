import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import CreditsStats from '@/components/CreditsStats'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Superanalytica</title>
        <meta name="description" content="Automated Mobile App Review Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className='min-h-screen flex flex-col justify-between items-center'>
        <NavBar />
        {/* <div className={styles.description}>
          <p>
            Get started by entering&nbsp;
            <code className={styles.code}>PlayStore URL</code>
          </p>
        </div> */}
        <CreditsStats />
        <div className="col-span-12 lg: col-span-12 items-center">
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
                      <button className="btn btn-neutral m-8" type="submit">Process
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-1/2 mx-auto lg:block lg:w-1/2 lg:h-full lg:float-left lg:pr-8">
            <img
              src="/home/illus-1.svg"
              alt="Build Real projects by Supertype"
              className="lg:max-w-lg mt-2"
            />

          </div> */}
        </div>
        <Footer />
      </main>
    </>
  )
}
