import { initFederation } from '@angular-architects/native-federation';

initFederation()
  // eslint-disable-next-line @typescript-eslint/typedef,no-console
  .catch((err) => console.error(err))
  // eslint-disable-next-line @typescript-eslint/typedef
  .then((_) => {
    _;
    import('./bootstrap');
  })
  // eslint-disable-next-line @typescript-eslint/typedef,no-console
  .catch((err) => console.error(err));
