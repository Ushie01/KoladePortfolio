import React from 'react';
import Header from './Header';
import BuildingUser from './BuildingUser';
import WorkedProject from './WorkedProject';
import RecentWorks from './RecentWorks/RecentWorks';
import ContactMe from './ContactMe';
import Footer from './Footer';

const Portfolio = () => {
	return (
		<div>
			<Header />
			<BuildingUser />
			<WorkedProject />
      <RecentWorks />
      <ContactMe />
      <Footer/>
		</div>
	);
};

export default Portfolio;
