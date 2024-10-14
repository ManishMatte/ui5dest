using {sample.db as my} from '../db/schema';

service MyService {

    entity mysample as projection on my.Test;

}
