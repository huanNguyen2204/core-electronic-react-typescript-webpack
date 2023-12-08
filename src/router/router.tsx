import {
	HashRouter,
	Routes,
	Route,
	Navigate,
} from "react-router-dom"

// Components importing
import Haha from "@/screens/haha.screen";
import Something from "@/screens/something.screen";

const Routers = () => {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Navigate to="/haha" />} />
					<Route path="/haha" element={<Haha />} />
					<Route path="/something" element={<Something />} />
				</Routes>
			</HashRouter>
		</>
	)
}

export default Routers
