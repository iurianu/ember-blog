import ApplicationSerializer from './application';

export default class IndexSerializer extends ApplicationSerializer {
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload = { posts: payload };
    
        console.log(payload);
    
        return super.normalizeResponse(
          store,
          primaryModelClass,
          payload,
          id,
          requestType
        );
      }
}
