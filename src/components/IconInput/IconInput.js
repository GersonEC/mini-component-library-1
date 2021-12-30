import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  }
}
const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];
  return (
  <Wrapper>
    <VisuallyHidden>{label}</VisuallyHidden>
    <IconWrapper style={{ '--size': styles.iconSize+'px'}}>
      <Icon id={icon} size={styles.iconSize} />
    </IconWrapper>
    <Input {...delegated} style={{'--width': width+'px', '--height': styles.height + 'px',
    '--border-thickness': styles.borderThickness + 'px', '--font-size': styles.fontSize}} />
  </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray700};
  height: var(--height);
  &:hover {
    color: black;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  height: var(--size);
`

const Input = styled.input`
  width: var(--width);
  height: var(--height);
  border: none;
  border-bottom: var(--border-thickness) solid ${COLORS.black};
  padding-left: var(--height);
  color: inherit;
  font-weight: 700;
  font-size: var(--font-size);
  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`

export default IconInput;
