import { dummyVendors } from '../fake-db/vendors';

export default class ServiceApi {

  getVendors = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyVendors);
      }, 2000);
    })
      .then((res) => res);
  };
}