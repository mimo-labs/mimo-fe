import { useQuery, QueryObserverResult } from 'react-query';

// lib
import { axivios } from 'lib/axivios';
import { ENDPOINTS } from 'lib/api';
import { Mock } from 'lib/types';

const getAllMocks = (projectId: number): Promise<Mock[]> => {
  // constants
  const queryParams = { project_id: projectId };

  return axivios().url(ENDPOINTS.dashboard.mocks.params(queryParams)).get().json();
};

type Props = {
  projectId: number;
};

export const useReadMocksParams = ({ projectId }: Props): QueryObserverResult<Mock[], unknown> => {
  return useQuery(['mocks', { projectId }], () => getAllMocks(projectId), {
    enabled: Boolean(projectId),
  });
};
