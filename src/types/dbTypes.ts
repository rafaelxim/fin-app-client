// https://the-guild.dev/graphql/codegen
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> =
  { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  JSON: { input: any; output: any };
  DateTime: { input: any; output: any };
  Date: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type Pagination = {
  __typename?: 'Pagination';
  total: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  not?: InputMaybe<IdFilterInput>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  not?: InputMaybe<BooleanFilterInput>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  not?: InputMaybe<StringFilterInput>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  contains?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  not?: InputMaybe<IntFilterInput>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  not?: InputMaybe<FloatFilterInput>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  not?: InputMaybe<DateFilterInput>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  not?: InputMaybe<DateTimeFilterInput>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not?: InputMaybe<JsonFilterInput>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type UploadFileFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  alternativeText?: InputMaybe<StringFilterInput>;
  caption?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  not?: InputMaybe<UploadFileFiltersInput>;
};

export type UploadFileInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  name: Scalars['String']['output'];
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  ext?: Maybe<Scalars['String']['output']>;
  mime: Scalars['String']['output'];
  size: Scalars['Float']['output'];
  url: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  id?: Maybe<Scalars['ID']['output']>;
  attributes?: Maybe<UploadFile>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolderFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  not?: InputMaybe<UploadFolderFiltersInput>;
};

export type UploadFolderInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  path?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  name: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  children?: Maybe<UploadFolderRelationResponseCollection>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  path: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  id?: Maybe<Scalars['ID']['output']>;
  attributes?: Maybe<UploadFolder>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type I18NLocaleFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  name?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  id?: Maybe<Scalars['ID']['output']>;
  attributes?: Maybe<I18NLocale>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsPermissionFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  action?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  id?: Maybe<Scalars['ID']['output']>;
  attributes?: Maybe<UsersPermissionsPermission>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRoleFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  id?: Maybe<Scalars['ID']['output']>;
  attributes?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  username?: InputMaybe<StringFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  password?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsUserInput = {
  username?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  username: Scalars['String']['output'];
  email: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  id?: Maybe<Scalars['ID']['output']>;
  attributes?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type CategoryFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  not?: InputMaybe<CategoryFiltersInput>;
};

export type CategoryInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Category = {
  __typename?: 'Category';
  name: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  id?: Maybe<Scalars['ID']['output']>;
  attributes?: Maybe<Category>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type EntryFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  period?: InputMaybe<DateFilterInput>;
  value?: InputMaybe<FloatFilterInput>;
  investment?: InputMaybe<InvestmentFiltersInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
  transfer?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<EntryFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<EntryFiltersInput>>>;
  not?: InputMaybe<EntryFiltersInput>;
};

export type EntryInput = {
  period?: InputMaybe<Scalars['Date']['input']>;
  value?: InputMaybe<Scalars['Float']['input']>;
  investment?: InputMaybe<Scalars['ID']['input']>;
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>;
  transfer?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Entry = {
  __typename?: 'Entry';
  period: Scalars['Date']['output'];
  value: Scalars['Float']['output'];
  investment?: Maybe<InvestmentEntityResponse>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
  transfer?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EntryEntity = {
  __typename?: 'EntryEntity';
  id?: Maybe<Scalars['ID']['output']>;
  attributes?: Maybe<Entry>;
};

export type EntryEntityResponse = {
  __typename?: 'EntryEntityResponse';
  data?: Maybe<EntryEntity>;
};

export type EntryEntityResponseCollection = {
  __typename?: 'EntryEntityResponseCollection';
  data: Array<EntryEntity>;
  meta: ResponseCollectionMeta;
};

export type InvestmentFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  strategy?: InputMaybe<StrategyFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<InvestmentFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<InvestmentFiltersInput>>>;
  not?: InputMaybe<InvestmentFiltersInput>;
};

export type InvestmentInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  strategy?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Investment = {
  __typename?: 'Investment';
  name: Scalars['String']['output'];
  category?: Maybe<CategoryEntityResponse>;
  strategy?: Maybe<StrategyEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type InvestmentEntity = {
  __typename?: 'InvestmentEntity';
  id?: Maybe<Scalars['ID']['output']>;
  attributes?: Maybe<Investment>;
};

export type InvestmentEntityResponse = {
  __typename?: 'InvestmentEntityResponse';
  data?: Maybe<InvestmentEntity>;
};

export type InvestmentEntityResponseCollection = {
  __typename?: 'InvestmentEntityResponseCollection';
  data: Array<InvestmentEntity>;
  meta: ResponseCollectionMeta;
};

export type StrategyFiltersInput = {
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  and?: InputMaybe<Array<InputMaybe<StrategyFiltersInput>>>;
  or?: InputMaybe<Array<InputMaybe<StrategyFiltersInput>>>;
  not?: InputMaybe<StrategyFiltersInput>;
};

export type StrategyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Strategy = {
  __typename?: 'Strategy';
  name: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type StrategyEntity = {
  __typename?: 'StrategyEntity';
  id?: Maybe<Scalars['ID']['output']>;
  attributes?: Maybe<Strategy>;
};

export type StrategyEntityResponse = {
  __typename?: 'StrategyEntityResponse';
  data?: Maybe<StrategyEntity>;
};

export type StrategyEntityResponseCollection = {
  __typename?: 'StrategyEntityResponseCollection';
  data: Array<StrategyEntity>;
  meta: ResponseCollectionMeta;
};

export type GenericMorph =
  | UploadFile
  | UploadFolder
  | I18NLocale
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser
  | Category
  | Entry
  | Investment
  | Strategy;

export type FileInfoInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type PaginationArg = {
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  entry?: Maybe<EntryEntityResponse>;
  entries?: Maybe<EntryEntityResponseCollection>;
  investment?: Maybe<InvestmentEntityResponse>;
  investments?: Maybe<InvestmentEntityResponseCollection>;
  strategy?: Maybe<StrategyEntityResponse>;
  strategies?: Maybe<StrategyEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
};

export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryEntryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryEntriesArgs = {
  filters?: InputMaybe<EntryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryInvestmentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryInvestmentsArgs = {
  filters?: InputMaybe<InvestmentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type QueryStrategyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type QueryStrategiesArgs = {
  filters?: InputMaybe<StrategyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publicationState?: InputMaybe<PublicationState>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  createEntry?: Maybe<EntryEntityResponse>;
  updateEntry?: Maybe<EntryEntityResponse>;
  deleteEntry?: Maybe<EntryEntityResponse>;
  createInvestment?: Maybe<InvestmentEntityResponse>;
  updateInvestment?: Maybe<InvestmentEntityResponse>;
  deleteInvestment?: Maybe<InvestmentEntityResponse>;
  createStrategy?: Maybe<StrategyEntityResponse>;
  updateStrategy?: Maybe<StrategyEntityResponse>;
  deleteStrategy?: Maybe<StrategyEntityResponse>;
  upload: UploadFileEntityResponse;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  updateFileInfo: UploadFileEntityResponse;
  removeFile?: Maybe<UploadFileEntityResponse>;
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationUpdateUploadFileArgs = {
  id: Scalars['ID']['input'];
  data: UploadFileInput;
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationUpdateUploadFolderArgs = {
  id: Scalars['ID']['input'];
  data: UploadFolderInput;
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};

export type MutationUpdateCategoryArgs = {
  id: Scalars['ID']['input'];
  data: CategoryInput;
};

export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCreateEntryArgs = {
  data: EntryInput;
};

export type MutationUpdateEntryArgs = {
  id: Scalars['ID']['input'];
  data: EntryInput;
};

export type MutationDeleteEntryArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCreateInvestmentArgs = {
  data: InvestmentInput;
};

export type MutationUpdateInvestmentArgs = {
  id: Scalars['ID']['input'];
  data: InvestmentInput;
};

export type MutationDeleteInvestmentArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCreateStrategyArgs = {
  data: StrategyInput;
};

export type MutationUpdateStrategyArgs = {
  id: Scalars['ID']['input'];
  data: StrategyInput;
};

export type MutationDeleteStrategyArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUploadArgs = {
  refId?: InputMaybe<Scalars['ID']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<FileInfoInput>;
  file: Scalars['Upload']['input'];
};

export type MutationMultipleUploadArgs = {
  refId?: InputMaybe<Scalars['ID']['input']>;
  ref?: InputMaybe<Scalars['String']['input']>;
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};

export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
  data: UsersPermissionsRoleInput;
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationUpdateUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
  data: UsersPermissionsUserInput;
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  code: Scalars['String']['input'];
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};
