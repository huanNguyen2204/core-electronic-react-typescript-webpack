import { createRoot } from 'react-dom/client';
import Main from '@/Main';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<Main />);