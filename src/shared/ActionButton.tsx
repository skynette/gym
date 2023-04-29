import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

type Props = {
	children: React.ReactNode;
	setSelectedPage: (page: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
	return (
		<AnchorLink
			className="rounded-md px-10 py-2 hover:bg-primary-500 hover:text-white bg-secondary-500"
			onClick={() => setSelectedPage(SelectedPage.ContactUs)}
			href={`#${SelectedPage.ContactUs}`}
		>
			{children}
		</AnchorLink>
	)
}

export default ActionButton