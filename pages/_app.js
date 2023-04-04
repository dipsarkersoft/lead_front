import { useEffect, useState } from 'react';
import AOS from 'aos';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import 'aos/dist/aos.css';
import '../styles/globals.css';
import  { Toaster  } from 'react-hot-toast';
// import { Provider } from 'react-redux';
// import store from '../store';

function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      offset: 50,
    });
  }, []);

  const queryClient = new QueryClient()
  
  
  return <>

          


           <Toaster/>
            <QueryClientProvider client={queryClient}>
              <Component {...pageProps} />
              </QueryClientProvider>
              
          
        
  </>    
}

export default App;
