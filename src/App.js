import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'react-loading-skeleton/dist/skeleton.css';
import AppRoutes from './routes/AppRoutes';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			{/* <div className='App'> */}
			<AppRoutes />
			{/* </div> */}
		</QueryClientProvider>
	);
}

export default App;
