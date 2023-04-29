import Htext from "@/shared/Htext"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"

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
				<div className="md:my-5 md:w-3/5">
					<Htext>MORE THAN JUST A GYM</Htext>
					<p className="my-5 text-sm">
						We are a community of like-minded individuals who are passionate about learning and growing together. We are a community of like-minded individuals who are passionate about learning and growing together. We are a community of like-minded individuals who are passionate about learning and growing together.
					</p>
				</div>

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
			</motion.div>
		</section >
	)
}

export default Benefits