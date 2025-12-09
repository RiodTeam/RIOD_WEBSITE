'use client'

import React from 'react'
import MotionWrapper from './MotionWrapper'
import clsx from 'clsx'


interface PlatformSectionProps {
    bg?: 'white' | 'black'
    label?: string
    title: string
    description: string
    pt?: string
    pb?: string
}

const PlatformSection: React.FC<PlatformSectionProps> = ({
    bg = 'white',
    title,
    description,
    pt = 'pt-16 md:pt-[6.8rem]',
    pb = 'pb-0 md:pb-0',
}) => {
    const isWhite = bg === 'white'

    return (
        <section
            className={`
        transition-colors duration-300 ${pt} ${pb} ${isWhite ? 'bg-white text-black' : 'bg-black text-white'}
      `}
        >
            <div className=" w-[90%] max-w-[1400px] mx-auto text-left">


                {/* HEADING */}
                <MotionWrapper>
                    <h2
                        className={clsx(
                            'section-heading leading-normal! mt-10 font-inter lg:w-[40%]',
                            isWhite ? 'text-black' : 'text-white'
                        )}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                </MotionWrapper>

                {/* DESCRIPTION */}
                <MotionWrapper delay={0.2}>
                    <p
                        className={clsx(
                            'normal-text font-inter font-normal tracking-[0.3px] mt-8 leading-[1.7]!',
                            isWhite ? 'text-[#9a99a2]' : 'text-[#9a99a2]'
                        )}
                    >
                        {description}
                    </p>
                </MotionWrapper>
            </div>
        </section>
    )
}

export default PlatformSection
