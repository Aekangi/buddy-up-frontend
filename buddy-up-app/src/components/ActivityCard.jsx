



const ActivityCard = ({image, name, streetAddress, city, state, zipCode, country, date}) => {
	return (
	<div>
		<div>{image}</div>
		<div>
			<h1>{name}</h1>
		</div>
		<div>{date}</div>
		
		<div>
			<h3>
				{streetAddress}
				{city}, {state}, {zipCode}, {country}
			</h3>
		</div>
	</div>);
};

export default ActivityCard;



