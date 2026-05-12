/**
 * Firebase Web SDK (modular) — initialize App + Analytics.
 * Auth/other products can import from './firebase-init.js' and use exported `app`.
 */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js';
import { getAnalytics, isSupported } from 'https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAqu_J38YX_gukrdLxLPEr5Yy2OG0ir1aY',
  authDomain: 'vride-41497.firebaseapp.com',
  projectId: 'vride-41497',
  storageBucket: 'vride-41497.firebasestorage.app',
  messagingSenderId: '883712963057',
  appId: '1:883712963057:web:389123cac16e7ca60d5450',
  measurementId: 'G-6J14LVN6J2',
};

export const app = initializeApp(firebaseConfig);

/* Optional: use from non-module scripts later */
window.__VRIDE_FIREBASE_APP__ = app;

(async () => {
  try {
    if (await isSupported()) {
      getAnalytics(app);
    }
  } catch (_) {
    /* Analytics unavailable (e.g. blocked, privacy tools) */
  }
})();
