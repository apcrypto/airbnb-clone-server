/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./api";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const record = /* GraphQL */ `query Record($id: ID!) {
  record(id: $id) {
    id
    name
    images {
      picture_url
      __typename
    }
    summary
    address {
      market
      country
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.RecordQueryVariables, APITypes.RecordQuery>;
export const records = /* GraphQL */ `query Records($limit: Int, $offset: Int) {
  records(limit: $limit, offset: $offset) {
    id
    name
    images {
      picture_url
      __typename
    }
    summary
    address {
      market
      country
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<APITypes.RecordsQueryVariables, APITypes.RecordsQuery>;
