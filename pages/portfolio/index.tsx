
import Portfolio from '@/src/client/components/portfolio';
import type { NextPage } from 'next';

const LandingPages: NextPage = (props) => (
	<div>
		<Portfolio {...props} />
	</div>
);

export default LandingPages;
