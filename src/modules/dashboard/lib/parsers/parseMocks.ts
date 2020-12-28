// lib
import { Endpoint, Mock } from 'lib/types';
import { pureReplace } from 'lib/helpers';

type Props = {
  mocks: Mock[];
};

type Values = {
  endpoints: Endpoint[];
};

export const parseMocks = ({ mocks }: Props): Values => {
  const endpoints = mocks.reduce((acc, mock) => {
    const alreadyExistentEndpoint = acc.find((x) => x.endpoint === mock.path);

    if (alreadyExistentEndpoint) {
      const indexOfDuplicatedEdnpoint = acc.findIndex((x) => x.endpoint === mock.path);

      const newElement = {
        endpoint: alreadyExistentEndpoint?.endpoint,
        mocks: [...alreadyExistentEndpoint?.mocks, mock],
      };

      return pureReplace<Endpoint>(acc, newElement, indexOfDuplicatedEdnpoint);
    } else {
      return [...acc, { endpoint: mock.path, mocks: [mock] }];
    }
  }, [] as Endpoint[]);

  return { endpoints };
};
