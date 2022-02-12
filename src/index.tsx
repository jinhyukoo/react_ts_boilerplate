import React from 'react';
import ReactDOM from 'react-dom';
import '../public/index.scss';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '@/App';
import { store } from './store';
import Page1 from '@/pages/Page1';
import Page2 from '@/pages/Page2';
import Invoice from './routes/invoice';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="page1" element={<Page1 />}>
            <Route path="sub" element={<Page2 />} />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="page2" element={<Page2 />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>There is nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
