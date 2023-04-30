import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import Htext from "@/shared/Htext"

type Props = {
	setSelectedPage: (page: SelectedPage) => void
}

function ContactUs({ setSelectedPage }: Props) {
	const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5`

	const {
		register,
		trigger,
		formState: { errors }
	} = useForm()

	const onSubmit = async (event: any) => {
		const isValid = await trigger()
		if (!isValid) {
			event.preventDefault()
		}
	}

	return (
		<section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
			>
				{/* HEADER */}
				<motion.div
					className="md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 }
					}}
				>
					<Htext>
						<span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
					</Htext>
					<p className="my-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, distinctio fugiat sit architecto error voluptatum iure, sapiente accusantium mollitia consectetur expedita a quaerat pariatur, provident cumque quas ea quasi soluta!
					</p>
				</motion.div>

				{/* FORM AND IMAGE */}
				<div className="mt-10 justify-between gap-8 md:flex">
					<motion.div
						className="mt-10 basis-3/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 50 },
							visible: { opacity: 1, y: 0 }
						}}
					>
						<form
							target="_blank"
							onSubmit={onSubmit}
							method="POST"
							action="https://formsubmit.co/865997da42ea351b03b0f109be61dea2"
						>
							<input
								className={inputStyles}
								type="text"
								placeholder="NAME"
								{...register("name", { required: true, maxLength: 80 })}
							/>
							{errors.name &&
								<p className="mt-1 text-primary-500">
									{errors.name.type === "required" && "This field is rquired"}
									{errors.name.type === "maxLength" && "Max length exceeded"}
								</p>}

							<input
								className={inputStyles}
								type="text"
								placeholder="EMAIL"
								{...register("email", {
									required: true,
									pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
								})}
							/>
							{errors.email &&
								<p className="mt-1 text-primary-500">
									{errors.email.type === "required" && "This field is rquired"}
									{errors.email.type === "pattern" && "Invalid email"}
								</p>}

							<textarea
								className={inputStyles}
								rows={5}
								cols={50}
								placeholder="MESSAGE"
								{...register("message", { required: true, maxLength: 2000 })}
							/>
							{errors.message &&
								<p className="mt-1 text-primary-500">
									{errors.message.type === "required" && "This field is rquired"}
									{errors.message.type === "maxLength" && "Max length exceeded"}
								</p>
							}

							<button
								type="submit"
								className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
							>
								SEND
							</button>
						</form>
					</motion.div>

					<motion.div
						className="relative mt-16 basis-2/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, x: -50 },
							visible: { opacity: 1, x: 0 }
						}}
					>
						<div
							className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]"
						>
							<img className="w-full" alt="contact-us-page-image" src={ContactUsPageGraphic}/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	)
}

export default ContactUs