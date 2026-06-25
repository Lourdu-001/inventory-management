import React from "react"
import FadeUp from "@/components/ui/FadeUp"
import Header from "@/components/layouts/Header"
import Hero from "@/components/sections/Hero"
import Clients from "@/components/sections/Clients"
import Problems from "@/components/sections/Problems"
import Workflow from "@/components/sections/Workflow"
import Features from "@/components/sections/Features"
import RealLifeProblem from "@/components/sections/RealLifeProblem"
import WorkFlowCycle from "@/components/sections/WorkFlowCycle"
import SolutionWorkflow from "@/components/sections/SolutionWorkFlow"
import BenefitsGrid from "@/components/sections/BenefitsGrid"
import Footer from "@/components/layouts/Footer"

export default function home() {
  return (
    <>
      <Header />
      <Hero />
      <FadeUp><Clients /></FadeUp>
      <FadeUp><Problems /></FadeUp>
      <FadeUp><Workflow /></FadeUp>
      <FadeUp><Features /></FadeUp>
      <FadeUp><RealLifeProblem /></FadeUp>
      <FadeUp><WorkFlowCycle /></FadeUp>
      <FadeUp><SolutionWorkflow /></FadeUp>
      <FadeUp><BenefitsGrid /></FadeUp>
      <Footer />
    </>
  )
}