import { SelectedPage } from "@/shared/types"
import Logo from "@/assets/Logo.png"

type Props = {
	setSelectedPage: (page: SelectedPage) => void
}

const Footer = ({ setSelectedPage }: Props) => {
	return (
		<footer className="bg-primary-100 py-16">
			<div className="justify-content mx-auto w-5/6 gap-16 md:flex">
				<div className="mt-16 basis-1/2 md:mt-0">
					<img alt="logo" src={Logo} />
					<p className="my-5">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime voluptates suscipit vel corrupti pariatur! Possimus nulla suscipit at blanditiis facere quidem inventore, a incidunt magnam! Omnis ea distinctio consectetur optio.
					</p>
					<p>(c) Evogym All Rights Reserved</p>
				</div>
				<div className="mt-16 md:mt-0 basis-1/4">
					<h4 className="font-bold">
						Links
					</h4>
					<p className="my-5">Massa Orci Senectus</p>
					<p className="my-5">Et gravida id et teitm</p>
					<p>Ulam corper viana</p>
				</div>
				<div className="mt-16 md:mt-0 basis-1/4">
					<h4 className="font-bold">
						Contact Us
					</h4>
					<p className="my-5">Memphi depat is what</p>
					<p>(123)456-7890</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer