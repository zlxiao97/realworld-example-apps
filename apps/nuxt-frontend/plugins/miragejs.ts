import mock from '@/mock';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.env.NODE_ENV === 'development') {
    mock();
  }
});
