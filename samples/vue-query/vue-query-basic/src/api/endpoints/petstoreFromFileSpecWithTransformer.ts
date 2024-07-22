/**
 * Generated by orval v6.31.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { useInfiniteQuery, useMutation, useQuery } from '@tanstack/vue-query';
import type {
  InfiniteData,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseInfiniteQueryOptions,
  UseInfiniteQueryReturnType,
  UseMutationOptions,
  UseMutationReturnType,
  UseQueryOptions,
  UseQueryReturnType,
} from '@tanstack/vue-query';
import { computed, unref } from 'vue';
import type { MaybeRef } from 'vue';
import type {
  CreatePetsBody,
  Error,
  ListPetsParams,
  Pet,
  Pets,
} from '../model';
import { customInstance } from '../mutator/custom-instance';

/**
 * @summary List all pets
 */
export const listPets = (
  params?: MaybeRef<ListPetsParams>,
  version: MaybeRef<number | undefined | null> = 1,
  signal?: AbortSignal,
) => {
  params = unref(params);
  version = unref(version);

  return customInstance<Pets>({
    url: `/v${encodeURIComponent(String(version))}/pets`,
    method: 'GET',
    params: unref(params),
    signal,
  });
};

export const getListPetsQueryKey = (
  params?: MaybeRef<ListPetsParams>,
  version: MaybeRef<number | undefined | null> = 1,
) => {
  return ['v', version, 'pets', ...(params ? [params] : [])] as const;
};

export const getListPetsInfiniteQueryOptions = <
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = Error,
>(
  params?: MaybeRef<ListPetsParams>,
  version: MaybeRef<number | undefined | null> = 1,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof listPets>>,
    QueryKey,
    ListPetsParams['limit']
  > = ({ signal, pageParam }) =>
    listPets(
      { ...unref(params), limit: pageParam || unref(params)?.['limit'] },
      version,
      signal,
    );

  return {
    queryKey,
    queryFn,
    enabled: computed(() => !!unref(version)),
    ...queryOptions,
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof listPets>>,
    TError,
    TData,
    Awaited<ReturnType<typeof listPets>>,
    QueryKey,
    ListPetsParams['limit']
  >;
};

export type ListPetsInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsInfiniteQueryError = Error;

/**
 * @summary List all pets
 */

export function useListPetsInfinite<
  TData = InfiniteData<
    Awaited<ReturnType<typeof listPets>>,
    ListPetsParams['limit']
  >,
  TError = Error,
>(
  params?: MaybeRef<ListPetsParams>,
  version: MaybeRef<number | undefined | null> = 1,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof listPets>>,
        TError,
        TData,
        Awaited<ReturnType<typeof listPets>>,
        QueryKey,
        ListPetsParams['limit']
      >
    >;
  },
): UseInfiniteQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListPetsInfiniteQueryOptions(
    params,
    version,
    options,
  );

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryReturnType<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = unref(queryOptions).queryKey as QueryKey;

  return query;
}

export const getListPetsQueryOptions = <
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: MaybeRef<ListPetsParams>,
  version: MaybeRef<number | undefined | null> = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getListPetsQueryKey(params, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof listPets>>> = ({
    signal,
  }) => listPets(params, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: computed(() => !!unref(version)),
    ...queryOptions,
  } as UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>;
};

export type ListPetsQueryResult = NonNullable<
  Awaited<ReturnType<typeof listPets>>
>;
export type ListPetsQueryError = Error;

/**
 * @summary List all pets
 */

export function useListPets<
  TData = Awaited<ReturnType<typeof listPets>>,
  TError = Error,
>(
  params?: MaybeRef<ListPetsParams>,
  version: MaybeRef<number | undefined | null> = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof listPets>>, TError, TData>
    >;
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getListPetsQueryOptions(params, version, options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = unref(queryOptions).queryKey as QueryKey;

  return query;
}

/**
 * @summary Create a pet
 */
export const createPets = (
  createPetsBody: MaybeRef<CreatePetsBody>,
  version: MaybeRef<number | undefined | null> = 1,
) => {
  createPetsBody = unref(createPetsBody);
  version = unref(version);

  return customInstance<Pet>({
    url: `/v${encodeURIComponent(String(version))}/pets`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: createPetsBody,
  });
};

export const getCreatePetsMutationOptions = <
  TError = Error,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody; version?: number },
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof createPets>>,
    { data: CreatePetsBody; version?: number }
  > = (props) => {
    const { data, version } = props ?? {};

    return createPets(data, version);
  };

  return { mutationFn, ...mutationOptions };
};

export type CreatePetsMutationResult = NonNullable<
  Awaited<ReturnType<typeof createPets>>
>;
export type CreatePetsMutationBody = CreatePetsBody;
export type CreatePetsMutationError = Error;

/**
 * @summary Create a pet
 */
export const useCreatePets = <TError = Error, TContext = unknown>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof createPets>>,
    TError,
    { data: CreatePetsBody; version?: number },
    TContext
  >;
}): UseMutationReturnType<
  Awaited<ReturnType<typeof createPets>>,
  TError,
  { data: CreatePetsBody; version?: number },
  TContext
> => {
  const mutationOptions = getCreatePetsMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary Info for a specific pet
 */
export const showPetById = (
  petId: MaybeRef<string | undefined | null>,
  version: MaybeRef<number | undefined | null> = 1,
  signal?: AbortSignal,
) => {
  petId = unref(petId);
  version = unref(version);

  return customInstance<Pet>({
    url: `/v${encodeURIComponent(String(version))}/pets/${encodeURIComponent(String(petId))}`,
    method: 'GET',
    signal,
  });
};

export const getShowPetByIdQueryKey = (
  petId: MaybeRef<string | undefined | null>,
  version: MaybeRef<number | undefined | null> = 1,
) => {
  return ['v', version, 'pets', petId] as const;
};

export const getShowPetByIdInfiniteQueryOptions = <
  TData = InfiniteData<Awaited<ReturnType<typeof showPetById>>>,
  TError = Error,
>(
  petId: MaybeRef<string | undefined | null>,
  version: MaybeRef<number | undefined | null> = 1,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof showPetById>>,
        TError,
        TData
      >
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getShowPetByIdQueryKey(petId, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: computed(() => !!(unref(version) && unref(petId))),
    ...queryOptions,
  } as UseInfiniteQueryOptions<
    Awaited<ReturnType<typeof showPetById>>,
    TError,
    TData
  >;
};

export type ShowPetByIdInfiniteQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdInfiniteQueryError = Error;

/**
 * @summary Info for a specific pet
 */

export function useShowPetByIdInfinite<
  TData = InfiniteData<Awaited<ReturnType<typeof showPetById>>>,
  TError = Error,
>(
  petId: MaybeRef<string | undefined | null>,
  version: MaybeRef<number | undefined | null> = 1,
  options?: {
    query?: Partial<
      UseInfiniteQueryOptions<
        Awaited<ReturnType<typeof showPetById>>,
        TError,
        TData
      >
    >;
  },
): UseInfiniteQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getShowPetByIdInfiniteQueryOptions(
    petId,
    version,
    options,
  );

  const query = useInfiniteQuery(queryOptions) as UseInfiniteQueryReturnType<
    TData,
    TError
  > & { queryKey: QueryKey };

  query.queryKey = unref(queryOptions).queryKey as QueryKey;

  return query;
}

export const getShowPetByIdQueryOptions = <
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: MaybeRef<string | undefined | null>,
  version: MaybeRef<number | undefined | null> = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >;
  },
) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = getShowPetByIdQueryKey(petId, version);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof showPetById>>> = ({
    signal,
  }) => showPetById(petId, version, signal);

  return {
    queryKey,
    queryFn,
    enabled: computed(() => !!(unref(version) && unref(petId))),
    ...queryOptions,
  } as UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>;
};

export type ShowPetByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof showPetById>>
>;
export type ShowPetByIdQueryError = Error;

/**
 * @summary Info for a specific pet
 */

export function useShowPetById<
  TData = Awaited<ReturnType<typeof showPetById>>,
  TError = Error,
>(
  petId: MaybeRef<string | undefined | null>,
  version: MaybeRef<number | undefined | null> = 1,
  options?: {
    query?: Partial<
      UseQueryOptions<Awaited<ReturnType<typeof showPetById>>, TError, TData>
    >;
  },
): UseQueryReturnType<TData, TError> & { queryKey: QueryKey } {
  const queryOptions = getShowPetByIdQueryOptions(petId, version, options);

  const query = useQuery(queryOptions) as UseQueryReturnType<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = unref(queryOptions).queryKey as QueryKey;

  return query;
}

/**
 * @summary This is required to test case when there are no parameters (this path is ignored in add-version transformer), see https://github.com/orval-labs/orval/issues/857#issuecomment-1835317990
 */
export const postApiV1UserLogout = () => {
  return customInstance<void>({ url: `/api/v1/user/logout`, method: 'POST' });
};

export const getPostApiV1UserLogoutMutationOptions = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiV1UserLogout>>,
    TError,
    void,
    TContext
  >;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postApiV1UserLogout>>,
  TError,
  void,
  TContext
> => {
  const { mutation: mutationOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postApiV1UserLogout>>,
    void
  > = () => {
    return postApiV1UserLogout();
  };

  return { mutationFn, ...mutationOptions };
};

export type PostApiV1UserLogoutMutationResult = NonNullable<
  Awaited<ReturnType<typeof postApiV1UserLogout>>
>;

export type PostApiV1UserLogoutMutationError = unknown;

/**
 * @summary This is required to test case when there are no parameters (this path is ignored in add-version transformer), see https://github.com/orval-labs/orval/issues/857#issuecomment-1835317990
 */
export const usePostApiV1UserLogout = <
  TError = unknown,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postApiV1UserLogout>>,
    TError,
    void,
    TContext
  >;
}): UseMutationReturnType<
  Awaited<ReturnType<typeof postApiV1UserLogout>>,
  TError,
  void,
  TContext
> => {
  const mutationOptions = getPostApiV1UserLogoutMutationOptions(options);

  return useMutation(mutationOptions);
};
