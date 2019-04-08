
import {Observable} from 'rxjs';

function createObservableFromSqlite(query, db) {
    return Observable.create(function Subscription(observer) {
        try {
            db.each(
                query,
                function onEachRow(err, row){
                    if(err) observer.error(err);
                    observer.next(row);
                },
                function onComplete() {
                    observer.complete();
                    db.close();
                }
            );
        } catch (e) {
            observer.error(e);
            db.close();
        }
        return function unsubscribe() {
        }
    });
}

export default createObservableFromSqlite;
