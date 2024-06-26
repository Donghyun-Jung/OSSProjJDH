import { motion } from 'framer-motion';
import styled from '@emotion/styled';

export const Root = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: ${({ theme }) => theme.layer.headerAlarm};
  top: 4rem;
  right: 0;
  width: 27.5rem;
  max-height: 30.75rem;
  border-radius: 3px;
  background-color: #fff;
  box-shadow:
    0 2px 5px rgba(0, 0, 0, 0.1),
    0 0 1px rgba(0, 0, 0, 0.3);
`;

export const Header = styled.div`
  flex-shrink: 0;
  padding: 0.75rem 1.5rem;
  background-color: #fff;
  font-size: 1rem;
  font-weight: 500;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200};
`;

export const List = styled.ul`
  flex-grow: 1;
  overflow-y: auto;
`;