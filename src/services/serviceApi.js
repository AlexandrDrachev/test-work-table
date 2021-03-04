import { dummyVendors } from '../fake-db/vendors';

export default class ServiceApi {

  getVendors = () => {
    return new Promise((resolve) => {
      resolve(dummyVendors);
    })
      .then((res) => res);
  };
}