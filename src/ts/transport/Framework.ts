import { Http } from "./Http";
import { IHttp, IHttpParams, ITransportFramework, TransportFrameworkFactory } from "./interfaces";

class TransportFramework implements ITransportFramework {
    private _http = new Http();

    get http():IHttp {
        return this._http;
    }

    newHttpInstance( params?:IHttpParams ):IHttp {
        return new Http( params );
    }
}

/** The whole framework is a singleton. */
export const transport:TransportFramework = new TransportFramework();
