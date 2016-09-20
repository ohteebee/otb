import { FirebaseObjectObservable } from './index';
import { database } from 'firebase';
import * as utils from '../utils';
export function FirebaseObjectFactory(absoluteUrlOrDbRef, _a) {
    var _b = _a === void 0 ? {} : _a, preserveSnapshot = _b.preserveSnapshot, query = _b.query;
    var ref;
    utils.checkForUrlOrFirebaseRef(absoluteUrlOrDbRef, {
        isUrl: function () { return ref = database().refFromURL(absoluteUrlOrDbRef); },
        isRef: function () { return ref = absoluteUrlOrDbRef; }
    });
    return new FirebaseObjectObservable(function (obs) {
        var fn = ref.on('value', function (snapshot) {
            obs.next(preserveSnapshot ? snapshot : utils.unwrapMapFn(snapshot));
        }, function (err) {
            if (err) {
                obs.error(err);
                obs.complete();
            }
        });
        return function () { return ref.off('value', fn); };
    }, ref);
}
//# sourceMappingURL=firebase_object_factory.js.map