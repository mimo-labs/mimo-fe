import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, Tag, Text } from '@chakra-ui/react';

// prop types
// @eslint-disable-next-line
type Props = any;

// component
const MockListItem: FC<Props> = ({ mock, statusCode, statusColor, statusText }) => {
  const { push } = useHistory();

  const handleMockClick = () => push(`/mock/${mock.id}`);

  return (
    <Link
      _focus={{ boxShadow: '0 0 0 3px rgba(212, 0, 27, 0.7)' }}
      _hover={{ backgroundColor: 'rgba(0,0,0,0.04)' }}
      _notLast={{
        borderBottom: '2px solid black',
      }}
      alignItems="center"
      as="button"
      d="flex"
      onClick={handleMockClick}
      w="full"
    >
      <Tag
        borderRadius="inherit"
        borderRight="2px solid black"
        colorScheme={statusColor}
        fontWeight="medium"
        mr={2}
        roundedBottomRight={0}
        roundedTopRight={0}
      >
        {statusCode}
      </Tag>
      <Text color="black">{statusText}</Text>
    </Link>
  );
};

export default MockListItem;
