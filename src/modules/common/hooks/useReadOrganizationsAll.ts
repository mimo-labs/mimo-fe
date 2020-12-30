import { useQuery, QueryObserverResult } from 'react-query';

// lib
import { axivios } from 'lib/axivios';
import { ENDPOINTS } from 'lib/api';
import { Organziation } from 'lib/types';

const getAllOrganizations = (): Promise<Organziation[]> => {
  return axivios().url(ENDPOINTS.common.organizations.all()).get().json();
};

export const useReadOrganizationsAll = (): QueryObserverResult<Organziation[], unknown> => {
  return useQuery('organizations', getAllOrganizations);
};
