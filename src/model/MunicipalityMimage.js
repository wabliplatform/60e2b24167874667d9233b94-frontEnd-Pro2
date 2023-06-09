/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MunicipalityMimage model module.
 * @module model/MunicipalityMimage
 * @version 1.0.0
 */
class MunicipalityMimage {
    /**
     * Constructs a new <code>MunicipalityMimage</code>.
     * @alias module:model/MunicipalityMimage
     */
    constructor() { 
        
        MunicipalityMimage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MunicipalityMimage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MunicipalityMimage} obj Optional instance to populate.
     * @return {module:model/MunicipalityMimage} The populated <code>MunicipalityMimage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MunicipalityMimage();

            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} data
 */
MunicipalityMimage.prototype['data'] = undefined;

/**
 * @member {String} name
 */
MunicipalityMimage.prototype['name'] = undefined;






export default MunicipalityMimage;

