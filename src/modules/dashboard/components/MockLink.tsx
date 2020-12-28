import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, Tag, Text } from '@chakra-ui/react';

// lib
import { CODE_STATUSES } from 'lib/constants';
import { Mock } from 'lib/types';

type Props = {
  mock: Mock;
};

const MockListItem: FC<Props> = ({ mock }) => {
  // router hooks
  const { push } = useHistory();

  // constants
  const { status_code, id } = mock;
  const statusCodeTextAndColor = CODE_STATUSES[status_code];

  // handlers
  const handleMockClick = () => push(`/mock/${id}`);

  return (
    <Link
      _focus={{ boxShadow: '0 0 0 3px rgba(212, 0, 27, 0.7)' }}
      _hover={{ backgroundColor: 'rgba(0,0,0,0.04)' }}
      _notLast={{
        borderBottom: '2px solid black',
      }}
      alignItems="center"
      as="button"
      border="2px solid black"
      borderBottomRadius="0.25rem"
      borderTopRadius="0.25rem"
      d="flex"
      onClick={handleMockClick}
      w="full"
    >
      <Tag
        borderRadius="inherit"
        borderRight="2px solid black"
        colorScheme={statusCodeTextAndColor.color}
        fontWeight="medium"
        mr={2}
        roundedBottomRight={0}
        roundedTopRight={0}
      >
        {status_code}
      </Tag>
      <Text color="black">{statusCodeTextAndColor.text}</Text>
    </Link>
  );
};

export default MockListItem;
