import React, { FC } from 'react';
import { Accordion } from '@chakra-ui/react';

// dashboard
import EndpointAccordion from 'modules/dashboard/components/EndpointAccordion';
import { useReadMocksAll } from 'modules/dashboard/hooks/useReadMocksAll';
import { parseMocks } from 'modules/dashboard/lib/parsers/parseMocks';

const Endpoints: FC = () => {
  const projectId = 12;
  const { isLoading, isError, data } = useReadMocksAll({ projectId });

  if (isLoading) return <h1>Loading</h1>;

  if (isError) return <h1>Error</h1>;

  // @ts-expect-error
  const { endpoints } = parseMocks({ mocks: data });

  return (
    <Accordion allowToggle p={4} w="full">
      {endpoints?.map((endpoint) => (
        <EndpointAccordion key={endpoint.endpoint} endpoint={endpoint} />
      ))}
    </Accordion>
  );
};

export default Endpoints;
