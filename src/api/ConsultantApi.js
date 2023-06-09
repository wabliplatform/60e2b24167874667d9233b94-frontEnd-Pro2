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


import ApiClient from "../ApiClient";
import Consultant from '../model/Consultant';

/**
* Consultant service.
* @module api/ConsultantApi
* @version 1.0.0
*/
export default class ConsultantApi {

    /**
    * Constructs a new ConsultantApi. 
    * @alias module:api/ConsultantApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createconsultant operation.
     * @callback module:api/ConsultantApi~createconsultantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consultant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Consultant} consultant data to be created
     * @param {module:api/ConsultantApi~createconsultantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Consultant}
     */
    createconsultant(consultant, callback) {
      let postBody = consultant;
      // verify the required parameter 'consultant' is set
      if (consultant === undefined || consultant === null) {
        throw new Error("Missing the required parameter 'consultant' when calling createconsultant");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Consultant;
      return this.apiClient.callApi(
        '/consultant', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteconsultant operation.
     * @callback module:api/ConsultantApi~deleteconsultantCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} consultantId the Id parameter
     * @param {module:api/ConsultantApi~deleteconsultantCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteconsultant(consultantId, callback) {
      let postBody = null;
      // verify the required parameter 'consultantId' is set
      if (consultantId === undefined || consultantId === null) {
        throw new Error("Missing the required parameter 'consultantId' when calling deleteconsultant");
      }

      let pathParams = {
        'consultantId': consultantId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/consultant/{consultantId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllconsultant operation.
     * @callback module:api/ConsultantApi~getAllconsultantCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Consultant>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/ConsultantApi~getAllconsultantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Consultant>}
     */
    getAllconsultant(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Consultant];
      return this.apiClient.callApi(
        '/consultant/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getByParamsconsultant operation.
     * @callback module:api/ConsultantApi~getByParamsconsultantCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Consultant>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data based on user query
     * @param {String} attribute the attribute based on which the search is performed
     * @param {String} value the value parameter based on which the search is performed
     * @param {module:api/ConsultantApi~getByParamsconsultantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Consultant>}
     */
    getByParamsconsultant(attribute, value, callback) {
      let postBody = null;
      // verify the required parameter 'attribute' is set
      if (attribute === undefined || attribute === null) {
        throw new Error("Missing the required parameter 'attribute' when calling getByParamsconsultant");
      }
      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling getByParamsconsultant");
      }

      let pathParams = {
        'attribute': attribute,
        'value': value
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Consultant];
      return this.apiClient.callApi(
        '/consultant/getByParams/{attribute}/{value}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getconsultant operation.
     * @callback module:api/ConsultantApi~getconsultantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consultant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} consultantId the Id parameter
     * @param {module:api/ConsultantApi~getconsultantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Consultant}
     */
    getconsultant(consultantId, callback) {
      let postBody = null;
      // verify the required parameter 'consultantId' is set
      if (consultantId === undefined || consultantId === null) {
        throw new Error("Missing the required parameter 'consultantId' when calling getconsultant");
      }

      let pathParams = {
        'consultantId': consultantId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Consultant;
      return this.apiClient.callApi(
        '/consultant/{consultantId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateconsultant operation.
     * @callback module:api/ConsultantApi~updateconsultantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Consultant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} consultantId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Consultant} opts.consultant data to be updated
     * @param {module:api/ConsultantApi~updateconsultantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Consultant}
     */
    updateconsultant(consultantId, opts, callback) {
      opts = opts || {};
      let postBody = opts['consultant'];
      // verify the required parameter 'consultantId' is set
      if (consultantId === undefined || consultantId === null) {
        throw new Error("Missing the required parameter 'consultantId' when calling updateconsultant");
      }

      let pathParams = {
        'consultantId': consultantId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Consultant;
      return this.apiClient.callApi(
        '/consultant/{consultantId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
