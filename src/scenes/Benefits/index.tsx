import Htext from "@/shared/Htext"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"

type Props = {
	setSelectedPage: (page: SelectedPage) => void
}

const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="w-6 h-6" />,
		title: "Modern Facility",
		description: "We are a community of like-minded individuals who are passionate about learning and growing together."
	},
	{
		icon: <UserGroupIcon className="w-6 h-6" />,
		title: "100's of Diverse Classes",
		description: "We are a community of like-minded individuals who are passionate about learning and growing together."
	},
	{
		icon: <AcademicCapIcon className="w-6 h-6" />,
		title: "Expert and Pro Trainers",
		description: "We are a community of like-minded individuals who are passionate about learning and growing together."
	}
]

const container = {
	hiddem: {},
	visible: {
		transition: { staggerChildren: 0.2 }
	}
}

const Benefits = ({ setSelectedPage }: Props) => {
	return (
		<section
			id="benefits"
			className="mx-auto min-h-full w-5/6 py-20"
		>
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
			>
				{/* HEADER */}
				<motion.div
					className="md:my-5 md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 }
					}}
				>
					<Htext>MORE THAN JUST A GYM</Htext>
					<p className="my-5 text-sm">
						We are a community of like-minded individuals who are passionate about learning and growing together. We are a community of like-minded individuals who are passionate about learning and growing together. We are a community of like-minded individuals who are passionate about learning and growing together.
					</p>
				</motion.div>

				{/* BENEFITS */}
				<motion.div
					className="md:flex items-center justify-between gap-8 mt-5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					variants={container}
				>
					{benefits.map((benefit: BenefitType) => (
						<Benefit
							key={benefit.title}
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</motion.div>

				{/* GRAPHICS AND DESCRIPTION */}
				<div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
					{/* GRAPHIC */}
					<img
						className="mx-auto"
						alt="benefits page graphic"
						src={BenefitsPageGraphic}
					/>

					{/* DESCRIPTION */}
					<div>
						{/* TITLE */}
						<div className="relative">
							<div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.5 }}
									variants={{
										hidden: { opacity: 0, x: 50 },
										visible: { opacity: 1, x: 0 }
									}}
								>
									<Htext>Millions of Happy Members {" "} <span className="text-primary-500">FIT</span></Htext>
								</motion.div>
							</div>
						</div>

						{/* DESCRIPTION */}
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay:0.2, duration: 0.5 }}
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0 }
							}}
						>
							<p className="my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos molestiae soluta fugiat quas. Optio aliquid commodi cupiditate modi dolores temporibus ipsa sunt qui similique aut doloribus quis, facere minima obcaecati?</p>
							<p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos molestiae soluta fugiat quas. Optio aliquid commodi cupiditate modi dolores temporibus ipsa sunt qui similique aut doloribus quis, facere minima obcaecati?</p>
						</motion.div>

						{/* BUTTON */}
						<div className="relative mt-16">
							<div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
								<ActionButton setSelectedPage={setSelectedPage}>
									Join Now
								</ActionButton>
							</div>

						</div>
					</div>
				</div>
			</motion.div>
		</section >
	)
}

export default Benefits