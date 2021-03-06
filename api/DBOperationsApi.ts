/**
 * Switch Database REST API
 * Switch API is the primary endpoint of data sevices and Switch DB's platform. You can do adding, editing, deleting or listing data works to your database with query operations by using this low-level API based on HTTP.
 *
 * OpenAPI spec version: 1.2.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from '../model/models';

/* tslint:disable:no-unused-variable member-ordering */

export class DBOperationsApi {
    protected basePath = 'http://tr02.switchapi.com/';
    public defaultHeaders : any = {};

    static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

    constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
        if (basePath !== undefined) {
            this.basePath = basePath;
        }
    }

    /**
        * Add is used for adding a data object to the list created at Switch DB.
        * You can choose the list that will be added tha data set to with List parameter that will be sent to Header. It&#39;s equal to INSERT query at the relational databases model. The data set that will be added to the database is transmited at request body. For versions upper than v1.2.1, if the data sent is an array, all items in the array are added one by one, so they are added as a whole. 
        * @param aPIKey Your Switch API Key.
        * @param accessToken Your Access Token.
        * @param list Your data list name.
        * @param body Your new value JSON.
        */
    public addPost (aPIKey: string, accessToken: string, list: string, body: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.AddResponse> {
        const localVarPath = this.basePath + '/Add';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'aPIKey' is not null or undefined
        if (aPIKey === null || aPIKey === undefined) {
            throw new Error('Required parameter aPIKey was null or undefined when calling addPost.');
        }
        // verify required parameter 'accessToken' is not null or undefined
        if (accessToken === null || accessToken === undefined) {
            throw new Error('Required parameter accessToken was null or undefined when calling addPost.');
        }
        // verify required parameter 'list' is not null or undefined
        if (list === null || list === undefined) {
            throw new Error('Required parameter list was null or undefined when calling addPost.');
        }
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling addPost.');
        }
        headerParams['APIKey'] = aPIKey;

        headerParams['AccessToken'] = accessToken;

        headerParams['List'] = list;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * It&#39;s used for listing a data added before.
        * List parameter sent remarks the list that will be do listing work on at Header. It&#39;s equal to SELECT query at relational databases. 
        * @param aPIKey Your Switch API Key.
        * @param accessToken Your Access Token.
        * @param list Your data list name.
        * @param body Your Switch DB Query.
        */
    public listPost (aPIKey: string, accessToken: string, list: string, body: models.Body, extraHttpRequestParams?: any ) : ng.IHttpPromise<{}> {
        const localVarPath = this.basePath + '/List';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'aPIKey' is not null or undefined
        if (aPIKey === null || aPIKey === undefined) {
            throw new Error('Required parameter aPIKey was null or undefined when calling listPost.');
        }
        // verify required parameter 'accessToken' is not null or undefined
        if (accessToken === null || accessToken === undefined) {
            throw new Error('Required parameter accessToken was null or undefined when calling listPost.');
        }
        // verify required parameter 'list' is not null or undefined
        if (list === null || list === undefined) {
            throw new Error('Required parameter list was null or undefined when calling listPost.');
        }
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling listPost.');
        }
        headerParams['APIKey'] = aPIKey;

        headerParams['AccessToken'] = accessToken;

        headerParams['List'] = list;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * It&#39;s used for deleting a data added before at Switch DB.
        * List parameter sent remarks the list that will be deleted data from at Header and ListItemId parameter remarks the ID consisted by Switch DB for the data that will be deleted. It&#39;s equal to DELETE query at relational databases. 
        * @param aPIKey Your Switch API Key.
        * @param accessToken Your Access Token.
        * @param list Your data list name.
        * @param listItemId Your list item id.
        */
    public setDelete (aPIKey: string, accessToken: string, list: string, listItemId: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SetResponse> {
        const localVarPath = this.basePath + '/Set';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'aPIKey' is not null or undefined
        if (aPIKey === null || aPIKey === undefined) {
            throw new Error('Required parameter aPIKey was null or undefined when calling setDelete.');
        }
        // verify required parameter 'accessToken' is not null or undefined
        if (accessToken === null || accessToken === undefined) {
            throw new Error('Required parameter accessToken was null or undefined when calling setDelete.');
        }
        // verify required parameter 'list' is not null or undefined
        if (list === null || list === undefined) {
            throw new Error('Required parameter list was null or undefined when calling setDelete.');
        }
        // verify required parameter 'listItemId' is not null or undefined
        if (listItemId === null || listItemId === undefined) {
            throw new Error('Required parameter listItemId was null or undefined when calling setDelete.');
        }
        headerParams['APIKey'] = aPIKey;

        headerParams['AccessToken'] = accessToken;

        headerParams['List'] = list;

        headerParams['ListItemId'] = listItemId;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'DELETE',
            url: localVarPath,
                                    params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
    /**
        * It&#39;s used for updating a data object that is already added to Switch DB.
        * In order to UPDATE a object, Listname and ListItemId parameters should be sent in the Header of the REQUEST as \&quot;List\&quot;, \&quot;ListItemId\&quot;, respectively, as shown in the example below. It&#39;s equal to UPDATE query at relational databases. The data set that will be edited is transmited to the database at request body. 
        * @param aPIKey Your Switch API Key.
        * @param accessToken Your Access Token.
        * @param list Your data list name.
        * @param listItemId Your list item id.
        * @param body Your new value JSON.
        */
    public setPost (aPIKey: string, accessToken: string, list: string, listItemId: string, body: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<models.SetResponse> {
        const localVarPath = this.basePath + '/Set';

        let queryParameters: any = {};
        let headerParams: any = (<any>Object).assign({}, this.defaultHeaders);
        // verify required parameter 'aPIKey' is not null or undefined
        if (aPIKey === null || aPIKey === undefined) {
            throw new Error('Required parameter aPIKey was null or undefined when calling setPost.');
        }
        // verify required parameter 'accessToken' is not null or undefined
        if (accessToken === null || accessToken === undefined) {
            throw new Error('Required parameter accessToken was null or undefined when calling setPost.');
        }
        // verify required parameter 'list' is not null or undefined
        if (list === null || list === undefined) {
            throw new Error('Required parameter list was null or undefined when calling setPost.');
        }
        // verify required parameter 'listItemId' is not null or undefined
        if (listItemId === null || listItemId === undefined) {
            throw new Error('Required parameter listItemId was null or undefined when calling setPost.');
        }
        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling setPost.');
        }
        headerParams['APIKey'] = aPIKey;

        headerParams['AccessToken'] = accessToken;

        headerParams['List'] = list;

        headerParams['ListItemId'] = listItemId;

        let httpRequestParams: ng.IRequestConfig = {
            method: 'POST',
            url: localVarPath,
            data: body,
                        params: queryParameters,
            headers: headerParams
        };

        if (extraHttpRequestParams) {
            httpRequestParams = (<any>Object).assign(httpRequestParams, extraHttpRequestParams);
        }

        return this.$http(httpRequestParams);
    }
}
