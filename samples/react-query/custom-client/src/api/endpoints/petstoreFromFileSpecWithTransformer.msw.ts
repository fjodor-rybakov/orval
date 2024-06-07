/**
 * Generated by orval v6.30.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { faker } from '@faker-js/faker';
import { HttpResponse, delay, http } from 'msw';
import type { Pet, PetsArray, PetsNestedArray } from '../model';

export const getListPetsResponseMock = (): PetsArray =>
  Array.from(
    { length: faker.number.int({ min: 1, max: 10 }) },
    (_, i) => i + 1,
  ).map(() => ({
    age: faker.helpers.arrayElement([
      faker.number.int({ min: 0, max: 30 }),
      undefined,
    ]),
    callingCode: faker.helpers.arrayElement([
      faker.helpers.arrayElement(['+33', '+420', '+33'] as const),
      undefined,
    ]),
    country: faker.helpers.arrayElement([
      faker.helpers.arrayElement([
        "People's Republic of China",
        'Uruguay',
      ] as const),
      undefined,
    ]),
    email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
    id: (() => faker.number.int({ min: 1, max: 99999 }))(),
    name: (() => faker.person.lastName())(),
    tag: faker.helpers.arrayElement([(() => faker.person.lastName())(), null]),
  }));

export const getListPetsNestedArrayResponseMock = (
  overrideResponse: Partial<PetsNestedArray> = {},
): PetsNestedArray => ({
  data: faker.helpers.arrayElement([
    Array.from(
      { length: faker.number.int({ min: 1, max: 10 }) },
      (_, i) => i + 1,
    ).map(() => ({
      age: faker.helpers.arrayElement([
        faker.number.int({ min: 0, max: 30 }),
        undefined,
      ]),
      callingCode: faker.helpers.arrayElement([
        faker.helpers.arrayElement(['+33', '+420', '+33'] as const),
        undefined,
      ]),
      country: faker.helpers.arrayElement([
        faker.helpers.arrayElement([
          "People's Republic of China",
          'Uruguay',
        ] as const),
        undefined,
      ]),
      email: faker.helpers.arrayElement([faker.internet.email(), undefined]),
      id: faker.number.int({ min: undefined, max: undefined }),
      name: (() => faker.person.lastName())(),
      tag: faker.helpers.arrayElement([
        (() => faker.person.lastName())(),
        null,
      ]),
    })),
    undefined,
  ]),
  ...overrideResponse,
});

export const getShowPetByIdResponseMock = () =>
  (() => ({
    id: faker.number.int({ min: 1, max: 99 }),
    name: faker.person.firstName(),
    tag: faker.helpers.arrayElement([faker.word.sample(), void 0]),
  }))();

export const getListPetsMockHandler = (
  overrideResponse?:
    | PetsArray
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<PetsArray> | PetsArray),
) => {
  return http.get('*/v:version/pets', async (info) => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getListPetsResponseMock(),
      ),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  });
};

export const getCreatePetsMockHandler = () => {
  return http.post('*/v:version/pets', async () => {
    await delay(1000);
    return new HttpResponse(null, {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
};

export const getListPetsNestedArrayMockHandler = (
  overrideResponse?:
    | PetsNestedArray
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<PetsNestedArray> | PetsNestedArray),
) => {
  return http.get('*/v:version/pets-nested-array', async (info) => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getListPetsNestedArrayResponseMock(),
      ),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  });
};

export const getShowPetByIdMockHandler = (
  overrideResponse?:
    | Pet
    | ((
        info: Parameters<Parameters<typeof http.get>[1]>[0],
      ) => Promise<Pet> | Pet),
) => {
  return http.get('*/v:version/pets/:petId', async (info) => {
    await delay(1000);
    return new HttpResponse(
      JSON.stringify(
        overrideResponse !== undefined
          ? typeof overrideResponse === 'function'
            ? await overrideResponse(info)
            : overrideResponse
          : getShowPetByIdResponseMock(),
      ),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  });
};
export const getSwaggerPetstoreMock = () => [
  getListPetsMockHandler(),
  getCreatePetsMockHandler(),
  getListPetsNestedArrayMockHandler(),
  getShowPetByIdMockHandler(),
];
