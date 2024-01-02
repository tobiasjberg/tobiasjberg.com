import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main>
        <section className='py-20 px-4 border-b border-b-electric md:px-8'>
          <h1 className='text-center'><span className='text-5xl'>Tobias Berg</span><br/><br/>
          <span className='text-4xl'>Web Developer</span><br/><br/>
          <span className='text-2xl'>Kansas City, KS</span></h1>
        </section>
        <section className='py-12 px-4 border-b border-b-electric md:px-8'>
          <h2 className='text-4xl text-center mb-12'>Examples</h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className=''>
              <h3 className='text-xl font-bold mb-4'>Breath of the Wild Wiki</h3>
              <p className='mb-4'>An unofficial resource for finding information about all of the items you will find in The Legend of Zelda: Breath of the Wild.</p>
              <p className='mb-4'>Tech Stack: Node.js, React.js, Next.js, API Calls, AWS Amplify.</p>
              <a className='inline-block mb-4 mr-4 p-4 bg-electric text-darkText' href='https://main.d341xc5hy0q31.amplifyapp.com/' target='_blank'>Take a Look</a>
              <a className='inline-block mb-4 mr-4 p-4 bg-offwhite text-darkText' href='https://github.com/tobiasjberg/botw-items-wiki' target='_blank'>View on GitHub</a>
            </div>
            <div className=''>
              <h3 className='text-xl font-bold mb-4'>T-Mobile Device Estimator</h3>
              <p className='mb-4'>Our Agile team created a custom AEM component to function as a form for users to enter their mobile device information to receive an estimated trade-in value. The form’s autocomplete and select options are dynamic based on the user’s previous input values.</p>
              <p className='mb-4'>Tech Stack: HTL, SASS, TypeScript, Alpine.js, Jest, Git.</p>
              <a className='inline-block mb-4 mr-4 p-4 bg-electric text-darkText' href='https://www.t-mobile.com/devices/phone-trade-in' target='_blank'>Take a Look</a>
            </div>
            <div className=''>
              <h3 className='text-xl font-bold mb-4'>TUDOR Collection at TIVOL</h3>
              <p className='mb-4'>TUDOR requested a separate collections page to display their watches that included custom filtering options based on watch attributes.</p>
              <p className='mb-4'>Tech Stack: HTML + Liquid, CSS, JavaScript, jQuery.</p>
              <a className='inline-block mb-4 mr-4 p-4 bg-electric text-darkText' href='https://www.tivol.com/collections/tudor' target='_blank'>Take a Look</a>
            </div>
            <div className=''>
              <h3 className='text-xl font-bold mb-4'>ALICE Preview</h3>
              <p className='mb-4'>I designed and created a landing page for real estate agents to get a preview of a new product offering. The scripts I wrote “slide” the hero from the avatar and title to the video player and back, and open the sample images in a lightbox modal that adapts to any screen size.</p>
              <p className='mb-4'>Tech Stack: HTML, CSS, JavaScript, jQuery.</p>
              <a className='inline-block mb-4 mr-4 p-4 bg-electric text-darkText' href='https://alice.reecenichols.com/' target='_blank'>Take a Look</a>
            </div>
          </div>
        </section>
        <section className='py-12 px-4 border-b border-b-electric md:px-8'>
          <h2 className='text-4xl text-center mb-12'>Skills &amp; Experience</h2>
          <div className='lg:grid lg:grid-cols-3 lg:gap-4 max-w-5xl mx-auto'>
            <div className='max-w-xs mx-auto lg:max-w-full lg:mx-0'>
              <h3 className='text-3xl text-center mb-4'>Front-End Web</h3>
              <ul className='mb-8 flex flex-wrap gap-x-4 gap-y-2'>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>Alpine.js</li>
                <li>SASS</li>
                <li>TypeScript</li>
                <li>jQuery</li>
              </ul>
            </div>
            <div className='max-w-xs mx-auto lg:max-w-full lg:mx-0'>
              <h3 className='text-3xl text-center mb-4'>Data Integration</h3>
              <ul className='mb-8 flex flex-wrap gap-x-4 gap-y-2'>
                <li>REST API</li>
                <li>Node.js</li>
                <li>Shopify API</li>
                <li>SQL Server</li>
                <li>GraphQL</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div className='max-w-xs mx-auto lg:max-w-full lg:mx-0'>
              <h3 className='text-3xl text-center mb-4'>Content Systems</h3>
              <ul className='mb-8 flex flex-wrap gap-x-4 gap-y-2'>
                <li>Adobe Experience Manager (AEM)</li>
                <li>Shopify</li>
                <li>Wordpress</li>
                <li>Proprietary CMS (Real Estate)</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='py-12 px-4 border-b border-b-electric md:px-8'>
          <h2 className='text-4xl text-center mb-12'>Contact</h2>
          <div className='max-w-[200px] mx-auto md:max-w-none md:mx-0 md:flex md:flex-row md:justify-center md:gap-8 lg:gap-16 md:items-center'>
            <div className='md:basis-1/2 md:flex md:justify-end'>
              <Image
                src="/images/headshot.jpg"
                width={200}
                height={200}
                alt="Headshot of Tobias Berg"
                className='mb-8 md:mb-0'
              />
            </div>
            <div className='md:basis-1/2'>
              <p className='mb-4 text-lg font-bold'>Tobias Berg</p>
              <p className='mb-4'><a className='underline' href='mailto:tobias@tobiasjberg.com'>tobias@tobiasjberg.com</a></p>
              <p className='mb-4 md:mb-0'><a className='underline' href='https://www.linkedin.com/in/tobiasjberg/'>LinkedIn</a> | <a className='underline' href='https://github.com/tobiasjberg/tobiasjberg.com'>GitHub</a></p>
            </div>
          </div>
        </section>
      </main>
      <footer className='py-4 px-4 md:px-8'>
        <p>&copy;2024 Tobias Berg. All rights reserved.</p>
        <div className='flex justify-center p-4'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 176"
          className='stroke-darkText dark:stroke-electric fill-none stroke-[8] w-[86px] h-[42px]'>
            <path d=" M 10.35 79.723 C 16.794 79.723 20.378 79.839 26.861 79.723 C 78.338 72.223 170.608 49.723 261.906 18.723" />
            <path d=" M 92.907 66.723 C 95.942 113.973 85.501 142.473 80.281 165.723" />
            <path d=" M 192.947 40.723 C 201.809 59.973 209.418 73.652 210.429 90.723 C 211.036 100.973 211.322 114.991 206.544 125.723 C 205.209 128.723 195.86 153.223 178.378 158.723 C 171.87 160.771 164.722 158.206 158.953 153.723 C 153.697 149.64 151.668 142.723 149.24 137.723" />
            <path d=" M 262.877 137.723 C 262.876 137.96 272.469 142.973 290.942 137.723 C 303.571 134.134 338.029 121.223 346.406 102.723 C 349.746 95.346 352.355 87.973 344.463 78.723 C 331.746 63.816 301.725 55.9 300.756 54.723 C 299.831 53.598 299.522 51.161 299.785 50.723 C 305.491 41.223 317.589 43.779 326.009 37.723 C 331.176 34.007 336.142 31.906 339.607 25.723 C 341.428 22.473 339.854 17.436 336.693 15.723 C 325.159 9.473 319.786 9.941 307.555 10.723 C 285.765 12.118 261.388 17.173 261.906 18.723 C 278.782 69.223 262.999 108.973 262.877 137.723 Z " />
          </svg>
        </div>
      </footer>
    </>
  )
}
