import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AccountDetails = {
  __typename?: 'AccountDetails';
  name: Scalars['String'];
};

export type Author = {
  __typename?: 'Author';
  firstName?: Maybe<Scalars['String']>;
  /** The authors unique identifier */
  id: Scalars['Int'];
  lastName?: Maybe<Scalars['String']>;
  posts: Array<Post>;
};

export type InstallGitlabIntegrationInput = {
  apiKey: Scalars['String'];
  apiUrl: Scalars['String'];
};

export type InstallGitlabIntegrationPayload = {
  __typename?: 'InstallGitlabIntegrationPayload';
  id: Scalars['ID'];
};

export type InstallIntegrationInput = {
  integration: Scalars['String'];
  redirectTo: Scalars['String'];
};

export type InstallIntegrationPayload = {
  __typename?: 'InstallIntegrationPayload';
  authorizationUrl: Scalars['String'];
};

export type Integration = {
  __typename?: 'Integration';
  account: AccountDetails;
  id: Scalars['ID'];
  type: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  forceResourceSync?: Maybe<Scalars['Boolean']>;
  installGitlabIntegration: InstallGitlabIntegrationPayload;
  installIntegration: InstallIntegrationPayload;
};


export type MutationInstallGitlabIntegrationArgs = {
  input: InstallGitlabIntegrationInput;
};


export type MutationInstallIntegrationArgs = {
  input: InstallIntegrationInput;
};

export type Organisation = {
  __typename?: 'Organisation';
  id: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  title: Scalars['String'];
  votes?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  author: Author;
  currentOrganisation: Organisation;
  integrations: Array<Integration>;
  me: User;
  searchResources: Array<Resource>;
};


export type QueryAuthorArgs = {
  id: Scalars['Int'];
};


export type QuerySearchResourcesArgs = {
  input: ResourceSearchInput;
};

export type RepositorySearchInput = {
  name?: InputMaybe<Scalars['String']>;
  owner: Scalars['String'];
};

export type Resource = {
  __typename?: 'Resource';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  type: Scalars['String'];
  url: Scalars['String'];
};

export type ResourceSearchInput = {
  repo?: InputMaybe<RepositorySearchInput>;
  term: Scalars['String'];
  types?: InputMaybe<Array<Scalars['String']>>;
};

export type User = {
  __typename?: 'User';
  orgId: Scalars['String'];
  sub: Scalars['String'];
};

export type InstallGitlabIntegrationMutationVariables = Exact<{
  input: InstallGitlabIntegrationInput;
}>;


export type InstallGitlabIntegrationMutation = { __typename?: 'Mutation', installGitlabIntegration: { __typename?: 'InstallGitlabIntegrationPayload', id: string } };

export type InstallIntegrationMutationVariables = Exact<{
  input: InstallIntegrationInput;
}>;


export type InstallIntegrationMutation = { __typename?: 'Mutation', installIntegration: { __typename?: 'InstallIntegrationPayload', authorizationUrl: string } };

export type FetchIntegrationsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchIntegrationsQuery = { __typename?: 'Query', integrations: Array<{ __typename?: 'Integration', id: string, type: string, account: { __typename?: 'AccountDetails', name: string } }> };


export const InstallGitlabIntegrationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"installGitlabIntegration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InstallGitlabIntegrationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installGitlabIntegration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<InstallGitlabIntegrationMutation, InstallGitlabIntegrationMutationVariables>;
export const InstallIntegrationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"installIntegration"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InstallIntegrationInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"installIntegration"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorizationUrl"}}]}}]}}]} as unknown as DocumentNode<InstallIntegrationMutation, InstallIntegrationMutationVariables>;
export const FetchIntegrationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchIntegrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"integrations"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"account"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<FetchIntegrationsQuery, FetchIntegrationsQueryVariables>;