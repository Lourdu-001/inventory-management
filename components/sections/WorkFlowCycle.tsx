import React from 'react'
import Image from 'next/image'
import workLifeCycle from "@/assets/images/workFlowCycle.webp"

export default function WorkFlowCycle() {
  return (
    <div className="bg-[#E4ECFF] w-full flex justify-center md:py-0 py-14">
        <Image src={workLifeCycle} width={1450} height={100} alt="" />
    </div>
  )
}
