import React, { FC, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { Link, Tag, Text } from '@chakra-ui/react';

// prop types
// @eslint-disable-next-line
type Props = any;

// component
const MockListItem: FC<Props> = ({ mock, statusCode, statusColor, statusText }) => {
  const { push } = useHistory();

  const handleMockClick = (id: MouseEvent<HTMLAnchorElement>) => push(`/mock/${id}`);

  return (
    <Link
      _focus={{ boxShadow: '0 0 0 3px rgba(212, 0, 27, 0.7)' }}
      _hover={{ backgroundColor: 'rgba(0,0,0,0.04)' }}
      _last={{ mb: 0 }}
      alignItems="center"
      as="button"
      border="1px solid black"
      borderRadius="0.25rem"
      d="flex"
      mb={2}
      onClick={handleMockClick}
      w="100%"
    >
      <Tag borderRight="1px solid black" mr={2} roundedBottomRight={0} roundedTopRight={0} variantColor={statusColor}>
        {statusCode}
      </Tag>
      <Text color="black">{statusText}</Text>
    </Link>
  );
};

export default MockListItem;
