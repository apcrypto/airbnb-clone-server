/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./api";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createRecord = /* GraphQL */ `mutation CreateRecord(
  $name: String
  $summary: String
  $images: ImagesInput
  $address: AddressInput
) {
  createRecord(
    name: $name
    summary: $summary
    images: $images
    address: $address
  ) {
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
` as GeneratedMutation<
  APITypes.CreateRecordMutationVariables,
  APITypes.CreateRecordMutation
>;
export const deleteRecord = /* GraphQL */ `mutation DeleteRecord($id: ID!) {
  deleteRecord(id: $id)
}
` as GeneratedMutation<
  APITypes.DeleteRecordMutationVariables,
  APITypes.DeleteRecordMutation
>;
export const updateRecord = /* GraphQL */ `mutation UpdateRecord(
  $id: ID!
  $name: String
  $position: String
  $level: String
) {
  updateRecord(id: $id, name: $name, position: $position, level: $level) {
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
` as GeneratedMutation<
  APITypes.UpdateRecordMutationVariables,
  APITypes.UpdateRecordMutation
>;
