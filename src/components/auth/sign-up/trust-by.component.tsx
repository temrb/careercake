import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const TrustedBy = () => {
  return (
    <div className="relative z-0 hidden w-0 flex-1 lg:block ">
      <div className="absolute inset-0 bg-gradient-to-tr from-gradient1 to-gradient2 ">
        <div className="absolute inset-0 z-30 mx-12 flex items-center justify-center text-4xl font-bold tracking-wider text-white xl:text-6xl">
          <motion.div
            className=" text-center backdrop-blur-lg"
            transition={{
              ease: 'easeInOut',
              duration: 2,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Trusted by influencers, brands, and creatives around the world.
          </motion.div>
        </div>

        <div className="grid grid-cols-3 pt-4">
          <motion.div
            className="m-10"
            transition={{
              ease: 'easeInOut',
              duration: 2,
              delay: 2,
            }}
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Image
              src="/assets/images/caila-image1.jpg"
              alt="Vercel Logo"
              height={200}
              width={200}
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="m-10 flex place-content-center"
            transition={{
              ease: 'easeInOut',
              duration: 4,
              delay: 2,
            }}
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Image
              src="/assets/images/caila-image2.jpg"
              alt="Vercel Logo"
              height={200}
              width={200}
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="m-10 flex justify-end"
            transition={{
              ease: 'easeInOut',
              duration: 3,
              delay: 2,
            }}
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Image
              src="/assets/images/caila-image4.jpg"
              alt="Vercel Logo"
              height={200}
              width={200}
              loading="lazy"
            />
          </motion.div>
        </div>
        <motion.div
          className="fixed bottom-0 pb-36"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex items-center overflow-x-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="mx-16 ">
                <Image
                  src={'/assets/companies/Amazon.svg'}
                  height={100}
                  width={100}
                  objectFit="contain"
                  loading="lazy"
                />
              </span>
              <span className="mx-16 ">
                <Image
                  src={'/assets/companies/Google.svg'}
                  height={100}
                  width={100}
                  objectFit="contain"
                  loading="lazy"
                />
              </span>
              <span className="mx-16 ">
                <Image
                  src={'/assets/companies/Shopify.svg'}
                  height={100}
                  width={100}
                  objectFit="contain"
                  loading="lazy"
                />
              </span>
              <span className="mx-16 ">
                <Image
                  src={'/assets/companies/Tesla.svg'}
                  height={100}
                  width={100}
                  objectFit="contain"
                  loading="lazy"
                />
              </span>
              <span className="mx-16 ">
                <Image
                  src={'/assets/companies/Uber.svg'}
                  height={100}
                  width={100}
                  objectFit="contain"
                  loading="lazy"
                />
              </span>
            </div>
            <div className="absolute animate-marquee2 whitespace-nowrap">
              <span className="mx-16 ">
                <Image
                  src={'/assets/companies/Amazon.svg'}
                  height={100}
                  width={100}
                  objectFit="contain"
                  loading="lazy"
                />
              </span>
              <span className="mx-16 ">
                <Image
                  src={'/assets/companies/Google.svg'}
                  height={100}
                  width={100}
                  objectFit="contain"
                  loading="lazy"
                />
              </span>
              <span className="mx-16 ">
                <Image
                  src={'/assets/companies/Shopify.svg'}
                  height={100}
                  width={100}
                  objectFit="contain"
                  loading="lazy"
                />
              </span>
              <span className="mx-16 ">
                <Image
                  src={'/assets/companies/Tesla.svg'}
                  height={100}
                  width={100}
                  objectFit="contain"
                  loading="lazy"
                />
              </span>
              <span className="mx-16 ">
                <Image
                  src={'/assets/companies/Uber.svg'}
                  height={100}
                  width={100}
                  objectFit="contain"
                  loading="lazy"
                />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TrustedBy
