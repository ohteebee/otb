import { FirebaseObjectObservable } from './index';
import { FirebaseObjectFactoryOpts } from '../interfaces';
export declare function FirebaseObjectFactory(absoluteUrlOrDbRef: string | firebase.database.Reference, {preserveSnapshot, query}?: FirebaseObjectFactoryOpts): FirebaseObjectObservable<any>;
