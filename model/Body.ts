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

import * as models from './models';

export interface Body {
    /**
     * List name.
     */
    "list"?: string;
    /**
     * Item count.
     */
    "count"?: number;
    /**
     * Page number.
     */
    "page"?: number;
    /**
     * Optional enumerator. You can assign the mode of implementation of where criterions by using AND and OR types under whereType parameter.
     */
    "whereType"?: string;
    "where"?: Array<models.WhereItem>;
    "order"?: models.ListOrder;
}

