import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SectionTitle = ({ categoryName, categoryLink }) => {
	return (
		<div className="flex justify-between items-center mx-4 lg:mx-0 px-2">
			<h1 className="text-xl md:text-2xl font-bold">{categoryName}</h1>

			<Link to={categoryLink} className="text-[#3B82F6] font-bold">
				See All
			</Link>
		</div>
	);
};

SectionTitle.propTypes = {
	categoryName: PropTypes.string.isRequired,
	categoryLink: PropTypes.string.isRequired,
};

export default SectionTitle;
