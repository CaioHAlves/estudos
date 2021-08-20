import React from 'react'
import styled from 'styled-components'

const Tag = styled.span`
  background-color: #9ae6b4;
  color: #22543d;
  margin-right: 4px;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
`

export function Tags({ values, ...props }) {
  return (
    <>
      {values === [] ?
        values.map((genre, index) => {
          <Tag key={index} {...props}>
            {genre}
          </Tag>
        })
        :
        <Tag {...props}>
          {values}
        </Tag>
      }
    </>
  );
};

export default Tags