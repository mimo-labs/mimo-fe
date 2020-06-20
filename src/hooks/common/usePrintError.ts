import { useEffect } from 'react';
import { useToast } from '@chakra-ui/core';

// TODO: Should pass down error as well
export function usePrintError(status: string | null) {
  const toast = useToast();

  useEffect(() => {
    if (status === 'rejected') {
      // TODO: check why this toast instance is not executing
      toast({
        title: 'Error',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  }, [status, toast]);
}
