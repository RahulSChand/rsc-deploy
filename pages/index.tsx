import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex-col'>

      <main className={styles.main}>
        <div className='basis-1/4'>
        <img
            className={styles.borderCircle}
            src="cat.jpg"
            alt="Next.js Logo"
            width={200}
            height={200}
            style={{
              margin: "auto",
            }}
          />
          <h1 className='text-black text-center text-5xl font-bold'>
            Rahul Chand
          </h1>
          <div className='flex flex-row justify-center py-4'>
            <div>
              <Link href="https://github.com/pytorch/pytorch">
              <img
                src="git_icon.png"
                className='hover:scale-125'
                alt="git icon"
                width={48}
                height={48}
                style={{
                  margin: "auto",
                }}
              />
              </Link>
            </div>
            <div>
            <img
                src="linkedn_icon_2.png"
                className='hover:scale-125'
                alt="git icon"
                width={48}
                height={48}
                style={{
                  margin: "auto",
                }}
              />
            </div>
                
          </div>
          <div className="flex justify-center">
          <p className='text-center py-8 text-2xl font-sans overflow-wrap: normal w-1/2'>
            Hello, I'm <span className='font-bold'>Rahul</span>, an ML engineer. I graduated from BITS Pilani in 2019 and recently worked at Microsoft Research India as a Research Fellow
          </p>
          </div>
          
        </div>
        <div className='basis-1/2'>
        <h1>
          Link to <Link className='underline hover:font-bold' href="/blogs/first-post">Resume</Link>
          </h1>
          <h1>
          Link to <Link className='underline hover:font-bold' href="/blogs/first-post">Projects</Link>
          </h1>
          
        </div>
        <div className='basis-1/2'>
          
        </div>
      </main>
      </div>
    </>
  )
}